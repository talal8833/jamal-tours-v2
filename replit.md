# Jamal Tours

## Overview

Jamal Tours is a bilingual (Arabic-primary) tourism website for a certified tour guide in Oman. The platform showcases various tour packages, provides information about the guide, displays customer reviews, and offers contact functionality. Built as a static marketing site with Next.js App Router, it serves as a professional online presence for booking inquiries via WhatsApp.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 16** with App Router for server-side rendering and static generation
- **TypeScript** for type safety throughout the codebase
- **Tailwind CSS 4** for utility-first styling with custom theme variables

### Routing Structure
The application uses Next.js App Router with the following pages:
- `/` - Homepage with hero, popular tours, and testimonials
- `/tours` - Tour listing page
- `/tours/[slug]` - Dynamic tour detail pages
- `/about` - About the guide page
- `/reviews` - Customer testimonials page
- `/contact` - Contact form (client-side state only, no backend)

### Component Architecture
- Shared components in `app/components/` (Navbar, Footer)
- Page-specific components co-located with their routes
- Data stored in `app/data/tours.ts` as static TypeScript exports

### Internationalization
- Primary language: Arabic (RTL layout)
- `next-intl` package installed for potential multi-language support
- HTML configured with `lang="ar"` and `dir="rtl"`

### Styling Approach
- Tailwind CSS with CSS custom properties for theming
- Gradient-heavy design using emerald color palette
- Responsive design with mobile-first approach
- Custom selection colors and smooth scroll behavior

## External Dependencies

### Third-Party Services
- **WhatsApp Business** - Primary contact method for tour bookings (links to wa.me)
- **Vercel Analytics** - Usage tracking via `@vercel/analytics` package

### UI Libraries
- **Lucide React** - Icon library for consistent iconography
- **clsx** - Utility for conditional CSS class composition

### No Database
- Currently no database integration
- Tour data is hardcoded in TypeScript files
- Contact form has no backend (shows success state only)

### Deployment
- Configured for Replit with custom dev origins in `next.config.ts`
- Development server runs on port 5000 with host 0.0.0.0