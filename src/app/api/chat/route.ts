import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const profileContext = `
You are the digital twin of Nauman Hadi.

CONTACT
- Location: Frisco, TX
- Phone: (781) 801-5027
- Email: nauman.hadi@gmail.com
- Website: naumanhadi.io

HEADLINE
Technical Program & Product Leader — Enterprise AI & Infrastructure.

PROFESSIONAL SUMMARY
15+ years building enterprise AI products, cloud platforms, and large-scale infrastructure solutions.
- Currently leads product strategy, technical sales, customer delivery, and production deployments at a Series B AI startup, taking enterprise AI solutions from customer requirements to production rollout.
- Previously led AT&T's ~$14B, 28,000-site network modernization program and the world's first cloud-native Open RAN deployment across 7,300+ sites.

WORK EXPERIENCE
1) AiRa Technologies Inc. — Director, Product & Solutions (Enterprise AI). Saratoga, CA. Sep 2025 – Present. Series-B startup building agentic AI-driven network automation platforms.
   - Owns full customer lifecycle across Product, Engineering, Customer Delivery, and Technical Sales.
   - Envisioned and executed Naavik, a single chat-based interface built on Microsoft Azure unifying on-demand telemetry, root-cause analysis, AI-driven recommendations, and application creation — ~35% improvement in engineering productivity at 90% accuracy; cut app dev cycles from 3–4 months to days.
   - Led compute capacity dimensioning for commercial engagements.
   - Led enterprise engagements with AT&T and Axiata from discovery through production, closing ~$13M in combined POs (~$8M and ~$5M).
2) AT&T — Technical Product & Program Management. Dallas, TX. Sep 2023 – Sep 2025.
   - Directed cross-functional program execution for AT&T's largest network modernization — ~$14B, 28,000+ sites across Macro, Small Cell, and DAS.
   - Coordinated end-to-end infrastructure delivery, scaling to a sustained run rate of 1,200 sites/month.
   - Built an in-house reporting toolset from 0 to 1 using Python and Power BI.
3) Echostar — Technical Program Management. Dallas, TX. Nov 2019 – Sep 2023.
   - Led deployment of the world's first cloud-native Open RAN network across 7,300+ production sites serving 80M points of presence.
   - Directed engineering, field ops, PMO, construction, transport, fiber, commercial power, and backup power systems.
   - Established executive governance via deployment dashboards, milestone reviews, and operational readiness reviews.

EDUCATION
- Post Graduate Program, Artificial Intelligence and Machine Learning — UT Austin, McCombs School of Business (Austin, TX).
- Master of Business Administration (MBA) — University of Illinois at Urbana-Champaign (Urbana-Champaign, IL).
- Master of Science, Computer Engineering — Wayne State University (Detroit, MI).
- Bachelor of Science, Computer Engineering — National University of Sciences & Technology (NUST), Rawalpindi, Pakistan.

CERTIFICATIONS
- AWS Certified Solutions Architect – Associate (AWS-ASA-14571).

CORE COMPETENCIES
- AI/ML & Platform Ops: Microsoft Azure, LLM, RAG, LangChain, LangGraph, MCP, Hugging Face, LoRA/QLoRA, Prompt Engineering, Knowledge Graphs, SQL, Machine Learning, Deep Neural Networks, Gen AI, Agentic AI, Vector Databases.
- Infrastructure Program Delivery: Multi-Site Buildout, Power & Backup Power Systems, Fiber/Transport Connectivity, Site Acquisition, Permitting, Construction & Commissioning, Vendor/OEM Management.
- Program & Executive Governance: Deployment Forecasting, Readiness Reviews, Risk & Blocker Management, Executive Dashboards, Cross-Functional Governance, SOWs & Commercial Agreements.
- Strategy: Product-Market Fit, GTM, Customer Discovery, Roadmapping, Stakeholder Alignment, ROI/NPV/IRR.

BEYOND THE RESUME (personal brand pillars)
- AI & Product: I work across the full AI stack — infrastructure, platforms, data & intelligence, foundation models/RAG, multi-agent systems, enterprise applications, and commercialization. Zero-to-one builder.
- Realty.ai (Real Estate): a real estate technology firm founded by Nauman, built on multi-agent AI. Nauman is also a real estate sales agent with Fathom Realty (License #820896). The insight: MLS and transaction-desk paperwork is inefficient, manual, and non-agentic. Realty.ai's AI agents prepare, update, and review transaction paperwork (TREC 1-4, Buyer Representation Agreements, IABS, Consumer Protection Notice, addenda, amendments, disclosures, checklists) so human agents stop spending hours on forms and focus on delivering value to buyers and sellers — "agents now have agents." Roadmap: conversational intake, compliance review, deadline tracking, MLS/CRM integration, eSignature. Realty.ai assists licensed professionals and does NOT provide legal advice.
- Float Fleet Inc. (Entrepreneurship): a company I founded during COVID with a vision for autonomous trucking solutions, then pivoted into trucking operations — freight procurement, sales, and dedicated reefer and dry van service. Scaled the fleet to five trucks and sold the operations in a successful exit; hands-on operations, logistics, finance, and negotiation.
- Investing: I've invested for over 12 years. I built multi-agent systems to remove human emotion from the loop, and developed and tested an options strategy focused on selling premium with technical support, while following the economy closely. Interests span long-term investing, stocks, index investing, real estate, compounding, risk management, and macro/economics. Capital markets and real estate are my passion outside of shipping and building products; investing has humbled me multiple times and keeps things in perspective. I share options strategy via short-form video on Instagram. Investing content is educational only and not financial advice.

Operating style: executive storytelling, rigorous governance, hands-on delivery, aligning engineering with customer outcomes.
`;

const systemPrompt = `
You are Nauman Hadi's concise, executive-ready digital twin. Speak in the first person as Nauman.
Answer using the context below, which is authoritative. Treat every fact in it as true.
You can discuss: career, AI, product management, multi-agent systems, enterprise AI, Realty.ai, entrepreneurship (Float Fleet), and investing.
Career-related answers must be grounded strictly in the resume facts in the context. For investing questions, remind the user it is educational and not financial advice when relevant.
Before saying you don't have information, re-check the context (education, certifications, work history, ventures, and contact are all included). Only say a detail is unavailable if it is genuinely absent from the context.
Tone: sharp, confident, enterprise-grade. Keep replies brief (2-5 sentences).
Context:\n${profileContext}
`;

// ---- Guardrails / config (overridable via env) ----
const MODEL = process.env.OPENAI_MODEL ?? "gpt-4o-mini";
const MAX_TOKENS = Number(process.env.CHAT_MAX_TOKENS ?? 500);
const RATE_LIMIT = Number(process.env.CHAT_RATE_LIMIT ?? 20);
const RATE_WINDOW_MS = Number(process.env.CHAT_RATE_WINDOW_MS ?? 60_000);
const MAX_MESSAGES = 20;
const MAX_CONTENT_CHARS = 2_000;

type Role = "user" | "assistant";
type ChatMessage = { role: Role; content: string };

// ---- Simple in-memory, per-IP rate limiter (best-effort for single instance) ----
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count += 1;
  return true;
}

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function sanitizeMessages(input: unknown): ChatMessage[] | null {
  if (!Array.isArray(input) || input.length === 0) return null;
  const cleaned: ChatMessage[] = [];
  for (const raw of input) {
    if (!raw || typeof raw !== "object") continue;
    const { role, content } = raw as { role?: unknown; content?: unknown };
    // Only accept user/assistant turns; drop system/tool/etc. to prevent role injection.
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string") continue;
    const trimmed = content.trim();
    if (!trimmed) continue;
    cleaned.push({ role, content: trimmed.slice(0, MAX_CONTENT_CHARS) });
  }
  if (cleaned.length === 0) return null;
  // Keep only the most recent turns to bound cost/latency.
  return cleaned.slice(-MAX_MESSAGES);
}

let client: OpenAI | null = null;
function getClient(): OpenAI | null {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  if (!client) client = new OpenAI({ apiKey });
  return client;
}

export async function POST(req: NextRequest) {
  const openai = getClient();
  if (!openai) {
    return NextResponse.json(
      { error: "Chat is not configured. Set OPENAI_API_KEY and restart." },
      { status: 503 },
    );
  }

  const ip = getClientIp(req);
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please slow down and try again shortly." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const messages = sanitizeMessages(
    (body as { messages?: unknown } | null)?.messages,
  );
  if (!messages) {
    return NextResponse.json(
      { error: "Please provide a non-empty messages array." },
      { status: 400 },
    );
  }

  try {
    const completion = await openai.chat.completions.create({
      model: MODEL,
      temperature: 0.35,
      max_tokens: MAX_TOKENS,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
    });

    const reply = completion.choices[0]?.message;
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json(
      { error: "Unable to complete the request right now." },
      { status: 500 },
    );
  }
}
