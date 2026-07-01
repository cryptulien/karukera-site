import type { Locale } from "@/lib/i18n";
import fr from "./fr";
import en from "./en";
import es from "./es";

export type Dict = typeof fr;

const dictionaries: Record<Locale, Dict> = { fr, en, es };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}
