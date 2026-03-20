import Image from 'next/image';
import { FadeIn } from './components/FadeIn';

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 bg-karu-ocean/10">
        <Image
          src="/images/plage.webp"
          alt="Plage de Guadeloupe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-karu-ink/70 via-karu-ink/25 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pb-14 sm:pb-20">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white font-normal tracking-tight leading-none">
          Karukera
        </h1>
        <p className="text-white/50 text-sm sm:text-base mt-4 font-light tracking-[0.15em] uppercase">
          L&apos;île aux belles eaux
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-10 bg-white/25 animate-pulse" />
      </div>
    </section>
  );
}

/* ─────────────────────────── ABOUT ─────────────────────────── */

function About() {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-karu-navy leading-snug">
            Je suis Julien.
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-10 text-lg sm:text-xl text-karu-slate leading-relaxed">
            Médecin, psychiatre, entrepreneur, développeur. Je ne rentre pas
            dans une seule case, et c&apos;est exactement ce qui me définit.
            Je construis des projets à l&apos;intersection de la santé,
            du numérique et du concret — des choses utiles, pensées avec rigueur,
            exécutées avec soin.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-6 text-lg sm:text-xl text-karu-slate leading-relaxed">
            Chaque projet que je lance est un pas de plus vers un rêve simple :
            vivre depuis la Guadeloupe, au bord de l&apos;eau, entouré des miens,
            à construire des choses qui comptent. La beauté de la simplicité.
            La richesse du sens.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────── SEPARATOR ─────────────────────────── */

function Separator() {
  return (
    <div className="flex justify-center py-4">
      <div className="w-16 h-px bg-karu-ocean/25" />
    </div>
  );
}

/* ─────────────────────────── FACETTES ─────────────────────────── */

const PROJECTS = [
  {
    title: 'SuperPagr',
    domain: 'Santé · SaaS · Plannings',
    text: `La santé mérite des outils pensés avec autant de soin qu'on en donne aux patients. SuperPagr simplifie les plannings médicaux — gardes, astreintes, remplacements — avec la rigueur et la clarté que le terrain exige.`,
  },
  {
    title: 'Le Lien',
    domain: 'SAMU · SMUR · Mobile',
    text: `Né du terrain, pour le terrain. Une application qui met les bons outils entre les mains des équipes d'urgence, là où chaque seconde compte. Fiches, scores, protocoles — tout ce qu'il faut, rien de superflu.`,
  },
  {
    title: 'Le Brasero Français',
    domain: 'Marque · Art de vivre',
    text: `Le tangible. La chaleur. Le partage. Une marque qui crée des moments réels autour d'objets pensés pour durer. Quelque chose qu'on touche, qu'on vit, qu'on transmet.`,
  },
];

function Facettes() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="font-serif text-xl sm:text-2xl text-karu-ocean mb-20 sm:mb-24">
            Ce que je construis
          </p>
        </FadeIn>

        <div className="space-y-20 sm:space-y-28">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 100}>
              <article>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-karu-navy">
                  {project.title}
                </h3>
                <div className="w-12 h-px bg-karu-gold mt-5 mb-6" />
                <p className="text-xs uppercase tracking-[0.2em] text-karu-gold mb-6 font-medium">
                  {project.domain}
                </p>
                <p className="text-lg text-karu-slate leading-relaxed max-w-2xl">
                  {project.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── VISION ─────────────────────────── */

function Vision() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-karu-ocean/10">
          <Image
            src="/images/villa.webp"
            alt="Villa au bord de la mer"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-karu-ink/60 via-karu-ink/30 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 w-full">
            <FadeIn>
              <blockquote className="max-w-lg">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-light">
                  Un jour, une villa au bord de la mer.
                  Les enfants qui jouent. Le bruit des vagues.
                  Et tout ce que j&apos;ai construit qui continue de tourner,
                  doucement, à distance.
                </p>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── RÉFLEXIONS ─────────────────────────── */

const ARTICLES = [
  {
    title: 'Apprendre à une IA comme on apprend à un enfant',
    excerpt:
      'Et si la prochaine révolution en intelligence artificielle venait de la façon dont on apprend le monde aux enfants ? Textures, couleurs, émotions — tout ce que les modèles ne voient pas encore.',
    date: '2026',
  },
  {
    title: 'Pourquoi je construis',
    excerpt:
      "Sur le lien entre soigner et créer. Entre comprendre les gens et fabriquer des outils pour eux. Le soin et le code ont plus en commun qu'on ne le pense.",
    date: '2026',
  },
  {
    title: "L'horizon",
    excerpt:
      "La Guadeloupe n'est pas une destination. C'est une direction. Celle d'une vie où le travail, la famille et la beauté ne sont plus des compromis.",
    date: '2026',
  },
];

function Reflexions() {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-10 bg-karu-sand/50">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="font-serif text-xl sm:text-2xl text-karu-ocean mb-4">
            Réflexions
          </p>
          <p className="text-karu-slate mb-16 sm:mb-20">
            Des pensées, des questions, des explorations.
          </p>
        </FadeIn>

        <div className="space-y-12 sm:space-y-16">
          {ARTICLES.map((article, i) => (
            <FadeIn key={article.title} delay={i * 100}>
              <article className="group cursor-pointer">
                <p className="text-xs uppercase tracking-[0.2em] text-karu-slate/60 mb-3">
                  {article.date}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-karu-navy leading-snug group-hover:text-karu-ocean transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="mt-4 text-base text-karu-slate leading-relaxed max-w-xl">
                  {article.excerpt}
                </p>
                <div className="w-8 h-px bg-karu-ocean/20 mt-6 group-hover:w-16 transition-all duration-500" />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer() {
  return (
    <footer className="py-16 sm:py-20 px-6 text-center">
      <p className="font-serif text-lg text-karu-navy/25 tracking-wide">
        Karukera
      </p>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Separator />
      <Facettes />
      <Vision />
      <Separator />
      <Reflexions />
      <Footer />
    </main>
  );
}
