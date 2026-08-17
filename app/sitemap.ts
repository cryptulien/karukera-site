import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { posts } from "@/lib/posts";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/seo";

const PATHS = [
  "",
  "/agents",
  "/agents/security",
  "/agents/security/kit",
  "/agents/secretary",
  "/guides",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of PATHS) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority:
          path === "" ? 1 : path === "/agents" ? 0.9 : path === "/guides" ? 0.85 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE}/${l}${path}`]),
          ),
        },
      });
    }
  }

  for (const post of posts) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "yearly",
        priority: 0.5,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE}/${l}/blog/${post.slug}`]),
          ),
        },
      });
    }
  }

  for (const guide of GUIDES) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE}/${locale}/guides/${guide.slug}`,
        lastModified: new Date(guide.published),
        changeFrequency: "monthly",
        priority: guide.modeId ? 0.75 : 0.85,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE}/${l}/guides/${guide.slug}`]),
          ),
        },
      });
    }
  }

  return entries;
}
