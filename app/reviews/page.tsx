import { Star, Quote } from "lucide-react";
import Link from "next/link";

type Review = {
  name: string;
  countryFlag: string;
  countryName: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Sarah M.",
    countryFlag: "🇬🇧",
    countryName: "United Kingdom",
    rating: 5,
    text: "Amazing experience! Jamal customized the tour to our interests and showed us hidden gems we never would have found on our own.",
  },
  {
    name: "Omar A.",
    countryFlag: "🇸🇦",
    countryName: "Saudi Arabia",
    rating: 5,
    text: "Professional, friendly, and very knowledgeable about the local culture. Highly recommend for families and solo travelers.",
  },
  {
    name: "Lina K.",
    countryFlag: "🇩🇪",
    countryName: "Germany",
    rating: 5,
    text: "The mountain views were breathtaking. Jamal kept a perfect pace and shared wonderful stories throughout the trip.",
  },
  {
    name: "Carlos R.",
    countryFlag: "🇪🇸",
    countryName: "Spain",
    rating: 5,
    text: "Great itinerary and smooth organization. We loved the sunset boat cruise — memories for a lifetime!",
  },
  {
    name: "Emily T.",
    countryFlag: "🇺🇸",
    countryName: "United States",
    rating: 5,
    text: "Quick to respond and very accommodating. The wadi swimming was the best part of our trip to Oman!",
  },
  {
    name: "Noah B.",
    countryFlag: "🇨🇦",
    countryName: "Canada",
    rating: 5,
    text: "Excellent guide with deep local knowledge. We felt safe, welcomed, and inspired throughout the tour.",
  },
  {
    name: "Fatima A.",
    countryFlag: "🇦🇪",
    countryName: "UAE",
    rating: 5,
    text: "Exceptional Muscat tour! Jamal knows every corner of the city and gave us an unforgettable experience.",
  },
  {
    name: "Marco F.",
    countryFlag: "🇮🇹",
    countryName: "Italy",
    rating: 5,
    text: "One of the best tour guides I've ever met. Professional and friendly at the same time.",
  },
];

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

export default function ReviewsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            Customer Reviews
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Traveler Testimonials</h1>
          <p className="mt-4 text-emerald-100 text-lg max-w-2xl">
            See what travelers are saying about their experiences with Jamal Tours.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-emerald-100" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{r.name}</p>
                  <p className="text-sm text-gray-500">
                    {r.countryFlag} {r.countryName}
                  </p>
                </div>
              </div>

              <Stars value={r.rating} />
              <p className="mt-4 text-gray-700 leading-relaxed">{r.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Have you tried my tours?
          </h2>
          <p className="mt-4 text-gray-600">
            Share your experience! I'd love to hear your feedback to improve the experience for future guests.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-8 py-4 font-semibold hover:bg-emerald-700 transition-all shadow-lg"
          >
            Share Your Experience
          </Link>
        </div>
      </section>
    </main>
  );
}
