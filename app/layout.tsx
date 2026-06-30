import type { Metadata } from "next";
import { Space_Grotesk, Shippori_Mincho } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://karukera.xyz"),
  title: "Karukera — Julien Lelandais",
  description:
    "Médecin, entrepreneur, builder. Un logiciel de santé agentic, AI-first. Projets, écrits et vision.",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Karukera — Julien Lelandais",
    description: "Médecin, entrepreneur, builder. Le software agentic AI-first en santé.",
    type: "website",
    url: "https://karukera.xyz",
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
    title: "Karukera — Julien Lelandais",
    description: "Médecin, entrepreneur, builder. Le software agentic AI-first en santé.",
    images: ["/images/plage.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`scroll-smooth ${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
