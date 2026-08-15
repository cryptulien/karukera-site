import type fr from "./fr";

const en: typeof fr = {
  nav: { projects: "Projects", carnet: "Journal", agents: "Agents" },
  hero: { tagline: "The island of beautiful waters" },
  about: {
    title: "I’m Julien.",
    body: "Psychiatrist and entrepreneur. I build projects at the intersection of healthcare, software and the concrete — convinced that a single person, well equipped with AI, can now build what used to require an entire team.",
  },
  projects: {
    eyebrow: "What I build",
    visit: "Visit the site",
    soon: "Website coming soon",
    items: {
      superpagr: {
        domain: "Health · SaaS · Scheduling",
        text: "Caregivers deserve tools designed with as much care as they give their patients. SuperPagr simplifies medical scheduling — on-call, standby, replacements — with the rigor and clarity the field demands.",
      },
      lien: {
        domain: "SAMU · EMS · Mobile",
        text: "Born from the field, for the field. An app that puts the right tools in the hands of emergency teams, where every second counts. Sheets, scores, protocols — everything needed, nothing superfluous.",
      },
      openstats: {
        domain: "Research · Statistics · Theses",
        text: "The statistical analysis of medical theses, poorly served by existing software, solved by a single person leaning on agentic AI. The second brick of one same, repeatable approach to the healthcare market.",
      },
    },
  },
  carnet: {
    eyebrow: "Journal",
    readMemo: "Read the memo",
    all: "All writing",
  },
  vision: {
    quote:
      "The Seijaku approach — calm in the storm: nurturing a soothing calm within a system that cares, even at the heart of suffering.",
  },
  footer: {
    tagline:
      "Agentic, AI-first software in the service of healthcare. Calm in the storm.",
    home: "Home",
    carnet: "Journal",
    write: "Write",
    follow: "Follow me on X",
    agents: "Agents",
  },
  blog: {
    eyebrow: "Journal",
    title: "Writing & reflections",
    intro:
      "A few notes along the way: healthcare, agentic software, and the conviction that a single person, well equipped, can now build what used to require an entire team.",
    read: "Read",
    back: "Journal",
    allWritings: "All writing",
  },
  shop: {
    buy: "Get the kit — €197",
    price: "€197",
    priceNote: "One-time payment. Your OpenRouter credits stay yours.",
    stripeMissing: "Stripe is not configured yet. Try again shortly.",
    checkoutError: "Checkout could not start.",
    busy: "Redirecting to Stripe…",
    thanksTitle: "Your ZIP is ready.",
    thanksBody:
      "Payment received. Download the kit, open START-HERE.md, add your OpenRouter key, run a mission on a scope you control.",
    download: "Download the ZIP",
    thanksPending: "Payment is still confirming.",
    thanksFail: "Session missing or unpaid.",
    next1: "Open START-HERE.md — without an OpenRouter key, nothing starts.",
    next2: "€30–50 in OpenRouter credits. Primary model: Kimi K3.",
    next3: "“Full SaaS audit on https://…” — a scope you control.",
    unlockTitle: "Confirm the email from checkout.",
    unlockBody:
      "The checkout link is not enough on its own. Enter the email you used on Stripe to unlock the ZIP.",
    unlockLabel: "Checkout email",
    unlockSubmit: "Unlock download",
    unlockBusy: "Checking…",
    unlockFail: "That email does not match the payment.",
  },
  kit: {
    metaTitle: "Security audit kit — Karukera",
    metaDesc:
      "A ZIP of agents to audit a site or SaaS: evidence, statuses, Double QA. Runs on your machine, via OpenRouter (Kimi K3).",
    catalogMetaTitle: "Agents — Karukera",
    catalogMetaDesc:
      "Karukera’s first kit: an end-to-end Web + SaaS security audit.",
    catalogTitle: "Agent kits. The first one is a security audit.",
    catalogLead:
      "Upload the ZIP in Cursor, Claude Code, Codex or Hermes. Your agents produce a prioritized report, with evidence. Nothing is hosted at Karukera.",
    catalogBadge: "Security audit kit",
    catalogScope: "Web + SaaS + agents / MCP",
    catalogAlt: "Prioritized audit report on a laptop",
    catalogH2: "An audit you can show. Not an 80-page PDF.",
    catalogBody:
      "Every finding has evidence, a status and a priority. Double QA blocks the report until it holds. OpenRouter required. Kimi K3 first. No exploits in the ZIP.",
    catalogMore: "Read the full page →",
    catalogSoon: "Next — not for sale yet: SEO / GEO · Clinic · Coaching.",
    heroTitle: "A full Web + SaaS security audit. End to end.",
    heroLead:
      "108 files. They run on your machine. The squad maps, scores, and withholds the report until QA signs. Your models, your OpenRouter key — Kimi K3 first.",
    heroAlt: "Audit report on a laptop",
    reviewsLabel: "Sample wording — replace with real clients.",
    reviews: [
      {
        name: "Léa M.",
        role: "Freelance AppSec",
        quote:
          "I shipped 11 Confirmed findings in an afternoon. QA blocked two hypotheses I would have written too fast.",
      },
      {
        name: "Marc T.",
        role: "Founder, B2B SaaS",
        quote:
          "A prioritized list instead of an 80-page PDF. Multi-tenant authz was the real hole.",
      },
      {
        name: "Inès K.",
        role: "Agency lead",
        quote:
          "Juniors follow the squad. I review the report. Untested is as useful as Confirmed.",
      },
    ],
    problemTitle: "A scanner leaves you 200 lines. You have to keep ten.",
    problemBody:
      "On a SaaS, the hole is no longer just a missing header. It is an IDOR between two tenants. An MCP tool that is too permissive. The finding nobody dared to mark Hypothesis.",
    folderAlt: "Kit folder in Finder",
    findingAlt: "Finding card with status and evidence",
    stepsTitle: "Four steps.",
    steps: [
      {
        t: "You get the ZIP",
        b: "Stripe payment. Download link. START-HERE.md first.",
      },
      {
        t: "You add your OpenRouter key",
        b: "Without a key, the kit stops. €30–50 in credits is enough in budget mode. Primary model: Kimi K3.",
      },
      {
        t: "You start a mission",
        b: "“Full SaaS audit on https://…”. Only a system you are allowed to audit.",
      },
      {
        t: "You read what QA let through",
        b: "If it refuses, there is no report. That is the product.",
      },
    ],
    priceEyebrow: "The kit, today",
    priceBody:
      "One-time payment. Squad, 8 modes, rules, report templates, implementation companion. 108 files. No code required.",
    faqTitle: "Before you pay.",
    faq: [
      {
        q: "Do I need to code?",
        a: "No. Prompts, configs, templates. No code required.",
      },
      {
        q: "Is this an online scanner?",
        a: "No. The ZIP runs on your side. Karukera never sees the target.",
      },
      {
        q: "Can I use it on any site?",
        a: "Only a system you have written authorization to audit.",
      },
      {
        q: "Why OpenRouter?",
        a: "One key, frontier models. Primary choice: Kimi K3. In budget mode, €30–50 in credits covers 1 to 3 audits.",
      },
    ],
    closeTitle: "Run the squad on a scope you own.",
    closeBody: "€197. One ZIP. One OpenRouter key. A held report — or QA’s silence.",
  },
};

export default en;
