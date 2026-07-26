# Jamal Tours

Bilingual (English / Arabic) marketing website for **Jamal Tours** — a certified private
tour guide in Oman. Live at **https://jamaltours.com**.

- 🌐 Fully bilingual **English + Arabic** with right‑to‑left (RTL) support
- 🧭 6 tours, each with a photo **card carousel**, a **detail‑page gallery**, and a fullscreen **lightbox**
- 📞 Contact via one‑tap **copy‑email**, **WhatsApp**, and **tap‑to‑call**
- 🔍 SEO‑ready: sitemap, robots, structured data, hreflang, Open Graph, Google Search Console
- ⚡ Fast, statically generated, image‑optimized

---

## Tech stack

| | |
|---|---|
| Framework | **Next.js 16** (App Router) + **React 19** + **TypeScript** |
| Styling | **Tailwind CSS 4** |
| i18n | **next-intl 4** (URL‑prefixed locales `/en`, `/ar`) |
| Icons / font | `lucide-react`; **Cairo** Google font for Arabic |
| Hosting | **Vercel** (auto‑deploys from `main`) |
| Domain / DNS | **jamaltours.com**, DNS managed at **Hostinger** |

---

## Running locally

```bash
npm install
npm run dev      # dev server on http://localhost:5000
npm run build    # production build
npm run start    # serve the production build on http://localhost:5000
npm run lint
```

> The dev/start server runs on **port 5000** (see `package.json`).

### Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin used by metadata, sitemap, robots, and structured data. Set to `https://jamaltours.com` in Vercel (Production). Falls back to `https://jamaltours.com` in `app/siteConfig.ts`. |

---

## Project structure

```
app/
  [locale]/                  # every page lives under a locale segment (/en, /ar)
    layout.tsx               # root <html lang/dir>, fonts, providers, business JSON-LD
    page.tsx                 # homepage
    about/  reviews/  contact/
    tours/                   # tour listing
    tours/[slug]/            # tour detail (gallery + Product JSON-LD)
  components/                # Navbar, Footer, LanguageSwitcher, WhatsAppFloat,
                             #   TourImageCarousel (cards), TourGallery (detail + lightbox)
  data/
    tours.ts                 # all tour content (bilingual) + getTours()/getTour()
    reviews.ts               # customer reviews (bilingual) + getReviews()
  i18n/
    routing.ts               # locales, defaultLocale, localeDetection
    navigation.ts            # locale-aware Link / useRouter / usePathname
    request.ts               # loads messages per request
  siteConfig.ts              # siteUrl + siteName (single source of truth)
  sitemap.ts   robots.ts     # /sitemap.xml and /robots.txt
  icon.svg                   # favicon (matches the logo)
  globals.css
messages/
  en.json  ar.json           # all UI copy (identical keys, one value per language)
middleware.ts                # next-intl locale routing
public/images/               # tour photos, hero image, guide portrait
```

---

## Editing content (no deep coding needed)

Everything is bilingual, so **change both languages together**.

| To change… | Edit… |
|---|---|
| UI text (menus, buttons, headings, form labels) | `messages/en.json` **and** `messages/ar.json` — same key, one value each |
| Tour name / description / price / itinerary | `app/data/tours.ts` — each field is an `{ en, ar }` pair |
| A tour's photos | Drop files in `public/images/`, then update that tour's `images: [...]` array in `app/data/tours.ts` (first image = cover) |
| The "What's Included" list (applies to **all** tours) | `standardIncludes` near the top of `app/data/tours.ts` |
| Customer reviews / star ratings | `app/data/reviews.ts` |
| "Customer Satisfaction" % | `home.statSatisfactionValue` in both `messages/*.json` |
| Contact email / phone / WhatsApp | `contact` + `footer` blocks in `messages/*.json`; WhatsApp/phone numbers in `app/components/WhatsAppFloat.tsx` and `app/[locale]/contact/page.tsx` |

The production build fails loudly if an Arabic key is missing, so you can't accidentally ship
a half‑translated string.

### Adding images

Images are optimized on delivery by Next.js `<Image>`. Source files should be reasonably
sized JPGs (≈1600 px on the long side). All tour photos currently come from **Unsplash /
Pexels / Pixabay** (free for commercial use).

---

## Internationalization

- Locales: **`en`** (default) and **`ar`**. Routes are prefixed: `/en/...`, `/ar/...`.
- `/` redirects to `/en`. **Locale auto‑detection is disabled** — first‑time visitors always
  land on English and switch with the navbar toggle.
- Arabic pages render `dir="rtl"` and use the Cairo font.
- `hreflang` alternates (`en`, `ar`, `x-default`) are emitted in metadata and the sitemap.

---

## SEO

- `app/sitemap.ts` → `/sitemap.xml` (all pages × both locales, with hreflang)
- `app/robots.ts` → `/robots.txt` (points to the sitemap)
- Structured data (JSON‑LD): **TravelAgency** site‑wide + **Product** (with price) per tour
- Canonical URLs, Open Graph, and Twitter cards
- **Google Search Console**: verified Domain property (DNS TXT), sitemap submitted, homepages
  submitted for indexing

---

## Deployment

- Push/merge to **`main`** → Vercel builds and deploys automatically.
- Domain **jamaltours.com** points to Vercel via an apex **A record → `76.76.21.21`** at Hostinger.
- Two DNS records at Hostinger must **not** be removed:
  - the apex **A record** (`76.76.21.21`) — serves the site,
  - the **`google-site-verification=…` TXT record** — keeps Search Console verified.

---

See **[TODO.md](./TODO.md)** for outstanding items and recommended next steps.
