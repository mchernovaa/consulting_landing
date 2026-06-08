import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          ru: `${siteUrl}/`,
          en: `${siteUrl}/en`,
          es: `${siteUrl}/es`
        }
      }
    },
    {
      url: `${siteUrl}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          ru: `${siteUrl}/`,
          en: `${siteUrl}/en`,
          es: `${siteUrl}/es`
        }
      }
    },
    {
      url: `${siteUrl}/es`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          ru: `${siteUrl}/`,
          en: `${siteUrl}/en`,
          es: `${siteUrl}/es`
        }
      }
    }
  ];

  return entries;
}
