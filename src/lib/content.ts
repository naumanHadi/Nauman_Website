// Central content for the site. Edit here to update copy across pages.
// Career facts are grounded in Nauman_Hadi_AI_v2.pdf. Non-resume specifics
// (links, media, venture metrics) use placeholders — marked with PLACEHOLDER.

export const site = {
  name: "Nauman Hadi",
  role: "AI Product Leader · Founder · Investor",
  location: "Frisco, TX",
  email: "nauman.hadi@gmail.com",
  website: "https://naumanhadi.io",
  // PLACEHOLDER — update LinkedIn with your real profile URL.
  linkedin: "https://www.linkedin.com/in/nauman-hadi-875a68b/",
  instagram: "https://www.instagram.com/naumanhadi",
  resume: "/Nauman_Hadi_AI_v2.pdf",
  narrative:
    "I build intelligent products, businesses, and investments that create long-term value.",
  tagline: "Enterprise meets edgy",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Ventures", href: "/ventures" },
  { label: "Digital Twin", href: "/digital-twin" },
];

// ---- Narrative spine: the single idea every section traces back to ----

export const spine = {
  hero:
    "I take ambiguous, large-scale problems and turn them into systems that work — in AI products, telecom infrastructure, and my own ventures.",
  statement:
    "Telecom infrastructure, AI products, a logistics company, capital markets — four different arenas, one skill: take something ambiguous and large, and impose order and scale on it. I'm a zero-to-one builder who also knows how to run things at national scale once they exist.",
};

// Same skill, proven in four arenas. First line names the arena; the body
// shows the pattern (ambiguity → system, zero-to-one → scale) at work.
export type Arena = {
  key: string;
  arena: string;
  pattern: string;
  body: string;
  href: string;
};

export const arenas: Arena[] = [
  {
    key: "ai",
    arena: "AI Products",
    pattern: "Blank page → enterprise revenue",
    body: "Envisioned Naavik from nothing and shipped it into production — a chat-based agentic platform that lifted engineering productivity ~35% at 90% accuracy, then commercialized it into ~$13M in enterprise POs.",
    href: "#proof",
  },
  {
    key: "infra",
    arena: "Telecom Infrastructure",
    pattern: "Zero-to-one tooling, then national scale",
    body: "Built program analytics from 0→1, then ran the machine: AT&T's ~$14B modernization across 28,000+ sites and the world's first cloud-native Open RAN across 7,300+ sites — order imposed on massive, messy systems.",
    href: "#proof",
  },
  {
    key: "ventures",
    arena: "My Ventures",
    pattern: "Founded, scaled, exited",
    body: "Same instinct, my own risk: Realty.ai, a multi-agent firm that automates real estate paperwork, and Float Fleet, a logistics company I started during COVID, scaled to a five-truck fleet, and exited.",
    href: "/ventures",
  },
  {
    key: "markets",
    arena: "Capital Markets",
    pattern: "Judgment, systematized",
    body: "12+ years investing, where I built multi-agent systems to take emotion out of the loop and tested an options strategy with technical support — turning a chaotic domain into a disciplined process.",
    href: "/ventures#investing",
  },
];

// Headline proof points. Every number carries a one-line qualifier
// (timeframe + my specific role), verified against the résumé.
export type Stat = {
  value: string;
  label: string;
  note: string;
};

export const stats: Stat[] = [
  {
    value: "~$13M",
    label: "Enterprise AI POs closed",
    note: "AT&T + Axiata, 2025 — as product & solutions lead at AiRa (~$8M + ~$5M)",
  },
  {
    value: "~$14B",
    label: "AT&T modernization program",
    note: "2023–25 — I directed execution across 28,000+ sites",
  },
  {
    value: "7,300+",
    label: "Cloud-native Open RAN sites",
    note: "2019–23 at Echostar — world's first, serving 80M POPs",
  },
  {
    value: "15+ yrs",
    label: "Product & program leadership",
    note: "Telecom infrastructure through enterprise AI",
  },
];

// ---- AI & Product flagship page ----

export type StackLayer = {
  id: string;
  name: string;
  summary: string;
  detail: string[];
};

export const aiStack: StackLayer[] = [
  {
    id: "infrastructure",
    name: "Infrastructure — Physical & Data Layer",
    summary: "The compute, storage, and data foundation everything runs on.",
    detail: [
      "Cloud-native, high-availability compute and the physical/data layer the whole stack sits on.",
      "Data pipelines, storage, and telemetry ingestion at enterprise scale.",
      "Proven on large-scale, cloud-native network infrastructure serving tens of millions of endpoints.",
    ],
  },
  {
    id: "agents",
    name: "Agents & Models — Where the intelligence lives",
    summary: "Sensing, perception, forecasting, and recommendation — powered by models.",
    detail: [
      "Agents for sensing, perception, forecasting, and recommendation — orchestrated with planning and human-in-the-loop controls.",
      "Powered by models: LLM/RAG (Azure, LangChain/LangGraph) plus classical ML — Random Forest, Gradient Boosting, XGBoost, AdaBoost, Isolation Forest, K-Means, and DNNs.",
      "Dataset cleaning and feature engineering that make the models production-ready.",
    ],
  },
  {
    id: "applications",
    name: "Applications — Subscribe to the agents",
    summary: "Enterprise apps that consume agent outputs and deliver value.",
    detail: [
      "Applications subscribe to the agents and turn their intelligence into workflows users act on.",
      "A chat-based interface unifying telemetry, root-cause analysis, recommendations, and app creation.",
      "~35% engineering productivity gains at ~90% accuracy; app cycles cut from months to days.",
    ],
  },
  {
    id: "visualization",
    name: "Visualization — Telemetry, made legible",
    summary: "Dashboards that surface all the telemetry across the stack.",
    detail: [
      "Visualization layer surfacing telemetry from every layer for operators and executives.",
      "Executive dashboards, readiness reviews, and operational governance.",
      "Turned raw program data into decisions across large, multi-site portfolios.",
    ],
  },
];

// The four layers build the product. Commercialization is what wraps it —
// the layer Nauman operates across to turn the stack into revenue.
export const stackFraming = {
  build:
    "Four layers build the product: Infrastructure → Agents & Models → Applications → Visualization.",
  commercialization:
    "Commercialization is what I do around the product — turning the stack into enterprise revenue through discovery, technical sales, SOWs, and production rollout (multiple millions in enterprise POs).",
};

// ---- Career (executive story, not chronological) ----

export type CareerTheme = {
  title: string;
  body: string;
  proof: string[];
};

export const careerThemes: CareerTheme[] = [
  {
    title: "Zero-to-One Builder",
    body: "Throughout my career I've built products, tools, systems, and platforms from scratch — turning ambiguous problems into production systems.",
    proof: [
      "Built program reporting & analytics from 0→1 (Python + Power BI) at AT&T.",
      "Envisioned and shipped Naavik, a net-new agentic AI product, at AiRa.",
    ],
  },
  {
    title: "Enterprise-Scale Execution",
    body: "I lead complex, cross-functional programs where predictability and governance matter as much as vision.",
    proof: [
      "Directed AT&T's ~$14B modernization across 28,000+ sites (Macro, Small Cell, DAS).",
      "Sustained a run rate of 1,200 sites/month with rigorous readiness governance.",
    ],
  },
  {
    title: "AI Product Leadership",
    body: "I own the full lifecycle of enterprise AI products — from customer discovery to commercial adoption.",
    proof: [
      "Owned product, engineering, delivery, and technical sales at a Series-B AI startup.",
      "Naavik delivered +35% engineering productivity at 90% accuracy.",
    ],
  },
  {
    title: "Commercial Impact",
    body: "I connect technical roadmaps to revenue, closing enterprise deals and turning pilots into production.",
    proof: [
      "Closed ~$13M in enterprise POs across AT&T and Axiata.",
      "Translated requirements into SOWs and commercial agreements.",
    ],
  },
];

export type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export const roles: Role[] = [
  {
    company: "AiRa Technologies Inc.",
    role: "Director, Product & Solutions — Enterprise AI",
    period: "Sep 2025 – Present",
    location: "Saratoga, CA",
    highlights: [
      "Own the full customer lifecycle across product, engineering, delivery, and technical sales.",
      "Envisioned and executed Naavik on Azure — telemetry, RCA, AI recommendations, and app creation; +35% engineering productivity at 90% accuracy; app cycles cut from months to days.",
      "Led AT&T and Axiata from discovery to production, closing ~$13M in combined POs (~$8M and ~$5M).",
    ],
  },
  {
    company: "AT&T",
    role: "Technical Product & Program Management",
    period: "Sep 2023 – Sep 2025",
    location: "Dallas, TX",
    highlights: [
      "Directed execution for AT&T's largest modernization program — ~$14B across 28,000+ sites (Macro, Small Cell, DAS).",
      "Scaled delivery to a sustained 1,200 sites/month across OEM partners, PMO, and field vendors.",
      "Built an in-house reporting toolset from 0→1 (Python + Power BI) for program visibility.",
    ],
  },
  {
    company: "Echostar",
    role: "Technical Program Management",
    period: "Nov 2019 – Sep 2023",
    location: "Dallas, TX",
    highlights: [
      "Led the world's first cloud-native Open RAN network across 7,300+ sites serving 80M POPs.",
      "Coordinated engineering, field ops, transport, fiber, power, and construction nationwide.",
      "Established executive governance via dashboards and operational readiness reviews.",
    ],
  },
];

export const education = [
  "Post Graduate Program, AI & Machine Learning — UT Austin, McCombs School of Business",
  "MBA — University of Illinois at Urbana-Champaign",
  "MS, Computer Engineering — Wayne State University",
  "BS, Computer Engineering — National University of Sciences & Technology (NUST)",
];

export const certifications = [
  "AWS Certified Solutions Architect – Associate (AWS-ASA-14571)",
];

// ---- Realty.ai ----

export const realtyAi = {
  tagline: "Agents now have agents.",
  founder:
    "Founded by Nauman Hadi — real estate sales agent with Fathom Realty (License #820896).",
  intro:
    "Realty.ai is a real estate technology firm built on multi-agent AI. MLS and transaction-desk paperwork is inefficient and manual — Realty.ai's agents handle it so human agents stop spending hours filling forms and get back to delivering value to buyers and sellers.",
  problem:
    "MLS and transaction-desk workflows are slow, manual, and non-agentic. Agents lose hours to repetitive form-filling and updates instead of serving clients.",
  solution:
    "A multi-agent system that prepares, updates, and reviews transaction paperwork automatically — the agent gets an AI team, and only has to deliver value to buyers and sellers.",
  supports: [
    "TREC 1-4 Contracts",
    "Buyer Representation Agreements",
    "IABS",
    "Consumer Protection Notice",
    "Addenda",
    "Amendments",
    "Disclosures",
    "Transaction checklists",
  ],
  vision: [
    "Conversational transaction intake",
    "AI document preparation",
    "Compliance review",
    "Deadline tracking",
    "MLS integration",
    "CRM integration",
    "eSignature",
    "Brokerage knowledge base",
  ],
  disclaimer:
    "Realty.ai assists licensed professionals with document preparation and review. It does not provide legal advice.",
};

// ---- Float Fleet + Investing ----

export const floatFleet = {
  intro:
    "Float Fleet Inc. is a logistics company I founded during COVID — starting with a vision for autonomous trucking technology, then pivoting into hands-on freight operations: freight procurement, sales, and dedicated reefer and dry van service. I scaled it to a five-truck fleet and sold the operations in a successful exit.",
  story: [
    "Founded during COVID around a vision for autonomous trucking technology.",
    "Pivoted to freight operations: procurement and sales.",
    "Ran dedicated reefer and dry van service.",
    "Scaled the fleet to five trucks.",
    "Sold the operations as a successful exit.",
  ],
  lessons: [
    "Leadership under uncertainty",
    "Freight procurement & sales",
    "Operations & logistics",
    "Finance & negotiation",
    "Scaling and knowing when to exit",
  ],
};

export const investing = {
  intro:
    "I've been investing for over 12 years. Along the way I built multi-agent systems to take human emotion out of the loop, and developed and tested an options strategy focused on selling premium with technical support — while following the economy closely. Capital markets and real estate are my passion outside of shipping and building products. Investing has humbled me more than once, and that's exactly why I love it: it keeps everything in perspective.",
  topics: [
    "Long-term investing",
    "Stocks & index investing",
    "Options strategy (premium selling)",
    "Multi-agent trading systems",
    "Real estate",
    "Compounding",
    "Risk management",
    "Macro & economics",
  ],
  // Featured Instagram Reels (id builds the embed URL). Optional `file` = local
  // MP4 in /public/reels for true in-site playback (no redirect to Instagram).
  videos: [
    { title: "Options Strategy", id: "DTkya88EWt8", file: "" },
    { title: "Home Listing", id: "DKC8YjHqs4p", file: "" },
    { title: "Home Listing", id: "C797HWYOaot", file: "" },
  ],
  disclaimer:
    "Content is for educational purposes only and is not financial, investment, or tax advice. Investing involves risk, including possible loss of principal.",
};
