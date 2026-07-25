// Single source of truth for the site's canonical origin.
// Set NEXT_PUBLIC_SITE_URL in the hosting env; falls back to the production domain.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://jamaltours.com"
).replace(/\/+$/, "");

export const siteName = "Jamal Tours";
