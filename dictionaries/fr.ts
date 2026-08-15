const fr = {
  nav: { projects: "Projets", carnet: "Le Carnet", agents: "Agents" },
  hero: { tagline: "L’île aux belles eaux" },
  about: {
    title: "Je suis Julien.",
    body: "Médecin psychiatre et entrepreneur. Je construis des projets à l’intersection de la santé, du numérique et du concret — avec la conviction qu’un humain seul, bien outillé par l’IA, peut désormais bâtir ce qui demandait hier une équipe entière.",
  },
  projects: {
    eyebrow: "Ce que je construis",
    visit: "Visiter le site",
    soon: "Site bientôt disponible",
    items: {
      superpagr: {
        domain: "Santé · SaaS · Plannings",
        text: "Les soignants méritent des outils pensés avec autant de soin qu’on en donne aux patients. SuperPagr simplifie les plannings médicaux — gardes, astreintes, remplacements — avec la rigueur et la clarté que le terrain exige.",
      },
      lien: {
        domain: "SAMU · SMUR · Mobile",
        text: "Né du terrain, pour le terrain. Une application qui met les bons outils entre les mains des équipes d’urgence, là où chaque seconde compte. Fiches, scores, protocoles — tout ce qu’il faut, rien de superflu.",
      },
      openstats: {
        domain: "Recherche · Statistiques · Thèses",
        text: "L’analyse statistique des thèses médicales, mal servie par le logiciel existant, résolue par un humain seul appuyé sur l’IA agentic. La deuxième brique d’une même approche, répétable, du marché de la santé.",
      },
    },
  },
  carnet: {
    eyebrow: "Le Carnet",
    readMemo: "Lire le memo",
    all: "Tous les écrits",
  },
  vision: {
    quote:
      "L’approche de Seijaku, calme dans la tempête : faire prospérer un calme apaisant au sein d’un système qui prend soin, même au cœur de la souffrance.",
  },
  footer: {
    tagline:
      "Le software agentic, AI-first, au service de la santé. Calme dans la tempête.",
    home: "Accueil",
    carnet: "Le Carnet",
    write: "Écrire",
    follow: "Me suivre sur X",
    agents: "Agents",
    legal: "Karukera — Julien Lelandais. Usage autorisé uniquement. Tes données restent chez toi.",
  },
  blog: {
    eyebrow: "Le Carnet",
    title: "Écrits & réflexions",
    intro:
      "Quelques notes sur le chemin : la santé, le software agentic, et la conviction qu’un humain seul, bien outillé, peut désormais construire ce qui demandait hier une équipe entière.",
    read: "Lire",
    back: "Le Carnet",
    allWritings: "Tous les écrits",
  },
  shop: {
    buy: "Obtenir le kit — 197 €",
    price: "197 €",
    priceNote: "Paiement unique. Tes crédits OpenRouter restent les tiens.",
    stripeMissing: "Stripe n’est pas encore branché. Réessaie dans un instant.",
    checkoutError: "Le paiement n’a pas pu démarrer.",
    busy: "Redirection vers Stripe…",
    thanksTitle: "Le ZIP est prêt.",
    thanksBody:
      "Paiement reçu. Télécharge le kit. Le même lien signé (7 jours) part aussi à l’e-mail du paiement — tu pourras y revenir sans retaper quoi que ce soit.",
    download: "Télécharger le ZIP",
    thanksPending: "Paiement en cours de confirmation.",
    thanksFail: "Session introuvable ou impayée.",
    next1: "Ouvre START-HERE.md — sans clé OpenRouter, rien ne part.",
    next2: "30–50 € de crédits OpenRouter. Premier modèle : Kimi K3.",
    next3: "« Audit Complet SaaS sur https://… » — un scope que tu contrôles.",
    unlockTitle: "Ce lien est incomplet.",
    unlockBody:
      "Le ZIP ne s’ouvre que depuis le retour Stripe après paiement. Un identifiant de session seul ne suffit pas — et on ne demande pas d’e-mail à deviner.",
    unlockLabel: "",
    unlockSubmit: "",
    unlockBusy: "",
    unlockFail: "",
  },
  kit: {
    metaTitle: "Kit audit sécu — Karukera",
    metaDesc:
      "ZIP d’agents pour auditer un site ou un SaaS : preuves, statuts, Double QA. Tourne chez toi, via OpenRouter (Kimi K3).",
    catalogMetaTitle: "Kits d’agents — Karukera",
    catalogMetaDesc:
      "Deux kits d’agents : audit sécu Web + SaaS, et secrétaire commercial Telegram / Ringover / Odoo. Ils tournent chez toi.",
    catalogTitle: "Des kits d’agents. Deux, aujourd’hui.",
    catalogLead:
      "Tu paies, tu télécharges le ZIP, tu le lances sur ta machine. Karukera ne voit ni ta cible, ni tes clients.",
    catalogPrice: "197 €",
    catalogOpen: "Voir le kit",
    catalogHow: [
      { t: "Un ZIP", b: "Prompts, configs, appliance. Rien n’est hébergé ici." },
      { t: "Chez toi", b: "Cursor, Claude Code, Hermes, ou un VPS. Tes clés restent les tiennes." },
      { t: "Livré après Stripe", b: "Lien signé 7 jours, aussi dans le mail kit@karukera.xyz." },
    ],
    catalogBadge: "Kit audit sécu",
    catalogScope: "Web + SaaS + agents / MCP",
    catalogAlt: "Rapport d’audit priorisé sur un ordinateur",
    catalogH2: "Audit sécu Web + SaaS",
    catalogBody:
      "Une squad complète : surface, auth, API, MCP, QA. Rapport priorisé, preuves, Double QA bloquante. Kimi K3 via ta clé OpenRouter.",
    catalogFacts: [
      "108 fichiers, zéro code obligatoire",
      "8 modes, 6 statuts, chaîne de preuve",
      "Zéro exploit dans le ZIP",
    ],
    catalogMore: "Lire la page complète →",
    catalogSoon: "Ensuite — pas encore en vente : SEO / GEO · Clinique · Accompagnement.",
    catalogSecretaryBadge: "Kit secrétaire commercial",
    catalogSecretaryScope: "Telegram · Ringover · Odoo",
    catalogSecretaryH2: "Secrétaire commercial",
    catalogSecretaryBody:
      "Mails et appels Ringover → carte Telegram → Odoo seulement après ton ok. Appliance Docker, wizard d’install, guide de déploiement pour une IA.",
    catalogSecretaryFacts: [
      "Hermes + ingest Docker",
      "Telegram, Ringover, IMAP, Odoo",
      "Rien n’est envoyé tout seul",
    ],
    catalogSecretaryMore: "Lire la page complète →",
    heroTitle: "Un audit sécu Web + SaaS, de bout en bout.",
    heroLead:
      "108 fichiers. Tu les lances chez toi. La squad cartographie, score, et refuse le rapport tant que la QA n’a pas signé. Tes modèles, ta clé OpenRouter — Kimi K3 en premier.",
    heroAlt: "Rapport d’audit sur un laptop",
    reviewsLabel: "Wording d’exemple — avis à remplacer par de vrais clients.",
    reviews: [
      {
        name: "Léa M.",
        role: "Freelance AppSec",
        quote:
          "J’ai sorti 11 findings Confirmé en une après-midi. La QA a bloqué deux hypothèses que j’aurais écrites trop vite.",
      },
      {
        name: "Marc T.",
        role: "Founder, SaaS B2B",
        quote:
          "Une liste priorisée au lieu d’un PDF de 80 pages. L’authz multi-tenant était le vrai trou.",
      },
      {
        name: "Inès K.",
        role: "Directrice d’agence",
        quote:
          "Mes juniors suivent la squad. Je relis le rapport. Le statut Non testé est aussi utile que le Confirmé.",
      },
    ],
    problemTitle: "Un scanner te laisse 200 lignes. Toi tu dois en garder dix.",
    problemBody:
      "Sur un SaaS, le trou n’est plus seulement un header manquant. C’est l’IDOR entre deux tenants. Le tool MCP trop permissif. Le finding que personne n’a osé marquer Hypothèse.",
    folderAlt: "Dossier du kit dans le Finder",
    findingAlt: "Fiche de finding avec statut et preuve",
    stepsTitle: "Quatre pas.",
    steps: [
      {
        t: "Tu récupères le ZIP",
        b: "Paiement Stripe. Lien de download. START-HERE.md en premier.",
      },
      {
        t: "Tu mets ta clé OpenRouter",
        b: "Sans clé, le kit s’arrête. 30–50 € de crédits suffisent en mode budget. Premier modèle : Kimi K3.",
      },
      {
        t: "Tu lances une mission",
        b: "« Audit Complet SaaS sur https://… ». Uniquement un système que tu as le droit d’auditer.",
      },
      {
        t: "Tu lis ce que la QA a laissé passer",
        b: "Si elle refuse, il n’y a pas de rapport. C’est le produit.",
      },
    ],
    priceEyebrow: "Le kit, aujourd’hui",
    priceBody:
      "Paiement unique. Squad, 8 modes, règles, templates de rapport, compagnon d’implémentation. 108 fichiers. Zéro code obligatoire.",
    faqTitle: "Avant que tu paies.",
    faq: [
      {
        q: "Faut-il savoir coder ?",
        a: "Non. Prompts, configs, templates. Zéro code obligatoire.",
      },
      {
        q: "C’est un scanner en ligne ?",
        a: "Non. Le ZIP tourne chez toi. Karukera ne voit pas ta cible.",
      },
      {
        q: "Je peux l’utiliser sur n’importe quel site ?",
        a: "Uniquement un système dont tu as l’autorisation écrite.",
      },
      {
        q: "Pourquoi OpenRouter ?",
        a: "Une clé, les modèles frontier. Premier choix : Kimi K3. En budget, 30–50 € de crédits pour 1 à 3 audits.",
      },
    ],
    closeTitle: "Lance la squad sur un scope à toi.",
    closeBody: "197 €. Un ZIP. Une clé OpenRouter. Un rapport tenu, ou le silence de la QA.",
  },
  secretary: {
    metaTitle: "Kit secrétaire commercial — Karukera",
    metaDesc:
      "Mails et appels Ringover deviennent des cartes Telegram. Odoo se met à jour seulement après ton ok.",
    buy: "Obtenir le kit — 197 €",
    priceNote: "Paiement unique. Le bot tourne sur ton VPS. Tes clés restent les tiennes.",
    heroTitle: "Une secrétaire commerciale qui attend ton ok.",
    heroLead:
      "Hermes lit tes mails et tes appels Quicktalk / Ringover, te pose une carte sur Telegram, et n’écrit dans Odoo que quand tu réponds ok. Appliance Docker, chez toi.",
    problemTitle: "L’appel est passé. Le CRM est encore vide.",
    problemBody:
      "Quelqu’un a rappelé pour un devis. Le fil est dans la boîte, la transcription dans Ringover, et personne n’a ouvert Odoo. Le kit tient ces trois bouts, te les montre, et n’écrit rien tout seul.",
    stepsTitle: "Deux phases. Pas une de plus.",
    steps: [
      {
        t: "Tu récupères le ZIP",
        b: "Paiement Stripe. START-HERE.md en premier.",
      },
      {
        t: "Une IA installe le VPS",
        b: "Elle lit FOR-AI.md puis pack/deploy/SKILL.md. Docker, token Telegram, une clé LLM. Pas d’Odoo ici.",
      },
      {
        t: "Tu parles au bot",
        b: "Le wizard onboard pose une question à la fois, sonde, et n’écrit tenant.yaml qu’à la fin.",
      },
      {
        t: "Les cartes arrivent",
        b: "ok / ignore / une précison. Le brouillon de mail est une note. Odoo n’envoie rien.",
      },
    ],
    priceEyebrow: "Le kit, aujourd’hui",
    priceBody:
      "Paiement unique. Appliance Hermes + ingest Docker. Odoo, Ringover, IMAP configurés dans Telegram. 42 fichiers.",
    faqTitle: "Avant que tu paies.",
    faq: [
      {
        q: "Faut-il coder ?",
        a: "Non pour l’usage. L’install est Docker + install.sh, puis le bot. Une IA peut suivre pack/deploy/SKILL.md.",
      },
      {
        q: "C’est hébergé chez Karukera ?",
        a: "Non. Le ZIP tourne sur ton VPS. Karukera ne voit ni tes mails, ni tes appels.",
      },
      {
        q: "Odoo envoie les mails tout seul ?",
        a: "Non. Le brouillon est une note sur le lead. Jamais un mail sortant.",
      },
      {
        q: "Il me faut quoi ?",
        a: "Un VPS, un bot Telegram, une clé LLM, Odoo, une clé Ringover, et un IMAP (mot de passe d’application).",
      },
    ],
    closeTitle: "Branche le bot sur un VPS à toi.",
    closeBody: "197 €. Un ZIP. Un Telegram. Rien dans Odoo avant ton ok.",
    thanksBody:
      "Paiement reçu. Télécharge le ZIP. Le même lien signé (7 jours) part aussi à l’e-mail du paiement. Puis START-HERE.md, et le bot.",
    next1: "Ouvre START-HERE.md — deux phases, tu n’en fusionnes aucune.",
    next2: "Phase 1 : FOR-AI.md puis pack/deploy/SKILL.md sur le VPS.",
    next3: "Phase 2 : tu écris au bot. Les cartes arrivent toutes seules.",
  },
};

export default fr;
