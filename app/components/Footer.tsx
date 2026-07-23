import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Jamal Tours</span>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("quickLinksHeading")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tours" className="text-emerald-100 hover:text-white transition text-sm">
                  {t("tourPackages")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-emerald-100 hover:text-white transition text-sm">
                  {t("aboutJamal")}
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-emerald-100 hover:text-white transition text-sm">
                  {t("customerReviews")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-emerald-100 hover:text-white transition text-sm">
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("contactHeading")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-emerald-100 text-sm">
                <Phone className="w-4 h-4" />
                <span>{t("phoneValue")}</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-100 text-sm">
                <Mail className="w-4 h-4" />
                <span>{t("emailValue")}</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-100 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{t("locationValue")}</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/tour_guide_jamal_oman"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700/50 mt-8 pt-6 text-center">
          <p className="text-emerald-200 text-sm">
            © {new Date().getFullYear()} {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
