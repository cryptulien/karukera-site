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
    const rest = pathname.replace(/^\/(fr|en|es)(?=\/|$)/, "") || "/";
    const target = `/${next}${rest === "/" ? "" : rest}`;
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(target || `/${next}`);
  }

  const base = tone === "light" ? "text-white/60" : "text-isle-stone";
  const active = tone === "light" ? "text-white" : "text-isle-ink";
  const hover = tone === "light" ? "hover:text-white" : "hover:text-isle-flame";

  return (
    <div className={`flex items-center gap-1 text-xs tracking-wide ${base}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-40">/</span>}
          <button
            type="button"
            onClick={() => switchTo(l)}
            aria-current={l === locale}
            className={`min-h-11 min-w-8 px-1 transition-colors ${hover} ${
              l === locale ? active : ""
            }`}
          >
            {localeNames[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
