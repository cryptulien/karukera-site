import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Young_Serif, Bricolage_Grotesque, Literata } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { ogImage } from "@/lib/share";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const text = Literata({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const META: Record<Locale, { title: string; description: string }> = {
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
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = isLocale(locale) ? META[locale] : META.fr;
  return {
    metadataBase: new URL("https://karukera.xyz"),
    title: m.title,
    description: m.description,
    icons: {
      icon: [
        { url: "/images/favicon.ico", sizes: "48x48" },
        { url: "/images/icon-32.png", type: "image/png", sizes: "32x32" },
        { url: "/images/icon-192.png", type: "image/png", sizes: "192x192" },
      ],
      apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }],
    },
    openGraph: {
      title: m.title,
      description: m.description,
      type: "website",
      url: `https://karukera.xyz/${locale}`,
      images: [ogImage("/images/og-default.jpg", "Karukera — Julien Lelandais")],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/images/og-default.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`scroll-smooth ${sans.variable} ${serif.variable} ${text.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: Karukera is a place you enter, not a site you browse. It refuses the Japanese washi seal and the SaaS card grid.
OWN-WORLD: mineral verandah field, lagoon ink, flamboyant as the only warm accent, Young Serif + Bricolage, album plates.
STORY: the visitor has time; they can name Julien, a project, and — if they came to buy — a kit family.
FIRST VIEWPORT: full-bleed beach plate, horizon intact, wordmark, quiet tagline, distant surfer, optional sea.
FORM: one territory, two rooms; butterfly breathed, never drawn.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
