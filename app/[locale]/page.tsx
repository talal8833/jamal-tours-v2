import Image from "next/image";
import { ShieldCheck, Car, Sparkles, MapPin, Star, ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../i18n/navigation";
import type { Locale } from "../i18n/routing";
import { getTours } from "../data/tours";
import { getReviews } from "../data/reviews";
import TourImageCarousel from "../components/TourImageCarousel";

const benefitIcons = [ShieldCheck, Car, Sparkles, MapPin];

type BenefitCard = { title: string; desc: string };

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < value ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  const popularTours = getTours(locale).slice(0, 3);
  const reviews = getReviews(locale).slice(0, 3);
  const benefits = t.raw("benefits") as BenefitCard[];

  const waHref = `https://wa.me/96899266868?text=${encodeURIComponent(
    t("ctaWhatsappText")
  )}`;

  return (
    <main>
      <section className="relative w-full min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-oman.jpg"
            alt="Oman landscape"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm border border-emerald-400/30">
              {t("heroBadge")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t("heroTitleLine1")}
              <span className="block text-emerald-400 mt-2">{t("heroTitleLine2")}</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              {t("heroSubtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-white font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-0.5"
              >
                {t("exploreTours")}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/20 transition-all"
              >
                {t("ctaContactPage")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/jamal-tour-guide.avif.avif"
                alt="Jamal - Tour Guide"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -end-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{t("experienceYears")}</p>
                <p className="text-sm text-gray-500">{t("experienceLabel")}</p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
              {t("aboutLabel")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              {t("aboutHeading")}
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">{t("aboutParagraph")}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-2xl font-bold text-emerald-600">{t("statToursValue")}</p>
                <p className="text-sm text-gray-600">{t("statToursLabel")}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-2xl font-bold text-emerald-600">
                  {t("statSatisfactionValue")}
                </p>
                <p className="text-sm text-gray-600">{t("statSatisfactionLabel")}</p>
              </div>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition"
            >
              {t("learnMore")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
              {t("toursLabel")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              {t("toursHeading")}
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t("toursSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTours.map((tour) => (
              <article
                key={tour.slug}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <TourImageCarousel
                    images={tour.images}
                    alt={tour.name}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 start-4 z-20 bg-white/90 backdrop-blur-sm text-emerald-700 font-bold px-4 py-1.5 rounded-full text-sm">
                    {tour.price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition">
                    {tour.name}
                  </h3>
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition"
                  >
                    {t("viewDetails")}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-600 text-emerald-600 px-8 py-3 font-semibold hover:bg-emerald-600 hover:text-white transition-all"
            >
              {t("viewAllTours")}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
            {t("benefitsLabel")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            {t("benefitsHeading")}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => {
            const Icon = benefitIcons[i];
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition">
                  <Icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="mt-5 font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-emerald-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
              {t("reviewsLabel")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              {t("reviewsHeading")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition-all duration-300"
              >
                <Stars value={r.rating} />
                <p className="mt-4 text-gray-700 leading-relaxed">{r.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                    {r.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-gray-900">{r.name}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition"
            >
              {t("viewAllReviews")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 start-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 end-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t("ctaHeading")}</h2>
          <p className="mt-4 text-emerald-100 text-lg">{t("ctaSubtitle")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-emerald-700 px-8 py-4 font-bold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {t("ctaBookNow")}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/20 transition-all"
            >
              {t("ctaContactPage")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
