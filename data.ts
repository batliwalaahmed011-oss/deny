import {
  Service,
  Testimonial,
  FAQItem,
  ProcessStep,
  GalleryImage,
} from "@/types";

export const CLINIC = {
  name: "Jasmin Skin | Hair | Laser Clinic",
  doctor: "Dr. Jasmin Gandhi",
  qualification: "M.B.B.S, D.D.V. — Consultant Dermatologist & Cosmetologist",
  phone: "+91 70697 66XXX",
  phoneDisplay: "070697 66XXX",
  whatsapp: "917069766000",
  email: "hello@jasminclinic.com",
  address: "Jasmin Skin, Hair & Laser Clinic, Surat, Gujarat, India",
  mapsEmbedQuery: "Jasmin Skin Hair Laser Clinic Surat",
  tagline: "True beauty begins with healthy skin.",
  yearsOfTrust: 10,
  rating: 4.9,
  reviewCount: 850,
};

export const SERVICES: Service[] = [
  {
    id: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    description:
      "Advanced diode laser technology for permanent, painless hair reduction — safe for all skin types.",
    icon: "Zap",
    image: "/images/treatment-room-2.png",
  },
  {
    id: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    description:
      "Medical-grade facials, chemical peels & laser resurfacing for radiant, even-toned skin.",
    icon: "Sparkles",
    image: "/images/treatment-room-1.png",
  },
  {
    id: "hair-restoration",
    title: "Hair Restoration",
    description:
      "PRP therapy, GFC treatment & clinically-backed protocols to reverse hair thinning and hair fall.",
    icon: "Wind",
    image: "/images/doctor-office.png",
  },
  {
    id: "anti-aging",
    title: "Anti-Ageing & Aesthetics",
    description:
      "Botox, dermal fillers & thread lifts administered by a certified dermatologist for natural results.",
    icon: "Gem",
    image: "/images/reception.png",
  },
  {
    id: "acne-treatment",
    title: "Acne & Scar Treatment",
    description:
      "Customised protocols combining lasers, peels & medical skincare to treat acne and its scars.",
    icon: "ShieldCheck",
    image: "/images/treatment-room-2.png",
  },
  {
    id: "bridal-packages",
    title: "Bridal & Grooming Packages",
    description:
      "Bespoke pre-wedding skin & hair programs so you glow with confidence on your big day.",
    icon: "Heart",
    image: "/images/treatment-room-1.png",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Mehta",
    city: "Surat",
    rating: 5,
    review:
      "Dr. Jasmin is incredibly skilled and honest about what treatments will actually work. My skin has never looked better after just three sessions.",
    treatment: "Skin Rejuvenation",
  },
  {
    id: "t2",
    name: "Ankit Shah",
    city: "Surat",
    rating: 5,
    review:
      "Best laser hair reduction clinic in the city. The team is professional, the clinic is spotless, and the results speak for themselves.",
    treatment: "Laser Hair Reduction",
  },
  {
    id: "t3",
    name: "Ritu Desai",
    city: "Vesu, Surat",
    rating: 5,
    review:
      "I was losing hope with my hair fall until I started PRP sessions here. Genuinely life-changing experience with a doctor who truly listens.",
    treatment: "Hair Restoration",
  },
  {
    id: "t4",
    name: "Karan Patel",
    city: "Surat",
    rating: 5,
    review:
      "Went in for my pre-wedding skin package and the glow lasted well beyond the wedding! Highly recommend the bridal program.",
    treatment: "Bridal Package",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "p1",
    step: "01",
    title: "Consultation",
    description:
      "A detailed one-on-one consultation with Dr. Jasmin Gandhi to understand your skin, hair & goals.",
  },
  {
    id: "p2",
    step: "02",
    title: "Personalised Plan",
    description:
      "We design a bespoke treatment protocol tailored to your skin type, concerns and timeline.",
  },
  {
    id: "p3",
    step: "03",
    title: "Treatment",
    description:
      "Sessions performed with medical-grade technology in a calm, sterile, comfortable environment.",
  },
  {
    id: "p4",
    step: "04",
    title: "Aftercare & Follow-up",
    description:
      "Ongoing follow-ups and home-care guidance to ensure your results last and continue to improve.",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "Is laser hair reduction safe for Indian skin tones?",
    answer:
      "Yes. We use diode laser technology specifically calibrated for Indian (Fitzpatrick type III–V) skin tones, making it both safe and highly effective with minimal downtime.",
  },
  {
    id: "f2",
    question: "How many sessions will I need to see results?",
    answer:
      "This varies by treatment and individual concern. Most clients begin seeing visible improvement within 2–3 sessions, with a complete protocol typically spanning 6–8 sessions, discussed in detail during your consultation.",
  },
  {
    id: "f3",
    question: "Is there any downtime after treatments?",
    answer:
      "Most of our treatments are minimally invasive with little to no downtime. Dr. Jasmin will walk you through specific aftercare and any temporary redness or sensitivity to expect for your chosen treatment.",
  },
  {
    id: "f4",
    question: "Do you offer packages for brides and grooms?",
    answer:
      "Yes, we offer customised bridal and grooming packages designed around your wedding date, combining skin, hair and glow treatments for a timed, radiant result.",
  },
  {
    id: "f5",
    question: "How do I book a consultation?",
    answer:
      "You can call us directly, message us on WhatsApp, or fill out the contact form on this page and our team will get back to you within a few hours.",
  },
];

export const GALLERY: GalleryImage[] = [
  { id: "g1", src: "/images/storefront.png", alt: "Jasmin Clinic storefront", category: "Clinic" },
  { id: "g2", src: "/images/reception.png", alt: "Reception lounge", category: "Clinic" },
  { id: "g3", src: "/images/treatment-room-1.png", alt: "Treatment room with laser device", category: "Treatment Rooms" },
  { id: "g4", src: "/images/treatment-room-2.png", alt: "Laser treatment room", category: "Treatment Rooms" },
  { id: "g5", src: "/images/doctor-office.png", alt: "Doctor's consultation office", category: "Clinic" },
  { id: "g6", src: "/images/celebrity-wall.png", alt: "Celebrity clients wall", category: "Moments" },
];

export const STATS = [
  { label: "Years of Trust", value: 10, suffix: "+" },
  { label: "Happy Clients", value: 15000, suffix: "+" },
  { label: "Treatments Offered", value: 25, suffix: "+" },
  { label: "Average Rating", value: 4.9, suffix: "/5" },
];
