## tutorial.md — Building the “Enterprise Meets Edgy” Next.js Site

This tutorial is written for a complete frontend beginner. It explains the tech stack we used, how the project is organized, and what each key file does—so you can understand, run, and extend the site.

---

### What We Built
- A Next.js 16 (App Router) + TypeScript + TailwindCSS site.
- Dark, glassmorphic design with gradients and accent pills.
- Sections: hero, impact stats, about, contacts, career journey, capabilities, portfolio placeholder.
- Embedded “Digital Twin” chat that answers questions about Nauman’s profile using the OpenAI API.
- Runs locally on port `3001` (to avoid conflicts with your other site).

---

### Tech Stack (Beginner-Friendly)
- **Next.js (App Router)**: React framework that handles pages, routing, API endpoints, and server-side rendering. Your main page lives in `src/app/page.tsx`. API routes live under `src/app/api/...`.
- **TypeScript**: Adds types to JavaScript for safer code. Files end in `.ts` or `.tsx` (for React).
- **TailwindCSS v4**: Utility-first CSS. We also added a few custom classes in `globals.css` for the glass/gradient look.
- **OpenAI Node SDK**: Calls the OpenAI API from a Next.js server route.
- **Environment variables**: The OpenAI key lives in `web/.env.local`, which Next.js loads automatically (no extra library needed).

---

### Project Layout (Key Files Only)
- `package.json` — Scripts and dependencies. Dev runs on port `3001`.
- `src/app/layout.tsx` — Global HTML shell, metadata, font setup, background theme.
- `src/app/globals.css` — Tailwind plus custom gradients, glass cards, utility classes.
- `src/app/page.tsx` — The homepage UI: hero, stats, about, contacts, journey, capabilities, portfolio placeholder, and the chat panel.
- `src/components/chat-panel.tsx` — Client-side chat UI component.
- `src/app/api/chat/route.ts` — Server-side endpoint that calls OpenAI with a Nauman-specific system prompt.
- `public/Nauman_Hadi_AI_v2.pdf` — Resume available for download.

---

### How to Run Locally
1) Open a terminal in `/Users/nauman/projects/site/web`.
2) Ensure `web/.env.local` exists and has `OPENAI_API_KEY=...` (already present).  
3) Install deps (only first time): `npm install`
4) Start dev server on port 3001: `npm run dev`
5) Open http://localhost:3001
6) Stop with Ctrl+C.

If you change `.env`, restart `npm run dev` so the server reloads the key.

---

## High-Level Walkthrough

### 1) Global Layout and Styling
- `layout.tsx` sets metadata (title/description) and applies the Geist fonts. It wraps the app body with a dark background: `className="bg-slate-950 text-slate-50"`.
- `globals.css` defines:
  - CSS variables for background/foreground/accent colors.
  - Radial gradient backdrop plus a subtle grid (`.background-grid`).
  - Reusable glass + gradient borders via `.glass` and `.card-border`.
  - Accent pills for tags and chips.

### 2) Homepage Structure (`page.tsx`)
Sections in order:
1. **Hero** — Tagline, bold heading, short pitch, CTAs for email, resume download, and personal site.
2. **Impact Stats** — Four highlight cards showing career metrics.
3. **About & Contacts** — Two-column cards: narrative + quick contact links.
4. **Career Journey** — Timeline cards for AiRa, AT&T, Echostar with bullet highlights.
5. **Capabilities** — Grid of strengths (AI/ML ops, infra delivery, governance, strategy).
6. **Portfolio Placeholder** — CTA to request a walkthrough.
7. **Digital Twin Chat** — Chat panel for Nauman-focused Q&A.

### 3) Chat UI (`src/components/chat-panel.tsx`)
- Client component (`"use client"`). Holds local state:
  - `messages` array of `{ role, content }`
  - `input` text area value
  - `loading`/`error` flags
- On send:
  - Pushes the user message to state.
  - POSTs to `/api/chat` with the message history.
  - Displays assistant reply, or shows an error if the call fails.
- UX touches: enter-to-send, Shift+Enter for newline, inline “Thinking…” indicator, glass styling.

### 4) Chat API (`src/app/api/chat/route.ts`)
- Reads `OPENAI_API_KEY` from `web/.env.local` (auto-loaded by Next.js) and builds the OpenAI client lazily.
- Protects the endpoint: per-IP rate limiting, a cap on message count/length, and role whitelisting (only `user`/`assistant` turns are accepted) to prevent prompt/role injection.
- Builds a Nauman-specific system prompt (location, roles, wins, strengths) to ground all responses.
- Handles POST requests:
  - Validates the incoming `messages` array.
  - Calls OpenAI `chat.completions.create` with model `gpt-4o-mini`, `temperature: 0.35`.
  - Returns the assistant message as JSON.
- Error handling: clear 400s for bad input, 500s for key/config issues.

---

## Detailed Code Review (Beginner-Friendly)

### layout.tsx
- **What it does**: Defines the HTML `<html>` and `<body>` wrapper for every page, sets fonts and global background/text colors, and exports site metadata (title/description for SEO/social).
- **Why it matters**: In Next.js App Router, `layout.tsx` is the shared shell; every route renders inside it.
- **Key pieces**:
  - Imports Geist fonts with weights for a crisp UI.
  - Applies `bg-slate-950 text-slate-50` on the body for the dark theme.
  - Sets metadata to reflect Nauman’s brand.

### globals.css
- **What it does**: Mixes Tailwind with custom CSS for the signature look.
- **Highlights**:
  - Radial gradient background plus `.background-grid` overlay for depth.
  - `.glass` gives translucent panels with blur and soft borders.
  - `.card-border` adds a subtle gradient stroke around cards.
  - Accent pills to tag context (e.g., “Enterprise AI & Infra Leader”).

### page.tsx
- **What it does**: Renders all homepage sections and pulls in `ChatPanel`.
- **Structure reasoning**:
  - Lead with credibility (hero, CTAs, stats).
  - Provide narrative and quick contact (About/Contacts).
  - Show proof (Journey, Capabilities).
  - Invite engagement (Portfolio placeholder + request CTA).
  - Add interactive “Digital Twin” chat for Q&A.
- **Styling**: Uses Tailwind utility classes plus custom glass styles for a premium, cohesive feel.

### chat-panel.tsx
- **What it does**: Client-side chat box that talks to `/api/chat`.
- **State & flow**:
  - `messages` keeps the conversation; starts with a friendly assistant intro.
  - `sendMessage` validates input, sends fetch request, appends replies, and handles errors.
  - Keyboard UX: Enter to send, Shift+Enter to add a newline.
- **Error/Loading UX**: Shows “Thinking…” while waiting; displays a red error box on failures.
- **Why this design**: Keeps the client thin; the heavy lifting (AI call + context) sits on the server route.

### api/chat/route.ts
- **What it does**: Server endpoint that talks to OpenAI.
- **Inputs**: Expects `{ messages: [{ role, content }, ...] }` in the POST body.
- **Process**:
  - Loads `OPENAI_API_KEY` from `web/.env.local` (auto-loaded by Next.js).
  - Prepends a system message with Nauman’s profile so answers stay on-topic.
  - Calls OpenAI with `gpt-4o-mini`, low-ish temperature, and a `max_tokens` cap for focused, cost-bounded answers.
- **Outputs**: JSON `{ reply: { role: "assistant", content: "..." } }`.
- **Safety**: Returns clear errors if the key is missing or the request body is bad.

---

## How to Extend (Optional Next Steps)
- **Add portfolio entries**: Replace the placeholder with cards linking to case studies.
- **Persist chat**: Save conversations to localStorage or a database so they survive reloads.
- **Add streaming replies**: Use `ReadableStream` in the API route and incremental rendering in the client for token-by-token responses.
- **Theming toggle**: Add a light/dark toggle if you want dual branding modes.
- **SEO polish**: Add Open Graph images and richer metadata in `layout.tsx`.

---

## Quick Commands Reference
- Install deps: `npm install`
- Dev server: `npm run dev` (http://localhost:3001)
- Lint: `npm run lint`
- Build: `npm run build`
- Start production build: `npm run start` (set `PORT=3001` if needed)

You now have a modern, branded Next.js site plus a Nauman-focused chat assistant. Tinker with the sections or swap in your own content as you learn. Happy building!
