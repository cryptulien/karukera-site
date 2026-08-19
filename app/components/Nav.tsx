"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav({
  locale,
  dict,
  floating = false,
}: {
  locale: Locale;
  dict: Dict;
  floating?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!floating) return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [floating]);

  const docked = !floating || scrolled;
  const skin = docked
    ? "bg-isle-salt/88 backdrop-blur-sm border-b border-isle-mist/70"
    : "bg-transparent";
  const text = docked ? "text-isle-ink" : "text-white";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${skin}`}>
      <nav
        className={`max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between ${text}`}
      >
        <Link
          href={`/${locale}`}
          className={`font-serif text-lg tracking-wide hover:opacity-70 transition-opacity ${
            !docked ? "drop-shadow-[0_1px_8px_rgba(20,34,40,0.35)]" : ""
          }`}
        >
          Karukera
        </Link>
        <div className="flex items-center gap-3 sm:gap-7 text-sm">
          <Link
            href={`/${locale}#projets`}
            className="hidden sm:inline py-2 opacity-80 hover:opacity-100 transition-opacity"
          >
            {dict.nav.projects}
          </Link>
          <Link
            href={`/${locale}/agents`}
            className="py-2 opacity-80 hover:opacity-100 transition-opacity"
          >
            {dict.nav.agents}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="hidden sm:inline py-2 opacity-80 hover:opacity-100 transition-opacity"
          >
            {dict.nav.carnet}
          </Link>
          <span
            className={`h-3 w-px ${docked ? "bg-isle-mist" : "bg-white/30"}`}
            aria-hidden
          />
          <LanguageSwitcher locale={locale} tone={docked ? "dark" : "light"} />
        </div>
      </nav>
    </header>
  );
}
