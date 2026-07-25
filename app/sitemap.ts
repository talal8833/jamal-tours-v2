import type { MetadataRoute } from "next";
import { routing } from "./i18n/routing";
import { getTourSlugs } from "./data/tours";
import { siteUrl } from "./siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/tours", "/about", "/reviews", "/contact"];
  const tourPaths = getTourSlugs().map((slug) => `/tours/${slug}`);
  const paths = [...staticPaths, ...tourPaths];

  const now = new Date();

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ...Object.fromEntries(
            routing.locales.map((l) => [l, `${siteUrl}/${l}${path}`])
          ),
          "x-default": `${siteUrl}/${routing.defaultLocale}${path}`,
        },
      },
    }))
  );
}
