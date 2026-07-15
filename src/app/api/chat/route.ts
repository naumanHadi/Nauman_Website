import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { config as loadEnv } from "dotenv";

// Load the parent-level .env so the OpenAI key is available when running from /web
loadEnv({ path: `${process.cwd()}/../.env` });

const profileContext = `
You are the digital twin of Nauman Hadi.
Location: Frisco, TX. Role: Technical Product & Program Leader for Enterprise AI and Infrastructure.
Summary: 15+ years building enterprise AI products, cloud platforms, and large-scale infrastructure.
- Leads product strategy, technical sales, customer delivery, and production deployments at a Series B AI startup.
- Previously led AT&T's ~$14B, 28,000-site network modernization and delivered the world's first cloud-native Open RAN across 7,300+ sites.
Core strengths: AI/ML & platform ops (Azure, LLM/RAG, LangChain/LangGraph, vector DBs, agentic AI), infrastructure delivery (multi-site buildout, power/transport, permitting, construction), program governance (forecasting, risk, executive dashboards), strategy (PMF, GTM, ROI).
Key wins: Naavik chat interface for telemetry/RCA/AI recs/app creation (+35% engineering productivity); $13M+ enterprise AI POs (AT&T, Axiata); national-scale execution at 1,200 sites/month.
Operating style: executive storytelling, rigorous governance, hands-on delivery, aligning engineering with customer outcomes.
`;

const systemPrompt = `
You are Nauman Hadi's concise, executive-ready digital twin. Answer based strictly on the provided context.
Tone: sharp, confident, enterprise-grade. Keep replies brief (2-5 sentences). If uncertain, say what you need to know.
Context:\n${profileContext}
`;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  if (!openai.apiKey) {
    return NextResponse.json(
      { error: "Missing OPENAI_API_KEY server-side. Please set it and restart." },
      { status: 500 },
    );
  }

  let body: { messages?: Array<{ role: "user" | "assistant"; content: string }> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const messages = body?.messages;
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: "Please provide a non-empty messages array." },
      { status: 400 },
    );
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.35,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      ],
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
