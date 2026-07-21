"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { Menu, X, MapPin } from "lucide-react";
import { Link, usePathname } from "../i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const linkDefs = [
  { href: "/", key: "home" },
  { href: "/tours", key: "tours" },
  { href: "/about", key: "about" },
  { href: "/reviews", key: "reviews" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar() {
  const path = usePathname();
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              Jamal Tours
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <ul className="flex gap-1">
              {linkDefs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "px-4 py-2 rounded-lg font-medium transition-all duration-200",
                      path === link.href
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50"
                    )}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
            <LanguageSwitcher className="ms-1" />
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4">
            <ul className="flex flex-col gap-1">
              {linkDefs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "block px-4 py-3 rounded-lg font-medium transition-all duration-200",
                      path === link.href
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50"
                    )}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
