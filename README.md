# Jasmin Skin | Hair | Laser Clinic — Premium Website

A production-ready, luxury-brand website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** — designed for Jasmin Skin, Hair & Laser Clinic (Dr. Jasmin Gandhi, Surat).

## Design system
- **Palette:** Ivory `#FAF7F3`, Charcoal `#1E1B19`, Blush Rose `#D9A8A0`, Champagne Gold `#B8934E`, Sage `#8A9A82` — pulled directly from the clinic's real interior (blush reception wall, gold "J" logo, plants throughout).
- **Type:** Fraunces (display) + Manrope (body/UI).
- **Signature element:** an animated line-art face motif in the hero, echoing the sculpted plaster art piece in your actual reception area.

## Folder structure
```
jasmin-clinic/
├── public/
│   ├── images/          ← your real clinic photos (already included)
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx    ← fonts, SEO metadata, JSON-LD schema
│   │   ├── page.tsx      ← assembles all sections
│   │   ├── globals.css
│   │   └── sitemap.ts
│   ├── components/       ← one component per section (Navbar, Hero, About,
│   │                        Services, WhyChooseUs, Gallery, Testimonials,
│   │                        Process, FAQ, MapSection, ContactForm, Footer,
│   │                        FloatingButtons, ScrollProgress, BackToTop,
│   │                        AnimatedCounter)
│   ├── lib/data.ts        ← ALL editable content (services, reviews, FAQ, etc.)
│   └── types/index.ts
├── tailwind.config.ts     ← design tokens (colors, fonts, shadows, animations)
├── next.config.js
└── package.json
```

## Getting started
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`.

## Before going live — edit these
1. **`src/lib/data.ts`** — update phone number, WhatsApp number, email, exact
   address, and Google Maps query. Update/replace testimonials, services,
   and FAQ copy with verified content.
2. **`src/app/layout.tsx`** — update `siteUrl` to your real domain, and the
   JSON-LD `address` block with your exact street address and postal code.
3. **`public/images/`** — swap in high-resolution versions of your clinic
   photos (currently using the ones you provided). Recommended: export at
   1600px wide, WebP format, under 300KB each for best Lighthouse scores.
4. **Contact form** — `src/components/ContactForm.tsx` currently simulates
   submission. Wire the `handleSubmit` function to your endpoint of choice
   (a Next.js API route, Formspree, or your CRM's webhook).
5. Replace the Instagram/Facebook `href="#"` placeholders in `Footer.tsx`
   with your real social links.

## Performance & SEO built in
- `next/font` self-hosts Google Fonts (no external font requests, no layout shift).
- `next/image` for automatic lazy-loading, responsive `sizes`, and AVIF/WebP.
- Full Open Graph, Twitter Card, and `MedicalClinic` JSON-LD schema markup.
- `sitemap.ts` and `robots.txt` included.
- Reduced-motion media query respected; visible focus states for keyboard nav.
- No client-side libraries beyond Framer Motion + lucide-react icons — kept lean for a 90+ Lighthouse score.

## Deploying
This project deploys cleanly to **Vercel** (recommended, zero-config) or any
Node.js host that supports Next.js 14. Run `npm run build && npm start` to
run a production build locally first.
