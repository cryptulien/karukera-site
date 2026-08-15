import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/*/agents/thanks"] },
    sitemap: "https://karukera.xyz/sitemap.xml",
    host: "https://karukera.xyz",
  };
}
