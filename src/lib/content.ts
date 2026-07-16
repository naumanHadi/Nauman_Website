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
  { label: "Experience", href: "/experience" },
  { label: "Ventures", href: "/ventures" },
  { label: "Digital Twin", href: "/digital-twin" },
];

export type Pillar = {
  key: string;
  eyebrow: string;
  title: string;
  blurb: string;
  href: string;
  points: string[];
};

export const pillars: Pillar[] = [
  {
    key: "ai",
    eyebrow: "Flagship",
    title: "AI & Product Leadership",
    blurb:
      "From infrastructure to multi-agent systems to commercialized enterprise AI — I understand how AI moves from the data center to production revenue.",
    href: "/experience",
    points: [
      "Full AI stack: infra → platforms → data → models → agents → apps",
      "Naavik: agentic chat platform, +35% engineering productivity",
      "Enterprise AI commercialization ($13M+ POs)",
    ],
  },
  {
    key: "scale",
    eyebrow: "Scale",
    title: "Infrastructure at AI Scale",
    blurb:
      "Delivered nationwide, cloud-native infrastructure at a scale comparable to modern AI rollouts — with the governance to keep it predictable.",
    href: "/experience",
    points: [
      "World's first cloud-native Open RAN: 7,300+ sites, 80M POPs",
      "AT&T ~$14B modernization across 28,000+ sites",
      "0→1 analytics platform (Python + Power BI)",
    ],
  },
  {
    key: "ventures",
    eyebrow: "Builder",
    title: "Ventures — Realty.ai & Float Fleet",
    blurb:
      "A founder who ships: Realty.ai, a multi-agent firm that automates real estate paperwork, and Float Fleet, a company built, scaled, and exited through COVID.",
    href: "/ventures",
    points: [
      "Realty.ai: multi-agent paperwork automation — agents now have agents",
      "Float Fleet: 0→1 founder, scaled and exited",
      "Operator's instinct backed by execution",
    ],
  },
  {
    key: "investing",
    eyebrow: "Investing",
    title: "Markets & Options",
    blurb:
      "Long-term compounding, business analysis, and options strategy — shared through short-form video and disciplined risk management.",
    href: "/ventures#investing",
    points: [
      "Options strategy explained on Instagram",
      "Index & long-term investing, compounding, risk",
      "Business-analysis mindset applied to markets",
    ],
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
    name: "Infrastructure",
    summary: "Large-scale, cloud-native, high-availability systems.",
    detail: [
      "Delivered the world's first cloud-native Open RAN network across 7,300+ production sites serving 80M points of presence.",
      "Directed nationwide telecom infrastructure: transport, fiber, commercial & backup power, commissioning.",
      "Distributed, high-availability production systems at a scale comparable to modern AI infrastructure rollouts.",
    ],
  },
  {
    id: "platforms",
    name: "Platforms",
    summary: "Enterprise platforms for automation & operational analytics.",
    detail: [
      "Built an in-house reporting & analytics toolset from 0→1 (Python + Power BI) for a 28,000-site portfolio.",
      "Workflow orchestration and enterprise intelligence enabling predictable, data-driven execution.",
      "Operational platforms that turned raw program data into executive decisions.",
    ],
  },
  {
    id: "data",
    name: "Data & Intelligence",
    summary: "Turning telemetry and signals into decisions.",
    detail: [
      "On-demand telemetry, root-cause analysis, and AI-driven recommendations unified in a single interface.",
      "Knowledge graphs, vector databases, and SQL-driven insight at enterprise scale.",
      "Forecasting and readiness models that de-risk large deployments.",
    ],
  },
  {
    id: "models",
    name: "Foundation Models / AI",
    summary: "Generative & enterprise AI, RAG, and copilots.",
    detail: [
      "LLM/RAG on Microsoft Azure; LangChain/LangGraph; prompt engineering; LoRA/QLoRA.",
      "Enterprise copilots and AI-assisted application generation.",
      "Grounded, accurate AI experiences tuned for enterprise trust (90% accuracy on Naavik).",
    ],
  },
  {
    id: "agents",
    name: "Multi-Agent Systems",
    summary: "Orchestration, tool-calling, and human-in-the-loop.",
    detail: [
      "Agent orchestration with planning and knowledge agents across enterprise workflows.",
      "Tool-calling and agent collaboration with human-in-the-loop controls.",
      "Naavik: cut application development cycles from 3–4 months to days.",
    ],
  },
  {
    id: "apps",
    name: "Enterprise Applications",
    summary: "Products customers deploy in production.",
    detail: [
      "Owned the full customer lifecycle: requirements → engineering → delivery → production.",
      "Envisioned and executed Naavik end-to-end at a Series-B AI startup.",
      "+35% engineering productivity for enterprise customers.",
    ],
  },
  {
    id: "commercialization",
    name: "Commercialization",
    summary: "From zero revenue to enterprise adoption.",
    detail: [
      "Led enterprise engagements with AT&T and Axiata from discovery through production.",
      "Closed ~$13M in combined enterprise purchase orders (~$8M and ~$5M).",
      "Translated business requirements into technical roadmaps, SOWs, and commercial agreements.",
    ],
  },
];

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
    "Float Fleet Inc. started during COVID with a vision for autonomous trucking solutions, then pivoted into hands-on trucking operations — freight procurement, sales, and dedicated reefer and dry van service. I scaled it to a five-truck fleet and sold the operations in a successful exit.",
  story: [
    "Founded during COVID to pursue autonomous trucking solutions.",
    "Pivoted to trucking operations: freight procurement and sales.",
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
