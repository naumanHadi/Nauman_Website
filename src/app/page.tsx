import Link from "next/link";
import { BackgroundDecor, Container } from "@/components/ui";
import { pillars, site } from "@/lib/content";

export default function Home() {
  return (
    <main className="relative">
      <BackgroundDecor />

      <Container className="flex flex-col gap-16 pb-10 pt-24 sm:pt-32">
        {/* Hero */}
        <section className="flex flex-col gap-8">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            I build intelligent products, businesses, and investments that
            create long-term value.
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/experience"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5"
            >
              See my experience
            </Link>
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

        {/* Explore — entice into other pages */}
        <section className="flex flex-col gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              Explore
            </p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Start anywhere
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((p) => (
              <Link
                key={p.key}
                href={p.href}
                className="group glass card-border flex flex-col gap-4 rounded-2xl p-6 transition hover:-translate-y-1 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full accent-pill px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
                    {p.eyebrow}
                  </span>
                  <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-white">
                    →
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-slate-300">{p.blurb}</p>
                <span className="mt-1 text-sm font-medium text-cyan-200 opacity-0 transition group-hover:opacity-100">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass card-border flex flex-col items-start gap-4 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Let’s build something durable.
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
