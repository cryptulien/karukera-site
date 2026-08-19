const fr = {
  nav: {
    projects: "Projets",
    carnet: "Le Carnet",
    agents: "Agents",
    security: "Audit sécu",
    secretary: "Secrétaire",
    guides: "Guides",
  },
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
    salesTagline: "Karukera Agents — des outils pour le quotidien d’un entrepreneur.",
    salesLegal: "Karukera — Julien Lelandais. Tes données restent chez toi.",
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
    buyShort: "Obtenir le kit",
    price: "197 €",
    priceNote: "Paiement unique. Mises à jour par mail.",
    stripeMissing: "Stripe n’est pas encore branché. Réessaie dans un instant.",
    checkoutError: "Le paiement n’a pas pu démarrer.",
    busy: "Redirection vers Stripe…",
    thanksTitle: "Le ZIP est prêt.",
    thanksBody:
      "Paiement reçu. Télécharge le kit. Le même lien signé (7 jours) part aussi à l’e-mail du paiement — tu pourras y revenir sans retaper quoi que ce soit.",
    download: "Télécharger le ZIP",
    thanksPending: "Paiement en cours de confirmation.",
    thanksFail: "Session introuvable ou impayée.",
    next1: "Ouvre START-HERE.md, puis le ZIP dans Claude, Codex, Cursor ou Hermes.",
    next2: "Si le modèle refuse l’audit, dépose une clé OpenRouter (environ 10 € de crédits pour un audit).",
    next3: "Choisis le projet chez toi, la profondeur, et si tu donnes des accès.",
    unlockTitle: "Ce lien est incomplet.",
    unlockBody:
      "Le ZIP ne s’ouvre que depuis le retour Stripe après paiement. Un identifiant de session seul ne suffit pas — et on ne demande pas d’e-mail à deviner.",
    unlockLabel: "",
    unlockSubmit: "",
    unlockBusy: "",
    unlockFail: "",
  },
  oss: {
    badge: "Open source",
    viewOnGitHub: "Voir sur GitHub",
    viewShort: "GitHub",
    clone: "Cloner",
    cloneCopied: "Commande copiée",
    stars: "étoiles",
    forks: "forks",
    catalogPrice: "Open source · MIT",
    catalogNote: "Repo public. Clone, pas d’achat.",
  },
  kit: {
    metaTitle: "Pentest IA de ton SaaS — kit d’audit sécu | Karukera",
    metaDesc:
      "Lance un audit sécu Web, SaaS ou MCP chez toi, dans Claude, Codex ou Cursor. 8 modes, 12 agents, rapport tenu par la QA, tickets de correctif. Open source, MIT.",
    catalogMetaTitle: "Karukera Agents — outils IA pour entrepreneurs",
    catalogMetaDesc:
      "Karukera Agents : des kits IA qui s’adaptent à ta pratique. Famille technique (audit sécu Web, SaaS, MCP) et famille commerciale (secrétaire Telegram / Ringover / Odoo). Chez toi.",
    catalogTitle: "Karukera Agents. Des outils pour ton quotidien.",
    catalogLead:
      "Faciliter la vie d’un entrepreneur avec l’IA, sans lui prendre ses données. Chaque agent s’adapte à ta pratique : tu choisis le mode, les accès, le rythme. Ils tournent chez toi.",
    catalogPrice: "Open source · MIT",
    catalogOpen: "Voir le kit",
    catalogHow: [
      { t: "Calé sur ta pratique", b: "Tu dis le projet, la profondeur, ce que l’agent a le droit de toucher. Il s’adapte. Il n’impose pas un flux générique." },
      { t: "Chez toi", b: "Tes données, tes outils, tes habitudes. Karukera ne voit ni ton code, ni tes clients, ni tes clés." },
      { t: "Un repo, pas une agence", b: "Tu clones, tu lances dans Claude, Codex, Cursor ou Hermes — ou sur ton VPS. Licence MIT." },
    ],
    catalogFamilyTech: "Technique",
    catalogFamilyTechLead:
      "Des agents qui regardent ce que tu construis. Audit, surface, isolation. D’autres agents techniques suivront.",
    catalogFamilyTechSoon: "Ensuite dans cette famille — pas encore publié : SEO / GEO.",
    catalogFamilyBiz: "Commercial",
    catalogFamilyBizLead:
      "Des agents qui tiennent le fil avec tes prospects. Mails, appels, CRM. Rien ne part sans toi. D’autres agents sales et business suivront.",
    catalogFamilyBizSoon:
      "Aussi public : LinkedIn outreach (MIT) — github.com/cryptulien/linkedin-outreach. D’autres agents commercial suivront.",
    catalogBadge: "Kit audit sécu",
    catalogScope: "Solo founder · SaaS · Web",
    catalogAlt: "Console d’audit avec la squad en cours de mission",
    catalogH2: "Sécurise ton application",
    catalogBody:
      "Audit sécu que tu lances chez toi. Code en profondeur, surface extérieure, ou depuis l’intérieur du SaaS. Rapport, preuves, tickets à passer à ton LLM.",
    catalogFacts: [
      "110 fichiers, zéro code obligatoire",
      "8 types d’audit, 12 agents",
      "Tickets de correctif + prompts",
    ],
    catalogMore: "Lire la page complète →",
    catalogSoon: "Ensuite : SEO / GEO · Clinique · Accompagnement.",
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
    heroTitle: "Sécurise ton appli. Protège tes revenus.",
    heroLead:
      "Un kit d’agents, lancé chez toi. Tu l’ouvres dans Claude, Codex ou un autre. Tu choisis le projet, la profondeur, les accès. Tu reçois le rapport, les preuves, et les tickets à coller dans ton LLM.",
    modelsLine:
      "Certains modèles refusent l’audit. Une clé OpenRouter débloque ceux qui le font — tes crédits restent les tiens.",
    demoScope: "app.exemple.tld · Complet SaaS",
    problemTitle: "Tu n’as pas une équipe AppSec. Tu as un produit qui encaisse.",
    problemBody:
      "Un scanner te sort 200 lignes. Claude refuse parfois d’auditer. Le trou qui te coûte n’est pas un header manquant : c’est un IDOR entre deux comptes, un tool trop ouvert, une session qui fuit. Le kit tourne sur ta machine. Karukera ne voit rien.",
    featuresTitle: "Tu choisis comment regarder.",
    features: [
      {
        kind: "code",
        title: "Le code, en profondeur",
        body: "La squad lit le dépôt, l’auth, l’API, les secrets. Pas un scan de surface : une lecture de ce que ton appli fait vraiment.",
      },
      {
        kind: "outside",
        title: "Ou seulement depuis l’extérieur",
        body: "Pas d’accès au code ? Elle cartographie les pages, les headers, la surface publique. Tu restes maître du scope.",
      },
      {
        kind: "inside",
        title: "Depuis l’intérieur du SaaS",
        body: "Tu donnes des comptes de test, ou pas. Avec deux tenants, elle cherche l’isolation. Sans exploit, sans payload — des mesures, des preuves.",
      },
      {
        kind: "tickets",
        title: "Des tickets que ton LLM peut corriger",
        body: "Chaque finding devient une carte : priorité, critère d’acceptation, prompt à coller dans Claude ou Codex. Tu ne réécris pas le brief.",
      },
    ],
    flowTitle: "Le flow est court.",
    steps: [
      {
        t: "Tu clones le dépôt",
        b: "Dans Claude, Codex, Cursor ou Hermes. Sur ta machine.",
      },
      {
        t: "Tu choisis le projet et la profondeur",
        b: "Express, Web, SaaS, MCP, delta, red team… Uniquement un système que tu as le droit d’auditer.",
      },
      {
        t: "Tu donnes des accès, ou pas",
        b: "Comptes de test pour regarder depuis l’intérieur. Sinon, l’audit reste à l’extérieur.",
      },
      {
        t: "Tu reçois le rapport",
        b: "Preuves, statuts, et tickets de correctif à transmettre à ton LLM.",
      },
    ],
    modesTitle: "Huit types d’audit.",
    modes: [
      { t: "Express", b: "Premier passage. Surface, pages, secrets. 30–45 min." },
      { t: "Complet Web", b: "Site ou app : pages, cookies, front, API du même origine." },
      { t: "Complet SaaS", b: "Orgs, rôles, facturation, isolation entre tenants." },
      { t: "Agents / MCP", b: "Tools, skills, copilote branché sur des données." },
      { t: "Delta", b: "Après correctifs : qu’est-ce qui a bougé." },
      { t: "Continu", b: "Snapshot périodique, garde-fou de release." },
      { t: "Red-team", b: "Exercice adverse. Mandat écrit obligatoire." },
      { t: "Rapport board", b: "Synthèse décideur à partir d’un journal déjà signé." },
    ],
    routerTitle: "Claude peut refuser. OpenRouter, non.",
    routerBody:
      "Tu peux tout faire dans Claude ou Codex. Si le modèle refuse l’audit, dépose une clé OpenRouter. Environ 10 € de crédits pour un audit. Les modèles frontier n’ont pas le même filtre.",
    workflowTitle: "Douze agents. La QA signe, ou il n’y a pas de rapport.",
    agents: [
      { id: "00", name: "Orchestre", job: "Enchaîne la squad" },
      { id: "01", name: "Surface", job: "Cartographie" },
      { id: "02", name: "Menaces", job: "Modèle de risques" },
      { id: "03", name: "Pages", job: "Audit on-page" },
      { id: "04", name: "Session", job: "Auth & cookies" },
      { id: "05", name: "Authz", job: "Isolation tenants" },
      { id: "06", name: "API", job: "Backend" },
      { id: "07", name: "Secrets", job: "Config exposée" },
      { id: "08", name: "Supply", job: "Dépendances" },
      { id: "09", name: "MCP", job: "Tools & agents" },
      { id: "10", name: "QA", job: "Refuse ou signe" },
      { id: "11", name: "Rapport", job: "Livrable tenu" },
    ],
    log: [
      "Mission Complet SaaS — app.exemple.tld",
      "Orchestrateur : règles 00–07 chargées",
      "Surface : 14 origines, 3 apps",
      "Menaces : IDOR tenant, session, MCP",
      "Pages : /login, /app, /billing",
      "Auth : cookie HttpOnly, pas de rotation",
      "Authz : GET /invoices/882 lisible depuis l’org B",
      "F-014 Confirmé — preuve journalisée",
      "QA : relit la chaîne de preuve",
      "QA signée. Rapport relâché.",
    ],
    findingId: "F-014",
    findingTitle: "Lecture d’invoice hors tenant",
    findingStatus: "Confirmé",
    ticketId: "FIX-012",
    ticketTitle: "Interdire la lecture d’invoice hors tenant",
    ticketPrompt:
      "Contrôle d’appartenance tenant sur GET/PATCH/DELETE invoice. Hors tenant : 404 identique au not-found. Test défensif : le tenant A ne lit pas l’id du tenant B.",
    priceTitle: "Gratuit. Licence MIT.",
    priceBody:
      "Le kit est public. Clone le dépôt, ouvre START-HERE.md. Les mises à jour, c’est git pull.",
    faqTitle: "Avant de cloner.",
    faq: [
      {
        q: "Faut-il savoir coder ?",
        a: "Non. Tu clones le dépôt et tu l’ouvres dans Claude, Codex, Cursor ou Hermes. Prompts, configs, templates.",
      },
      {
        q: "Je dois utiliser OpenRouter ?",
        a: "Non. Tu peux rester dans Claude ou Codex. Si le modèle refuse l’audit, une clé OpenRouter débloque les modèles qui le font. Environ 10 € de crédits pour un audit.",
      },
      {
        q: "C’est un scanner en ligne ?",
        a: "Non. Le kit tourne chez toi. Karukera ne voit ni ta cible, ni ton code.",
      },
      {
        q: "Je peux l’utiliser sur n’importe quel site ?",
        a: "Uniquement un système dont tu as l’autorisation écrite.",
      },
      {
        q: "Qu’est-ce que je reçois ?",
        a: "Un rapport priorisé, les preuves, six statuts de mesure, et des tickets avec le prompt à coller dans ton LLM pour corriger.",
      },
      {
        q: "Les mises à jour sont payantes ?",
        a: "Non. Repo public, licence MIT. git pull.",
      },
    ],
    closeTitle: "Lance l’audit sur un projet à toi.",
    closeBody: "Licence MIT. Un clone. Un rapport tenu — ou le silence de la QA.",
    briefLink: "Note de présentation — périmètre, méthode, restitution",
  },
  secretary: {
    metaTitle: "Kit secrétaire commercial — Karukera",
    metaDesc:
      "Mails et appels Ringover deviennent des cartes Telegram. Odoo se met à jour seulement après ton ok.",
    buy: "Voir sur GitHub",
    priceNote: "Open source. Le bot tourne sur ton VPS. Tes clés restent les tiennes.",
    heroTitle: "Une secrétaire commerciale qui attend ton ok.",
    heroLead:
      "Hermes lit tes mails et tes appels Quicktalk / Ringover, te pose une carte sur Telegram, et n’écrit dans Odoo que quand tu réponds ok. Appliance Docker, chez toi.",
    problemTitle: "L’appel est passé. Le CRM est encore vide.",
    problemBody:
      "Quelqu’un a rappelé pour un devis. Le fil est dans la boîte, la transcription dans Ringover, et personne n’a ouvert Odoo. Le kit tient ces trois bouts, te les montre, et n’écrit rien tout seul.",
    stepsTitle: "Deux phases. Pas une de plus.",
    steps: [
      {
        t: "Tu clones le dépôt",
        b: "START-HERE.md en premier.",
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
      "Licence MIT. Appliance Hermes + ingest Docker. Odoo, Ringover, IMAP configurés dans Telegram. 42 fichiers.",
    faqTitle: "Avant de cloner.",
    faq: [
      {
        q: "Faut-il coder ?",
        a: "Non pour l’usage. L’install est Docker + install.sh, puis le bot. Une IA peut suivre pack/deploy/SKILL.md.",
      },
      {
        q: "C’est hébergé chez Karukera ?",
        a: "Non. Le kit tourne sur ton VPS. Karukera ne voit ni tes mails, ni tes appels.",
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
    closeBody: "Licence MIT. Un clone. Un Telegram. Rien dans Odoo avant ton ok.",
    thanksBody:
      "Paiement reçu. Télécharge le ZIP. Le même lien signé (7 jours) part aussi à l’e-mail du paiement. Puis START-HERE.md, et le bot.",
    next1: "Ouvre START-HERE.md — deux phases, tu n’en fusionnes aucune.",
    next2: "Phase 1 : FOR-AI.md puis pack/deploy/SKILL.md sur le VPS.",
    next3: "Phase 2 : tu écris au bot. Les cartes arrivent toutes seules.",
  },
  guides: {
    indexMetaTitle: "Guides d’audit sécu — 8 modes du kit | Karukera",
    indexMetaDesc:
      "Pentest IA, audit web, audit SaaS, sécurité MCP, delta, continu, red-team léger, rapport board. Un article par mode du kit. Chez toi.",
    indexTitle: "Huit modes. Un article pour chacun.",
    indexLead:
      "Tu ne choisis pas un mode interne. Tu dis le projet — site, SaaS, MCP — et la profondeur. Chaque guide dit ce que la squad fait, ce qu’elle refuse, et comment lancer.",
    modesEyebrow: "Kit audit sécu",
    pillarEyebrow: "Le coin",
    read: "Lire le guide",
    whenLabel: "Quand l’ouvrir",
    agentsLabel: "Agents",
    skipsLabel: "Hors de ce mode",
    launchLabel: "Phrase type",
    faqTitle: "Avant de lancer",
    relatedTitle: "Autres modes",
    allGuides: "Tous les guides",
    ctaTitle: "Le kit, pas le guide.",
    ctaBody:
      "Open source, MIT. Tu clones, tu l’ouvres dans Claude, Codex, Cursor ou Hermes. Rapport tenu — ou le silence de la QA.",
    productModesTitle: "Huit profondeurs. Choisis selon le produit.",
    productModesLead:
      "Express pour un premier signal. Complet Web pour un site. Complet SaaS pour l’isolation. MCP si la valeur est l’agent. Chaque mode a son guide.",
  },
};

export default fr;
