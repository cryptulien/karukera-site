import type { ReactNode } from "react";

export interface PostMeta {
  slug: string;
  title: string;
  date: string; // ISO — pour le tri et les métadonnées
  dateLabel: string; // affichage humain
  readingTime: string;
  excerpt: string;
}

export interface Post extends PostMeta {
  content: ReactNode;
}

/* ────────────── Briques de mise en page (esthétique seijaku) ────────────── */

function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 text-lg leading-relaxed text-sei-sumi">{children}</p>
  );
}

function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-xl sm:text-2xl font-serif leading-relaxed text-sei-ink">
      {children}
    </p>
  );
}

function Imagine({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 pl-6 border-l-2 border-sei-vermilion font-serif text-lg sm:text-xl italic leading-relaxed text-sei-ink">
      {children}
    </p>
  );
}

function Strate({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-md border border-sei-mist bg-sei-rice/60 p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-sei-vermilion font-medium">
        {title}
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
        {items.map((it) => (
          <li
            key={it}
            className="text-sm text-sei-sumi after:content-['·'] after:ml-3 after:text-sei-mist last:after:content-['']"
          >
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────── Founder Memo ─────────────────────────── */

const founderMemo: ReactNode = (
  <>
    <Lead>
      La santé entre dans une ère où nous pouvons dissocier le capital investi
      de la réussite d&apos;un projet : un acteur seul, bien outillé, peut
      désormais construire ce qui demandait hier une équipe entière et des levées
      de fonds conséquentes.
    </Lead>

    <P>
      Il ne me semble pas de secteur plus louable que celui du healthcare pour
      innover et entreprendre. C&apos;est un secteur, comme bien d&apos;autres,
      qui sera profondément révolutionné par l&apos;IA, mais qui restera, pour
      encore longtemps, porté par des humains pour l&apos;exécuter.
    </P>

    <P>
      Ainsi, je pense que l&apos;approche agentic doit être au cœur d&apos;une
      nouvelle génération de logiciel healthcare, à toutes les strates de
      fonctionnement :
    </P>

    <div className="mt-8 space-y-4">
      <Strate
        title="Médicale et paramédicale"
        items={[
          "Dossier patient informatisé",
          "Suivi réglementaire",
          "Analyse de données",
          "Prescriptions",
          "Rédaction",
          "Extraction",
          "Valorisation",
          "Recherche",
        ]}
      />
      <Strate
        title="Hospitalier et extra-hospitalier"
        items={[
          "Planification et temps médical",
          "Gestion des lits et des flux patients",
          "Coordination ville-hôpital",
          "Ressources et logistique",
          "Pilotage de l'activité et de la donnée",
        ]}
      />
    </div>

    <P>
      Karukera est une société que je possède pour le moment à titre individuel
      et dans son entièreté, et sera le socle de construction d&apos;un
      écosystème centré sur le software agentic, AI-first en santé.
    </P>

    <P>
      L&apos;IA, les LLM, le coding agentic, et l&apos;assistance humaine par IA
      sont au centre du développement de cet outil, dont le but est
      d&apos;utiliser les process SOTA en termes de structuration et de
      développement, pour maximiser la performance, le coût, la relation à
      l&apos;utilisateur, et in fine, la fonctionnalité des produits qui y seront
      développés.
    </P>

    <P>
      <strong className="font-medium text-sei-ink">SuperPagr</strong> — dont le
      nom est amené à évoluer, tant il est imprononçable — est la première étape
      de ce chemin, démontrant la performance d&apos;un seul humain, aidé de ces
      technologies, sur un problème métier très précis qu&apos;est la
      planification médicale de la permanence des soins, comprenant des
      difficultés d&apos;expérience utilisateurs, d&apos;algorithmie, de mise en
      cohérence des données, dans un environnement en retard technologique
      permanent.
    </P>

    <P>
      Le marché du logiciel hospitalier français connaît déjà des suites qui
      tentent de tout couvrir — Maincare, Softway Medical, Dedalus en tête — mais
      aucune ne porte l&apos;esprit qui a fait le succès d&apos;un Odoo :
      modularité réelle, prix transparents, déploiement rapide, écosystème
      ouvert à qui veut construire par-dessus. Cet espace est vacant, et il
      l&apos;est pour des raisons précises, pas par hasard : certification HDS,
      standards d&apos;interopérabilité (HL7, FHIR), responsabilité médicale,
      cycles d&apos;achat public longs, fragmentation réglementaire. Ce sont ces
      mêmes contraintes qui rendent le problème difficile à résoudre — et donc,
      une fois résolu correctement, difficile à recopier.
    </P>

    <P>
      <strong className="font-medium text-sei-ink">OpenStats</strong>, qui
      s&apos;attaque à l&apos;analyse statistique des thèses médicales, est la
      deuxième démonstration de cette même méthode : un problème métier précis et
      douloureux, mal servi par le logiciel existant, résolu par un humain seul
      appuyé sur l&apos;IA agentic. SuperPagr et OpenStats ne sont pas deux paris
      isolés : ce sont les deux premières briques d&apos;une même approche,
      répétable, du marché de la santé.
    </P>

    <Imagine>
      Imaginons un écosystème où le DPI et le logiciel métier rattaché à ce
      dernier peuvent nous répondre, dresser les chimiogrammes en temps réel,
      nous proposer des abords thérapeutiques inédits, communiquer au patient de
      façon vulgarisée son dernier compte rendu, ou récolter et inclure
      automatiquement les résultats de biologie dans le dossier.
    </Imagine>

    <Imagine>
      Imaginons un format de données médicales, pensé AI-first, compatible avec
      n&apos;importe quel outil, permettant au médecin généraliste de questionner
      le dernier traitement du spécialiste, au laboratoire de recherche de
      demander l&apos;extraction et l&apos;analyse des données à un patient, à un
      infirmier de connaître les directives médicales, et surtout à un LLM de se
      retrouver au sein d&apos;une des données les plus importantes pour un être
      humain.
    </Imagine>

    <Imagine>
      Imaginons des logiciels dont la portée est évidemment individuelle, mais
      aussi collective : un standard que nous construisons et que nous
      maintenons, mais ouvert à l&apos;usage de tous — à la manière de Stripe,
      propriétaire dans sa gouvernance mais devenu, par la qualité de son
      expérience et son adoption, l&apos;interface de facto d&apos;un secteur
      entier — et une tuyauterie éprouvée et sécurisée pour les agents,
      permettant à chacun de venir développer l&apos;outil dont il a besoin, les
      données et standards SOTA étant respectés et maintenus.
    </Imagine>

    <P>
      Karukera est le nom de la Guadeloupe, terre française dans laquelle les
      idées peuvent naître, mais souvent au sein d&apos;un chaos permanent.
      L&apos;approche de Seijaku, calme dans la tempête, représente notre désir
      de faire prospérer un calme soudain et apaisant au sein d&apos;un système
      qui prend soin, même au cœur de la souffrance, et de faciliter, enfin, la
      transition vers le nouveau monde.
    </P>

    <p className="mt-12 font-serif text-2xl text-sei-ink flex items-center gap-3">
      <span className="sei-seal" aria-hidden />
      Ce n&apos;est que le début.
    </p>
  </>
);

/* ─────────────────────────── Registre ─────────────────────────── */

export const posts: Post[] = [
  {
    slug: "founder-memo",
    title: "Founder Memo",
    date: "2026-06-30",
    dateLabel: "Juin 2026",
    readingTime: "6 min de lecture",
    excerpt:
      "La santé entre dans une ère où nous pouvons dissocier le capital investi de la réussite d’un projet. Karukera, le software agentic AI-first, et le chemin qui mène de SuperPagr à un écosystème.",
    content: founderMemo,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
