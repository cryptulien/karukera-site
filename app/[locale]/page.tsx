import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "../components/FadeIn";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary, type Dict } from "@/dictionaries";
import { posts } from "@/lib/posts";

type ProjectKey = "superpagr" | "lien" | "openstats";

const PROJECTS: { key: ProjectKey; url?: string }[] = [
  { key: "superpagr", url: "https://superpagr.com" },
  { key: "lien" }, // site à venir
  { key: "openstats", url: "https://openstats.karukera.xyz" },
];

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero({ dict }: { dict: Dict }) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-sei-ink/80 via-sei-ink/30 to-sei-ink/10" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pb-16 sm:pb-24">
        <FadeIn>
          <span className="sei-rule mb-6" />
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white font-normal tracking-tight leading-none">
            Karukera
          </h1>
          <p className="text-white/55 text-sm sm:text-base mt-5 font-light tracking-[0.2em] uppercase">
            {dict.hero.tagline}
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

function About({ dict }: { dict: Dict }) {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sei-ink leading-snug">
            {dict.about.title}
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-10 text-lg sm:text-xl text-sei-sumi leading-relaxed">
            {dict.about.body}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function Separator() {
  return (
    <div className="flex justify-center py-2">
      <span className="sei-seal" aria-hidden />
    </div>
  );
}

/* ─────────────────────────── PROJETS ─────────────────────────── */

function Projets({ dict }: { dict: Dict }) {
  return (
    <section id="projets" className="py-24 sm:py-32 px-6 sm:px-10 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.25em] text-sei-vermilion font-medium">
            {dict.projects.eyebrow}
          </p>
          <div className="sei-rule mt-5 mb-16 sm:mb-20" />
        </FadeIn>

        <div className="space-y-6">
          {PROJECTS.map((p, i) => {
            const item = dict.projects.items[p.key];
            return (
              <FadeIn key={p.key} delay={i * 90}>
                <article className="rounded-md border border-sei-mist bg-sei-rice/50 p-8 sm:p-10">
                  <h3 className="font-serif text-3xl sm:text-4xl text-sei-ink">
                    {p.key === "superpagr"
                      ? "SuperPagr"
                      : p.key === "lien"
                        ? "Le Lien"
                        : "OpenStats"}
                  </h3>
                  <div className="sei-rule mt-5 mb-6" />
                  <p className="text-xs uppercase tracking-[0.2em] text-sei-gold mb-6 font-medium">
                    {item.domain}
                  </p>
                  <p className="text-lg text-sei-sumi leading-relaxed max-w-2xl">
                    {item.text}
                  </p>
                  <div className="mt-7">
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm text-sei-vermilion"
                      >
                        {dict.projects.visit}
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-sei-stone">
                        <span className="sei-seal opacity-50" aria-hidden />
                        {dict.projects.soon}
                      </span>
                    )}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── LE CARNET ─────────────────────────── */

function Carnet({ locale, dict }: { locale: Locale; dict: Dict }) {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date))[0];
  if (!latest) return null;
  const meta = latest.meta[locale];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 bg-sei-rice/40 border-y border-sei-mist">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.25em] text-sei-vermilion font-medium">
            {dict.carnet.eyebrow}
          </p>
          <Link
            href={`/${locale}/blog/${latest.slug}`}
            className="group block mt-6"
          >
            <h3 className="font-serif text-3xl sm:text-4xl text-sei-ink group-hover:text-sei-vermilion transition-colors">
              {meta.title}
            </h3>
            <p className="mt-5 text-lg text-sei-sumi leading-relaxed">
              {meta.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm text-sei-vermilion">
              {dict.carnet.readMemo}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="mt-10 inline-block text-sm text-sei-stone hover:text-sei-ink transition-colors"
          >
            {dict.carnet.all} →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────── VISION ─────────────────────────── */

function Vision({ dict }: { dict: Dict }) {
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
                  {dict.vision.quote}
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <>
      <Nav locale={locale} dict={dict} floating />
      <main>
        <Hero dict={dict} />
        <About dict={dict} />
        <Separator />
        <Projets dict={dict} />
        <Carnet locale={locale} dict={dict} />
        <Vision dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} year={year} />
    </>
  );
}
