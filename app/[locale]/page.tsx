import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "../components/Nav";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary, type Dict } from "@/dictionaries";
import { posts } from "@/lib/posts";
import { JsonLd } from "../components/JsonLd";
import { SITE, localeAlternates } from "@/lib/seo";
import { ogImage } from "@/lib/share";

type ProjectKey = "superpagr" | "lien" | "openstats";

const PROJECTS: {
  key: ProjectKey;
  name: string;
  url?: string;
}[] = [
  { key: "superpagr", name: "SuperPagr", url: "https://superpagr.com" },
  { key: "lien", name: "Le Lien" },
  { key: "openstats", name: "OpenStats", url: "https://openstats.karukera.xyz" },
];

const px = "object-cover [image-rendering:pixelated]";

function Scene({
  src,
  alt,
  priority,
  children,
  id,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="relative min-h-[100svh] flex items-end overflow-hidden scroll-mt-0"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={px}
        sizes="100vw"
      />
      <div className="relative z-10 w-full px-[6vw] pb-[10vh] pt-28 text-white">
        {children}
      </div>
    </section>
  );
}

function HomeVoyage({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date))[0];
  const meta = latest?.meta[locale];

  return (
    <main>
      <Scene src="/images/voyage/arrivee.jpg" alt="" priority>
        <h1 className="font-serif text-6xl sm:text-7xl md:text-[6rem] font-normal tracking-[-0.03em] leading-[0.9] drop-shadow-[0_2px_16px_rgba(20,34,40,0.55)]">
          Karukera
        </h1>
        <p className="mt-5 max-w-md text-base sm:text-lg font-sans drop-shadow-[0_1px_12px_rgba(20,34,40,0.55)]">
          {dict.hero.arrive}
        </p>
      </Scene>

      <Scene src="/images/voyage/iles.jpg" alt="" id="projets">
        <div className="bg-gradient-to-t from-[#0a2837]/50 to-transparent -mx-[6vw] px-[6vw] pt-24">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-[-0.02em] drop-shadow-[0_2px_12px_rgba(8,24,32,0.5)]">
            {dict.voyage.islandsTitle}
          </h2>
          <p className="mt-4 max-w-xl text-lg font-sans drop-shadow-[0_1px_10px_rgba(8,24,32,0.5)]">
            {dict.voyage.islandsLead}
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3 font-sans">
            {PROJECTS.map((p) => {
              const item = dict.projects.items[p.key];
              const body = (
                <>
                  <span className="block text-lg">{p.name}</span>
                  <span className="block text-sm text-white/80">
                    {item.domain}
                  </span>
                </>
              );
              return (
                <li key={p.key}>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80"
                    >
                      {body}
                    </a>
                  ) : (
                    <span>
                      {body}
                      <span className="mt-1 block text-sm text-white/65">
                        {dict.projects.soon}
                      </span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Scene>

      <Scene src="/images/voyage/plongee.jpg" alt="" id="eau">
        <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-[-0.02em] drop-shadow-[0_2px_14px_rgba(8,24,32,0.65)]">
          {dict.voyage.waterTitle}
        </h2>
        <p className="mt-4 max-w-md text-lg font-sans drop-shadow-[0_2px_14px_rgba(8,24,32,0.65)]">
          {dict.voyage.waterLead}
        </p>
      </Scene>

      <Scene src="/images/voyage/sous-leau.jpg" alt="" id="carnet">
        <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-[-0.02em] drop-shadow-[0_2px_14px_rgba(8,24,32,0.65)]">
          {dict.voyage.deepTitle}
        </h2>
        {meta && latest ? (
          <div className="mt-5 max-w-lg">
            <p className="text-lg font-sans drop-shadow-[0_2px_14px_rgba(8,24,32,0.65)]">
              {meta.excerpt}
            </p>
            <Link
              href={`/${locale}/blog/${latest.slug}`}
              className="mt-6 inline-block font-sans text-sm text-white/90 underline-offset-4 hover:underline"
            >
              {dict.carnet.readMemo} →
            </Link>
          </div>
        ) : (
          <p className="mt-4 max-w-md text-lg font-sans">
            {dict.voyage.deepLead}
          </p>
        )}
        <Link
          href={`/${locale}/blog`}
          className="mt-6 block font-sans text-sm text-white/70 hover:text-white"
        >
          {dict.carnet.all} →
        </Link>
      </Scene>

      <footer className="bg-[#071820] text-[#9ec0c8] px-[6vw] py-12 font-sans text-sm flex flex-wrap gap-x-6 gap-y-3">
        <Link href={`/${locale}/agents`} className="hover:text-white">
          {dict.footer.agents}
        </Link>
        <a href="https://x.com/cryptulien" className="hover:text-white">
          {dict.footer.follow}
        </a>
        <a href="mailto:julienlelandais@me.com" className="hover:text-white">
          {dict.footer.write}
        </a>
      </footer>
    </main>
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
        "Médecin et builder. Studio Karukera : santé, software agentic, et kits d’agents.",
    },
    en: {
      title: "Karukera — Julien Lelandais",
      description:
        "Doctor and builder. Karukera studio: healthcare, agentic software, and agent kits.",
    },
    es: {
      title: "Karukera — Julien Lelandais",
      description:
        "Médico y builder. Estudio Karukera: salud, software agentic, y kits de agentes.",
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
      images: [ogImage("/images/voyage/arrivee.jpg", m.title)],
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
      <HomeVoyage locale={locale} dict={dict} />
    </>
  );
}
