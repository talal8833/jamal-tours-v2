# TODO / Next steps

Outstanding items and recommendations, roughly by priority. Nothing here is broken — these
are improvements, follow‑ups, and things intentionally left for later.

---

## 🔴 Don't forget (maintenance)

- **Keep the Hostinger DNS records:**
  - apex **A record → `76.76.21.21`** (serves the live site)
  - **`google-site-verification=…` TXT record** (removing it un‑verifies Google Search Console)
- Keep **`NEXT_PUBLIC_SITE_URL = https://jamaltours.com`** set in Vercel (Production).

## 🟠 Content (you provide the material)

- **Replace the sample reviews** with real customer testimonials.
  → `app/data/reviews.ts` (currently placeholder names like "Sarah M.").
  Real reviews build the most trust for bookings.
- **Swap a few tour photos** for authentic / owned shots where preferred — you mentioned the
  **Dimaniyat Islands** ones. It's a one‑line change per image in `app/data/tours.ts`.
- Some tour covers are region‑accurate stock (not the exact spot). Your own photos of the
  actual tours are ideal whenever you have them.

## 🟡 Marketing / SEO (mostly operational, not code)

These move the needle far more than technical tweaks for a local tour business:

1. **Google Business Profile** — create/claim it. This is the #1 lever for local & Maps
   searches ("tour guide Muscat", etc.). Not set up yet.
2. **Get real reviews on Google & TripAdvisor** — strongest local ranking + conversion factor.
3. **Get listed** on TripAdvisor / Viator / GetYourGuide and local Oman directories
   (backlinks + booking exposure).
4. **Monitor Google Search Console** over the coming days/weeks:
   - *Sitemaps* → status should flip from "Couldn't fetch" to **Success**.
   - *Pages* → watch indexed page count grow.
   - Optionally request indexing for the Tours page once content settles.
5. **Content for search terms you want to rank for** — e.g. a **Salalah Khareef** tour + page
   (postponed). You can't rank for a tour/topic that has no page.

## 🟢 Optional feature/code improvements

- **Contact form:** the contact page is currently a *copy‑email + WhatsApp + tap‑to‑call*
  panel (no backend — nothing is silently dropped). If you want a real "send message" form,
  wire up **Formspree / Web3Forms** (no backend) or a Next.js API route + email service
  (e.g. Resend). See `app/[locale]/contact/page.tsx`.
- **`middleware.ts` → `proxy.ts`:** Next.js 16 shows a deprecation warning preferring the
  `proxy` file convention. It works fine as‑is (next-intl documents `middleware.ts`); rename
  when convenient.
- **Per‑page / per‑tour Open Graph images:** all pages currently share the hero image for
  link previews. Distinct OG images (e.g. each tour's cover) would look sharper when shared.
- **Sharper per‑tour meta descriptions** for search snippets.
- **Footer socials:** Instagram is wired up; Facebook was removed. The displayed **phone** is
  the same number as WhatsApp — split them if you get a separate line.

## ✅ Done (for reference)

Bilingual EN/AR + RTL · locale routing (English default) · language switcher · tour photo
galleries + lightbox · real contact details + copy‑email contact page · **real licensed
photos on all 6 tours** · favicon matching the logo · 98% satisfaction + varied review stars ·
standardized "What's Included" · domain live (DNS fix) · sitemap · robots · structured data ·
hreflang · Open Graph/Twitter · Google Search Console verified + sitemap submitted + homepages
indexed.
