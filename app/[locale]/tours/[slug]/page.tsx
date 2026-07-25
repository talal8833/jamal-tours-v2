import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, Users, MapPin, ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { routing, type Locale } from "../../../i18n/routing";
import { getTour, getTourSlugs } from "../../../data/tours";
import TourGallery from "../../../components/TourGallery";
import { siteUrl, siteName } from "../../../siteConfig";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getTourSlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = getTour(slug, locale);
  if (!tour) return {};
  return { title: `${tour.name} | Jamal Tours` };
}

export default async function TourDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const tour = getTour(slug, locale);

  if (!tour) return notFound();

  const t = await getTranslations("tourDetail");
  const tg = await getTranslations("gallery");

  const waPhone = "96899266868";
  const waText = t("whatsappText", { tourName: tour.name });
  const whatsAppUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;
  const priceValue = tour.price.replace(/^From /, "").replace(/^يبدأ من /, "");

  const priceMatch = tour.price.match(/\d+/);
  const tourJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: tour.name,
    description: tour.description,
    image: tour.images.map((img) => `${siteUrl}${img}`),
    brand: { "@type": "Brand", name: siteName },
    ...(priceMatch
      ? {
          offers: {
            "@type": "Offer",
            price: priceMatch[0],
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${siteUrl}/${locale}/tours/${tour.slug}`,
          },
        }
      : {}),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }}
      />
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={tour.images[0]}
          alt={tour.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 start-0 end-0 max-w-6xl mx-auto px-6 pb-10">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {t("backToTours")}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{tour.name}</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-white/90 text-sm">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {tour.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {tour.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {tour.groupSize}
            </span>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{tg("photos")}</h2>
              <TourGallery images={tour.images} alt={tour.name} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("aboutThisTour")}</h2>
              {tour.longDescription.map((p, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t("whatsIncluded")}</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {tour.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500">{t("startingFrom")}</p>
                <p className="text-4xl font-bold text-emerald-600 mt-1">{priceValue}</p>
              </div>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 py-4 text-white font-semibold hover:bg-emerald-700 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                {t("bookViaWhatsApp")}
              </a>

              <p className="text-center text-sm text-gray-500 mt-4">{t("customizeText")}</p>

              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center w-full rounded-xl border-2 border-emerald-600 py-3 text-emerald-600 font-semibold hover:bg-emerald-50 transition"
              >
                {t("contactPage")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
