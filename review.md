# Code Review — Nauman Hadi Portfolio Site

**Scope:** `web/` (Next.js 16 App Router, TypeScript, Tailwind v4) plus the parent `.env`.
**Date:** 2026-07-15
**Note:** This is a read-only review. No code was changed. Each finding lists a suggested remedial action.

---

## 1. Overall Assessment

The project is in good shape for a personal site: clean structure, no linter errors, sensible componentization (`ChatPanel` split out from `page.tsx`), and a tasteful, consistent visual system. The homepage content is accurate to the resume and reads well.

The most important issues are **operational/security concerns around the public chat endpoint and secret handling**, not the UI. There are also a handful of correctness and UX bugs worth fixing before this is shared publicly.

**Rating by area:**

| Area | Rating | Summary |
|---|---|---|
| Structure & organization | Good | Clear App Router layout, components separated |
| Styling / design system | Good | Consistent glass/gradient system, responsive |
| TypeScript correctness | Fair | Loose typing on the API message mapping |
| Security | Needs work | Public unauthenticated LLM endpoint, secret sprawl |
| Robustness / error handling | Fair | A few real bugs (lost input, role injection) |
| Accessibility | Fair | Missing labels, index keys, no auto-scroll |
| Production readiness | Needs work | Env loading is local-only; no rate limiting |

---

## 2. Critical Issues (fix before sharing publicly)

### 2.1 Public, unauthenticated chat endpoint = cost/abuse risk
`src/app/api/chat/route.ts` is a public POST route with no rate limiting, no auth, and no abuse protection. Anyone who finds the URL can send unlimited requests and run up your OpenAI bill.

**Remedial actions:**
- Add rate limiting (e.g. per-IP with a lightweight store like Upstash Redis, or an in-memory limiter for a single instance).
- Set `max_tokens` (or `max_completion_tokens`) on the OpenAI call to cap per-request cost.
- Cap the number and length of incoming messages (see 3.1).
- Consider a simple bot/CAPTCHA or origin check if this gets real traffic.

### 2.2 Secret sprawl in the parent `.env`
The parent `.env` contains many live secrets unrelated to this site (OpenAI, Pushover, HuggingFace, W&B, SendGrid). The chat route loads the **entire** file via `dotenv`. Only `OPENAI_API_KEY` is needed here.

Risk: if this folder is ever deployed, copied, or committed with `.env` included, all of those keys leak at once.

**Remedial actions:**
- Give the web app its own scoped env file (e.g. `web/.env.local`) containing only `OPENAI_API_KEY`. It is already git-ignored by `web/.gitignore` (`.env*`).
- Rotate any keys that may have been exposed in shared logs/chats, particularly `OPENAI_API_KEY` and `SENDGRID_API_KEY`.
- Keep the broad parent `.env` out of the deployment bundle entirely.

> Note: `.env` is correctly ignored by both the root `.gitignore` and `web/.gitignore`, so it should not reach git as-is. Good.

### 2.3 Role injection / prompt override in the chat API
The route forwards client-supplied messages directly:

```58:62:web/src/app/api/chat/route.ts
        ...messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
```

The type annotation restricts `role` to `"user" | "assistant"`, but that is compile-time only. A crafted client (curl/Postman) can POST `{ "role": "system", "content": "ignore previous instructions..." }` and override your persona/guardrails, or inject huge payloads.

**Remedial actions:**
- Server-side, whitelist roles: drop or coerce anything that isn't `user`/`assistant`.
- Validate that `content` is a non-empty string and enforce a max length per message.
- Reject payloads with too many messages.

---

## 3. Correctness Bugs

### 3.1 User loses their typed message on failure
In `ChatPanel.sendMessage`, on error the code removes the just-added user message but the input box was already cleared:

```41:45:web/src/components/chat-panel.tsx
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
      setMessages((prev) => prev.slice(0, -1)); // remove the pending user message if failure
    } finally {
```

If the request fails, the user sees an error, their message disappears from the transcript, **and** the text is gone from the textarea — they have to retype it.

**Remedial action:** On failure, restore the text to the input (e.g. `setInput(trimmed)`), or keep the user bubble and append a retry affordance instead of deleting it.

### 3.2 `slice(-1)` assumption is fragile
`setMessages((prev) => prev.slice(0, -1))` assumes the last message is always the pending user message. If any async interleaving adds another message first, this could remove the wrong item. Low probability today, but brittle.

**Remedial action:** Track the pending message by id rather than position, or filter it out explicitly.

### 3.3 API key check may be unreachable
```25:35:web/src/app/api/chat/route.ts
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  if (!openai.apiKey) {
```

The OpenAI SDK typically throws at construction time if no key is present, so the friendly `if (!openai.apiKey)` guard inside `POST` may never run — a missing key would instead crash at module load. It works today only because `dotenv` runs first.

**Remedial action:** Read `process.env.OPENAI_API_KEY` into a variable, check it explicitly before constructing the client, and construct lazily inside the handler.

---

## 4. Production Readiness

### 4.1 Env loading is local-only
```5:6:web/src/app/api/chat/route.ts
// Load the parent-level .env so the OpenAI key is available when running from /web
loadEnv({ path: `${process.cwd()}/../.env` });
```

This hard-codes a relative path to `../.env`. On Vercel/most hosts that file won't exist and `process.cwd()` differs, so the chat will silently fail in production. Next.js also auto-loads `.env.local` from the project root, making the `dotenv` dependency unnecessary if the key lives in `web/`.

**Remedial action:** Move the key to `web/.env.local` (or set it in the host's env settings) and remove the manual `dotenv` load + dependency.

### 4.2 No `max_tokens` / cost guardrails
See 2.1. Without a token cap, a single long conversation can be expensive.

### 4.3 Missing SEO/social polish
`layout.tsx` sets title/description but no `metadataBase`, Open Graph/Twitter image, `robots`, or theme color. For a personal brand site, link previews matter.

**Remedial action:** Add OG/Twitter metadata and an OG image; set `metadataBase`.

---

## 5. Accessibility

- **Textarea has no associated label** (`chat-panel.tsx`). Placeholder text is not a substitute for screen readers.
- **List keys use array index** (`key={idx}`) for chat messages — acceptable for append-only lists but not ideal; prefer stable ids.
- **No auto-scroll to the newest message**; long conversations require manual scrolling.
- **Live region:** the message list isn't marked as `aria-live`/`role="log"`, so new replies aren't announced.
- **Send button** relies on visual state only; consider `aria-busy` while loading.

**Remedial actions:** Add a visually-hidden `<label>` for the textarea, an `aria-live="polite"` region for messages, auto-scroll on new message, and stable message ids.

---

## 6. UX / Minor Enhancements

- **Chat height can grow unbounded:** the messages container uses `flex-1 overflow-y-auto` but the panel has no `max-height` cap, so a long transcript can stretch the page. Consider a fixed/max height.
- **No streaming:** replies appear all at once after a pause. Token streaming would feel snappier (`ReadableStream` + incremental render).
- **No conversation reset / clear button.**
- **Portfolio section** is a placeholder with no links yet (expected per the original request — noting for completeness).
- **Duplicate resume file:** the PDF exists both at the repo root and in `web/public/`. Fine, but the root copy is unused by the app.

---

## 7. Nits

- `React` is imported in `chat-panel.tsx` only for the `React.KeyboardEvent` type; you could import the type directly, though this is harmless.
- Inline profile/system prompt strings in `route.ts` could move to a small `data`/`config` module so content edits don't touch request logic.
- Static content arrays (`stats`, `capabilities`, `journey`) in `page.tsx` could be extracted to a `content.ts` file to keep the component lean and make edits easier for non-developers.

---

## 8. Prioritized Remediation Checklist

**Must do (before public sharing):**
1. Add rate limiting + `max_tokens` to `/api/chat` (2.1, 4.2).
2. Validate/whitelist roles and clamp message size/count server-side (2.3, 3.1).
3. Scope secrets to `web/.env.local`; rotate exposed keys; remove reliance on parent `.env` (2.2, 4.1).

**Should do:**
4. Fix lost-input-on-error UX and the `slice(-1)` fragility (3.1, 3.2).
5. Make the API-key check reliable (3.3).
6. Accessibility passes: textarea label, live region, auto-scroll (Section 5).

**Nice to have:**
7. SEO/OG metadata (4.3).
8. Streaming responses, clear-chat button, capped chat height (Section 6).
9. Extract static content to a data module (Section 7).

---

## 9. What's Already Good

- Clean, consistent, responsive design system (`glass`, `card-border`, accent pills).
- Sensible component split; `page.tsx` is declarative and readable.
- No linter errors; TypeScript strict mode is on.
- Error and loading states exist in the chat UI.
- `.env` is git-ignored at both levels.
- Content is accurate and well-organized against the resume.
