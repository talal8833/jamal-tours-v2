import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
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
              Discover the beauty of Oman with a professional certified tour guide. Customized tours tailored to your interests.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tours" className="text-emerald-100 hover:text-white transition text-sm">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-emerald-100 hover:text-white transition text-sm">
                  About Jamal
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-emerald-100 hover:text-white transition text-sm">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-emerald-100 hover:text-white transition text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-emerald-100 text-sm">
                <Phone className="w-4 h-4" />
                <span>+968 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-100 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@jamaltours.com</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-100 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Muscat, Sultanate of Oman</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700/50 mt-8 pt-6 text-center">
          <p className="text-emerald-200 text-sm">
            © {new Date().getFullYear()} Jamal Tours - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
