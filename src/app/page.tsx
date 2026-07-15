const stats = [
  {
    title: "Enterprise AI & Product",
    value: "15+ yrs",
    detail: "Product, program, and go-to-market leadership across AI and infra.",
  },
  {
    title: "Network modernization",
    value: "$14B / 28k sites",
    detail: "Directed AT&T’s largest network overhaul across Macro, Small Cell, DAS.",
  },
  {
    title: "Cloud-native rollout",
    value: "7,300+ sites",
    detail: "Delivered the world’s first cloud-native Open RAN network at Echostar.",
  },
  {
    title: "Enterprise AI wins",
    value: "$13M+",
    detail: "AT&T & Axiata deals for agentic AI-driven network automation.",
  },
];

const capabilities = [
  {
    title: "AI/ML & Platform Ops",
    items: [
      "LLM/RAG on Azure, LangChain/LangGraph, vector databases",
      "Telemetry, root-cause, AI-driven recommendations, Naavik chat interface",
      "Agentic AI, knowledge graphs, prompt engineering, model optimization",
    ],
  },
  {
    title: "Infrastructure Delivery",
    items: [
      "Multi-site buildout, power & backup systems, fiber/transport",
      "Site acquisition, permitting, construction, commissioning at national scale",
      "Vendor/OEM management with predictable run-rate execution",
    ],
  },
  {
    title: "Program & Executive Governance",
    items: [
      "Deployment forecasting, readiness reviews, risk/blocker management",
      "Executive dashboards, cross-functional governance, PMO orchestration",
      "SOWs, commercial agreements, enterprise stakeholder alignment",
    ],
  },
  {
    title: "Strategy & GTM",
    items: [
      "Product-market fit discovery, roadmapping, ROI/NPV/IRR modelling",
      "Technical sales leadership from discovery through production rollout",
      "Customer success motions that tighten feedback loops to engineering",
    ],
  },
];

const journey = [
  {
    company: "AiRa Technologies",
    role: "Director, Product & Solutions — Enterprise AI",
    period: "Sep 2025 – Present • Saratoga, CA",
    focus: "Series-B startup building agentic AI-driven network automation.",
    highlights: [
      "Own the full customer lifecycle across product, engineering, delivery, and technical sales.",
      "Envisioned Naavik: a chat interface unifying telemetry, RCA, AI recs, and app creation; +35% engineering productivity.",
      "Sized compute & infrastructure for commercial engagements; guided AT&T and Axiata deployments from discovery to production (~$13M PO).",
    ],
  },
  {
    company: "AT&T",
    role: "Technical Product & Program Management",
    period: "Sep 2023 – Sep 2025 • Dallas, TX",
    focus:
      "Directed execution for a ~$14B, 28,000-site modernization across Macro, Small Cell, DAS.",
    highlights: [
      "Orchestrated cross-functional delivery across OEM partners, PMO, and field vendors at 1,200 sites/month.",
      "Built in-house reporting (Python + Power BI) from 0→1 to improve program visibility and decision speed.",
      "Drove readiness, equipment forecasting, and governance to keep national-scale execution predictable.",
    ],
  },
  {
    company: "Echostar",
    role: "Technical Program Management",
    period: "Nov 2019 – Sep 2023 • Dallas, TX",
    focus:
      "Led the world’s first cloud-native Open RAN network across 7,300+ sites and 80M POPs.",
    highlights: [
      "Coordinated engineering, field ops, transport, power systems, and construction for nationwide rollout.",
      "Institutionalized executive dashboards and readiness reviews to accelerate milestones and de-risk launches.",
      "Ensured commissioning and operational handoff with fiber, power, transport, and site acquisition aligned.",
    ],
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="background-grid" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-6 left-12 h-72 w-72 rounded-full bg-blue-500/16 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 sm:px-10">
        <header className="flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="accent-pill rounded-full px-3 py-1">
              Enterprise AI & Infra Leader
            </span>
            <span className="accent-pill rounded-full px-3 py-1">
              Frisco, TX • Global Delivery
            </span>
            <span className="accent-pill rounded-full px-3 py-1">
              Product · Program · GTM
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Enterprise meets edgy
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Nauman Hadi — driving enterprise AI platforms and national-scale
              infrastructure to production.
            </h1>
            <p className="max-w-3xl text-lg text-slate-300 sm:text-xl">
              Technical program & product leader blending AI platform strategy
              with large-scale infrastructure delivery. I guide complex
              deployments from requirements to production, aligning engineering,
              customers, and executives to ship with confidence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:nauman.hadi@gmail.com"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 hover:shadow-purple-500/30"
            >
              Book a conversation
            </a>
            <a
              href="/Nauman_Hadi_AI_v2.pdf"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
              target="_blank"
              rel="noreferrer"
            >
              Download resume ↗
            </a>
            <a
              href="https://naumanhadi.io"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
              target="_blank"
              rel="noreferrer"
            >
              naumanhadi.io ↗
            </a>
          </div>
        </header>

        <section className="glass card-border rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Signal
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  Impact snapshots
                </h2>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
                Trusted to ship
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-5 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0 opacity-0 transition group-hover:opacity-100" />
                  <p className="text-sm text-slate-300">{stat.title}</p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass card-border rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  About
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  Enterprise-grade, delivery-obsessed
                </h2>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">
                AI × Infra
              </span>
            </div>
            <div className="mt-5 grid gap-4 text-slate-300">
              <p>
                I thrive where advanced AI platforms meet real-world
                infrastructure. From agentic AI products on Azure to
                cloud-native Open RAN deployments, I translate strategy into
                production systems with rigorous governance, forecast accuracy,
                and executive-ready storytelling.
              </p>
              <p className="text-slate-400">
                Strengths: simplifying complex stacks for stakeholders,
                structuring delivery for predictable velocity, and creating
                feedback loops that align engineering with customer outcomes.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Current focus</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Agentic AI for network reliability & developer velocity.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Operating style</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Sharp governance, crisp storytelling, and hands-on execution.
                </p>
              </div>
            </div>
          </div>

          <div className="glass card-border rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Contacts
                </p>
                <h2 className="text-2xl font-semibold text-white">Get in touch</h2>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                Available for select engagements
              </span>
            </div>
            <div className="mt-6 space-y-3 text-slate-300">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Email</span>
                <a
                  href="mailto:nauman.hadi@gmail.com"
                  className="font-semibold text-white hover:text-cyan-200"
                >
                  nauman.hadi@gmail.com ↗
                </a>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Location</span>
                <span className="font-semibold text-white">Frisco, TX</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Website</span>
                <a
                  href="https://naumanhadi.io"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-white hover:text-cyan-200"
                >
                  naumanhadi.io ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="glass card-border rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Career
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  Journey & signature work
                </h2>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">
                From discovery to production
              </span>
            </div>

            <div className="space-y-4">
              {journey.map((role) => (
                <div
                  key={role.company}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                        {role.period}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-white">
                        {role.role}
                      </h3>
                      <p className="text-sm text-slate-300">{role.company}</p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                      {role.focus}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    {role.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass card-border rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Capabilities
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  What I bring
                </h2>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                Built to ship
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {capability.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    {capability.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass card-border rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Portfolio
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Selected work (coming soon)
              </h2>
              <p className="mt-2 max-w-3xl text-slate-300">
                A curated set of enterprise AI deployments, network automation
                wins, and executive playbooks will live here. Ask for a tailored
                walkthrough in the meantime.
              </p>
            </div>
            <a
              href="mailto:nauman.hadi@gmail.com"
              className="mt-3 inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/5 sm:mt-0"
            >
              Request a walkthrough ↗
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
