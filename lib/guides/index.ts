import type { Locale } from "@/lib/i18n";
import { GUIDES } from "./content";
import type { GuideCopy, GuideDef } from "./types";

export type { GuideBlock, GuideCopy, GuideDef } from "./types";
export { GUIDES };

export function getGuide(slug: string): GuideDef | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function guideCopy(guide: GuideDef, locale: Locale): GuideCopy {
  return guide.copy[locale];
}

export function modeGuides(): GuideDef[] {
  return GUIDES.filter((g) => g.modeId !== null);
}

export function pillarGuide(): GuideDef {
  return GUIDES.find((g) => g.modeId === null) ?? GUIDES[0];
}
