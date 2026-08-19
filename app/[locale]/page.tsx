import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "../components/FadeIn";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Surfer } from "../components/Surfer";
import { SeaSound } from "../components/SeaSound";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary, type Dict } from "@/dictionaries";
import { posts } from "@/lib/posts";
import { JsonLd } from "../components/JsonLd";
import { SITE, localeAlternates } from "@/lib/seo";
import { ogImage } from "@/lib/share";

type ProjectKey = "superpagr" | "lien" | "openstats";

const PROJECTS: { key: ProjectKey; url?: string }[] = [
  { key: "superpagr", url: "https://superpagr.com" },
  { key: "lien" },
  { key: "openstats", url: "https://openstats.karukera.xyz" },
];

function Hero({ dict }: { dict: Dict }) {
  return (
    <section className="relative h-[100svh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/plage.webp"
          alt="Plage de Guadeloupe"
          fill
          className="object-cover object-[center_40%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-isle-ink/50 via-isle-ink/10 to-transparent" />
      </div>

      <Surfer />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pb-20 sm:pb-24">
        <h1 className="font-serif text-[4.25rem] sm:text-8xl md:text-9xl text-white font-normal tracking-[-0.03em] leading-[0.88]">
          Karukera
        </h1>
        <p className="text-white text-base sm:text-lg mt-6 font-light max-w-md drop-shadow-[0_1px_12px_rgba(20,34,40,0.55)]">
          {dict.hero.tagline}
        </p>
        <SeaSound listen={dict.hero.seaListen} quiet={dict.hero.seaQuiet} />
      </div>
    </section>
  );
}

function About({ dict }: { dict: Dict }) {
  return (
    <section className="py-28 sm:py-40 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-isle-ink leading-[1.1] tracking-[-0.02em]">
            {dict.about.title}
          </h2>
        </FadeIn>
        <FadeIn delay={120}>
          <p className="mt-12 text-lg sm:text-xl text-isle-tide leading-relaxed font-text">
            {dict.about.body}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function Projets({ dict }: { dict: Dict }) {
  return (
    <section id="projets" className="px-6 sm:px-10 pb-12 sm:pb-16 scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        {PROJECTS.map((p, i) => {
          const item = dict.projects.items[p.key];
          const name =
            p.key === "superpagr"
              ? "SuperPagr"
              : p.key === "lien"
                ? "Le Lien"
                : "OpenStats";
          return (
            <FadeIn key={p.key} delay={i * 80}>
              <article className="py-14 sm:py-16 border-t border-isle-mist">
                <h3 className="font-serif text-3xl sm:text-4xl text-isle-ink tracking-[-0.02em]">
                  {name}
                </h3>
                <p className="mt-3 text-sm text-isle-stone">{item.domain}</p>
                <p className="mt-6 text-lg text-isle-tide leading-relaxed max-w-2xl">
                  {item.text}
                </p>
                <div className="mt-7">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-isle-lagoon hover:text-isle-flame"
                    >
                      {dict.projects.visit}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  ) : (
                    <span className="text-sm text-isle-stone">
                      {dict.projects.soon}
                    </span>
                  )}
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

function Carnet({ locale, dict }: { locale: Locale; dict: Dict }) {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date))[0];
  if (!latest) return null;
  const meta = latest.meta[locale];

  return (
    <section className="relative min-h-[78vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/foret.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-isle-canopy via-isle-canopy/55 to-isle-canopy/15" />
      </div>
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <FadeIn>
          <Link href={`/${locale}/blog/${latest.slug}`} className="group block">
            <h2 className="font-serif text-3xl sm:text-5xl text-isle-salt leading-tight tracking-[-0.02em] group-hover:text-white transition-colors">
              {meta.title}
            </h2>
            <p className="mt-6 text-lg text-isle-salt/80 leading-relaxed font-text">
              {meta.excerpt}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm text-isle-sand">
              {dict.carnet.readMemo}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="mt-10 inline-block text-sm text-isle-salt/55 hover:text-isle-salt transition-colors"
          >
            {dict.carnet.all} →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function Vision({ dict }: { dict: Dict }) {
  return (
    <section className="relative h-[62vh] sm:h-[72vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/villa.webp"
          alt="Villa au bord de la mer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-isle-ink/55 via-isle-ink/20 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full">
          <FadeIn>
            <blockquote className="max-w-lg">
              <p className="font-serif text-xl sm:text-2xl md:text-[1.85rem] text-white leading-relaxed">
                {dict.vision.quote}
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const titles = {
    fr: {
      title: "Karukera — Julien Lelandais",
      description:
        "Médecin et builder. Studio Karukera : santé, software agentic, et kits d’agents (audit sécu Web + SaaS, secrétaire commercial).",
    },
    en: {
      title: "Karukera — Julien Lelandais",
      description:
        "Doctor and builder. Karukera studio: healthcare, agentic software, and agent kits (Web + SaaS security audit, sales secretary).",
    },
    es: {
      title: "Karukera — Julien Lelandais",
      description:
        "Médico y builder. Estudio Karukera: salud, software agentic, y kits de agentes (auditoría de seguridad Web + SaaS, secretaria comercial).",
    },
  } as const;
  const m = titles[locale];
  return {
    title: m.title,
    description: m.description,
    alternates: localeAlternates(locale),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE}/${locale}`,
      images: [ogImage("/images/og-default.jpg", m.title)],
    },
  };
}

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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Julien Lelandais",
          url: `${SITE}/${locale}`,
          jobTitle: "Médecin psychiatre",
          sameAs: ["https://x.com/cryptulien"],
        }}
      />
      <Nav locale={locale} dict={dict} floating />
      <main>
        <Hero dict={dict} />
        <About dict={dict} />
        <Projets dict={dict} />
        <Carnet locale={locale} dict={dict} />
        <Vision dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} year={year} />
    </>
  );
}
