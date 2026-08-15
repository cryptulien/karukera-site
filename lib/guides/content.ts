import type { Locale } from "@/lib/i18n";
import type { GuideCopy, GuideDef } from "./types";

const L = (fr: GuideCopy, en: GuideCopy, es: GuideCopy): Record<Locale, GuideCopy> => ({
  fr,
  en,
  es,
});

export const GUIDES: GuideDef[] = [
  {
    slug: "pentest-ia",
    modeId: null,
    published: "2026-08-15",
    related: ["audit-saas", "audit-web", "audit-mcp", "audit-express"],
    copy: L(
      {
        keyword: "pentest IA",
        metaTitle: "Pentest IA de ton appli, chez toi — Karukera",
        metaDesc:
          "Un pentest IA n’est pas un scanner. Kit d’agents : 8 modes (web, SaaS, MCP), rapport tenu par une QA, tickets de correctif. Tourne dans Claude ou Codex.",
        title: "Pentest IA : auditer ton appli sans envoyer le code à un tiers.",
        lead: "Les gens tapent « pentest IA » pour une raison simple : un scanner crache 200 lignes, un pentester humain coûte une semaine, et Claude refuse parfois d’auditer. Le kit pose une squad chez toi. Huit modes. Un rapport seulement si la QA signe.",
        excerpt:
          "Ce qu’est un pentest IA, ce que ce n’est pas, et quel mode du kit ouvrir selon que tu as un site, un SaaS, ou des agents MCP.",
        readingTime: "8 min",
        duration: "selon le mode",
        when: [
          "Tu veux un audit sécu de TON site, SaaS ou serveur MCP",
          "Tu ouvres Claude, Codex, Cursor ou Hermes sur ta machine",
          "Tu refuses d’envoyer le dépôt à un scanner hébergé",
        ],
        agents: "12 agents, 10 spécialistes — le mode choisit lesquels tournent",
        skips: [
          "Ce n’est pas un pentest offensif : zéro exploit, zéro payload",
          "Ce n’est pas un certificat SOC 2",
          "Sans autorisation écrite, rien ne tourne sur un système qui n’est pas à toi",
        ],
        launch:
          "Audite ce projet chez moi. URL : https://app.exemple.tld. Code : ./mon-app. Complet. Extérieur + intérieur. Les comptes sont dans le brief, pas ici.",
        body: [
          {
            type: "h2",
            text: "Ce que les gens cherchent vraiment",
          },
          {
            type: "p",
            text: "« Pentest IA » mélange trois jobs. Auditer un modèle. Utiliser un modèle pour auditer une appli. Acheter un outil qui promet les deux. Ici, c’est le deuxième : une squad d’agents qui lit TON système — pages, auth, API, isolation, tools MCP — et écrit un rapport avec preuves.",
          },
          {
            type: "p",
            text: "Le kit est un ZIP. Tu l’ouvres dans Claude, Codex, Cursor ou Hermes. Karukera ne voit ni la cible, ni le code, ni tes clés. Si le modèle refuse l’audit, une clé OpenRouter route vers des modèles qui le font. Tes crédits restent les tiens.",
          },
          {
            type: "h2",
            text: "Scanner, pentest humain, kit d’agents",
          },
          {
            type: "ul",
            items: [
              "Un scanner liste des en-têtes et des CVE. Il ne tranche pas un IDOR entre deux orgs.",
              "Un pentest humain est le bon outil pour un exercice adverse long, pas pour un founder qui veut un premier rapport tenu ce week-end.",
              "Le kit enchaîne 12 agents, refuse d’inventer une preuve, et n’écrit le rapport que si la QA a signé.",
            ],
          },
          {
            type: "h2",
            text: "Huit modes, pas un bouton magique",
          },
          {
            type: "p",
            text: "Tu ne choisis pas un mode interne. Tu dis le projet, la profondeur, et si tu donnes des accès. L’orchestrateur mappe :",
          },
          {
            type: "ul",
            items: [
              "Express — premier signal sur une origine publique (30–45 min).",
              "Complet Web — site ou app, cookies, API de même origine (une journée).",
              "Complet SaaS — orgs, rôles, isolation. Deux tenants pour confirmer un IDOR.",
              "Agents / MCP — tools, skills, délégation. L’agent 09 tourne en premier.",
              "Delta — qu’est-ce qui a bougé après les correctifs.",
              "Continu — garde-fou périodique sur une baseline déjà posée.",
              "Red-team léger — tests actifs non destructifs, mandat écrit obligatoire.",
              "Rapport board — synthèse décideur. Aucun test nouveau. QA déjà signée.",
            ],
          },
          {
            type: "h2",
            text: "Ce que tu reçois",
          },
          {
            type: "p",
            text: "Un journal de preuves, des findings avec six statuts de mesure (Confirmé n’est pas Hypothèse), un rapport exécutif, un rapport implémentation, et des tickets. Chaque ticket porte le prompt à coller dans ton LLM pour corriger. Si la QA refuse, il n’y a pas de rapport. C’est le produit.",
          },
        ],
        faq: [
          {
            q: "C’est un pentest « réel » ?",
            a: "C’est un audit d’observation, avec un mode red-team léger si tu as un mandat écrit. Le ZIP n’écrit aucun exploit. Un finding Confirmé a une preuve journalisée, ou il n’est pas Confirmé.",
          },
          {
            q: "Faut-il savoir coder ?",
            a: "Non. Prompts, configs, templates. Tu ouvres le ZIP dans l’agent. Le code de TA cible, lui, reste chez toi.",
          },
          {
            q: "Pourquoi pas Claude tout seul ?",
            a: "Beaucoup de modèles refusent l’audit. Même quand ils acceptent, ils inventent des findings. Le kit impose la chaîne de preuve, les statuts, et une Double QA bloquante.",
          },
        ],
      },
      {
        keyword: "AI pentest",
        metaTitle: "AI pentest of your app, on your machine — Karukera",
        metaDesc:
          "An AI pentest is not a scanner. Agent kit: 8 modes (web, SaaS, MCP), QA-gated report, fix tickets. Runs in Claude or Codex, on your side.",
        title: "AI pentest: audit your app without sending the code away.",
        lead: "People search “AI pentest” because a scanner dumps 200 lines, a human pentester costs a week, and Claude sometimes refuses to audit. The kit runs a squad on your machine. Eight modes. A report only if QA signs.",
        excerpt:
          "What an AI pentest is, what it is not, and which kit mode to open for a site, a SaaS, or MCP agents.",
        readingTime: "8 min",
        duration: "depends on the mode",
        when: [
          "You want a security audit of YOUR site, SaaS or MCP server",
          "You open Claude, Codex, Cursor or Hermes on your machine",
          "You will not upload the repo to a hosted scanner",
        ],
        agents: "12 agents, 10 specialists — the mode picks who runs",
        skips: [
          "Not an offensive pentest: no exploit, no payload",
          "Not a SOC 2 certificate",
          "Without written authorization, nothing runs on a system that is not yours",
        ],
        launch:
          "Audit this project on my machine. URL: https://app.example.tld. Code: ./my-app. Full. Outside + inside. Accounts are in the brief, not here.",
        body: [
          {
            type: "h2",
            text: "What people are actually asking for",
          },
          {
            type: "p",
            text: "“AI pentest” mixes three jobs. Audit a model. Use a model to audit an app. Buy a tool that claims both. This is the second: a squad that reads YOUR system — pages, auth, API, isolation, MCP tools — and writes a report with evidence.",
          },
          {
            type: "p",
            text: "The kit is a ZIP. You open it in Claude, Codex, Cursor or Hermes. Karukera never sees the target, the code, or your keys. If the model refuses the audit, an OpenRouter key routes to models that will. Your credits stay yours.",
          },
          {
            type: "h2",
            text: "Scanner, human pentest, agent kit",
          },
          {
            type: "ul",
            items: [
              "A scanner lists headers and CVEs. It will not decide an IDOR between two orgs.",
              "A human pentest is the right tool for a long adversarial exercise, not for a founder who wants a held report this weekend.",
              "The kit chains 12 agents, refuses to invent evidence, and writes the report only if QA signed.",
            ],
          },
          {
            type: "h2",
            text: "Eight modes, not one magic button",
          },
          {
            type: "p",
            text: "You do not pick an internal mode. You name the project, the depth, and whether you give access. The orchestrator maps:",
          },
          {
            type: "ul",
            items: [
              "Express — first signal on a public origin (30–45 min).",
              "Full Web — site or app, cookies, same-origin API (one day).",
              "Full SaaS — orgs, roles, isolation. Two tenants to confirm an IDOR.",
              "Agents / MCP — tools, skills, delegation. Agent 09 runs first.",
              "Delta — what moved after the fixes.",
              "Continuous — periodic guardrail on an existing baseline.",
              "Light red team — active non-destructive tests, written mandate required.",
              "Board report — executive synthesis. No new tests. QA already signed.",
            ],
          },
          {
            type: "h2",
            text: "What you get",
          },
          {
            type: "p",
            text: "An evidence journal, findings with six measurement statuses (Confirmed is not Hypothesis), an exec report, an implementation report, and tickets. Each ticket carries the prompt to paste into your LLM to fix. If QA refuses, there is no report. That is the product.",
          },
        ],
        faq: [
          {
            q: "Is this a “real” pentest?",
            a: "It is an observation audit, with a light red-team mode if you have a written mandate. The ZIP writes no exploit. A Confirmed finding has journaled evidence, or it is not Confirmed.",
          },
          {
            q: "Do I need to code?",
            a: "No. Prompts, configs, templates. You open the ZIP in the agent. YOUR target’s code stays on your machine.",
          },
          {
            q: "Why not Claude alone?",
            a: "Many models refuse the audit. Even when they accept, they invent findings. The kit enforces the evidence chain, the statuses, and a blocking Double QA.",
          },
        ],
      },
      {
        keyword: "pentest IA",
        metaTitle: "Pentest IA de tu app, en tu máquina — Karukera",
        metaDesc:
          "Un pentest IA no es un escáner. Kit de agentes: 8 modos (web, SaaS, MCP), informe con QA, tickets. Corre en Claude o Codex.",
        title: "Pentest IA: audita tu app sin enviar el código fuera.",
        lead: "Se busca « pentest IA » porque un escáner tira 200 líneas, un pentester humano cuesta una semana, y Claude a veces se niega. El kit pone una squad en tu máquina. Ocho modos. Informe solo si la QA firma.",
        excerpt:
          "Qué es un pentest IA, qué no es, y qué modo abrir según tengas un sitio, un SaaS o agentes MCP.",
        readingTime: "8 min",
        duration: "según el modo",
        when: [
          "Quieres auditar TU sitio, SaaS o servidor MCP",
          "Abres Claude, Codex, Cursor o Hermes en tu máquina",
          "No vas a subir el repo a un escáner alojado",
        ],
        agents: "12 agentes, 10 especialistas — el modo elige quién corre",
        skips: [
          "No es un pentest ofensivo: cero exploit, cero payload",
          "No es un certificado SOC 2",
          "Sin autorización escrita, nada corre en un sistema que no es tuyo",
        ],
        launch:
          "Audita este proyecto en mi máquina. URL: https://app.ejemplo.tld. Código: ./mi-app. Completo. Exterior + interior. Las cuentas están en el brief, no aquí.",
        body: [
          {
            type: "h2",
            text: "Lo que la gente pide de verdad",
          },
          {
            type: "p",
            text: "« Pentest IA » mezcla tres trabajos. Auditar un modelo. Usar un modelo para auditar una app. Comprar una herramienta que promete las dos. Aquí es lo segundo: una squad que lee TU sistema y escribe un informe con pruebas.",
          },
          {
            type: "p",
            text: "El kit es un ZIP. Lo abres en Claude, Codex, Cursor o Hermes. Karukera no ve el objetivo, ni el código, ni tus claves. Si el modelo rechaza la auditoría, una clave OpenRouter enruta a modelos que sí la hacen.",
          },
          {
            type: "h2",
            text: "Escáner, pentest humano, kit de agentes",
          },
          {
            type: "ul",
            items: [
              "Un escáner lista cabeceras y CVE. No decide un IDOR entre dos orgs.",
              "Un pentest humano sirve para un ejercicio adverso largo, no para un founder que quiere un informe este fin de semana.",
              "El kit encadena 12 agentes, no inventa pruebas, y solo escribe el informe si la QA firmó.",
            ],
          },
          {
            type: "h2",
            text: "Ocho modos, no un botón mágico",
          },
          {
            type: "p",
            text: "No eliges un modo interno. Dices el proyecto, la profundidad y si das accesos. El orquestador mapea Express, Web, SaaS, MCP, Delta, Continuo, Red-team ligero y Informe board.",
          },
          {
            type: "h2",
            text: "Qué recibes",
          },
          {
            type: "p",
            text: "Diario de pruebas, findings con seis estados, informe ejecutivo, informe de implementación y tickets con el prompt para tu LLM. Si la QA rechaza, no hay informe. Eso es el producto.",
          },
        ],
        faq: [
          {
            q: "¿Es un pentest « de verdad »?",
            a: "Es una auditoría de observación, con un modo red-team ligero si tienes mandato escrito. El ZIP no escribe exploits. Un Confirmado tiene prueba en el diario, o no es Confirmado.",
          },
          {
            q: "¿Hay que saber programar?",
            a: "No. Prompts, configs, plantillas. El código de TU objetivo se queda en tu máquina.",
          },
          {
            q: "¿Por qué no Claude solo?",
            a: "Muchos modelos rechazan la auditoría. Aunque acepten, inventan findings. El kit impone la cadena de prueba y una Doble QA bloqueante.",
          },
        ],
      },
    ),
  },
  {
    slug: "audit-express",
    modeId: "01-express",
    published: "2026-08-15",
    related: ["audit-web", "audit-saas", "pentest-ia"],
    copy: L(
      {
        keyword: "audit sécurité site web",
        metaTitle: "Audit sécurité site web express — 30 à 45 min — Karukera",
        metaDesc:
          "Mode Express du kit : premier signal sur une origine publique. En-têtes, pages, secrets dans le JS. Pas un audit complet. Rapport honnête, couverture basse par contrat.",
        title: "Audit sécurité site web : le mode Express, un premier signal.",
        lead: "Avant une démo, avant un devis, tu veux savoir s’il y a un trou évident. Pas un certificat. Le mode Express parcourt une origine publique en 30–45 min, écrit ce qu’il a vu, et marque le reste Non testé.",
        excerpt:
          "Quand ouvrir l’Express, ce qu’il couvre (pages, en-têtes, JS), et pourquoi une Express à confiance 5 est une faute.",
        readingTime: "6 min",
        duration: "30–45 min",
        when: [
          "Une origine publique, pas de compte-test",
          "Tri avant démo, ou pour borner un devis",
          "Tu acceptes une couverture basse, écrite dans le rapport",
        ],
        agents: "00, 01, 02, 03, 07, 10, 11",
        skips: [
          "Pas d’auth profonde, pas d’isolation tenant, pas d’API hors pages vues",
          "Pas de supply chain, pas d’audit MCP — un finding Non testé si une surface agent apparaît",
          "Plafond : 80 URLs HTML par origine",
        ],
        launch:
          "Express sur https://exemple.com, pas de compte, pas d’API authentifiée.",
        body: [
          {
            type: "h2",
            text: "À quoi ça sert",
          },
          {
            type: "p",
            text: "Le mode Express est un tri. Il répond : y a-t-il un trou évident sur ce que voit un inconnu ? CSP absente, Server bavard, source map, secret dans un bundle, 404 trop parlante. Il ne répond pas : un client A peut-il lire les factures du client B ?",
          },
          {
            type: "h2",
            text: "Ce que la squad fait",
          },
          {
            type: "p",
            text: "L’orchestrateur ouvre le projet. La surface cartographie l’origine (blocs 1–4 et 7 de la collecte). Un modèle de menaces court. L’audit on-page observe, sans payload. S’il y a un bundle in-scope, l’agent secrets lit le JS. La QA courte exige une preuve pour chaque Confirmé. Le rapport ne sort que si elle signe.",
          },
          {
            type: "h2",
            text: "Ce qu’il ne faut pas en faire",
          },
          {
            type: "ul",
            items: [
              "Un SaaS multi-tenant → mode Complet SaaS.",
              "Un serveur MCP ou des tools → mode Agents / MCP.",
              "Un rapport pour le board → d’abord un Complet, puis le mode 8.",
              "« Aller plus loin » avec un POST d’essai → refusé. Observation seulement.",
            ],
          },
          {
            type: "p",
            text: "La confiance globale est plafonnée à 2. Une Express qui se présente comme un audit complet est une faute du kit, pas un succès.",
          },
        ],
        faq: [
          {
            q: "Ça remplace un pentest web ?",
            a: "Non. C’est le premier signal. Le Complet Web (une journée) enchaîne session, API, supply chain. L’Express s’arrête avant.",
          },
          {
            q: "Sans compte-test, on voit quoi ?",
            a: "Ce qu’un inconnu voit. Tout le reste est Non testé — écrit, pas inventé.",
          },
        ],
      },
      {
        keyword: "website security audit",
        metaTitle: "Express website security audit — 30–45 min — Karukera",
        metaDesc:
          "Express mode: first signal on a public origin. Headers, pages, secrets in JS. Not a full audit. Honest report, low coverage by contract.",
        title: "Website security audit: Express mode, a first signal.",
        lead: "Before a demo or a quote, you want obvious holes, not a certificate. Express walks one public origin in 30–45 min, writes what it saw, and marks the rest Untested.",
        excerpt:
          "When to open Express, what it covers, and why an Express at confidence 5 is a fault.",
        readingTime: "6 min",
        duration: "30–45 min",
        when: [
          "One public origin, no test account",
          "Triage before a demo, or to bound a quote",
          "You accept low coverage, written in the report",
        ],
        agents: "00, 01, 02, 03, 07, 10, 11",
        skips: [
          "No deep auth, no tenant isolation, no API beyond pages seen",
          "No supply chain, no MCP audit — Untested if an agent surface appears",
          "Cap: 80 HTML URLs per origin",
        ],
        launch: "Express on https://example.com, no account, no authenticated API.",
        body: [
          {
            type: "h2",
            text: "What it is for",
          },
          {
            type: "p",
            text: "Express is triage. It answers: is there an obvious hole in what a stranger sees? Missing CSP, talkative Server header, source map, secret in a bundle. It does not answer: can tenant A read tenant B’s invoices?",
          },
          {
            type: "h2",
            text: "What the squad does",
          },
          {
            type: "p",
            text: "The orchestrator opens the project. Surface maps the origin. A short threat model. On-page audit observes, no payload. If an in-scope bundle exists, the secrets agent reads the JS. Short QA requires evidence for every Confirmed. The report ships only if QA signs.",
          },
          {
            type: "h2",
            text: "What not to use it for",
          },
          {
            type: "ul",
            items: [
              "Multi-tenant SaaS → Full SaaS mode.",
              "MCP server or tools → Agents / MCP mode.",
              "A board report → a Full audit first, then mode 8.",
              "“Go further” with a trial POST → refused. Observation only.",
            ],
          },
        ],
        faq: [
          {
            q: "Does this replace a web pentest?",
            a: "No. First signal only. Full Web (one day) adds session, API, supply chain.",
          },
          {
            q: "With no test account, what do we see?",
            a: "What a stranger sees. Everything else is Untested — written, not invented.",
          },
        ],
      },
      {
        keyword: "auditoría seguridad sitio web",
        metaTitle: "Auditoría de seguridad web express — 30–45 min — Karukera",
        metaDesc:
          "Modo Express: primera señal en un origen público. Cabeceras, páginas, secretos en el JS. No es una auditoría completa.",
        title: "Auditoría de un sitio web: modo Express, primera señal.",
        lead: "Antes de una demo o un presupuesto, quieres agujeros evidentes, no un certificado. Express recorre un origen público en 30–45 min y marca el resto como No testado.",
        excerpt:
          "Cuándo abrir Express, qué cubre, y por qué una Express con confianza 5 es una falta.",
        readingTime: "6 min",
        duration: "30–45 min",
        when: [
          "Un origen público, sin cuenta de prueba",
          "Triaje antes de una demo, o para acotar un presupuesto",
          "Aceptas una cobertura baja, escrita en el informe",
        ],
        agents: "00, 01, 02, 03, 07, 10, 11",
        skips: [
          "Sin auth profunda, sin aislamiento de tenant, sin API fuera de las páginas vistas",
          "Sin supply chain, sin MCP",
          "Tope: 80 URLs HTML por origen",
        ],
        launch:
          "Express en https://ejemplo.com, sin cuenta, sin API autenticada.",
        body: [
          {
            type: "h2",
            text: "Para qué sirve",
          },
          {
            type: "p",
            text: "Express es un triaje. Responde: ¿hay un agujero evidente en lo que ve un desconocido? No responde si el cliente A puede leer las facturas del cliente B.",
          },
          {
            type: "h2",
            text: "Qué no hacer con él",
          },
          {
            type: "ul",
            items: [
              "SaaS multi-tenant → modo SaaS completo.",
              "Servidor MCP → modo Agentes / MCP.",
              "Informe para el board → primero un Completo, luego el modo 8.",
            ],
          },
        ],
        faq: [
          {
            q: "¿Sustituye un pentest web?",
            a: "No. Es la primera señal. El Web completo (un día) añade sesión, API y supply chain.",
          },
        ],
      },
    ),
  },
  {
    slug: "audit-web",
    modeId: "02-complet-web",
    published: "2026-08-15",
    related: ["audit-express", "audit-saas", "pentest-ia"],
    copy: L(
      {
        keyword: "pentest web",
        metaTitle: "Pentest web : audit complet d’une appli — Karukera",
        metaDesc:
          "Mode Complet Web : site ou app, cookies, session, API de même origine, supply chain. Une journée. Observation, zéro exploit. Rapport + tickets si la QA signe.",
        title: "Pentest web : le mode Complet, pour un site ou une appli.",
        lead: "Un site marketing, une boutique, une app single-tenant. Tu veux un rapport implémentable, pas un tri Express. Le mode Complet Web enchaîne surface, pages, session, API, secrets, dépendances — une journée, sans payload.",
        excerpt:
          "Pipeline d’un audit web complet : ce qui tourne, ce qui reste Non testé sans compte, et quand basculer en SaaS.",
        readingTime: "7 min",
        duration: "1 journée",
        when: [
          "Site, blog, e-commerce, app web sans promesse d’isolation B2B",
          "Tu veux exec + impl + tickets, pas seulement un signal",
          "Compte-test recommandé — sans lui, toute la branche auth reste Non testé",
        ],
        agents: "00–04, 06–11 (09 en inventaire négatif s’il n’y a pas d’agent)",
        skips: [
          "Pas le spécialiste multi-tenant — si tu découvres une tenancy réelle, tu bascules en mode SaaS",
          "Hors-scope : paiement hébergé, IdP tiers — noté, pas visité",
          "Zéro injection. On documente les reflets, on n’exploite pas",
        ],
        launch:
          "Complet Web sur https://exemple.com. Compte-test dans le brief. Extérieur + code si le dépôt est local.",
        body: [
          {
            type: "h2",
            text: "Le pipeline",
          },
          {
            type: "p",
            text: "Orchestrateur, puis cartographie (plafond 800 URLs / origine), modèle de menaces, on-page, session si un login existe, API si elle est inventoriée, secrets, supply chain. S’il n’y a pas de surface agent, l’agent 09 écrit un inventaire négatif — il ne score rien. La QA signe, ou il n’y a pas de rapport.",
          },
          {
            type: "h2",
            text: "Méthode, pas un scan",
          },
          {
            type: "ul",
            items: [
              "Collecte d’abord, findings ensuite. Pas de score au feeling pendant le crawl.",
              "Auth : cookies, reset, MFA si présent, fixation de session observée — on ne vole pas de session.",
              "Contrôle d’accès : ids qui apparaissent dans l’UI du compte-test. Un id deviné hors brief = Non testé.",
              "Les seuls POST/PUT sont ceux documentés (login du compte-test).",
            ],
          },
          {
            type: "h2",
            text: "Quand ce n’est plus le bon mode",
          },
          {
            type: "p",
            text: "Dès qu’il y a des organisations, des workspaces, « vos données restent les vôtres » : c’est un SaaS. On bascule. Un Complet Web qui confirme un IDOR trans-tenant sans deux contextes est une faute.",
          },
        ],
        faq: [
          {
            q: "Sans le code source ?",
            a: "Le chemin de code est optionnel. S’il manque, la lecture du dépôt reste Non testé. L’audit extérieur et la session continuent.",
          },
          {
            q: "Combien de confiance ?",
            a: "Typiquement 3–4. 5 seulement avec compte-test, API inventoriée, 09 traité, QA sans réserve majeure.",
          },
        ],
      },
      {
        keyword: "web application pentest",
        metaTitle: "Web application pentest: full audit of a site — Karukera",
        metaDesc:
          "Full Web mode: site or app, cookies, session, same-origin API, supply chain. One day. Observation, no exploit. Report + tickets if QA signs.",
        title: "Web pentest: Full mode, for a site or an app.",
        lead: "A marketing site, a shop, a single-tenant app. You want an implementable report, not Express triage. Full Web chains surface, pages, session, API, secrets, dependencies — one day, no payload.",
        excerpt:
          "Pipeline of a full web audit: what runs, what stays Untested without an account, and when to switch to SaaS.",
        readingTime: "7 min",
        duration: "1 day",
        when: [
          "Site, blog, ecommerce, web app with no B2B isolation promise",
          "You want exec + impl + tickets, not just a signal",
          "Test account recommended — without it, the whole auth branch stays Untested",
        ],
        agents: "00–04, 06–11 (09 as negative inventory if no agent surface)",
        skips: [
          "No multi-tenant specialist — real tenancy means you switch to SaaS mode",
          "Out of scope: hosted payments, third-party IdP — noted, not visited",
          "No injection. Reflections are documented, not exploited",
        ],
        launch:
          "Full Web on https://example.com. Test account in the brief. Outside + code if the repo is local.",
        body: [
          {
            type: "h2",
            text: "The pipeline",
          },
          {
            type: "p",
            text: "Orchestrator, then mapping (cap 800 URLs / origin), threat model, on-page, session if a login exists, API if inventoried, secrets, supply chain. If there is no agent surface, agent 09 writes a negative inventory. QA signs, or there is no report.",
          },
          {
            type: "h2",
            text: "Method, not a scan",
          },
          {
            type: "ul",
            items: [
              "Collect first, findings second. No gut scoring during the crawl.",
              "Auth: cookies, reset, MFA if present, observed session fixation — we do not steal sessions.",
              "Access control: ids that appear in the test account UI. A guessed id outside the brief = Untested.",
              "The only POST/PUT are the documented ones (test-account login).",
            ],
          },
          {
            type: "h2",
            text: "When this is no longer the right mode",
          },
          {
            type: "p",
            text: "The moment there are orgs, workspaces, “your data stays yours”: it is a SaaS. Switch. A Full Web that confirms a cross-tenant IDOR without two contexts is a fault.",
          },
        ],
        faq: [
          {
            q: "Without source code?",
            a: "The code path is optional. If missing, repo reading stays Untested. Outside audit and session continue.",
          },
          {
            q: "How much confidence?",
            a: "Typically 3–4. 5 only with a test account, inventoried API, 09 handled, QA without a major reservation.",
          },
        ],
      },
      {
        keyword: "pentest web",
        metaTitle: "Pentest web: auditoría completa de una app — Karukera",
        metaDesc:
          "Modo Web completo: sitio o app, cookies, sesión, API del mismo origen, supply chain. Un día. Observación, sin exploit.",
        title: "Pentest web: modo Completo, para un sitio o una app.",
        lead: "Un sitio, una tienda, una app single-tenant. Quieres un informe accionable, no un triaje Express. Web completo encadena superficie, páginas, sesión, API, secretos y dependencias.",
        excerpt:
          "Pipeline de una auditoría web completa y cuándo pasar a SaaS.",
        readingTime: "7 min",
        duration: "1 día",
        when: [
          "Sitio, blog, e-commerce, app sin promesa de aislamiento B2B",
          "Quieres exec + impl + tickets",
          "Cuenta de prueba recomendada",
        ],
        agents: "00–04, 06–11",
        skips: [
          "Sin especialista multi-tenant — si hay tenancy real, cambias a SaaS",
          "Fuera de alcance: pagos alojados, IdP de terceros",
        ],
        launch:
          "Web completo en https://ejemplo.com. Cuenta de prueba en el brief.",
        body: [
          {
            type: "h2",
            text: "El pipeline",
          },
          {
            type: "p",
            text: "Orquestador, mapa (tope 800 URLs), modelo de amenazas, on-page, sesión, API, secretos, supply chain. La QA firma o no hay informe.",
          },
          {
            type: "h2",
            text: "Cuándo ya no es el modo correcto",
          },
          {
            type: "p",
            text: "En cuanto hay organizaciones o « tus datos se quedan contigo »: es un SaaS. Se cambia de modo.",
          },
        ],
        faq: [
          {
            q: "¿Sin código fuente?",
            a: "La lectura del repo queda No testado. La auditoría exterior y la sesión siguen.",
          },
        ],
      },
    ),
  },
  {
    slug: "audit-saas",
    modeId: "03-complet-saas",
    published: "2026-08-15",
    related: ["audit-web", "audit-mcp", "pentest-ia", "red-team"],
    copy: L(
      {
        keyword: "audit SaaS",
        metaTitle: "Audit SaaS : isolation, IDOR, deux tenants — Karukera",
        metaDesc:
          "Mode Complet SaaS du kit. L’isolation entre orgs est le risque central. Deux tenants pour confirmer un IDOR. 1–2 jours. Chez toi, dans Claude ou Codex.",
        title: "Audit SaaS : l’isolation d’abord, pas les en-têtes.",
        lead: "Sur un SaaS, le trou qui coupe les revenus n’est pas un header manquant. C’est l’invoice de l’org A lue depuis l’org B. Le mode Complet SaaS existe pour ça. Sans deux tenants, l’isolation reste Non testé — écrit en tête du rapport, pas en note.",
        excerpt:
          "Règle des deux tenants, pipeline 00–11, spécialiste multi-tenant. Ce n’est pas du SSPM (sécuriser Slack) : c’est auditer LE SaaS que tu construis.",
        readingTime: "8 min",
        duration: "1 à 2 jours",
        when: [
          "SaaS multi-utilisateur : orgs, workspaces, équipes, facturation, webhooks",
          "Le produit promet « vos données restent les vôtres »",
          "Tu peux fournir au moins un compte-test ; deux tenants pour toute conclusion d’isolation",
        ],
        agents: "00–11 + spécialiste saas-multitenant (toujours)",
        skips: [
          "Un seul tenant : aucun IDOR trans-org Confirmé. Statut Non testé, confiance d’isolation = 0",
          "Ce n’est pas un audit SOC 2, ni un SSPM pour les SaaS que tu consommes",
          "Pas d’énumération d’ids, pas de bruteforce",
        ],
        launch:
          "Complet SaaS sur https://app.exemple.tld. Deux tenants dans le brief. Extérieur + intérieur. Comptes hors chat.",
        body: [
          {
            type: "h2",
            text: "Le mauvais « SaaS security »",
          },
          {
            type: "p",
            text: "La plupart des pages « SaaS security » vendent un poste de CISO : verrouiller Slack, Salesforce, Office 365. Ce n’est pas ça. Ici tu audites l’application que TU vends. Tes tenants. Tes IDs. Tes exports.",
          },
          {
            type: "h2",
            text: "La règle des deux tenants",
          },
          {
            type: "p",
            text: "On s’authentifie A, on note les ids que l’UI et l’API exposent. On s’authentifie B (session séparée). On demande, avec B, une ressource de A dont l’id a été vu chez A — un GET. 200 avec les données de A = preuve. 403/404 = contrôle observé, pas un finding Confirmé. Un seul tenant + un org_id dans l’URL = Non testé. Confirmer un IDOR sans deux contextes est interdit.",
          },
          {
            type: "h2",
            text: "Ce que la squad cherche",
          },
          {
            type: "ul",
            items: [
              "Invitation, SSO, session, reset (agent 04).",
              "Rôles intra-tenant d’abord, puis trans-org (05 + spécialiste).",
              "Object IDs, exports, webhooks, admin, recherche globale, avatars, S3, caches, impersonation.",
              "Surface agent : l’agent 09 tourne toujours. Si rien n’existe, il l’écrit.",
            ],
          },
          {
            type: "h2",
            text: "Couverture",
          },
          {
            type: "p",
            text: "Sans second tenant, la confiance globale est plafonnée à 3, même si le reste est soigné. La section Isolation existe toujours dans le rapport, même remplie de Non testé. C’est honnête. Un rapport qui cache ça ment.",
          },
        ],
        faq: [
          {
            q: "Je n’ai qu’un compte de démo.",
            a: "On tourne. L’isolation reste Non testé. Le rapport le dit en tête. Tu ajoutes un second tenant plus tard et tu relances en Delta.",
          },
          {
            q: "C’est aussi un audit MCP ?",
            a: "09 tourne toujours sur un Complet SaaS. Si le produit EST un agent, ouvre plutôt le mode MCP et ajoute le spécialiste multi-tenant.",
          },
        ],
      },
      {
        keyword: "SaaS security audit",
        metaTitle: "SaaS security audit: isolation, IDOR, two tenants — Karukera",
        metaDesc:
          "Full SaaS mode. Isolation between orgs is the central risk. Two tenants to confirm an IDOR. 1–2 days. On your machine, in Claude or Codex.",
        title: "SaaS audit: isolation first, not headers.",
        lead: "On a SaaS, the hole that cuts revenue is not a missing header. It is org A’s invoice read from org B. Full SaaS exists for that. Without two tenants, isolation stays Untested — at the top of the report, not in a footnote.",
        excerpt:
          "Two-tenant rule, pipeline 00–11, multi-tenant specialist. This is not SSPM (locking down Slack): it is auditing the SaaS YOU build.",
        readingTime: "8 min",
        duration: "1–2 days",
        when: [
          "Multi-user SaaS: orgs, workspaces, teams, billing, webhooks",
          "The product promises “your data stays yours”",
          "You can provide at least one test account; two tenants for any isolation conclusion",
        ],
        agents: "00–11 + saas-multitenant specialist (always)",
        skips: [
          "One tenant: no Confirmed cross-org IDOR. Untested, isolation confidence = 0",
          "Not a SOC 2 audit, not SSPM for SaaS you consume",
          "No id enumeration, no bruteforce",
        ],
        launch:
          "Full SaaS on https://app.example.tld. Two tenants in the brief. Outside + inside. Accounts out of chat.",
        body: [
          {
            type: "h2",
            text: "The wrong “SaaS security”",
          },
          {
            type: "p",
            text: "Most “SaaS security” pages sell a CISO seat: lock down Slack, Salesforce, Office 365. This is not that. Here you audit the application YOU sell. Your tenants. Your IDs. Your exports.",
          },
          {
            type: "h2",
            text: "The two-tenant rule",
          },
          {
            type: "p",
            text: "Authenticate A, note ids the UI and API expose. Authenticate B (separate session). Ask, as B, for a resource of A whose id was seen in A — one GET. 200 with A’s data = evidence. 403/404 = observed control, not a Confirmed finding. One tenant + org_id in the URL = Untested. Confirming an IDOR without two contexts is forbidden.",
          },
          {
            type: "h2",
            text: "What the squad looks for",
          },
          {
            type: "ul",
            items: [
              "Invite, SSO, session, reset (agent 04).",
              "Intra-tenant roles first, then cross-org (05 + specialist).",
              "Object IDs, exports, webhooks, admin, global search, avatars, S3, caches, impersonation.",
              "Agent surface: 09 always runs. If nothing exists, it writes that down.",
            ],
          },
        ],
        faq: [
          {
            q: "I only have one demo account.",
            a: "We still run. Isolation stays Untested, stated at the top. Add a second tenant later and re-run as Delta.",
          },
          {
            q: "Is this also an MCP audit?",
            a: "09 always runs on Full SaaS. If the product IS an agent, open MCP mode and add the multi-tenant specialist.",
          },
        ],
      },
      {
        keyword: "auditoría SaaS",
        metaTitle: "Auditoría SaaS: aislamiento, IDOR, dos tenants — Karukera",
        metaDesc:
          "Modo SaaS completo. El aislamiento entre orgs es el riesgo central. Dos tenants para confirmar un IDOR. 1–2 días.",
        title: "Auditoría SaaS: primero el aislamiento, no las cabeceras.",
        lead: "En un SaaS, el agujero que corta ingresos no es un header. Es la factura de la org A leída desde la org B. Sin dos tenants, el aislamiento queda No testado — arriba del informe.",
        excerpt:
          "Regla de los dos tenants. No es SSPM: auditas el SaaS que TÚ construyes.",
        readingTime: "8 min",
        duration: "1–2 días",
        when: [
          "SaaS multi-usuario: orgs, workspaces, facturación, webhooks",
          "El producto promete que los datos se quedan en su lado",
          "Al menos una cuenta de prueba; dos tenants para concluir aislamiento",
        ],
        agents: "00–11 + especialista saas-multitenant",
        skips: [
          "Un solo tenant: ningún IDOR trans-org Confirmado",
          "No es SOC 2 ni SSPM",
        ],
        launch:
          "SaaS completo en https://app.ejemplo.tld. Dos tenants en el brief. Cuentas fuera del chat.",
        body: [
          {
            type: "h2",
            text: "El « SaaS security » equivocado",
          },
          {
            type: "p",
            text: "La mayoría de esas páginas venden cerrar Slack o Salesforce. Aquí auditas la aplicación que TÚ vendes.",
          },
          {
            type: "h2",
            text: "La regla de los dos tenants",
          },
          {
            type: "p",
            text: "Sesión A, anotas ids. Sesión B. Con B pides un recurso de A visto en A — un GET. 200 con datos de A = prueba. Un solo tenant = No testado.",
          },
        ],
        faq: [
          {
            q: "Solo tengo una cuenta demo.",
            a: "Se corre igual. El aislamiento queda No testado, dicho arriba. Luego añades un segundo tenant y relanzas en Delta.",
          },
        ],
      },
    ),
  },
  {
    slug: "audit-mcp",
    modeId: "04-agents-mcp",
    published: "2026-08-15",
    related: ["audit-saas", "pentest-ia", "red-team"],
    copy: L(
      {
        keyword: "sécurité MCP",
        metaTitle: "Sécurité MCP et agents IA — audit du mode 4 — Karukera",
        metaDesc:
          "Mode Agents / MCP : tools, skills, délégation. L’agent 09 tourne en premier. 4–8 h. Staging seulement. Rapport tenu, zéro jailbreak offensif.",
        title: "Sécurité MCP : auditer les tools, pas seulement l’UI.",
        lead: "Un serveur MCP, un chat branché sur SQL, des Skills qui touchent des tickets. La valeur est l’agent. Donc l’agent 09 tourne en premier, pas en dernier. Un audit de ce produit sans 09 n’existe pas.",
        excerpt:
          "Qui a le droit d’appeler quel tool, un tool + l’id d’un autre locataire, prompts et .env exposés, marketplace tiers.",
        readingTime: "7 min",
        duration: "4–8 h",
        when: [
          "Serveur MCP, tools, Skills, copilote branché sur des données",
          "App « chat + outils » (fichiers, navigateur, SQL, tickets)",
          "Jeton ou compte de staging — pas un jeton production à pouvoir large",
        ],
        agents: "00, 01, 09 d’abord, puis 02, 04–08, 10, 11",
        skips: [
          "UI hors outils agent, auth humaine hors délégation tool",
          "Pas de jailbreak offensif : on observe ce que l’UI renvoie, on n’arme pas",
          "Pas de jeton production « pour voir »",
        ],
        launch:
          "Audit Agents / MCP. Serveur de staging dans le brief. Tools déclarés si tu les as. Pas de jeton prod.",
        body: [
          {
            type: "h2",
            text: "Pourquoi 09 est l’étoile",
          },
          {
            type: "p",
            text: "Sur un site, le risque central est souvent la session. Sur un agent, c’est le tool. Qui peut l’appeler. Avec quels arguments. Vers quelle donnée. L’agent 09 produit le modèle de menaces principal : utilisateur, autre tenant, opérateur du modèle, auteur d’un tool tiers.",
          },
          {
            type: "h2",
            text: "Ce que 09 examine",
          },
          {
            type: "ul",
            items: [
              "Manifests MCP, /.well-known, llms.txt, llms-security.txt, pages d’install.",
              "Authz : un tool + l’identifiant d’un autre locataire.",
              "Callbacks, webhooks, streaming.",
              "Prompts, system cards, repos de skills, .env exposés.",
              "Tools tiers, marketplace, modèles.",
              "Ce que l’UI agent renvoie : fuite de system prompt, en observation.",
            ],
          },
          {
            type: "h2",
            text: "SaaS et agent en même temps",
          },
          {
            type: "p",
            text: "Si c’est un SaaS ET un agent : ce mode prime pour le cadrage. On exécute aussi le spécialiste multi-tenant et la règle des deux tenants. On l’écrit dans le projet. On ne fait pas semblant qu’une seule lentille suffit.",
          },
        ],
        faq: [
          {
            q: "C’est un pentest de modèle ?",
            a: "Non. On n’attaque pas les poids. On audite la délégation : tools, authz, fuites, supply chain de skills.",
          },
          {
            q: "Et en Express ?",
            a: "Si une surface agent apparaît en Express, on ouvre un finding Non testé et on recommande ce mode. On ne l’audite pas en 30 minutes.",
          },
        ],
      },
      {
        keyword: "MCP security",
        metaTitle: "MCP security and AI agents — mode 4 audit — Karukera",
        metaDesc:
          "Agents / MCP mode: tools, skills, delegation. Agent 09 runs first. 4–8 h. Staging only. Held report, no offensive jailbreak.",
        title: "MCP security: audit the tools, not just the UI.",
        lead: "An MCP server, a chat wired to SQL, Skills that touch tickets. The value is the agent. So agent 09 runs first, not last. An audit of this product without 09 does not exist.",
        excerpt:
          "Who may call which tool, a tool + another tenant’s id, exposed prompts and .env, third-party marketplace.",
        readingTime: "7 min",
        duration: "4–8 h",
        when: [
          "MCP server, tools, Skills, copilot wired to data",
          "“Chat + tools” app (files, browser, SQL, tickets)",
          "Staging token or account — not a wide production token",
        ],
        agents: "00, 01, 09 first, then 02, 04–08, 10, 11",
        skips: [
          "UI outside agent tools, human auth outside tool delegation",
          "No offensive jailbreak: we observe what the UI returns",
          "No production token “just to see”",
        ],
        launch:
          "Agents / MCP audit. Staging server in the brief. Declared tools if you have them. No prod token.",
        body: [
          {
            type: "h2",
            text: "Why 09 is the star",
          },
          {
            type: "p",
            text: "On a site, the central risk is often the session. On an agent, it is the tool. Who can call it. With which arguments. Against which data. Agent 09 writes the main threat model: user, other tenant, model operator, third-party tool author.",
          },
          {
            type: "h2",
            text: "What 09 inspects",
          },
          {
            type: "ul",
            items: [
              "MCP manifests, /.well-known, llms.txt, llms-security.txt, install pages.",
              "Authz: a tool + another tenant’s identifier.",
              "Callbacks, webhooks, streaming.",
              "Prompts, system cards, skill repos, exposed .env.",
              "Third-party tools, marketplace, models.",
              "What the agent UI returns: system-prompt leak, as observation.",
            ],
          },
        ],
        faq: [
          {
            q: "Is this a model pentest?",
            a: "No. We do not attack weights. We audit delegation: tools, authz, leaks, skill supply chain.",
          },
          {
            q: "What about Express?",
            a: "If an agent surface appears in Express, we open an Untested finding and recommend this mode. We do not audit it in 30 minutes.",
          },
        ],
      },
      {
        keyword: "seguridad MCP",
        metaTitle: "Seguridad MCP y agentes IA — modo 4 — Karukera",
        metaDesc:
          "Modo Agentes / MCP: tools, skills, delegación. El agente 09 corre primero. 4–8 h. Solo staging.",
        title: "Seguridad MCP: auditar los tools, no solo la UI.",
        lead: "Un servidor MCP, un chat conectado a SQL, Skills que tocan tickets. El valor es el agente. Por eso 09 corre primero. Sin 09, la auditoría no existe.",
        excerpt:
          "Quién puede llamar qué tool, un tool + el id de otro tenant, prompts y .env expuestos.",
        readingTime: "7 min",
        duration: "4–8 h",
        when: [
          "Servidor MCP, tools, Skills, copiloto con datos",
          "App chat + herramientas",
          "Token de staging, no de producción",
        ],
        agents: "00, 01, 09 primero, luego 02, 04–08, 10, 11",
        skips: [
          "Sin jailbreak ofensivo",
          "Sin token de producción « para ver »",
        ],
        launch:
          "Auditoría Agentes / MCP. Servidor de staging en el brief. Sin token prod.",
        body: [
          {
            type: "h2",
            text: "Por qué 09 es la estrella",
          },
          {
            type: "p",
            text: "En un sitio, el riesgo central suele ser la sesión. En un agente, es el tool. Quién lo llama, con qué argumentos, contra qué dato.",
          },
        ],
        faq: [
          {
            q: "¿Es un pentest del modelo?",
            a: "No. No atacamos pesos. Auditamos la delegación: tools, authz, fugas, supply chain de skills.",
          },
        ],
      },
    ),
  },
  {
    slug: "audit-delta",
    modeId: "05-delta",
    published: "2026-08-15",
    related: ["audit-continu", "audit-saas", "audit-web"],
    copy: L(
      {
        keyword: "re-audit sécurité",
        metaTitle: "Re-audit après correctifs — mode Delta — Karukera",
        metaDesc:
          "Mode Delta : comparer l’état actuel au dernier snapshot du même projet. 2–6 h. Pas un nouvel audit déguisé. Livrable delta-compare.",
        title: "Re-audit : qu’est-ce qui a bougé après les correctifs.",
        lead: "Tu as déjà un journal et une QA. Tu as patché. La question n’est plus « y a-t-il des trous » : c’est « lesquels sont encore ouverts ». Le mode Delta compare au snapshot. Il n’ouvre pas un second dossier pour faire semblant d’un nouvel audit.",
        excerpt:
          "Snapshot avant toute collecte neuve, re-vérif des findings ouverts, pas de classes hors baseline sauf origine ajoutée au brief.",
        readingTime: "5 min",
        duration: "2–6 h",
        when: [
          "Une passe 2, 3 ou 4 a déjà produit un journal",
          "Après une vague de correctifs, ou « qu’est-ce qui a bougé ? »",
          "Même projet, même dossier — pas un clone « …-delta »",
        ],
        agents: "00, 01, spécialiste delta-reaudit, 10, 11",
        skips: [
          "S’il n’existe aucun finding antérieur, ce n’est pas un delta — ouvre Web, SaaS ou MCP",
          "Toute classe absente de la baseline reste hors scope, sauf nouvelle origine au brief",
        ],
        launch:
          "Delta sur le projet déjà ouvert. Snapshot d’abord. Relis les findings ouverts.",
        body: [
          {
            type: "h2",
            text: "Le geste",
          },
          {
            type: "p",
            text: "Avant toute collecte neuve : snapshot daté (project.yaml, findings, coverage). Puis collecte ciblée sur les mêmes classes. Re-vérif des findings ouverts (GET/HEAD sur l’URL de la preuve). Rescore. QA sur le delta et les Confirmé encore ouverts. Livrable delta-compare.",
          },
          {
            type: "h2",
            text: "Ce que ça n’est pas",
          },
          {
            type: "p",
            text: "Pas un Complet déguisé. Pas un red-team. Pas un rapport board automatique. Si tu veux la synthèse décideur après le delta, tu enchaînes le mode 8 — seulement si la QA a signé.",
          },
        ],
        faq: [
          {
            q: "Premier audit ?",
            a: "Alors ce n’est pas un Delta. Express, Complet Web, Complet SaaS ou MCP, selon le produit.",
          },
        ],
      },
      {
        keyword: "security re-audit",
        metaTitle: "Re-audit after fixes — Delta mode — Karukera",
        metaDesc:
          "Delta mode: compare current state to the last snapshot of the same project. 2–6 h. Not a disguised new audit.",
        title: "Re-audit: what moved after the fixes.",
        lead: "You already have a journal and a QA. You patched. The question is no longer “are there holes”: it is “which are still open”. Delta compares to the snapshot. It does not open a second folder to fake a new audit.",
        excerpt:
          "Snapshot before any new collection, re-check of open findings, no classes outside the baseline.",
        readingTime: "5 min",
        duration: "2–6 h",
        when: [
          "A pass 2, 3 or 4 already produced a journal",
          "After a wave of fixes, or “what moved?”",
          "Same project, same folder",
        ],
        agents: "00, 01, delta-reaudit specialist, 10, 11",
        skips: [
          "No prior finding means this is not a delta",
          "Any class absent from the baseline stays out of scope",
        ],
        launch:
          "Delta on the already-open project. Snapshot first. Re-read open findings.",
        body: [
          {
            type: "h2",
            text: "The move",
          },
          {
            type: "p",
            text: "Before any new collection: dated snapshot. Then targeted collection on the same classes. Re-check open findings. Rescore. QA on the delta. delta-compare deliverable.",
          },
        ],
        faq: [
          {
            q: "First audit?",
            a: "Then it is not a Delta. Express, Full Web, Full SaaS or MCP, depending on the product.",
          },
        ],
      },
      {
        keyword: "re-auditoría",
        metaTitle: "Re-auditoría tras correcciones — modo Delta — Karukera",
        metaDesc:
          "Modo Delta: comparar el estado actual con el último snapshot del mismo proyecto. 2–6 h.",
        title: "Re-auditoría: qué se movió después de los parches.",
        lead: "Ya tienes diario y QA. Parcheaste. La pregunta ya no es si hay agujeros: es cuáles siguen abiertos.",
        excerpt: "Snapshot antes de recolectar. No es una auditoría nueva disfrazada.",
        readingTime: "5 min",
        duration: "2–6 h",
        when: [
          "Una pasada 2, 3 o 4 ya produjo un diario",
          "Después de correcciones",
        ],
        agents: "00, 01, especialista delta, 10, 11",
        skips: ["Sin findings previos, no es un delta"],
        launch: "Delta sobre el proyecto ya abierto. Snapshot primero.",
        body: [
          {
            type: "h2",
            text: "El gesto",
          },
          {
            type: "p",
            text: "Snapshot fechado, recolección sobre las mismas clases, re-verificación de findings abiertos, rescore, QA, entregable delta-compare.",
          },
        ],
        faq: [
          {
            q: "¿Primera auditoría?",
            a: "Entonces no es Delta. Express, Web, SaaS o MCP.",
          },
        ],
      },
    ),
  },
  {
    slug: "audit-continu",
    modeId: "06-continuous",
    published: "2026-08-15",
    related: ["audit-delta", "audit-express", "audit-saas"],
    copy: L(
      {
        keyword: "monitoring sécurité application",
        metaTitle: "Monitoring sécu continu de ton appli — mode 6 — Karukera",
        metaDesc:
          "Mode Continu : garde-fou périodique sur une baseline déjà posée. 30–90 min par run. Pas un red-team. Pas un rapport board automatique.",
        title: "Garde-fou périodique : le mode Continu.",
        lead: "Même dossier, même journal. Un cron, un hook de release, ou une relance manuelle. Chaque run regarde les sondes déjà posées : en-têtes, 404, scripts. Si rien n’a bougé, on l’écrit. On n’invente pas un finding pour justifier le passage.",
        excerpt:
          "Sans baseline, ce n’est pas le bon mode. Clé OpenRouter à chaque run. QA courte seulement si un Confirmé naît.",
        readingTime: "5 min",
        duration: "30–90 min / run",
        when: [
          "Un Complet (ou un Delta) a déjà posé la baseline",
          "Tu veux un passage à chaque release ou chaque semaine",
          "Tu acceptes une collecte étroite — pas un nouvel audit",
        ],
        agents: "00, 01 + spécialiste tracker-continuous",
        skips: [
          "N’ouvre pas de nouvelle classe hors sondes déjà posées",
          "Sans baseline : Express ou Complet d’abord",
          "Un run stérile n’autorise pas un rapport board",
        ],
        launch:
          "Continu sur le projet déjà ouvert. Déclencheur : release / cron / manuel.",
        body: [
          {
            type: "h2",
            text: "Ce que chaque run fait",
          },
          {
            type: "ul",
            items: [
              "Entrée open avec le déclencheur.",
              "Collecte étroite : politiques, en-têtes connus, probe 404, liste des scripts (hash ou content-length). Plafond 80 URLs.",
              "Compare aux preuves récentes, comme un delta automatique.",
              "Un header de sécu disparaît, une 500 redevient verbeuse, un host in-scope apparaît : finding ou régression.",
              "Rien n’a bougé : note « run stérile », pas de faux finding.",
            ],
          },
          {
            type: "p",
            text: "La clé OpenRouter est exigée à chaque run. Une clé disparue = stop, pas de run « allégé ».",
          },
        ],
        faq: [
          {
            q: "C’est un SOC managé ?",
            a: "Non. C’est un garde-fou que TU lances, chez toi, sur le même journal. Karukera ne voit pas la cible.",
          },
        ],
      },
      {
        keyword: "continuous security monitoring",
        metaTitle: "Continuous app security monitoring — mode 6 — Karukera",
        metaDesc:
          "Continuous mode: periodic guardrail on an existing baseline. 30–90 min per run. Not a red team. Not an automatic board report.",
        title: "Periodic guardrail: Continuous mode.",
        lead: "Same folder, same journal. A cron, a release hook, or a manual rerun. Each run looks at probes already placed. If nothing moved, we write that. We do not invent a finding to justify the pass.",
        excerpt:
          "Without a baseline, this is the wrong mode. OpenRouter key on every run. Short QA only if a Confirmed is born.",
        readingTime: "5 min",
        duration: "30–90 min / run",
        when: [
          "A Full audit (or a Delta) already set the baseline",
          "You want a pass on every release or every week",
          "You accept a narrow collection — not a new audit",
        ],
        agents: "00, 01 + tracker-continuous specialist",
        skips: [
          "Does not open a new class outside existing probes",
          "No baseline: Express or Full first",
          "A sterile run does not authorize a board report",
        ],
        launch:
          "Continuous on the already-open project. Trigger: release / cron / manual.",
        body: [
          {
            type: "h2",
            text: "What each run does",
          },
          {
            type: "ul",
            items: [
              "Open entry with the trigger.",
              "Narrow collection: policies, known headers, 404 probe, script list. Cap 80 URLs.",
              "Compare to recent evidence, like an automatic delta.",
              "A security header disappears, a 500 becomes talkative, an in-scope host appears: finding or regression.",
              "Nothing moved: “sterile run” note, no fake finding.",
            ],
          },
        ],
        faq: [
          {
            q: "Is this a managed SOC?",
            a: "No. It is a guardrail YOU run, on your machine, on the same journal. Karukera never sees the target.",
          },
        ],
      },
      {
        keyword: "monitorización continua",
        metaTitle: "Monitorización continua de tu app — modo 6 — Karukera",
        metaDesc:
          "Modo Continuo: guarda periódico sobre una baseline ya puesta. 30–90 min por run.",
        title: "Guarda periódico: modo Continuo.",
        lead: "Misma carpeta, mismo diario. Un cron, un hook de release o un relanzamiento manual. Si nada se movió, se escribe. No se inventa un finding.",
        excerpt: "Sin baseline, no es el modo correcto.",
        readingTime: "5 min",
        duration: "30–90 min / run",
        when: [
          "Un Completo (o un Delta) ya puso la baseline",
          "Quieres un paso en cada release",
        ],
        agents: "00, 01 + especialista continuo",
        skips: ["Sin baseline: Express o Completo primero"],
        launch: "Continuo sobre el proyecto ya abierto.",
        body: [
          {
            type: "h2",
            text: "Qué hace cada run",
          },
          {
            type: "p",
            text: "Recolección estrecha, comparación con pruebas recientes, finding solo si algo cambió, nota de run estéril si no.",
          },
        ],
        faq: [
          {
            q: "¿Es un SOC gestionado?",
            a: "No. Es una guarda que TÚ lanzas, en tu máquina. Karukera no ve el objetivo.",
          },
        ],
      },
    ),
  },
  {
    slug: "red-team",
    modeId: "07-redteam-leger",
    published: "2026-08-15",
    related: ["audit-saas", "audit-web", "pentest-ia"],
    copy: L(
      {
        keyword: "red team léger",
        metaTitle: "Red team léger, autorisé, sans exploit — Karukera",
        metaDesc:
          "Mode 7 : tests actifs non destructifs. AUTHORIZED=yes + authorization.md signé, sinon stop. 1–3 jours. Le ZIP n’écrit aucun exploit.",
        title: "Red-team léger : actif, autorisé, sans arme.",
        lead: "Ce n’est pas un pentest offensif. Le ZIP ne contient aucun exploit ; tu n’en écris aucun. C’est un exercice adverse borné par un mandat écrit. Sans le fichier signé, aucun GET ne part.",
        excerpt:
          "Quatre clauses du mandat, ce que « léger » autorise, et pourquoi un « c’est mon site » dans le chat ne suffit pas.",
        readingTime: "6 min",
        duration: "1 à 3 jours",
        when: [
          "Mandat d’exercice adverse, chasse aux angles morts",
          "Périmètre d’hôtes daté, plus étroit ou égal au brief",
          "Tu acceptes qu’une autorisation orale ou un Slack soit insuffisant",
        ],
        agents: "00–11 — stop sans AUTHORIZED=yes + authorization.md",
        skips: [
          "Zéro exploit, zéro payload, zéro PoC d’attaque",
          "Tout hors du périmètre daté du mandat = stop",
          "Autorisation expirée = stop à la reprise",
        ],
        launch:
          "Red-team léger. authorization.md signé dans le dossier projet. AUTHORIZED=yes seulement après lecture des quatre clauses.",
        body: [
          {
            type: "h2",
            text: "Le portail",
          },
          {
            type: "p",
            text: "Deux conditions, sinon stop : AUTHORIZED=yes, et authorization.md présent. Quatre clauses minimales : identité du signataire, périmètre d’hôtes, phrase explicite (tests non destructifs entre deux dates), interdits du client. Un « c’est mon site » dans le chat ne compte pas.",
          },
          {
            type: "h2",
            text: "Ce que « léger » veut dire",
          },
          {
            type: "p",
            text: "Une fois le portail ouvert, la squad pousse la contradiction et les angles morts — toujours sans écrire d’arme. Le mode 7 n’est pas un Complet SaaS avec plus de verbosité. C’est un autre contrat, plus étroit, daté.",
          },
          {
            type: "quote",
            text: "Uniquement un système dont tu as l’autorisation écrite. Zéro exploit, zéro payload, zéro PoC d’attaque.",
          },
        ],
        faq: [
          {
            q: "Je suis le fondateur, ça ne suffit pas ?",
            a: "Le fichier doit exister dans le dossier projet, avec les quatre clauses. Le kit ne te croit pas sur parole. C’est volontaire.",
          },
          {
            q: "Différence avec le Complet SaaS ?",
            a: "Le Complet observe. Le 7, mandat en poche, pousse plus loin les angles morts. Les deux refusent l’exploit.",
          },
        ],
      },
      {
        keyword: "light red team",
        metaTitle: "Light red team, authorized, no exploit — Karukera",
        metaDesc:
          "Mode 7: active non-destructive tests. AUTHORIZED=yes + signed authorization.md, or stop. 1–3 days. The ZIP writes no exploit.",
        title: "Light red team: active, authorized, no weapon.",
        lead: "This is not an offensive pentest. The ZIP contains no exploit; you write none. It is an adversarial exercise bounded by a written mandate. Without the signed file, no GET is sent.",
        excerpt:
          "Four mandate clauses, what “light” allows, and why “it’s my site” in chat is not enough.",
        readingTime: "6 min",
        duration: "1–3 days",
        when: [
          "Adversarial-exercise mandate, hunting blind spots",
          "Dated host scope, equal or narrower than the brief",
          "You accept that an oral ok or a Slack message is insufficient",
        ],
        agents: "00–11 — stop without AUTHORIZED=yes + authorization.md",
        skips: [
          "No exploit, no payload, no attack PoC",
          "Anything outside the dated mandate = stop",
          "Expired authorization = stop on resume",
        ],
        launch:
          "Light red team. Signed authorization.md in the project folder. AUTHORIZED=yes only after reading the four clauses.",
        body: [
          {
            type: "h2",
            text: "The gate",
          },
          {
            type: "p",
            text: "Two conditions, or stop: AUTHORIZED=yes, and authorization.md present. Four minimum clauses: signer identity, host scope, explicit sentence (non-destructive tests between two dates), client forbids. “It’s my site” in chat does not count.",
          },
          {
            type: "quote",
            text: "Only a system you have written authorization for. No exploit, no payload, no attack PoC.",
          },
        ],
        faq: [
          {
            q: "I am the founder — is that not enough?",
            a: "The file must exist in the project folder, with the four clauses. The kit does not take your word. That is intentional.",
          },
        ],
      },
      {
        keyword: "red team ligero",
        metaTitle: "Red team ligero, autorizado, sin exploit — Karukera",
        metaDesc:
          "Modo 7: pruebas activas no destructivas. AUTHORIZED=yes + authorization.md firmado, o stop. 1–3 días.",
        title: "Red-team ligero: activo, autorizado, sin arma.",
        lead: "No es un pentest ofensivo. El ZIP no contiene exploits. Sin el archivo firmado, no sale ningún GET.",
        excerpt:
          "Cuatro cláusulas del mandato. Un « es mi sitio » en el chat no basta.",
        readingTime: "6 min",
        duration: "1–3 días",
        when: [
          "Mandato de ejercicio adverso",
          "Alcance de hosts fechado",
        ],
        agents: "00–11 — stop sin AUTHORIZED=yes + authorization.md",
        skips: ["Cero exploit, cero payload, cero PoC"],
        launch:
          "Red-team ligero. authorization.md firmado en la carpeta del proyecto.",
        body: [
          {
            type: "h2",
            text: "El portal",
          },
          {
            type: "p",
            text: "Dos condiciones o stop. Cuatro cláusulas: identidad, alcance, frase explícita con fechas, prohibiciones. Un mensaje de chat no cuenta.",
          },
        ],
        faq: [
          {
            q: "Soy el founder, ¿no basta?",
            a: "El archivo debe existir, con las cuatro cláusulas. El kit no te cree de palabra.",
          },
        ],
      },
    ),
  },
  {
    slug: "rapport-board",
    modeId: "08-rapport-board",
    published: "2026-08-15",
    related: ["audit-saas", "audit-web", "pentest-ia"],
    copy: L(
      {
        keyword: "rapport audit sécurité",
        metaTitle: "Rapport d’audit sécurité pour décideur — mode 8 — Karukera",
        metaDesc:
          "Mode Rapport board : synthèse décideur. Aucun test nouveau. Refusé si la Double QA n’a pas signé. 1–3 h.",
        title: "Rapport board : les faits déjà tenus, rien d’autre.",
        lead: "Un COMEX, un investisseur, un associé veut une page, pas un journal. Le mode 8 rédige à partir de ce que la QA a déjà signé. Aucune collecte. Aucun finding nouveau. Si la QA n’a pas signé, le mode refuse.",
        excerpt:
          "Portail dur : qa.passed=true, sign-off présent, aucun finding plus récent que la QA. Sinon stop.",
        readingTime: "4 min",
        duration: "1–3 h",
        when: [
          "Un Complet, un Delta ou un red-team vient de passer la QA",
          "Quelqu’un demande une page décideur, pas le journal",
          "Tu n’es pas en train d’« avancer le texte pendant que l’audit tourne »",
        ],
        agents: "00, 11 — aucun test",
        skips: [
          "QA absente, qa.passed ≠ true, ou finding plus récent que la QA → stop",
          "Interdit d’ajouter une mesure pour « remplir »",
        ],
        launch:
          "Rapport board sur le projet déjà clos. Seulement si qa.passed=true.",
        body: [
          {
            type: "h2",
            text: "Pourquoi c’est un mode, pas un export",
          },
          {
            type: "p",
            text: "Un PDF « pour le board » écrit pendant que l’audit tourne est un mensonge poli. Le mode 8 existe pour empêcher ça. Il relit le sign-off. Un qa.passed oral ne compte pas. Un sign-off antérieur à des findings ajoutés ensuite est caduc.",
          },
          {
            type: "h2",
            text: "Ce que le décideur lit",
          },
          {
            type: "p",
            text: "Les faits déjà tenus. Les Non testé restent visibles — surtout l’isolation à un seul tenant. On ne maquille pas une Express en audit stratégique.",
          },
        ],
        faq: [
          {
            q: "Je peux l’ouvrir tout seul, sans Complet ?",
            a: "Non. Sans journal et sans QA, le portail est fermé. Fais d’abord le mode qui correspond au produit.",
          },
        ],
      },
      {
        keyword: "security audit report",
        metaTitle: "Security audit report for decision-makers — mode 8 — Karukera",
        metaDesc:
          "Board-report mode: executive synthesis. No new tests. Refused if Double QA has not signed. 1–3 h.",
        title: "Board report: facts already held, nothing else.",
        lead: "A board, an investor, a partner wants one page, not a journal. Mode 8 writes from what QA already signed. No collection. No new finding. If QA did not sign, the mode refuses.",
        excerpt:
          "Hard gate: qa.passed=true, sign-off present, no finding newer than QA. Otherwise stop.",
        readingTime: "4 min",
        duration: "1–3 h",
        when: [
          "A Full, a Delta or a red team just passed QA",
          "Someone wants a decision page, not the journal",
          "You are not “drafting the text while the audit runs”",
        ],
        agents: "00, 11 — no tests",
        skips: [
          "Missing QA, qa.passed ≠ true, or a finding newer than QA → stop",
          "Forbidden to add a measurement to “fill the page”",
        ],
        launch:
          "Board report on the already-closed project. Only if qa.passed=true.",
        body: [
          {
            type: "h2",
            text: "Why this is a mode, not an export",
          },
          {
            type: "p",
            text: "A “for the board” PDF written while the audit is still running is a polite lie. Mode 8 exists to prevent that. It re-reads the sign-off. An oral qa.passed does not count.",
          },
        ],
        faq: [
          {
            q: "Can I open it alone, without a Full audit?",
            a: "No. Without a journal and QA, the gate is closed. Run the mode that matches the product first.",
          },
        ],
      },
      {
        keyword: "informe auditoría",
        metaTitle: "Informe de auditoría para el board — modo 8 — Karukera",
        metaDesc:
          "Modo informe board: síntesis para decidir. Sin tests nuevos. Rechazado si la Doble QA no firmó. 1–3 h.",
        title: "Informe board: los hechos ya sostenidos, nada más.",
        lead: "Un COMEX o un inversor quiere una página, no un diario. El modo 8 escribe desde lo que la QA ya firmó. Si no firmó, el modo rechaza.",
        excerpt: "Portal duro: qa.passed=true. Si no, stop.",
        readingTime: "4 min",
        duration: "1–3 h",
        when: [
          "Un Completo, un Delta o un red-team acaba de pasar la QA",
          "Alguien pide una página, no el diario",
        ],
        agents: "00, 11 — sin tests",
        skips: ["QA ausente → stop"],
        launch: "Informe board sobre el proyecto ya cerrado. Solo si qa.passed=true.",
        body: [
          {
            type: "h2",
            text: "Por qué es un modo, no un export",
          },
          {
            type: "p",
            text: "Un PDF « para el board » escrito mientras corre la auditoría es una mentira educada. El modo 8 existe para impedirlo.",
          },
        ],
        faq: [
          {
            q: "¿Puedo abrirlo sin un Completo?",
            a: "No. Sin diario y sin QA, el portal está cerrado.",
          },
        ],
      },
    ),
  },
];
