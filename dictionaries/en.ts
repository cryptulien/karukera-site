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
    next2: "€30–50 in credits. DeepSeek / GLM.",
    next3: "“Full SaaS audit on https://…”",
  },
};

export default en;
