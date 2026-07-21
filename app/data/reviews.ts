import type { Locale } from "../i18n/routing";

type L = { en: string; ar: string };

interface RawReview {
  name: string;
  countryFlag: string;
  countryName: L;
  rating: number;
  text: L;
}

export interface Review {
  name: string;
  countryFlag: string;
  countryName: string;
  rating: number;
  text: string;
}

const rawReviews: RawReview[] = [
  {
    name: "Sarah M.",
    countryFlag: "🇬🇧",
    countryName: { en: "United Kingdom", ar: "المملكة المتحدة" },
    rating: 5,
    text: {
      en: "Amazing experience! Jamal customized the tour to our interests and showed us hidden gems we never would have found on our own.",
      ar: "تجربة رائعة! صمّم جمال الجولة حسب اهتماماتنا وأرانا كنوزاً خفية ما كنا لنجدها بأنفسنا أبداً.",
    },
  },
  {
    name: "Omar A.",
    countryFlag: "🇸🇦",
    countryName: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
    rating: 5,
    text: {
      en: "Professional, friendly, and very knowledgeable about the local culture. Highly recommend for families and solo travelers.",
      ar: "محترف وودود وواسع المعرفة بالثقافة المحلية. أنصح به بشدة للعائلات والمسافرين بمفردهم.",
    },
  },
  {
    name: "Lina K.",
    countryFlag: "🇩🇪",
    countryName: { en: "Germany", ar: "ألمانيا" },
    rating: 5,
    text: {
      en: "The mountain views were breathtaking. Jamal kept a perfect pace and shared wonderful stories throughout the trip.",
      ar: "كانت إطلالات الجبال آسرة. حافظ جمال على إيقاع مثالي وشاركنا قصصاً رائعة طوال الرحلة.",
    },
  },
  {
    name: "Carlos R.",
    countryFlag: "🇪🇸",
    countryName: { en: "Spain", ar: "إسبانيا" },
    rating: 5,
    text: {
      en: "Great itinerary and smooth organization. We loved the sunset boat cruise — memories for a lifetime!",
      ar: "برنامج رائع وتنظيم سلس. أحببنا رحلة القارب وقت الغروب — ذكريات تدوم مدى الحياة!",
    },
  },
  {
    name: "Emily T.",
    countryFlag: "🇺🇸",
    countryName: { en: "United States", ar: "الولايات المتحدة" },
    rating: 5,
    text: {
      en: "Quick to respond and very accommodating. The wadi swimming was the best part of our trip to Oman!",
      ar: "سريع في الرد ومتعاون للغاية. كانت السباحة في الوادي أجمل جزء في رحلتنا إلى عُمان!",
    },
  },
  {
    name: "Noah B.",
    countryFlag: "🇨🇦",
    countryName: { en: "Canada", ar: "كندا" },
    rating: 5,
    text: {
      en: "Excellent guide with deep local knowledge. We felt safe, welcomed, and inspired throughout the tour.",
      ar: "مرشد ممتاز بمعرفة محلية عميقة. شعرنا بالأمان والترحيب والإلهام طوال الجولة.",
    },
  },
  {
    name: "Fatima A.",
    countryFlag: "🇦🇪",
    countryName: { en: "UAE", ar: "الإمارات العربية المتحدة" },
    rating: 5,
    text: {
      en: "Exceptional Muscat tour! Jamal knows every corner of the city and gave us an unforgettable experience.",
      ar: "جولة استثنائية في مسقط! يعرف جمال كل ركن من المدينة ومنحنا تجربة لا تُنسى.",
    },
  },
  {
    name: "Marco F.",
    countryFlag: "🇮🇹",
    countryName: { en: "Italy", ar: "إيطاليا" },
    rating: 5,
    text: {
      en: "One of the best tour guides I've ever met. Professional and friendly at the same time.",
      ar: "من أفضل المرشدين السياحيين الذين قابلتهم على الإطلاق. محترف وودود في آنٍ واحد.",
    },
  },
];

export function getReviews(locale: Locale): Review[] {
  return rawReviews.map((r) => ({
    name: r.name,
    countryFlag: r.countryFlag,
    countryName: r.countryName[locale],
    rating: r.rating,
    text: r.text[locale],
  }));
}
