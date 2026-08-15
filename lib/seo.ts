import type { Locale } from "@/lib/i18n";

export const SITE = "https://karukera.xyz";

/** path starts with / and has no locale, e.g. `/agents/security` or `` for home */
export function localeAlternates(locale: Locale, path = "") {
  const suffix = path === "/" ? "" : path;
  return {
    canonical: `${SITE}/${locale}${suffix}`,
    languages: {
      fr: `${SITE}/fr${suffix}`,
      en: `${SITE}/en${suffix}`,
      es: `${SITE}/es${suffix}`,
      "x-default": `${SITE}/fr${suffix}`,
    },
  };
}

export function localizedUrl(locale: Locale, path = "") {
  const suffix = path === "/" ? "" : path;
  return `${SITE}/${locale}${suffix}`;
}
