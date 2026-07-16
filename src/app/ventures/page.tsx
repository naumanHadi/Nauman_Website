import type { Metadata } from "next";
import {
  BackgroundDecor,
  Container,
  GlassCard,
  PageHeader,
  SectionTitle,
} from "@/components/ui";
import { floatFleet, investing, realtyAi, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ventures | Nauman Hadi",
  description:
    "Realty.ai (AI for real estate transactions), Float Fleet Inc. (built, scaled, and exited), and investing — options strategy and long-term compounding.",
  alternates: { canonical: "/ventures" },
};

export default function VenturesPage() {
  return (
    <main className="relative">
      <BackgroundDecor />
      <Container className="flex flex-col gap-16 pb-10 pt-16">
        <PageHeader
          eyebrow="Ventures"
          title="What I build outside enterprise work."
        />

        {/* Realty.ai */}
        <section id="realty" className="flex flex-col gap-6">
          <SectionTitle
            eyebrow="Realty.ai"
            title="Agents now have agents."
            chip="Founder"
          />
          <GlassCard>
            <p className="text-lg leading-relaxed text-white">
              {realtyAi.intro}
            </p>
            <p className="mt-3 text-sm text-slate-400">{realtyAi.founder}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  The problem
                </p>
                <p className="mt-2 text-slate-300">{realtyAi.problem}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  The multi-agent fix
                </p>
                <p className="mt-2 text-slate-300">{realtyAi.solution}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Handles today
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {realtyAi.supports.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Roadmap
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {realtyAi.vision.map((v) => (
                    <span
                      key={v}
                      className="rounded-full accent-pill px-3 py-1 text-xs text-slate-200"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
              {realtyAi.disclaimer}
            </div>
          </GlassCard>
        </section>

        {/* Float Fleet */}
        <section id="float-fleet" className="flex flex-col gap-6">
          <SectionTitle
            eyebrow="Float Fleet Inc."
            title="The founder story"
            chip="Built · Scaled · Exited"
          />
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <GlassCard>
              <p className="text-lg leading-relaxed text-white">
                {floatFleet.intro}
              </p>
              <ul className="mt-5 space-y-3">
                {floatFleet.story.map((s) => (
                  <li key={s} className="flex gap-3 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Lessons that carried forward
              </p>
              <ul className="mt-4 space-y-2">
                {floatFleet.lessons.map((l) => (
                  <li key={l} className="flex gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-300" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* Investing */}
        <section id="investing" className="flex flex-col gap-6">
          <SectionTitle
            eyebrow="Investing"
            title="How I think about markets"
          />
          <GlassCard>
            <p className="text-lg leading-relaxed text-white">
              {investing.intro}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {investing.topics.map((t) => (
                <span
                  key={t}
                  className="rounded-full accent-pill px-3 py-1 text-sm text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Featured Reels */}
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              Featured on Instagram
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              @naumanhadi ↗
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {investing.videos.map((v, i) => (
              <div
                key={`${v.id}-${i}`}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2"
              >
                <p className="px-2 pb-2 pt-1 text-sm font-medium text-white">
                  {v.title}
                </p>
                <div className="overflow-hidden rounded-xl bg-black">
                  {v.file ? (
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="mx-auto h-[560px] w-full object-contain"
                      src={`/reels/${v.file}`}
                    />
                  ) : (
                    <iframe
                      src={`https://www.instagram.com/reel/${v.id}/embed`}
                      title={v.title}
                      loading="lazy"
                      scrolling="no"
                      className="h-[560px] w-full bg-white"
                      allow="encrypted-media; clipboard-write"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Follow on Instagram ↗
          </a>

          <div className="rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
            {investing.disclaimer}
          </div>
        </section>
      </Container>
    </main>
  );
}
