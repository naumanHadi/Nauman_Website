import Link from "next/link";
import { AiStackExplorer } from "@/components/ai-stack";
import {
  BackgroundDecor,
  Container,
  GlassCard,
  SectionTitle,
} from "@/components/ui";
import {
  arenas,
  certifications,
  education,
  roles,
  site,
  spine,
  stackFraming,
  stats,
} from "@/lib/content";

export default function Home() {
  return (
    <main className="relative">
      <BackgroundDecor />

      <Container className="flex flex-col gap-20 pb-10 pt-24 sm:pt-32">
        {/* Hero — the throughline, said once */}
        <section className="flex flex-col gap-8">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            {spine.hero}
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#proof"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5"
            >
              See the proof
            </a>
            <Link
              href="/digital-twin"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
            >
              Talk to my Digital Twin
            </Link>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
            >
              Résumé ↗
            </a>
          </div>
        </section>

        {/* Narrative spine — the same skill, four arenas */}
        <section className="flex flex-col gap-8">
          <p className="max-w-4xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            {spine.statement}
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {arenas.map((a) => {
              const isInternal = a.href.startsWith("/");
              const CardInner = (
                <>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">
                      {a.arena}
                    </h3>
                    <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-white">
                      →
                    </span>
                  </div>
                  <p className="text-sm font-medium text-cyan-200">
                    {a.pattern}
                  </p>
                  <p className="text-sm text-slate-300">{a.body}</p>
                </>
              );
              const className =
                "group glass card-border flex flex-col gap-3 rounded-2xl p-6 transition hover:-translate-y-1 sm:p-8";
              return isInternal ? (
                <Link key={a.key} href={a.href} className={className}>
                  {CardInner}
                </Link>
              ) : (
                <a key={a.key} href={a.href} className={className}>
                  {CardInner}
                </a>
              );
            })}
          </div>
        </section>

        {/* Proof — stats, the AI stack, and the track record */}
        <section id="proof" className="flex scroll-mt-24 flex-col gap-10">
          <SectionTitle
            eyebrow="The proof"
            title="Numbers, the stack, and where I did the work"
            chip="Verified against résumé"
          />

          {/* Stats with footnotes */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col rounded-xl border border-white/10 bg-white/5 px-4 py-5"
              >
                <p className="text-3xl font-semibold text-white">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-200">
                  {s.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {s.note}
                </p>
              </div>
            ))}
          </div>

          {/* AI stack explorer */}
          <div className="flex flex-col gap-5">
            <SectionTitle
              eyebrow="Full-stack AI"
              title="The stack builds the product. I commercialize it."
              chip="Hover or tap a layer"
            />
            <GlassCard>
              <p className="text-base font-medium leading-relaxed text-slate-200">
                {stackFraming.build}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {stackFraming.commercialization}
              </p>
            </GlassCard>
            <AiStackExplorer />
          </div>

          {/* Track record — each fact stated once, in its strongest form */}
          <div className="flex flex-col gap-5">
            <SectionTitle eyebrow="Track record" title="Where I did the work" />
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
          </div>

          {/* Education & certifications */}
          <div className="grid gap-5 lg:grid-cols-2">
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
          </div>
        </section>

        {/* Ventures teaser — the same skill, on my own risk */}
        <section className="flex flex-col gap-5">
          <SectionTitle
            eyebrow="Beyond the day job"
            title="The same instinct, on my own risk"
          />
          <Link
            href="/ventures"
            className="group glass card-border flex flex-col items-start gap-4 rounded-2xl p-8 transition hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-2xl">
              <p className="text-lg text-white">
                Realty.ai, Float Fleet, and how I approach capital markets —
                zero-to-one building and disciplined scale, applied where the
                risk is mine.
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Founded, scaled, and exited · multi-agent real estate · 12+
                years investing
              </p>
            </div>
            <span className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-white/5">
              Explore ventures →
            </span>
          </Link>
        </section>

        {/* Contact */}
        <section className="glass card-border flex flex-col items-start gap-4 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Let&rsquo;s build something durable.
            </h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Reach out, or ask my digital twin anything.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Get in touch
            </a>
            <Link
              href="/digital-twin"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/5"
            >
              Ask the twin
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
