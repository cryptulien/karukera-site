import type fr from "./fr";

const en: typeof fr = {
  nav: {
    projects: "Projects",
    carnet: "Journal",
    agents: "Agents",
    security: "Security audit",
    secretary: "Secretary",
  },
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
    next1: "Open START-HERE.md, then the ZIP in Claude, Codex, Cursor or Hermes.",
    next2: "If the model refuses the audit, deposit an OpenRouter key (€30–50 in credits).",
    next3: "Pick the project on your machine, the depth, and whether you give access.",
    unlockTitle: "This link is incomplete.",
    unlockBody:
      "The ZIP only unlocks from the Stripe return after payment. A session id alone is not enough — and we do not ask for an email you could guess.",
    unlockLabel: "",
    unlockSubmit: "",
    unlockBusy: "",
    unlockFail: "",
  },
  kit: {
    metaTitle: "Secure your app — security audit kit — Karukera",
    metaDesc:
      "An agent kit to secure your SaaS and your revenue. Open it in Claude, Codex or another. Report, evidence, fix tickets. On your machine.",
    catalogMetaTitle: "Agent kits — Karukera",
    catalogMetaDesc:
      "Two agent kits: secure your app (security audit), and a sales secretary for Telegram / Ringover / Odoo. They run on your side.",
    catalogTitle: "Two kits. They run on your side.",
    catalogLead:
      "The security audit protects your app and your revenue. The secretary holds your mail and calls, and writes to Odoo only after your ok.",
    catalogPrice: "€197",
    catalogOpen: "See the kit",
    catalogHow: [
      { t: "A ZIP", b: "You pay, you download, you open it in Claude, Codex, Cursor or Hermes." },
      { t: "On your side", b: "Karukera never sees your code, your clients, or your keys." },
      { t: "After Stripe", b: "A signed 7-day link, also in the mail from kit@karukera.xyz." },
    ],
    catalogBadge: "Security audit kit",
    catalogScope: "Solo founder · SaaS · Web",
    catalogAlt: "Audit console with the squad running a mission",
    catalogH2: "Secure your application",
    catalogBody:
      "A security audit you run on your machine. Deep code, outside surface, or from inside the SaaS. Report, evidence, tickets for your LLM to fix.",
    catalogFacts: [
      "110 files, no code required",
      "8 audit depths, 12 agents",
      "Fix tickets + prompts",
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
    heroTitle: "Secure your app. Protect your revenue.",
    heroLead:
      "An agent kit, run on your machine. Open it in Claude, Codex or another. Pick the project, the depth, the access. You get the report, the evidence, and tickets to paste into your LLM.",
    modelsLine:
      "Some models refuse the audit. An OpenRouter key unlocks the ones that will — your credits stay yours.",
    demoLabel: "Demo — not a real audit",
    demoScope: "app.exemple.tld · Full SaaS",
    problemTitle: "You don’t have an AppSec team. You have a product that bills.",
    problemBody:
      "A scanner dumps 200 lines. Claude sometimes refuses to audit. The hole that costs you is not a missing header: it is an IDOR between two accounts, a tool that is too open, a session that leaks. The kit runs on your machine. Karukera sees nothing.",
    featuresTitle: "You choose how to look.",
    features: [
      {
        kind: "code",
        title: "The code, in depth",
        body: "The squad reads the repo, auth, API, secrets. Not a surface scan: a reading of what your app actually does.",
      },
      {
        kind: "outside",
        title: "Or only from the outside",
        body: "No code access? It maps pages, headers, the public surface. You stay in control of the scope.",
      },
      {
        kind: "inside",
        title: "From inside the SaaS",
        body: "You give test accounts, or you don’t. With two tenants, it looks for isolation. No exploit, no payload — measurements and evidence.",
      },
      {
        kind: "tickets",
        title: "Tickets your LLM can fix",
        body: "Each finding becomes a card: priority, acceptance test, a prompt to paste into Claude or Codex. You don’t rewrite the brief.",
      },
    ],
    flowTitle: "The flow is short.",
    steps: [
      {
        t: "You open the ZIP",
        b: "In Claude, Codex, Cursor or Hermes. On your machine.",
      },
      {
        t: "You pick the project and the depth",
        b: "Express, Web, SaaS, MCP, delta, red team… Only a system you are allowed to audit.",
      },
      {
        t: "You give access, or you don’t",
        b: "Test accounts to look from the inside. Otherwise the audit stays outside.",
      },
      {
        t: "You get the report",
        b: "Evidence, statuses, and fix tickets to hand to your LLM.",
      },
    ],
    routerTitle: "Claude can refuse. OpenRouter won’t.",
    routerBody:
      "You can do everything in Claude or Codex. If the model refuses the audit, deposit an OpenRouter key. €30–50 in credits covers 1 to 3 missions. Frontier models do not carry the same filter.",
    workflowTitle: "Twelve agents. QA signs, or there is no report.",
    workflowLead:
      "A Full SaaS mission, unfolding. This is a demo. On your machine, the scope and the evidence are yours.",
    agents: [
      { id: "00", name: "Orchestrator", job: "Runs the squad" },
      { id: "01", name: "Surface", job: "Maps the target" },
      { id: "02", name: "Threats", job: "Risk model" },
      { id: "03", name: "Pages", job: "On-page audit" },
      { id: "04", name: "Session", job: "Auth & cookies" },
      { id: "05", name: "Authz", job: "Tenant isolation" },
      { id: "06", name: "API", job: "Backend" },
      { id: "07", name: "Secrets", job: "Exposed config" },
      { id: "08", name: "Supply", job: "Dependencies" },
      { id: "09", name: "MCP", job: "Tools & agents" },
      { id: "10", name: "QA", job: "Refuses or signs" },
      { id: "11", name: "Report", job: "Held deliverable" },
    ],
    log: [
      "Full SaaS mission — app.exemple.tld",
      "Orchestrator: rules 00–07 loaded",
      "Surface: 14 origins, 3 apps",
      "Threats: tenant IDOR, session, MCP",
      "Pages: /login, /app, /billing",
      "Auth: HttpOnly cookie, no rotation",
      "Authz: GET /invoices/882 readable from org B",
      "F-014 Confirmed — evidence in the journal",
      "QA: rereads the evidence chain",
      "QA signed. Report released.",
    ],
    findingId: "F-014",
    findingTitle: "Invoice readable across tenants",
    findingStatus: "Confirmed",
    ticketId: "FIX-012",
    ticketTitle: "Block invoice reads outside the tenant",
    ticketPrompt:
      "Add a tenant-ownership check on GET/PATCH/DELETE invoice. Outside tenant: 404 identical to not-found. Defensive test: tenant A cannot read tenant B’s id.",
    priceTitle: "€197. One ZIP. On your side.",
    priceBody:
      "110 files. 12 agents, 10 specialists, 8 depths. One-time payment. Your keys, your credits, your target.",
    faqTitle: "Before you pay.",
    faq: [
      {
        q: "Do I need to code?",
        a: "No. You open the ZIP in Claude, Codex, Cursor or Hermes. Prompts, configs, templates.",
      },
      {
        q: "Do I have to use OpenRouter?",
        a: "No. You can stay in Claude or Codex. If the model refuses the audit, an OpenRouter key unlocks the ones that will. €30–50 in credits for 1 to 3 missions.",
      },
      {
        q: "Is this an online scanner?",
        a: "No. The ZIP runs on your side. Karukera never sees your target or your code.",
      },
      {
        q: "Can I use it on any site?",
        a: "Only a system you have written authorization to audit.",
      },
      {
        q: "What do I get?",
        a: "A prioritized report, the evidence, six measurement statuses, and tickets with the prompt to paste into your LLM to fix.",
      },
    ],
    closeTitle: "Run the audit on a project you own.",
    closeBody: "€197. One ZIP. A held report — or QA’s silence.",
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
