// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://borealnutrition.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Optionnel : tu peux bloquer des routes si tu en as
      // disallow: ["/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
