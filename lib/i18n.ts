export const locales = ["fr", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

/** Libellé court (sélecteur) */
export const localeNames: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  es: "ES",
};

/** Libellé complet */
export const localeFullNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
