import type fr from "./fr";

const en: typeof fr = {
  nav: {
    projects: "Projects",
    carnet: "Journal",
    agents: "Agents",
    security: "Security audit",
    secretary: "Secretary",
    guides: "Guides",
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
    salesTagline: "Karukera Agents — tools for an entrepreneur’s day-to-day.",
    salesLegal: "Karukera — Julien Lelandais. Your data stays with you.",
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
    buyShort: "Get the kit",
    price: "€197",
    priceNote: "One-time payment. Updates by email.",
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
    next2: "If the model refuses the audit, deposit an OpenRouter key (about €10 in credits for one audit).",
    next3: "Pick the project on your machine, the depth, and whether you give access.",
    unlockTitle: "This link is incomplete.",
    unlockBody:
      "The ZIP only unlocks from the Stripe return after payment. A session id alone is not enough — and we do not ask for an email you could guess.",
    unlockLabel: "",
    unlockSubmit: "",
    unlockBusy: "",
    unlockFail: "",
  },
  oss: {
    badge: "Open source",
    viewOnGitHub: "View on GitHub",
    viewShort: "GitHub",
    clone: "Clone",
    cloneCopied: "Copied",
    stars: "stars",
    forks: "forks",
    catalogPrice: "Open source · MIT",
    catalogNote: "Public repo. Clone it — no purchase.",
  },
  kit: {
    metaTitle: "AI pentest of your SaaS — security audit kit | Karukera",
    metaDesc:
      "Run a Web, SaaS or MCP security audit on your machine, in Claude, Codex or Cursor. 8 modes, 12 agents, QA-gated report, fix tickets. Open source, MIT.",
    catalogMetaTitle: "Karukera Agents — AI tools for founders",
    catalogMetaDesc:
      "Karukera Agents: AI kits that fit your practice. Technical family (Web, SaaS, MCP security audit) and sales family (Telegram / Ringover / Odoo secretary). On your machine.",
    catalogTitle: "Karukera Agents. Tools for the day-to-day.",
    catalogLead:
      "Make an entrepreneur’s day lighter with AI, without taking their data. Each agent fits your practice: you pick the mode, the access, the pace. They run on your side.",
    catalogPrice: "Open source · MIT",
    catalogOpen: "See the kit",
    catalogHow: [
      { t: "Fitted to your practice", b: "You name the project, the depth, what the agent may touch. It adapts. It does not impose a generic flow." },
      { t: "On your side", b: "Your data, your tools, your habits. Karukera never sees your code, your clients, or your keys." },
      { t: "A repo, not an agency", b: "You clone, you launch in Claude, Codex, Cursor or Hermes — or on your VPS. MIT license." },
    ],
    catalogFamilyTech: "Technical",
    catalogFamilyTechLead:
      "Agents that look at what you build. Audit, surface, isolation. More technical agents will follow.",
    catalogFamilyTechSoon: "Next in this family — not published yet: SEO / GEO.",
    catalogFamilyBiz: "Sales",
    catalogFamilyBizLead:
      "Agents that hold the thread with your prospects. Mail, calls, CRM. Nothing goes out without you. More sales and business agents will follow.",
    catalogFamilyBizSoon:
      "Also public: LinkedIn outreach (MIT) — github.com/cryptulien/linkedin-outreach. More sales agents will follow.",
    catalogBadge: "Security audit kit",
    catalogScope: "Solo founder · SaaS · Web",
    catalogAlt: "Audit console with the squad running a mission",
    catalogH2: "Secure your application",
    catalogBody:
      "A security audit you run on your machine. Deep code, outside surface, or from inside the SaaS. Report, evidence, tickets for your LLM to fix.",
    catalogFacts: [
      "110 files, no code required",
      "8 audit types, 12 agents",
      "Fix tickets + prompts",
    ],
    catalogMore: "Read the full page →",
    catalogSoon: "Next: SEO / GEO · Clinic · Coaching.",
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
        t: "You clone the repo",
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
    modesTitle: "Eight kinds of audit.",
    modes: [
      { t: "Express", b: "First pass. Surface, pages, secrets. 30–45 min." },
      { t: "Full Web", b: "Site or app: pages, cookies, front, same-origin API." },
      { t: "Full SaaS", b: "Orgs, roles, billing, isolation between tenants." },
      { t: "Agents / MCP", b: "Tools, skills, a copilot wired to data." },
      { t: "Delta", b: "After fixes: what moved." },
      { t: "Continuous", b: "Periodic snapshot, release guardrail." },
      { t: "Red team", b: "Adversarial exercise. Written mandate required." },
      { t: "Board report", b: "Exec summary from a journal QA already signed." },
    ],
    routerTitle: "Claude can refuse. OpenRouter won’t.",
    routerBody:
      "You can do everything in Claude or Codex. If the model refuses the audit, deposit an OpenRouter key. About €10 in credits for one audit. Frontier models do not carry the same filter.",
    workflowTitle: "Twelve agents. QA signs, or there is no report.",
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
    priceTitle: "Free. MIT license.",
    priceBody:
      "The kit is public. Clone the repo, open START-HERE.md. Updates are a git pull.",
    faqTitle: "Before you clone.",
    faq: [
      {
        q: "Do I need to code?",
        a: "No. You clone the repo and open it in Claude, Codex, Cursor or Hermes. Prompts, configs, templates.",
      },
      {
        q: "Do I have to use OpenRouter?",
        a: "No. You can stay in Claude or Codex. If the model refuses the audit, an OpenRouter key unlocks the ones that will. About €10 in credits for one audit.",
      },
      {
        q: "Is this an online scanner?",
        a: "No. The kit runs on your side. Karukera never sees your target or your code.",
      },
      {
        q: "Can I use it on any site?",
        a: "Only a system you have written authorization to audit.",
      },
      {
        q: "What do I get?",
        a: "A prioritized report, the evidence, six measurement statuses, and tickets with the prompt to paste into your LLM to fix.",
      },
      {
        q: "Are updates paid?",
        a: "No. Public repo, MIT license. git pull.",
      },
    ],
    closeTitle: "Run the audit on a project you own.",
    closeBody: "MIT license. One clone. A held report — or QA’s silence.",
    briefLink: "Briefing note — scope, method, delivery",
  },
  secretary: {
    metaTitle: "Sales secretary kit — Karukera",
    metaDesc:
      "Mail and Ringover calls become Telegram cards. Odoo updates only after you reply ok.",
    buy: "View on GitHub",
    priceNote: "Open source. The bot runs on your VPS. Your keys stay yours.",
    heroTitle: "A sales secretary that waits for your ok.",
    heroLead:
      "Hermes reads your mail and Quicktalk / Ringover calls, posts a card on Telegram, and writes to Odoo only when you reply ok. A Docker appliance, on your side.",
    problemTitle: "The call happened. The CRM is still empty.",
    problemBody:
      "Someone called back about a quote. The thread is in the inbox, the transcript is in Ringover, and nobody opened Odoo. The kit holds those three pieces, shows them to you, and writes nothing on its own.",
    stepsTitle: "Two phases. Not one more.",
    steps: [
      {
        t: "You clone the repo",
        b: "START-HERE.md first.",
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
      "MIT license. Hermes appliance + Docker ingest. Odoo, Ringover, IMAP configured in Telegram. 42 files.",
    faqTitle: "Before you clone.",
    faq: [
      {
        q: "Do I need to code?",
        a: "Not for daily use. Install is Docker + install.sh, then the bot. An AI can follow pack/deploy/SKILL.md.",
      },
      {
        q: "Is this hosted at Karukera?",
        a: "No. The kit runs on your VPS. Karukera never sees your mail or your calls.",
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
    closeBody: "MIT license. One clone. One Telegram. Nothing in Odoo before your ok.",
    thanksBody:
      "Payment received. Download the ZIP, open START-HERE.md, give it to an AI on your VPS, then talk to the bot.",
    next1: "Open START-HERE.md — two phases, do not merge them.",
    next2: "Phase 1: FOR-AI.md then pack/deploy/SKILL.md on the VPS.",
    next3: "Phase 2: you write to the bot. Cards arrive on their own.",
  },
  guides: {
    indexMetaTitle: "Security audit guides — 8 kit modes | Karukera",
    indexMetaDesc:
      "AI pentest, web audit, SaaS audit, MCP security, delta, continuous, light red team, board report. One article per kit mode. On your machine.",
    indexTitle: "Eight modes. One article each.",
    indexLead:
      "You do not pick an internal mode. You name the project — site, SaaS, MCP — and the depth. Each guide says what the squad does, what it refuses, and how to launch.",
    modesEyebrow: "Security audit kit",
    pillarEyebrow: "The wedge",
    read: "Read the guide",
    whenLabel: "When to open it",
    agentsLabel: "Agents",
    skipsLabel: "Outside this mode",
    launchLabel: "Launch phrase",
    faqTitle: "Before you launch",
    relatedTitle: "Other modes",
    allGuides: "All guides",
    ctaTitle: "The kit, not the guide.",
    ctaBody:
      "Open source, MIT. Clone it, open it in Claude, Codex, Cursor or Hermes. A held report — or QA’s silence.",
    productModesTitle: "Eight depths. Pick from the product.",
    productModesLead:
      "Express for a first signal. Full Web for a site. Full SaaS for isolation. MCP if the value is the agent. Each mode has its guide.",
  },
};

export default en;
