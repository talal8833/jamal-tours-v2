import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "always",
  // First-time visitors always land on English (no Accept-Language / cookie
  // auto-detection); they switch to Arabic via the language switcher.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
