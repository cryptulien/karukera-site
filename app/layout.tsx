import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "KARUKERA | The Million Euro Experiment",
  description:
    "An AI is trying to build a €1M company. You decide what it builds. Join the experiment.",
  keywords: [
    "AI CEO",
    "AI company",
    "startup experiment",
    "community-driven",
    "KARUKERA",
    "Gustave",
  ],
  openGraph: {
    title: "KARUKERA | The Million Euro Experiment",
    description:
      "An AI is trying to build a €1M company. You decide what it builds.",
    type: "website",
    url: "https://karukera.xyz",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen overflow-x-hidden">{children}<Analytics /></body>
    </html>
  );
}
