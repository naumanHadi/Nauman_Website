---
title: Nauman Hadi
emoji: 🚀
colorFrom: purple
colorTo: indigo
sdk: docker
app_port: 3000
pinned: false
---

# Nauman Hadi — Personal Site

Next.js (App Router) portfolio with an OpenAI-powered "digital twin" chat.
Deployed on Hugging Face Spaces as a Docker Space.

## Local development

```bash
npm install
npm run dev   # http://localhost:3001
```

Create `web/.env.local` with:

```
OPENAI_API_KEY=sk-...
```

## Deployment (Hugging Face Docker Space)

- The `Dockerfile` builds a standalone Next.js server and listens on port `3000`
  (matched by `app_port: 3000` above).
- Set `OPENAI_API_KEY` as a **Space secret** (Settings → Variables and secrets).
  Do not commit `.env.local`.

## Chat endpoint

`POST /api/chat` — rate-limited, role-whitelisted, token-capped. See
`src/app/api/chat/route.ts`. Tunable via env: `OPENAI_MODEL`, `CHAT_MAX_TOKENS`,
`CHAT_RATE_LIMIT`, `CHAT_RATE_WINDOW_MS`.
