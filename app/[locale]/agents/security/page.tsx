import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { SalesNav } from "../../../components/SalesNav";
import { SalesFooter } from "../../../components/SalesFooter";
import { BuyButton } from "../../../components/BuyButton";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Kit audit sécu — Karukera",
    description:
      "Un audit SaaS complet, sans recruter un pentester. ZIP, OpenRouter, rapport priorisé.",
    alternates: { canonical: `https://karukera.xyz/${locale}/agents/security` },
  };
}

const REVIEWS = [
  {
    name: "Léa M.",
    role: "Freelance AppSec",
    quote:
      "J’ai sorti 11 findings Confirmé en une après-midi. La QA a bloqué deux hypothèses que j’aurais écrites trop vite.",
  },
  {
    name: "Marc T.",
    role: "Founder, SaaS B2B",
    quote:
      "Une liste priorisée au lieu d’un PDF de 80 pages. L’authz multi-tenant était le vrai trou.",
  },
  {
    name: "Inès K.",
    role: "Directrice d’agence",
    quote:
      "Mes juniors suivent la squad. Je relis le rapport. Le statut Non testé est aussi utile que le Confirmé.",
  },
];

const STEPS = [
  {
    n: "1",
    t: "Tu récupères le ZIP",
    b: "Paiement Stripe. Lien de download. START-HERE.md en premier.",
  },
  {
    n: "2",
    t: "Tu mets ta clé OpenRouter",
    b: "Sans clé, le kit s’arrête. 30–50 € de crédits = 1 à 3 audits complets.",
  },
  {
    n: "3",
    t: "Tu lances une mission",
    b: "« Audit Complet SaaS sur https://… ». Uniquement un scope à toi.",
  },
  {
    n: "4",
    t: "Tu lis ce que la QA a laissé passer",
    b: "Si elle refuse, il n’y a pas de rapport. C’est le produit.",
  },
];

const FAQ = [
  {
    q: "Faut-il savoir coder ?",
    a: "Non. Prompts, configs, templates. Zéro code obligatoire.",
  },
  {
    q: "C’est un scanner en ligne ?",
    a: "Non. Le ZIP tourne chez toi. Karukera ne voit pas ta cible.",
  },
  {
    q: "Je peux l’utiliser sur n’importe quel site ?",
    a: "Uniquement un système que tu as l’autorisation d’auditer.",
  },
  {
    q: "Pourquoi OpenRouter ?",
    a: "Les modèles qui ne refusent pas un audit sécu. DeepSeek, GLM. 30–50 € de crédits pour 1 à 3 audits complets.",
  },
];

export default async function SecurityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#161616] pb-24 md:pb-0">
      <SalesNav locale={locale} dict={dict} />
      <main>
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-[2.1rem] sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.08]">
              Un audit SaaS complet, sans recruter un pentester.
            </h1>
            <p className="mt-6 text-lg text-[#5C5954] leading-relaxed">
              Upload le ZIP dans Cursor, Claude Code, Codex ou Hermes. Tes
              agents sortent un rapport priorisé — preuves, statuts, QA. Rien
              n’est hébergé chez Karukera.
            </p>
            <BuyButton locale={locale} dict={dict} className="mt-8" />
            <p className="mt-3 text-sm text-[#8A857D]">{dict.shop.priceNote}</p>
          </div>
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_16px_50px_-20px_rgba(22,22,22,0.4)]">
            <Image
              src="/images/kit-laptop.jpg"
              alt="Rapport d’audit sur un laptop"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">
          <p className="text-xs text-[#E23B2E] mb-5">
            Wording d’exemple — avis à remplacer par de vrais clients.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_-18px_rgba(22,22,22,0.3)]"
              >
                <blockquote className="text-[15px] leading-relaxed">
                  « {r.quote} »
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium">
                  {r.name}
                  <span className="block font-normal text-[#8A857D]">{r.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Le scanner te donne 200 alertes. Toi tu dois livrer 10 décisions.
          </h2>
          <p className="mt-5 text-[#5C5954] leading-relaxed">
            Sur un SaaS, le trou n’est plus seulement un header manquant. C’est
            l’IDOR entre deux tenants. Le tool MCP trop permissif. Le finding
            que personne n’a osé marquer Hypothèse.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-16 grid md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src="/images/kit-folder.jpg"
              alt="Dossier du kit dans le Finder"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src="/images/kit-finding.jpg"
              alt="Fiche de finding avec statut et preuve"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">Quatre pas.</h2>
          <ol className="mt-8 divide-y divide-black/5">
            {STEPS.map((s) => (
              <li key={s.n} className="py-5 grid grid-cols-[2rem_1fr] gap-4">
                <span className="text-[#E23B2E] font-semibold">{s.n}</span>
                <div>
                  <p className="font-medium">{s.t}</p>
                  <p className="mt-1 text-sm text-[#5C5954] leading-relaxed">
                    {s.b}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-[0_12px_40px_-20px_rgba(22,22,22,0.25)]">
            <p className="text-sm text-[#5C5954]">Le kit, aujourd’hui</p>
            <p className="mt-2 text-5xl font-semibold tracking-tight">197 €</p>
            <p className="mt-3 text-[#5C5954] leading-relaxed">
              Paiement unique. Squad, règles, modes, templates de rapport,
              compagnon d’implémentation.
            </p>
            <BuyButton locale={locale} dict={dict} className="mt-8" />
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Avant que tu paies.
          </h2>
          <dl className="mt-8 divide-y divide-black/5">
            {FAQ.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm text-[#5C5954] leading-relaxed">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
          <div className="rounded-3xl bg-[#1C1B19] text-white px-8 py-12 sm:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Lance la squad sur un scope à toi.
              </h2>
              <p className="mt-3 text-white/60">
                197 €. Un ZIP. Une clé OpenRouter. Un rapport, ou le silence de
                la QA.
              </p>
            </div>
            <BuyButton locale={locale} dict={dict} />
          </div>
        </section>
      </main>
      <SalesFooter locale={locale} dict={dict} year={year} />
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-black/5 bg-[#F6F4EF]/95 backdrop-blur-md px-4 py-3">
        <BuyButton locale={locale} dict={dict} />
      </div>
    </div>
  );
}
