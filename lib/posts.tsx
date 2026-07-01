import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

/* ─────────────────────── Modèle de contenu (blocs) ─────────────────────── */

export type Block =
  | { type: "lead"; text: string }
  | { type: "p"; text: string } // supporte **gras**
  | { type: "imagine"; text: string }
  | { type: "strate"; title: string; items: string[] }
  | { type: "closing"; text: string };

export interface PostMeta {
  title: string;
  dateLabel: string;
  readingTime: string;
  excerpt: string;
}

export interface Post {
  slug: string;
  date: string; // ISO — tri + metadata
  meta: Record<Locale, PostMeta>;
  content: Record<Locale, Block[]>;
}

/* ─────────────────────── Rendu inline (**gras**) ─────────────────────── */

function inline(text: string): ReactNode[] {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-medium text-sei-ink">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/* ─────────────────────── Rendu d'un article ─────────────────────── */

export function PostBody({ blocks }: { blocks: Block[] }) {
  const out: ReactNode[] = [];
  let strateGroup: Block[] = [];

  const flushStrates = (key: string) => {
    if (strateGroup.length === 0) return;
    out.push(
      <div key={`strates-${key}`} className="mt-8 space-y-4">
        {strateGroup.map((b, i) =>
          b.type === "strate" ? (
            <div
              key={i}
              className="rounded-md border border-sei-mist bg-sei-rice/60 p-6 sm:p-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-sei-vermilion font-medium">
                {b.title}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {b.items.map((it) => (
                  <li
                    key={it}
                    className="text-sm text-sei-sumi after:content-['·'] after:ml-3 after:text-sei-mist last:after:content-['']"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ) : null,
        )}
      </div>,
    );
    strateGroup = [];
  };

  blocks.forEach((b, i) => {
    if (b.type === "strate") {
      strateGroup.push(b);
      return;
    }
    flushStrates(String(i));

    switch (b.type) {
      case "lead":
        out.push(
          <p
            key={i}
            className="text-xl sm:text-2xl font-serif leading-relaxed text-sei-ink"
          >
            {b.text}
          </p>,
        );
        break;
      case "p":
        out.push(
          <p key={i} className="mt-6 text-lg leading-relaxed text-sei-sumi">
            {inline(b.text)}
          </p>,
        );
        break;
      case "imagine":
        out.push(
          <p
            key={i}
            className="mt-6 pl-6 border-l-2 border-sei-vermilion font-serif text-lg sm:text-xl italic leading-relaxed text-sei-ink"
          >
            {b.text}
          </p>,
        );
        break;
      case "closing":
        out.push(
          <p
            key={i}
            className="mt-12 font-serif text-2xl text-sei-ink flex items-center gap-3"
          >
            <span className="sei-seal" aria-hidden />
            {b.text}
          </p>,
        );
        break;
    }
  });
  flushStrates("end");

  return <>{out}</>;
}

/* ─────────────────────────── Founder Memo ─────────────────────────── */

const founderMemo: Record<Locale, Block[]> = {
  fr: [
    { type: "lead", text: "La santé entre dans une ère où nous pouvons dissocier le capital investi de la réussite d’un projet : un acteur seul, bien outillé, peut désormais construire ce qui demandait hier une équipe entière et des levées de fonds conséquentes." },
    { type: "p", text: "Il ne me semble pas de secteur plus louable que celui du healthcare pour innover et entreprendre. C’est un secteur, comme bien d’autres, qui sera profondément révolutionné par l’IA, mais qui restera, pour encore longtemps, porté par des humains pour l’exécuter." },
    { type: "p", text: "Ainsi, je pense que l’approche agentic doit être au cœur d’une nouvelle génération de logiciel healthcare, à toutes les strates de fonctionnement :" },
    { type: "strate", title: "Médicale et paramédicale", items: ["Dossier patient informatisé", "Suivi réglementaire", "Analyse de données", "Prescriptions", "Rédaction", "Extraction", "Valorisation", "Recherche"] },
    { type: "strate", title: "Hospitalier et extra-hospitalier", items: ["Planification et temps médical", "Gestion des lits et des flux patients", "Coordination ville-hôpital", "Ressources et logistique", "Pilotage de l’activité et de la donnée"] },
    { type: "p", text: "Karukera est une société que je possède pour le moment à titre individuel et dans son entièreté, et sera le socle de construction d’un écosystème centré sur le software agentic, AI-first en santé." },
    { type: "p", text: "L’IA, les LLM, le coding agentic, et l’assistance humaine par IA sont au centre du développement de cet outil, dont le but est d’utiliser les process SOTA en termes de structuration et de développement, pour maximiser la performance, le coût, la relation à l’utilisateur, et in fine, la fonctionnalité des produits qui y seront développés." },
    { type: "p", text: "**SuperPagr** — dont le nom est amené à évoluer, tant il est imprononçable — est la première étape de ce chemin, démontrant la performance d’un seul humain, aidé de ces technologies, sur un problème métier très précis qu’est la planification médicale de la permanence des soins, comprenant des difficultés d’expérience utilisateurs, d’algorithmie, de mise en cohérence des données, dans un environnement en retard technologique permanent." },
    { type: "p", text: "Le marché du logiciel hospitalier français connaît déjà des suites qui tentent de tout couvrir — Maincare, Softway Medical, Dedalus en tête — mais aucune ne porte l’esprit qui a fait le succès d’un Odoo : modularité réelle, prix transparents, déploiement rapide, écosystème ouvert à qui veut construire par-dessus. Cet espace est vacant, et il l’est pour des raisons précises, pas par hasard : certification HDS, standards d’interopérabilité (HL7, FHIR), responsabilité médicale, cycles d’achat public longs, fragmentation réglementaire. Ce sont ces mêmes contraintes qui rendent le problème difficile à résoudre — et donc, une fois résolu correctement, difficile à recopier." },
    { type: "p", text: "**OpenStats**, qui s’attaque à l’analyse statistique des thèses médicales, est la deuxième démonstration de cette même méthode : un problème métier précis et douloureux, mal servi par le logiciel existant, résolu par un humain seul appuyé sur l’IA agentic. SuperPagr et OpenStats ne sont pas deux paris isolés : ce sont les deux premières briques d’une même approche, répétable, du marché de la santé." },
    { type: "imagine", text: "Imaginons un écosystème où le DPI et le logiciel métier rattaché à ce dernier peuvent nous répondre, dresser les chimiogrammes en temps réel, nous proposer des abords thérapeutiques inédits, communiquer au patient de façon vulgarisée son dernier compte rendu, ou récolter et inclure automatiquement les résultats de biologie dans le dossier." },
    { type: "imagine", text: "Imaginons un format de données médicales, pensé AI-first, compatible avec n’importe quel outil, permettant au médecin généraliste de questionner le dernier traitement du spécialiste, au laboratoire de recherche de demander l’extraction et l’analyse des données à un patient, à un infirmier de connaître les directives médicales, et surtout à un LLM de se retrouver au sein d’une des données les plus importantes pour un être humain." },
    { type: "imagine", text: "Imaginons des logiciels dont la portée est évidemment individuelle, mais aussi collective : un standard que nous construisons et que nous maintenons, mais ouvert à l’usage de tous — à la manière de Stripe, propriétaire dans sa gouvernance mais devenu, par la qualité de son expérience et son adoption, l’interface de facto d’un secteur entier — et une tuyauterie éprouvée et sécurisée pour les agents, permettant à chacun de venir développer l’outil dont il a besoin, les données et standards SOTA étant respectés et maintenus." },
    { type: "p", text: "Karukera est le nom de la Guadeloupe, terre française dans laquelle les idées peuvent naître, mais souvent au sein d’un chaos permanent. L’approche de Seijaku, calme dans la tempête, représente notre désir de faire prospérer un calme soudain et apaisant au sein d’un système qui prend soin, même au cœur de la souffrance, et de faciliter, enfin, la transition vers le nouveau monde." },
    { type: "closing", text: "Ce n’est que le début." },
  ],
  en: [
    { type: "lead", text: "Healthcare is entering an era where we can decouple the capital invested from a project’s success: a single, well-equipped player can now build what once required an entire team and substantial fundraising." },
    { type: "p", text: "I can think of no field more worthy than healthcare in which to innovate and build. Like many others, it will be profoundly transformed by AI — yet it will remain, for a long time still, carried by humans to be executed." },
    { type: "p", text: "And so I believe the agentic approach must sit at the heart of a new generation of healthcare software, at every layer of how it works:" },
    { type: "strate", title: "Medical & paramedical", items: ["Electronic health record", "Regulatory compliance", "Data analysis", "Prescriptions", "Report writing", "Extraction", "Billing & coding", "Research"] },
    { type: "strate", title: "Hospital & community care", items: ["Scheduling & medical time", "Bed & patient-flow management", "City–hospital coordination", "Resources & logistics", "Activity & data steering"] },
    { type: "p", text: "Karukera is a company I currently own individually and in full, and it will be the foundation for building an ecosystem centered on agentic, AI-first healthcare software." },
    { type: "p", text: "AI, LLMs, agentic coding, and AI-assisted humans are at the center of building this tool, whose aim is to use SOTA processes in structuring and development to maximize performance, cost, the relationship with the user, and ultimately the functionality of the products built on it." },
    { type: "p", text: "**SuperPagr** — whose name is bound to change, so unpronounceable it is — is the first step on this path, demonstrating what a single human, aided by these technologies, can achieve on a very precise business problem: the medical scheduling of continuity of care, with its challenges of user experience, algorithmics, and data consistency, in an environment of permanent technological lag." },
    { type: "p", text: "The French hospital software market already has suites that try to cover everything — Maincare, Softway Medical, Dedalus foremost — but none carries the spirit that made an Odoo succeed: real modularity, transparent pricing, fast deployment, an ecosystem open to whoever wants to build on top. That space is vacant, and it is so for precise reasons, not by chance: HDS certification, interoperability standards (HL7, FHIR), medical liability, long public-procurement cycles, regulatory fragmentation. These very constraints are what make the problem hard to solve — and therefore, once solved correctly, hard to copy." },
    { type: "p", text: "**OpenStats**, which tackles the statistical analysis of medical theses, is the second demonstration of this same method: a precise and painful business problem, poorly served by existing software, solved by a single human leaning on agentic AI. SuperPagr and OpenStats are not two isolated bets: they are the first two bricks of one same, repeatable approach to the healthcare market." },
    { type: "imagine", text: "Imagine an ecosystem where the EHR and the software attached to it can answer us, draw up chemograms in real time, suggest novel therapeutic approaches, explain the latest report to the patient in plain language, or automatically collect and include lab results in the record." },
    { type: "imagine", text: "Imagine a medical-data format, designed AI-first, compatible with any tool — letting the GP query the specialist’s latest treatment, the research lab request the extraction and analysis of a patient’s data, a nurse know the medical directives, and above all an LLM find its way within one of the most important sets of data for a human being." },
    { type: "imagine", text: "Imagine software whose reach is obviously individual, but also collective: a standard we build and maintain, yet open to everyone’s use — in the manner of Stripe, proprietary in its governance but become, through the quality of its experience and its adoption, the de facto interface of an entire sector — and a proven, secure plumbing for agents, letting anyone come and build the tool they need, with SOTA data and standards respected and maintained." },
    { type: "p", text: "Karukera is the name of Guadeloupe, a French land where ideas can be born, but often amid permanent chaos. The Seijaku approach — calm in the storm — embodies our desire to nurture a sudden, soothing calm within a system that cares, even at the heart of suffering, and to ease, at last, the transition to the new world." },
    { type: "closing", text: "This is only the beginning." },
  ],
  es: [
    { type: "lead", text: "La salud entra en una era en la que podemos disociar el capital invertido del éxito de un proyecto: un actor solo, bien equipado, puede ahora construir lo que ayer exigía un equipo entero y rondas de financiación considerables." },
    { type: "p", text: "No se me ocurre sector más noble que el de la salud para innovar y emprender. Es un sector, como muchos otros, que será profundamente revolucionado por la IA, pero que seguirá, durante mucho tiempo aún, sostenido por humanos para ejecutarlo." },
    { type: "p", text: "Así, creo que el enfoque agentic debe estar en el corazón de una nueva generación de software de salud, en todas las capas de su funcionamiento:" },
    { type: "strate", title: "Médica y paramédica", items: ["Historia clínica electrónica", "Seguimiento normativo", "Análisis de datos", "Prescripciones", "Redacción", "Extracción", "Facturación y codificación", "Investigación"] },
    { type: "strate", title: "Hospitalaria y extrahospitalaria", items: ["Planificación y tiempo médico", "Gestión de camas y flujos de pacientes", "Coordinación ciudad-hospital", "Recursos y logística", "Pilotaje de la actividad y del dato"] },
    { type: "p", text: "Karukera es una sociedad que poseo por ahora de forma individual y en su totalidad, y será la base para construir un ecosistema centrado en el software agentic, AI-first en salud." },
    { type: "p", text: "La IA, los LLM, el coding agentic y la asistencia humana por IA están en el centro del desarrollo de esta herramienta, cuyo objetivo es usar los procesos SOTA en estructuración y desarrollo para maximizar el rendimiento, el coste, la relación con el usuario y, en última instancia, la funcionalidad de los productos que se desarrollen sobre ella." },
    { type: "p", text: "**SuperPagr** — cuyo nombre está destinado a evolucionar, de tan impronunciable — es la primera etapa de este camino, demostrando el rendimiento de un solo humano, ayudado por estas tecnologías, sobre un problema de negocio muy preciso: la planificación médica de la continuidad asistencial, con sus dificultades de experiencia de usuario, de algoritmia y de coherencia de los datos, en un entorno de retraso tecnológico permanente." },
    { type: "p", text: "El mercado del software hospitalario francés ya cuenta con suites que intentan cubrirlo todo — Maincare, Softway Medical, Dedalus a la cabeza — pero ninguna lleva el espíritu que hizo triunfar a un Odoo: modularidad real, precios transparentes, despliegue rápido, un ecosistema abierto a quien quiera construir encima. Ese espacio está vacante, y lo está por razones precisas, no por azar: certificación HDS, estándares de interoperabilidad (HL7, FHIR), responsabilidad médica, largos ciclos de compra pública, fragmentación normativa. Son esas mismas restricciones las que hacen el problema difícil de resolver — y, por tanto, una vez resuelto correctamente, difícil de copiar." },
    { type: "p", text: "**OpenStats**, que aborda el análisis estadístico de las tesis médicas, es la segunda demostración de este mismo método: un problema de negocio preciso y doloroso, mal atendido por el software existente, resuelto por un humano solo apoyado en la IA agentic. SuperPagr y OpenStats no son dos apuestas aisladas: son los dos primeros ladrillos de un mismo enfoque, repetible, del mercado de la salud." },
    { type: "imagine", text: "Imaginemos un ecosistema donde la historia clínica y el software asociado puedan respondernos, elaborar los quimiogramas en tiempo real, proponernos abordajes terapéuticos inéditos, comunicar al paciente de forma divulgativa su último informe, o recoger e incluir automáticamente los resultados de biología en el expediente." },
    { type: "imagine", text: "Imaginemos un formato de datos médicos, pensado AI-first, compatible con cualquier herramienta, que permita al médico de familia consultar el último tratamiento del especialista, al laboratorio de investigación solicitar la extracción y el análisis de los datos de un paciente, a un enfermero conocer las directivas médicas, y sobre todo a un LLM situarse dentro de uno de los datos más importantes para un ser humano." },
    { type: "imagine", text: "Imaginemos software cuyo alcance es evidentemente individual, pero también colectivo: un estándar que construimos y mantenemos, pero abierto al uso de todos — a la manera de Stripe, propietario en su gobernanza pero convertido, por la calidad de su experiencia y su adopción, en la interfaz de facto de todo un sector — y una fontanería probada y segura para los agentes, que permita a cada cual venir a desarrollar la herramienta que necesita, respetando y manteniendo los datos y estándares SOTA." },
    { type: "p", text: "Karukera es el nombre de Guadalupe, tierra francesa en la que las ideas pueden nacer, pero a menudo en medio de un caos permanente. El enfoque de Seijaku, la calma en la tormenta, representa nuestro deseo de hacer prosperar una calma repentina y serena dentro de un sistema que cuida, incluso en el corazón del sufrimiento, y de facilitar, por fin, la transición hacia el nuevo mundo." },
    { type: "closing", text: "Esto no es más que el comienzo." },
  ],
};

/* ─────────────────────────── Registre ─────────────────────────── */

export const posts: Post[] = [
  {
    slug: "founder-memo",
    date: "2026-06-30",
    meta: {
      fr: {
        title: "Founder Memo",
        dateLabel: "Juin 2026",
        readingTime: "6 min de lecture",
        excerpt:
          "La santé entre dans une ère où nous pouvons dissocier le capital investi de la réussite d’un projet. Karukera, le software agentic AI-first, et le chemin qui mène de SuperPagr à un écosystème.",
      },
      en: {
        title: "Founder Memo",
        dateLabel: "June 2026",
        readingTime: "6 min read",
        excerpt:
          "Healthcare is entering an era where the capital invested can be decoupled from a project’s success. Karukera, agentic AI-first software, and the path from SuperPagr to an ecosystem.",
      },
      es: {
        title: "Founder Memo",
        dateLabel: "Junio 2026",
        readingTime: "6 min de lectura",
        excerpt:
          "La salud entra en una era en la que podemos disociar el capital invertido del éxito de un proyecto. Karukera, el software agentic AI-first, y el camino de SuperPagr a un ecosistema.",
      },
    },
    content: founderMemo,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
