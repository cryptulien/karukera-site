import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, Shippori_Mincho } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import "../globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const META: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Karukera — Julien Lelandais",
    description:
      "Médecin, entrepreneur, builder. Le software agentic AI-first en santé. Projets, écrits et vision.",
  },
  en: {
    title: "Karukera — Julien Lelandais",
    description:
      "Doctor, entrepreneur, builder. Agentic, AI-first software for healthcare. Projects, writing and vision.",
  },
  es: {
    title: "Karukera — Julien Lelandais",
    description:
      "Médico, emprendedor, builder. Software agentic AI-first para la salud. Proyectos, escritos y visión.",
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
    icons: { icon: "/images/favicon.ico" },
    openGraph: {
      title: m.title,
      description: m.description,
      type: "website",
      url: `https://karukera.xyz/${locale}`,
      images: [
        {
          url: "/images/plage.webp",
          width: 1200,
          height: 630,
          alt: "Plage de Guadeloupe — Karukera",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/images/plage.webp"],
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
      className={`scroll-smooth ${sans.variable} ${serif.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
