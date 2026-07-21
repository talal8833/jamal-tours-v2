import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts");

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "337decc8-edd7-410a-8d78-120b61a9a5d4-00-2aixbmfhskrhb.sisko.replit.dev",
    "*.replit.dev",
    "*.repl.co",
  ],
};

export default withNextIntl(nextConfig);
