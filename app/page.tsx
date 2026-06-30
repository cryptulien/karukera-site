import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./components/FadeIn";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { posts } from "./blog/posts";

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/plage.webp"
          alt="Plage de Guadeloupe"
          fill
          className="object-cover"
          priority
        />
        {/* voile encre — calme dans la tempête */}
        <div className="absolute inset-0 bg-gradient-to-t from-sei-ink/80 via-sei-ink/30 to-sei-ink/10" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pb-16 sm:pb-24">
        <FadeIn>
          <span className="sei-rule !bg-sei-vermilion mb-6" />
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white font-normal tracking-tight leading-none">
            Karukera
          </h1>
          <p className="text-white/55 text-sm sm:text-base mt-5 font-light tracking-[0.2em] uppercase">
            L&apos;île aux belles eaux
          </p>
        </FadeIn>
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
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sei-ink leading-snug">
            Je suis Julien.
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-10 text-lg sm:text-xl text-sei-sumi leading-relaxed">
            Médecin psychiatre et entrepreneur. Je construis des projets à
            l&apos;intersection de la santé, du numérique et du concret — avec la
            conviction qu&apos;un humain seul, bien outillé par l&apos;IA, peut
            désormais bâtir ce qui demandait hier une équipe entière.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────── SEPARATOR ─────────────────────────── */

function Separator() {
  return (
    <div className="flex justify-center py-2">
      <span className="sei-seal" aria-hidden />
    </div>
  );
}

/* ─────────────────────────── PROJETS ─────────────────────────── */

const PROJECTS = [
  {
    title: "SuperPagr",
    domain: "Santé · SaaS · Plannings",
    text: `Les soignants méritent des outils pensés avec autant de soin qu'on en donne aux patients. SuperPagr simplifie les plannings médicaux — gardes, astreintes, remplacements — avec la rigueur et la clarté que le terrain exige.`,
    image: "/images/superpagr.webp",
  },
  {
    title: "Le Lien",
    domain: "SAMU · SMUR · Mobile",
    text: `Né du terrain, pour le terrain. Une application qui met les bons outils entre les mains des équipes d'urgence, là où chaque seconde compte. Fiches, scores, protocoles — tout ce qu'il faut, rien de superflu.`,
    image: "/images/lien.webp",
  },
];

function Projets() {
  return (
    <section id="projets" className="py-24 sm:py-32 px-6 sm:px-10 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.25em] text-sei-vermilion font-medium">
            Ce que je construis
          </p>
          <div className="sei-rule mt-5 mb-20 sm:mb-24" />
        </FadeIn>

        <div className="space-y-20 sm:space-y-28">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 100}>
              <article
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-14`}
              >
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="font-serif text-3xl sm:text-4xl text-sei-ink">
                    {project.title}
                  </h3>
                  <div className="sei-rule mt-5 mb-6" />
                  <p className="text-xs uppercase tracking-[0.2em] text-sei-gold mb-6 font-medium">
                    {project.domain}
                  </p>
                  <p className="text-lg text-sei-sumi leading-relaxed">
                    {project.text}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}

          {/* OpenStats — démonstration sans visuel, carte d'encre */}
          <FadeIn delay={200}>
            <article className="rounded-md border border-sei-mist bg-sei-rice/50 p-8 sm:p-12">
              <h3 className="font-serif text-3xl sm:text-4xl text-sei-ink">
                OpenStats
              </h3>
              <div className="sei-rule mt-5 mb-6" />
              <p className="text-xs uppercase tracking-[0.2em] text-sei-gold mb-6 font-medium">
                Recherche · Statistiques · Thèses
              </p>
              <p className="text-lg text-sei-sumi leading-relaxed max-w-2xl">
                L&apos;analyse statistique des thèses médicales, mal servie par
                le logiciel existant, résolue par un humain seul appuyé sur
                l&apos;IA agentic. La deuxième brique d&apos;une même approche,
                répétable, du marché de la santé.
              </p>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── LE CARNET (blog) ─────────────────────────── */

function Carnet() {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date))[0];
  if (!latest) return null;

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 bg-sei-rice/40 border-y border-sei-mist">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.25em] text-sei-vermilion font-medium">
            Le Carnet
          </p>
          <Link href={`/blog/${latest.slug}`} className="group block mt-6">
            <h3 className="font-serif text-3xl sm:text-4xl text-sei-ink group-hover:text-sei-vermilion transition-colors">
              {latest.title}
            </h3>
            <p className="mt-5 text-lg text-sei-sumi leading-relaxed">
              {latest.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm text-sei-vermilion">
              Lire le memo
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
          <Link
            href="/blog"
            className="mt-10 inline-block text-sm text-sei-stone hover:text-sei-ink transition-colors"
          >
            Tous les écrits →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────── VISION ─────────────────────────── */

function Vision() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/villa.webp"
            alt="Villa au bord de la mer"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sei-ink/75 via-sei-ink/35 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 w-full">
            <FadeIn>
              <blockquote className="max-w-lg">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-light">
                  L&apos;approche de Seijaku, calme dans la tempête : faire
                  prospérer un calme apaisant au sein d&apos;un système qui prend
                  soin, même au cœur de la souffrance.
                </p>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav floating />
      <main>
        <Hero />
        <About />
        <Separator />
        <Projets />
        <Carnet />
        <Vision />
      </main>
      <Footer />
    </>
  );
}
