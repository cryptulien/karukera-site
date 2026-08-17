import type { Locale } from "@/lib/i18n";

export type BriefBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type KitBrief = {
  metaTitle: string;
  metaDesc: string;
  kicker: string;
  title: string;
  lead: string;
  updated: string;
  body: BriefBlock[];
};

const L = (fr: KitBrief, en: KitBrief, es: KitBrief): Record<Locale, KitBrief> => ({
  fr,
  en,
  es,
});

export const KIT_BRIEF = L(
  {
    metaTitle: "Karukera Security Kit — note de présentation",
    metaDesc:
      "Document public : périmètre, méthode et restitution du kit d’audit sécu. Aucun accès, aucune donnée sensible.",
    kicker: "Note de présentation · août 2026 · document public",
    title: "Karukera Security Kit",
    lead: "Un ZIP d’agents que tu lances chez toi pour sécuriser ton application — donc tes revenus. Ce texte décrit le périmètre, la méthode et la restitution. Rien ici n’est un accès. Rien n’est une donnée sensible.",
    updated: "2026-08-17",
    body: [
      {
        type: "h2",
        text: "En une phrase",
      },
      {
        type: "p",
        text: "Tu ouvres le kit dans Claude, Codex, Cursor ou Hermes, sur ta machine. Tu dis quel projet auditer, à quelle profondeur, et si tu fournis des accès. Tu reçois un rapport avec des preuves, puis des tickets de correctif — chacun avec un prompt à coller dans ton LLM.",
      },
      {
        type: "h2",
        text: "Pour qui",
      },
      {
        type: "p",
        text: "Un solo founder, une petite équipe, un SaaS qui encaisse. Pas une équipe AppSec. Le trou qui coûte n’est généralement pas un header manquant : c’est un IDOR entre deux comptes, une session qui fuit, un tool d’agent trop ouvert.",
      },
      {
        type: "h2",
        text: "Périmètre",
      },
      {
        type: "p",
        text: "Le kit n’audite qu’un système dont tu as l’autorisation écrite : ton site, ton SaaS, ton API, ton instance MCP, ou le système d’un client qui t’a signé un mandat. Hors ça, il s’arrête.",
      },
      {
        type: "p",
        text: "Tu choisis comment regarder. Les trois approches se combinent. Ce que tu ne choisis pas reste marqué « Non testé » — ce n’est pas inventé.",
      },
      {
        type: "ul",
        items: [
          "Extérieur — ce qu’un inconnu voit : pages publiques, en-têtes, JS servi, fichiers exposés, login.",
          "Code — le dépôt local, chez toi. Preuve = chemin + extrait + date. Pas un dump du repo.",
          "Intérieur — depuis un compte réel du SaaS. Sert à l’authz et à l’isolation (client A vs client B). Sans compte, ces tests restent Non testé.",
        ],
      },
      {
        type: "p",
        text: "Les e-mails et rôles des comptes de test vont dans le brief. Les mots de passe ne passent pas par le chat. Red-team : mandat écrit obligatoire, sinon stop.",
      },
      {
        type: "h2",
        text: "Ce que ce n’est pas",
      },
      {
        type: "ul",
        items: [
          "Pas un scanner hébergé. Karukera ne voit ni la cible, ni le code, ni tes clés.",
          "Pas une agence, pas un pentester humain à la semaine.",
          "Pas un framework d’exploit : zéro payload, zéro PoC d’attaque, zéro DoS.",
          "Pas un certificat SOC 2, pas une garantie d’exhaustivité.",
          "Pas un audit d’un site tiers « pour voir ».",
        ],
      },
      {
        type: "h2",
        text: "Méthode",
      },
      {
        type: "p",
        text: "Le kit est un ZIP de prompts, configs et templates. Zéro code obligatoire. Tu l’ouvres dans l’agent que tu as déjà.",
      },
      {
        type: "p",
        text: "Claude, Codex et d’autres modèles refusent souvent de mener un audit de sécurité. Dans ce cas, une clé OpenRouter route vers des modèles qui l’acceptent. Les crédits sont les tiens. La clé se dépose hors chat, sur ta machine.",
      },
      {
        type: "p",
        text: "Tu ne choisis pas un identifiant interne. Tu dis le projet, la profondeur, les accès. L’orchestrateur mappe vers un des huit modes :",
      },
      {
        type: "ul",
        items: [
          "Express — premier signal, 30–45 min.",
          "Complet Web — site ou app, pages, cookies, API de même origine.",
          "Complet SaaS — orgs, rôles, isolation. Deux tenants pour confirmer un IDOR.",
          "Agents / MCP — tools, skills, copilote branché sur des données.",
          "Delta — après correctifs : qu’est-ce qui a bougé.",
          "Continu — snapshot périodique, garde-fou de release.",
          "Red-team léger — exercice adverse. Mandat écrit, toujours sans exploit.",
          "Rapport board — synthèse décideur. Aucun test nouveau. Refusé si la QA n’a pas signé.",
        ],
      },
      {
        type: "p",
        text: "Douze agents s’enchaînent dans un ordre fixe : surface, menaces, pages, session, autorisation, API, secrets, supply chain, MCP, puis une QA adverse, puis le rapport. La QA relit la chaîne de preuve. Sans sa signature, il n’y a pas de livrable — pas même un « brouillon pour le comité ».",
      },
      {
        type: "p",
        text: "Six statuts, jamais fusionnés avec une jauge de couverture : Confirmé, Probable, Hypothèse, Non testé, Mitigé, Faux positif. Un Confirmé exige une preuve (URL ou fichier:ligne, extrait, date, méthode). Sans preuve, ce n’est pas Confirmé.",
      },
      {
        type: "h2",
        text: "Restitution",
      },
      {
        type: "p",
        text: "Ce que tu lis à la fin n’est pas un PDF marketing.",
      },
      {
        type: "ul",
        items: [
          "Un rapport : synthèse, findings priorisés (P0–P3), ce qui n’a pas été testé.",
          "Les preuves : extraits déjà vus, secrets masqués, journal append-only.",
          "Des tickets de correctif : un par finding important. Chacun porte l’action attendue, le critère de sortie, et un prompt prêt à coller dans Claude ou Codex pour appliquer le correctif — sans payload, sans recette d’attaque.",
        ],
      },
      {
        type: "p",
        text: "Les Non testé restent visibles, surtout l’isolation à un seul tenant. On ne maquille pas un Express en audit stratégique.",
      },
      {
        type: "h2",
        text: "Phrase pour lancer",
      },
      {
        type: "quote",
        text: "Audite ce projet chez moi. URL : https://app.exemple.tld. Code : ./mon-app. Complet. Extérieur + intérieur. Les comptes sont dans le brief, pas ici.",
      },
      {
        type: "p",
        text: "Remplace l’URL et le chemin. N’invente aucun compte. N’y mets aucun mot de passe.",
      },
      {
        type: "h2",
        text: "Prix et livraison",
      },
      {
        type: "p",
        text: "197 €, une fois. Le ZIP se télécharge après paiement, via un lien signé. Les mises à jour arrivent par mail. Karukera ne proxy rien : tes modèles, tes crédits, ta machine.",
      },
      {
        type: "h2",
        text: "Ce que ce document n’est pas",
      },
      {
        type: "p",
        text: "Ce n’est pas le kit. C’est la présentation publique du kit. Le livrable reste le ZIP. Rien ici ne donne accès à une cible, à un compte, ou au contenu payant.",
      },
    ],
  },
  {
    metaTitle: "Karukera Security Kit — briefing note",
    metaDesc:
      "Public note: scope, method and delivery of the security audit kit. No access, no sensitive data.",
    kicker: "Briefing note · August 2026 · public document",
    title: "Karukera Security Kit",
    lead: "A ZIP of agents you run on your machine to secure your app — and therefore your revenue. This note covers scope, method and delivery. Nothing here is access. Nothing here is sensitive data.",
    updated: "2026-08-17",
    body: [
      {
        type: "h2",
        text: "In one sentence",
      },
      {
        type: "p",
        text: "You open the kit in Claude, Codex, Cursor or Hermes, on your machine. You name the project, the depth, and whether you give access. You get a report with evidence, then fix tickets — each with a prompt to paste into your LLM.",
      },
      {
        type: "h2",
        text: "Who it is for",
      },
      {
        type: "p",
        text: "A solo founder, a small team, a SaaS that takes money. Not an AppSec team. The hole that costs you is rarely a missing header: it is an IDOR between two accounts, a leaking session, an agent tool opened too wide.",
      },
      {
        type: "h2",
        text: "Scope",
      },
      {
        type: "p",
        text: "The kit only audits a system you are authorised to test in writing: your site, SaaS, API, MCP instance, or a client system under a signed mandate. Otherwise it stops.",
      },
      {
        type: "p",
        text: "You choose how to look. The three postures combine. What you do not choose stays “Untested” — it is not invented.",
      },
      {
        type: "ul",
        items: [
          "Outside — what a stranger sees: public pages, headers, served JS, exposed files, login.",
          "Code — the local repo, on your disk. Evidence = path + excerpt + date. Not a repo dump.",
          "Inside — from a real SaaS account. Authz and isolation (customer A vs customer B). Without an account, those tests stay Untested.",
        ],
      },
      {
        type: "p",
        text: "Test-account emails and roles go in the brief. Passwords do not go through chat. Red team: written mandate, or stop.",
      },
      {
        type: "h2",
        text: "What it is not",
      },
      {
        type: "ul",
        items: [
          "Not a hosted scanner. Karukera never sees the target, the code, or your keys.",
          "Not an agency, not a week of human pentest.",
          "Not an exploit framework: no payload, no attack PoC, no DoS.",
          "Not a SOC 2 certificate, not a claim of exhaustiveness.",
          "Not an audit of a third-party site “just to look”.",
        ],
      },
      {
        type: "h2",
        text: "Method",
      },
      {
        type: "p",
        text: "The kit is a ZIP of prompts, configs and templates. No code required. You open it in the agent you already use.",
      },
      {
        type: "p",
        text: "Claude, Codex and other models often refuse a security audit. An OpenRouter key then routes to models that will do it. Credits stay yours. The key is deposited off-chat, on your machine.",
      },
      {
        type: "p",
        text: "You do not pick an internal id. You name the project, the depth, the access. The orchestrator maps to one of eight modes:",
      },
      {
        type: "ul",
        items: [
          "Express — first signal, 30–45 min.",
          "Full Web — site or app, pages, cookies, same-origin API.",
          "Full SaaS — orgs, roles, isolation. Two tenants to confirm an IDOR.",
          "Agents / MCP — tools, skills, a copilot wired to data.",
          "Delta — after fixes: what moved.",
          "Continuous — periodic snapshot, release guardrail.",
          "Light red team — adversarial exercise. Written mandate, still no exploit.",
          "Board report — decision-maker synthesis. No new tests. Refused if QA has not signed.",
        ],
      },
      {
        type: "p",
        text: "Twelve agents run in a fixed order: surface, threats, pages, session, authorisation, API, secrets, supply chain, MCP, then adversarial QA, then the report. QA rereads the evidence chain. Without its signature there is no deliverable — not even a “draft for the committee”.",
      },
      {
        type: "p",
        text: "Six statuses, never merged with a coverage gauge: Confirmed, Likely, Hypothesis, Untested, Mitigated, False positive. Confirmed requires evidence (URL or file:line, excerpt, date, method). No evidence, not Confirmed.",
      },
      {
        type: "h2",
        text: "Delivery",
      },
      {
        type: "p",
        text: "What you read at the end is not a marketing PDF.",
      },
      {
        type: "ul",
        items: [
          "A report: synthesis, prioritised findings (P0–P3), what was not tested.",
          "Evidence: excerpts already seen, secrets masked, append-only journal.",
          "Fix tickets: one per important finding. Each has the expected action, the exit criterion, and a prompt ready to paste into Claude or Codex — no payload, no attack recipe.",
        ],
      },
      {
        type: "p",
        text: "Untested items stay visible, especially isolation with a single tenant. An Express is never dressed up as a strategic audit.",
      },
      {
        type: "h2",
        text: "Launch line",
      },
      {
        type: "quote",
        text: "Audit this project on my machine. URL: https://app.example.tld. Code: ./my-app. Full. Outside + inside. Accounts are in the brief, not here.",
      },
      {
        type: "p",
        text: "Replace the URL and the path. Do not invent accounts. Do not put a password in that sentence.",
      },
      {
        type: "h2",
        text: "Price and fulfilment",
      },
      {
        type: "p",
        text: "€197, once. The ZIP downloads after payment, via a signed link. Updates arrive by email. Karukera proxies nothing: your models, your credits, your machine.",
      },
      {
        type: "h2",
        text: "What this document is not",
      },
      {
        type: "p",
        text: "This is not the kit. It is the public briefing. The deliverable remains the ZIP. Nothing here grants access to a target, an account, or the paid contents.",
      },
    ],
  },
  {
    metaTitle: "Karukera Security Kit — nota de presentación",
    metaDesc:
      "Documento público: perímetro, método y entrega del kit de auditoría. Sin acceso ni dato sensible.",
    kicker: "Nota de presentación · agosto 2026 · documento público",
    title: "Karukera Security Kit",
    lead: "Un ZIP de agentes que lanzas en tu máquina para asegurar tu aplicación — y por tanto tus ingresos. Este texto describe el perímetro, el método y la entrega. Nada aquí es un acceso. Nada es un dato sensible.",
    updated: "2026-08-17",
    body: [
      {
        type: "h2",
        text: "En una frase",
      },
      {
        type: "p",
        text: "Abres el kit en Claude, Codex, Cursor o Hermes, en tu máquina. Dices qué proyecto auditar, a qué profundidad, y si das accesos. Recibes un informe con pruebas y luego tickets de corrección — cada uno con un prompt para pegar en tu LLM.",
      },
      {
        type: "h2",
        text: "Para quién",
      },
      {
        type: "p",
        text: "Un founder solo, un equipo pequeño, un SaaS que cobra. No un equipo AppSec. El agujero que cuesta casi nunca es un header: es un IDOR entre dos cuentas, una sesión que filtra, una tool de agente demasiado abierta.",
      },
      {
        type: "h2",
        text: "Perímetro",
      },
      {
        type: "p",
        text: "El kit solo audita un sistema que controlas por escrito: tu sitio, SaaS, API, instancia MCP, o el sistema de un cliente con mandato firmado. Si no, se detiene.",
      },
      {
        type: "p",
        text: "Tú eliges cómo mirar. Las tres aproximaciones se combinan. Lo que no eliges queda « No testeado » — no se inventa.",
      },
      {
        type: "ul",
        items: [
          "Exterior — lo que ve un desconocido: páginas públicas, cabeceras, JS servido, ficheros expuestos, login.",
          "Código — el repo local, en tu disco. Prueba = ruta + extracto + fecha. No un volcado del repo.",
          "Interior — desde una cuenta real del SaaS. Autorización y aislamiento (cliente A vs cliente B). Sin cuenta, esos tests quedan No testeado.",
        ],
      },
      {
        type: "p",
        text: "Emails y roles de las cuentas de prueba van en el brief. Las contraseñas no pasan por el chat. Red team: mandato escrito, o stop.",
      },
      {
        type: "h2",
        text: "Lo que no es",
      },
      {
        type: "ul",
        items: [
          "No es un escáner alojado. Karukera no ve el objetivo, ni el código, ni tus claves.",
          "No es una agencia, ni una semana de pentest humano.",
          "No es un framework de exploits: cero payload, cero PoC de ataque, cero DoS.",
          "No es un certificado SOC 2, ni una garantía de exhaustividad.",
          "No es auditar el sitio de un tercero « por ver ».",
        ],
      },
      {
        type: "h2",
        text: "Método",
      },
      {
        type: "p",
        text: "El kit es un ZIP de prompts, configs y plantillas. Cero código obligatorio. Lo abres en el agente que ya usas.",
      },
      {
        type: "p",
        text: "Claude, Codex y otros modelos a menudo se niegan a hacer una auditoría de seguridad. Una clave OpenRouter enruta entonces hacia modelos que sí la hacen. Los créditos son tuyos. La clave se deposita fuera del chat, en tu máquina.",
      },
      {
        type: "p",
        text: "No eliges un id interno. Dices el proyecto, la profundidad, los accesos. El orquestador mapea a uno de ocho modos:",
      },
      {
        type: "ul",
        items: [
          "Express — primera señal, 30–45 min.",
          "Completo Web — sitio o app, páginas, cookies, API del mismo origen.",
          "Completo SaaS — orgs, roles, aislamiento. Dos tenants para confirmar un IDOR.",
          "Agentes / MCP — tools, skills, copiloto conectado a datos.",
          "Delta — después de correcciones: qué se ha movido.",
          "Continuo — snapshot periódico, guarda de release.",
          "Red team ligero — ejercicio adverso. Mandato escrito, sin exploit.",
          "Informe board — síntesis para decisión. Ningún test nuevo. Rechazado si la QA no ha firmado.",
        ],
      },
      {
        type: "p",
        text: "Doce agentes en un orden fijo: superficie, amenazas, páginas, sesión, autorización, API, secretos, supply chain, MCP, luego una QA adversaria, luego el informe. La QA relee la cadena de prueba. Sin su firma no hay entregable — ni un « borrador para el comité ».",
      },
      {
        type: "p",
        text: "Seis estados, nunca mezclados con una cobertura: Confirmado, Probable, Hipótesis, No testeado, Mitigado, Falso positivo. Confirmado exige prueba (URL o archivo:línea, extracto, fecha, método). Sin prueba, no es Confirmado.",
      },
      {
        type: "h2",
        text: "Entrega",
      },
      {
        type: "p",
        text: "Lo que lees al final no es un PDF de marketing.",
      },
      {
        type: "ul",
        items: [
          "Un informe: síntesis, findings priorizados (P0–P3), lo no testeado.",
          "Las pruebas: extractos ya vistos, secretos enmascarados, diario solo-append.",
          "Tickets de corrección: uno por finding importante. Cada uno lleva la acción, el criterio de salida y un prompt listo para pegar en Claude o Codex — sin payload, sin receta de ataque.",
        ],
      },
      {
        type: "p",
        text: "Lo No testeado sigue visible, sobre todo el aislamiento con un solo tenant. Un Express no se disfraza de auditoría estratégica.",
      },
      {
        type: "h2",
        text: "Frase para lanzar",
      },
      {
        type: "quote",
        text: "Audita este proyecto en mi máquina. URL: https://app.ejemplo.tld. Código: ./mi-app. Completo. Exterior + interior. Las cuentas están en el brief, no aquí.",
      },
      {
        type: "p",
        text: "Sustituye la URL y la ruta. No inventes cuentas. No pongas una contraseña en esa frase.",
      },
      {
        type: "h2",
        text: "Precio y entrega",
      },
      {
        type: "p",
        text: "197 €, una vez. El ZIP se descarga tras el pago, con un enlace firmado. Las actualizaciones llegan por mail. Karukera no hace de proxy: tus modelos, tus créditos, tu máquina.",
      },
      {
        type: "h2",
        text: "Lo que este documento no es",
      },
      {
        type: "p",
        text: "Esto no es el kit. Es la presentación pública. El entregable sigue siendo el ZIP. Nada aquí da acceso a un objetivo, a una cuenta, o al contenido de pago.",
      },
    ],
  },
);

export function kitBrief(locale: Locale): KitBrief {
  return KIT_BRIEF[locale];
}

export function kitBriefMarkdown(locale: Locale): string {
  const b = kitBrief(locale);
  const lines: string[] = [`# ${b.title}`, "", `*${b.kicker}*`, "", b.lead, ""];
  for (const block of b.body) {
    if (block.type === "h2") {
      lines.push(`## ${block.text}`, "");
    } else if (block.type === "p") {
      lines.push(block.text, "");
    } else if (block.type === "quote") {
      lines.push(`> ${block.text}`, "");
    } else if (block.type === "ul") {
      for (const item of block.items) lines.push(`- ${item}`);
      lines.push("");
    } else if (block.type === "ol") {
      block.items.forEach((item, i) => lines.push(`${i + 1}. ${item}`));
      lines.push("");
    }
  }
  return lines.join("\n").trim() + "\n";
}
