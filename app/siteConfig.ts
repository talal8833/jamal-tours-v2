// Single source of truth for the site's canonical origin.
// Set NEXT_PUBLIC_SITE_URL in the hosting env; falls back to the production domain.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://jamaltours.com"
).replace(/\/+$/, "");

export const siteName = "Jamal Tours";

// Builds a page's self-referencing canonical + hreflang alternates for a given
// locale and path (path is "" for the homepage, "/about", "/tours/xyz", etc.).
// Every page must set this in its own generateMetadata; otherwise it inherits the
// layout's homepage canonical and Google treats it as a duplicate of the homepage.
export function buildAlternates(locale: string, path = "") {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      en: `/en${path}`,
      ar: `/ar${path}`,
      "x-default": `/en${path}`,
    },
  };
}
