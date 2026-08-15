import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { posts } from "@/lib/posts";
import { SITE } from "@/lib/seo";

const PATHS = ["", "/agents", "/agents/security", "/agents/secretary", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of PATHS) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/agents" ? 0.9 : 0.8,
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

  return entries;
}
