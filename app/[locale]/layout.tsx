import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, Shippori_Mincho } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { ogImage } from "@/lib/share";
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
      className={`scroll-smooth ${sans.variable} ${serif.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
