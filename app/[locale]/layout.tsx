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
import { siteUrl, siteName, buildAlternates } from "../siteConfig";

const cairo = Cairo({ subsets: ["arabic", "latin"], display: "swap" });

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
    // Homepage alternates. Child pages MUST override this with their own path via
    // buildAlternates() — otherwise they inherit this homepage canonical.
    alternates: buildAlternates(locale, ""),
    openGraph: {
      type: "website",
      siteName,
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
  const tMeta = await getTranslations("metadata.home");
  const dir = locale === "ar" ? "rtl" : "ltr";

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteName,
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/images/hero-oman.jpg`,
    description: tMeta("description"),
    telephone: "+968 9926 6868",
    email: "jamal3929@hotmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Muscat",
      addressCountry: "OM",
    },
    areaServed: { "@type": "Country", name: "Oman" },
    sameAs: ["https://www.instagram.com/tour_guide_jamal_oman"],
    priceRange: "$$",
  };

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${locale === "ar" ? cairo.className : ""} bg-gradient-to-b from-gray-50 to-white text-gray-800 antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
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
