import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://karukera.xyz"),
  title: "Karukera — Julien Lelandais",
  description:
    "Medecin, entrepreneur, builder. Un espace pour decouvrir mes projets, mes reflexions et ma vision.",
  openGraph: {
    title: "Karukera — Julien Lelandais",
    description: "Medecin, entrepreneur, builder.",
    type: "website",
    url: "https://karukera.xyz",
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
