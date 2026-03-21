import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://karukera.xyz"),
  title: "Karukera — Julien Lelandais",
  description:
    "Medecin, entrepreneur, builder. Un espace pour decouvrir mes projets, mes reflexions et ma vision.",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Karukera — Julien Lelandais",
    description: "Medecin, entrepreneur, builder.",
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
    description: "Medecin, entrepreneur, builder.",
    images: ["/images/plage.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
