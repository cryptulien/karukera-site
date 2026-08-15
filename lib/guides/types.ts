import type { Locale } from "@/lib/i18n";

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type GuideCopy = {
  keyword: string;
  metaTitle: string;
  metaDesc: string;
  title: string;
  lead: string;
  excerpt: string;
  readingTime: string;
  duration: string;
  when: string[];
  agents: string;
  skips: string[];
  launch: string;
  body: GuideBlock[];
  faq: { q: string; a: string }[];
};

export type GuideDef = {
  slug: string;
  modeId: string | null;
  published: string;
  related: string[];
  copy: Record<Locale, GuideCopy>;
};
