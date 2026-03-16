import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://karukera.xyz"),
  title: "KARUKERA | Julien Lelandais",
  description:
    "Portfolio personnel de Julien Lelandais — médecin, entrepreneur et builder. KARUKERA présente SuperPagr, Le Lien et Le Brasero Français.",
  keywords: [
    "Julien Lelandais",
    "KARUKERA",
    "portfolio",
    "SuperPagr",
    "Le Lien",
    "Le Brasero Français",
    "psychiatre",
    "entrepreneur",
    "builder",
  ],
  openGraph: {
    title: "KARUKERA | Julien Lelandais",
    description:
      "Portfolio personnel de Julien Lelandais — médecin, entrepreneur et builder.",
    type: "website",
    url: "https://karukera.xyz",
  },
  twitter: {
    card: "summary_large_image",
    title: "KARUKERA | Julien Lelandais",
    description:
      "Portfolio personnel de Julien Lelandais — médecin, entrepreneur et builder.",
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
