import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cairo } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { routing } from "../i18n/routing";

const cairo = Cairo({ subsets: ["arabic", "latin"], display: "swap" });

// Set NEXT_PUBLIC_SITE_URL to the production domain so canonical/hreflang/OG
// tags use absolute URLs. Falls back to the Vercel project URL.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jamal-tours-v2.vercel.app";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Jamal Tours",
      title,
      description,
      url: `/${locale}`,
      locale: locale === "ar" ? "ar_OM" : "en_US",
      images: [
        {
          url: "/images/hero-oman.jpg",
          width: 1280,
          height: 800,
          alt: "Oman landscape",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero-oman.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${locale === "ar" ? cairo.className : ""} bg-gradient-to-b from-gray-50 to-white text-gray-800 antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
