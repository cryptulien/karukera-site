"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({
  locale,
  tone = "dark",
}: {
  locale: Locale;
  tone?: "dark" | "light";
}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    // remplace le préfixe de langue dans le chemin courant
    const rest = pathname.replace(/^\/(fr|en|es)(?=\/|$)/, "") || "/";
    const target = `/${next}${rest === "/" ? "" : rest}`;
    // mémorise le choix (1 an) pour outrepasser la détection géo
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(target || `/${next}`);
  }

  const base =
    tone === "light" ? "text-white/60" : "text-sei-stone";
  const active =
    tone === "light" ? "text-white" : "text-sei-ink";

  return (
    <div className={`flex items-center gap-1 text-xs tracking-wide ${base}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-40">/</span>}
          <button
            type="button"
            onClick={() => switchTo(l)}
            aria-current={l === locale}
            className={`transition-colors hover:${
              tone === "light" ? "text-white" : "text-sei-vermilion"
            } ${l === locale ? active : ""}`}
          >
            {localeNames[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
