import type { Metadata } from "next";
import Link from "next/link";
import { AiStackExplorer } from "@/components/ai-stack";
import {
  BackgroundDecor,
  Container,
  GlassCard,
  PageHeader,
  SectionTitle,
} from "@/components/ui";
import {
  careerThemes,
  certifications,
  education,
  roles,
  site,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience | Nauman Hadi",
  description:
    "AI product leader who understands the full stack — infrastructure to multi-agent systems to commercialized enterprise AI — with a track record of shipping at national scale.",
  alternates: { canonical: "/experience" },
};

const atAGlance = [
  { value: "15+ yrs", label: "Product & program leadership" },
  { value: "$13M+", label: "Enterprise AI POs closed" },
  { value: "7,300+", label: "Cloud-native Open RAN sites" },
  { value: "28,000+", label: "Sites in AT&T modernization" },
];

const signatureWork = [
  {
    tag: "Enterprise AI · AiRa (Series B)",
    title: "Naavik — agentic AI platform",
    metric: "+35% eng productivity · 90% accuracy",
    points: [
      "Envisioned and executed a chat-based agentic platform on Azure unifying telemetry, root-cause analysis, AI recommendations, and app creation.",
      "Cut application development cycles from 3–4 months to days.",
      "Owned product, engineering, delivery, and technical sales end-to-end.",
    ],
  },
  {
    tag: "Commercialization",
    title: "Enterprise AI go-to-market",
    metric: "~$13M combined POs (AT&T, Axiata)",
    points: [
      "Led strategic enterprise engagements from discovery through production rollout.",
      "Translated business requirements into technical roadmaps, SOWs, and commercial agreements.",
      "Moved products from zero revenue toward commercial adoption.",
    ],
  },
  {
    tag: "Infrastructure at scale",
    title: "Nationwide cloud-native infra",
    metric: "7,300+ Open RAN sites · $14B AT&T program",
    points: [
      "Delivered the world's first cloud-native Open RAN network (80M points of presence).",
      "Directed AT&T's largest modernization across 28,000+ sites at 1,200 sites/month.",
      "Built a 0→1 analytics & reporting platform (Python + Power BI).",
    ],
  },
];

const capabilities = [
  {
    title: "AI Applications",
    items: [
      "Generative & Enterprise AI",
      "RAG & enterprise copilots",
      "AI-assisted software generation",
      "Workflow automation",
    ],
  },
  {
    title: "Multi-Agent Systems",
    items: [
      "Agent orchestration & planning",
      "Tool-calling & knowledge agents",
      "Human-in-the-loop workflows",
      "Agent collaboration",
    ],
  },
  {
    title: "Product Leadership",
    items: [
      "Product vision & strategy",
      "Customer discovery & roadmaps",
      "Executive communication",
      "Commercialization & adoption",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="relative">
      <BackgroundDecor />
      <Container className="flex flex-col gap-16 pb-10 pt-16">
        <PageHeader
          eyebrow="Experience"
          title="I understand how AI moves from infrastructure to production revenue — and I've shipped it at national scale."
          intro="AI product leader with 15+ years spanning the full stack: cloud-native infrastructure, enterprise platforms, data, foundation models, multi-agent systems, and the commercialization on top. Below is the evidence."
        />

        {/* At a glance */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {atAGlance.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-5"
            >
              <p className="text-3xl font-semibold text-white">{s.value}</p>
              <p className="mt-2 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </section>

        {/* The arc + stack */}
        <section className="flex flex-col gap-6">
          <SectionTitle
            eyebrow="Full-stack AI"
            title="The AI stack, mapped to real work"
            chip="Hover or tap a layer"
          />
          <GlassCard>
            <p className="text-base font-medium leading-relaxed text-slate-200">
              Infrastructure → Platforms → Data &amp; Intelligence → Foundation
              Models → Multi-Agent Systems → Enterprise Applications → Product
              Commercialization.
            </p>
          </GlassCard>
          <AiStackExplorer />
        </section>

        {/* Signature work */}
        <section className="flex flex-col gap-6">
          <SectionTitle eyebrow="Impact" title="Signature work" />
          <div className="grid gap-5 lg:grid-cols-3">
            {signatureWork.map((w) => (
              <div
                key={w.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-xs uppercase tracking-wide text-slate-400">
                  {w.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {w.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-cyan-200">
                  {w.metric}
                </p>
                <ul className="mt-4 space-y-2">
                  {w.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-300" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="flex flex-col gap-6">
          <SectionTitle eyebrow="Depth" title="Capabilities" />
          <div className="grid gap-5 md:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <ul className="mt-4 space-y-2">
                  {c.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership themes */}
        <section className="flex flex-col gap-6">
          <SectionTitle eyebrow="How I operate" title="Leadership themes" />
          <div className="grid gap-5 md:grid-cols-2">
            {careerThemes.map((t) => (
              <GlassCard key={t.title}>
                <h3 className="text-xl font-semibold text-white">{t.title}</h3>
                <p className="mt-2 text-slate-300">{t.body}</p>
                <ul className="mt-4 space-y-2">
                  {t.proof.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Roles */}
        <section className="flex flex-col gap-6">
          <SectionTitle
            eyebrow="Track record"
            title="Where I've done the work"
            chip="Grounded in résumé"
          />
          <div className="flex flex-col gap-4">
            {roles.map((r) => (
              <div
                key={r.company}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {r.role}
                    </h3>
                    <p className="text-sm text-slate-300">{r.company}</p>
                  </div>
                  <div className="text-right text-sm text-slate-400">
                    <p>{r.period}</p>
                    <p>{r.location}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & certs */}
        <section className="grid gap-5 lg:grid-cols-2">
          <GlassCard>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              Education
            </p>
            <ul className="mt-4 space-y-3">
              {education.map((e) => (
                <li key={e} className="flex gap-3 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              Certifications
            </p>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/5"
            >
              Download full résumé ↗
            </a>
          </GlassCard>
        </section>

        {/* CTA */}
        <GlassCard className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Hiring for AI product or platform leadership?
            </h2>
            <p className="mt-2 text-slate-300">
              Let’s talk — or ask my digital twin about any of this.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Contact
            </a>
            <Link
              href="/digital-twin"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/5"
            >
              Ask the twin
            </Link>
          </div>
        </GlassCard>
      </Container>
    </main>
  );
}
