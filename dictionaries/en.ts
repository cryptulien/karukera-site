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
    legal: "Karukera — Julien Lelandais. Authorized use only. Your data stays with you.",
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
      "Payment received. Download the kit. The same signed link (7 days) also goes to the checkout email — you can come back to it without typing anything.",
    download: "Download the ZIP",
    thanksPending: "Payment is still confirming.",
    thanksFail: "Session missing or unpaid.",
    next1: "Open START-HERE.md — without an OpenRouter key, nothing starts.",
    next2: "€30–50 in OpenRouter credits. Primary model: Kimi K3.",
    next3: "“Full SaaS audit on https://…” — a scope you control.",
    unlockTitle: "This link is incomplete.",
    unlockBody:
      "The ZIP only unlocks from the Stripe return after payment. A session id alone is not enough — and we do not ask for an email you could guess.",
    unlockLabel: "",
    unlockSubmit: "",
    unlockBusy: "",
    unlockFail: "",
  },
  kit: {
    metaTitle: "Security audit kit — Karukera",
    metaDesc:
      "A ZIP of agents to audit a site or SaaS: evidence, statuses, Double QA. Runs on your machine, via OpenRouter (Kimi K3).",
    catalogMetaTitle: "Agent kits — Karukera",
    catalogMetaDesc:
      "Two agent kits: a Web + SaaS security audit, and a sales secretary for Telegram / Ringover / Odoo. They run on your side.",
    catalogTitle: "Agent kits. Two, today.",
    catalogLead:
      "You pay, you download the ZIP, you run it on your machine. Karukera sees neither your target nor your clients.",
    catalogPrice: "€197",
    catalogOpen: "See the kit",
    catalogHow: [
      { t: "A ZIP", b: "Prompts, configs, an appliance. Nothing is hosted here." },
      { t: "On your side", b: "Cursor, Claude Code, Hermes, or a VPS. Your keys stay yours." },
      { t: "After Stripe", b: "A signed 7-day link, also in the mail from kit@karukera.xyz." },
    ],
    catalogBadge: "Security audit kit",
    catalogScope: "Web + SaaS + agents / MCP",
    catalogAlt: "Prioritized audit report on a laptop",
    catalogH2: "Web + SaaS security audit",
    catalogBody:
      "A full squad: surface, auth, API, MCP, QA. Prioritized report, evidence, blocking Double QA. Kimi K3 via your OpenRouter key.",
    catalogFacts: [
      "108 files, no code required",
      "8 modes, 6 statuses, evidence chain",
      "No exploits in the ZIP",
    ],
    catalogMore: "Read the full page →",
    catalogSoon: "Next — not for sale yet: SEO / GEO · Clinic · Coaching.",
    catalogSecretaryBadge: "Sales secretary kit",
    catalogSecretaryScope: "Telegram · Ringover · Odoo",
    catalogSecretaryH2: "Sales secretary",
    catalogSecretaryBody:
      "Mail and Ringover calls → Telegram card → Odoo only after your ok. Docker appliance, install wizard, deploy guide for an AI.",
    catalogSecretaryFacts: [
      "Hermes + Docker ingest",
      "Telegram, Ringover, IMAP, Odoo",
      "Nothing is sent on its own",
    ],
    catalogSecretaryMore: "Read the full page →",
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
  secretary: {
    metaTitle: "Sales secretary kit — Karukera",
    metaDesc:
      "Mail and Ringover calls become Telegram cards. Odoo updates only after you reply ok.",
    buy: "Get the kit — €197",
    priceNote: "One-time payment. The bot runs on your VPS. Your keys stay yours.",
    heroTitle: "A sales secretary that waits for your ok.",
    heroLead:
      "Hermes reads your mail and Quicktalk / Ringover calls, posts a card on Telegram, and writes to Odoo only when you reply ok. A Docker appliance, on your side.",
    problemTitle: "The call happened. The CRM is still empty.",
    problemBody:
      "Someone called back about a quote. The thread is in the inbox, the transcript is in Ringover, and nobody opened Odoo. The kit holds those three pieces, shows them to you, and writes nothing on its own.",
    stepsTitle: "Two phases. Not one more.",
    steps: [
      {
        t: "You get the ZIP",
        b: "Stripe payment. START-HERE.md first.",
      },
      {
        t: "An AI installs the VPS",
        b: "It reads FOR-AI.md then pack/deploy/SKILL.md. Docker, Telegram token, one LLM key. No Odoo here.",
      },
      {
        t: "You talk to the bot",
        b: "The onboard wizard asks one question at a time, probes, and writes tenant.yaml only at the end.",
      },
      {
        t: "Cards start arriving",
        b: "ok / ignore / a tweak. The mail draft is a note. Odoo sends nothing.",
      },
    ],
    priceEyebrow: "The kit, today",
    priceBody:
      "One-time payment. Hermes appliance + Docker ingest. Odoo, Ringover, IMAP configured in Telegram. 42 files.",
    faqTitle: "Before you pay.",
    faq: [
      {
        q: "Do I need to code?",
        a: "Not for daily use. Install is Docker + install.sh, then the bot. An AI can follow pack/deploy/SKILL.md.",
      },
      {
        q: "Is this hosted at Karukera?",
        a: "No. The ZIP runs on your VPS. Karukera never sees your mail or your calls.",
      },
      {
        q: "Does Odoo send the mail by itself?",
        a: "No. The draft is a note on the lead. Never an outgoing mail.",
      },
      {
        q: "What do I need?",
        a: "A VPS, a Telegram bot, an LLM key, Odoo, a Ringover key, and IMAP (app password).",
      },
    ],
    closeTitle: "Put the bot on a VPS you control.",
    closeBody: "€197. One ZIP. One Telegram. Nothing in Odoo before your ok.",
    thanksBody:
      "Payment received. Download the ZIP, open START-HERE.md, give it to an AI on your VPS, then talk to the bot.",
    next1: "Open START-HERE.md — two phases, do not merge them.",
    next2: "Phase 1: FOR-AI.md then pack/deploy/SKILL.md on the VPS.",
    next3: "Phase 2: you write to the bot. Cards arrive on their own.",
  },
};

export default en;
