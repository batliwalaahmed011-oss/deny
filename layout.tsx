import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingButtons from "@/components/FloatingButtons";
import BackToTop from "@/components/BackToTop";
import { CLINIC } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.jasminclinic.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${CLINIC.name} | Dermatologist in Surat`,
    template: `%s | ${CLINIC.name}`,
  },
  description:
    "Jasmin Skin, Hair & Laser Clinic in Surat — led by Dr. Jasmin Gandhi (MBBS, DDV). Advanced laser hair reduction, skin rejuvenation, hair restoration & anti-ageing treatments with 10+ years of trust.",
  keywords: [
    "dermatologist Surat",
    "skin clinic Surat",
    "laser hair reduction Surat",
    "hair fall treatment Surat",
    "best skin clinic Surat",
    "Dr Jasmin Gandhi",
    "PRP hair treatment",
    "acne scar treatment Surat",
  ],
  authors: [{ name: "Dr. Jasmin Gandhi" }],
  openGraph: {
    title: `${CLINIC.name} | Dermatologist in Surat`,
    description:
      "Advanced skin, hair & laser treatments led by Dr. Jasmin Gandhi. 10+ years of trust in Surat.",
    url: siteUrl,
    siteName: CLINIC.name,
    images: [{ url: "/images/brand-quote.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC.name} | Dermatologist in Surat`,
    description:
      "Advanced skin, hair & laser treatments led by Dr. Jasmin Gandhi. 10+ years of trust in Surat.",
    images: ["/images/brand-quote.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: CLINIC.name,
  image: `${siteUrl}/images/storefront.png`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: CLINIC.phone,
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Surat",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395007",
    addressCountry: "IN",
  },
  medicalSpecialty: "Dermatology",
  founder: {
    "@type": "Person",
    name: CLINIC.doctor,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: CLINIC.rating,
    reviewCount: CLINIC.reviewCount,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-ivory text-charcoal antialiased">
        <ScrollProgress />
        {children}
        <FloatingButtons />
        <BackToTop />
      </body>
    </html>
  );
}
