"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, FileText, Star } from "lucide-react";
import Image from "next/image";
import { CLINIC, STATS } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.15 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient pt-32 pb-20 md:pt-0"
    >
      {/* Signature sculpted-face motif — echoes the clinic's reception art */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 400 500"
        className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 w-[280px] md:w-[440px] opacity-[0.35] md:opacity-60"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.path
          d="M200 40 C 120 40 70 110 70 200 C 70 260 95 300 95 340 C 95 380 70 400 70 420 L 330 420 C 330 400 305 380 305 340 C 305 300 330 260 330 200 C 330 110 280 40 200 40 Z"
          fill="none"
          stroke="#B8934E"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
        <motion.path
          d="M140 210 Q 150 190 165 210"
          fill="none"
          stroke="#8C4A44"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        />
        <motion.path
          d="M235 210 Q 245 190 260 210"
          fill="none"
          stroke="#8C4A44"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
        />
        <motion.path
          d="M180 300 Q 200 315 220 300"
          fill="none"
          stroke="#8C4A44"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        />
      </motion.svg>

      {/* floating ambient blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blush/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gold/20 rounded-full blur-3xl animate-float" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-2 gap-14 items-center w-full">
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6 shadow-card"
          >
            <Star size={14} className="text-gold fill-gold" />
            <span className="text-sm font-medium">
              {CLINIC.rating} rated · {CLINIC.reviewCount}+ happy clients
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] font-medium tracking-tight"
          >
            Skin that glows,
            <br />
            confidence that{" "}
            <span className="text-gradient-gold italic">lasts.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-lg text-charcoal/70 max-w-lg leading-relaxed"
          >
            {CLINIC.name} — led by {CLINIC.doctor}, {CLINIC.qualification}.
            Advanced medical dermatology and bespoke laser treatments,
            trusted in Surat for over {CLINIC.yearsOfTrust} years.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href={`tel:${CLINIC.phone}`}
              className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-charcoal text-ivory font-semibold px-7 py-4 shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <Phone size={17} /> Call Now
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-7 py-4 shadow-soft hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle size={17} /> WhatsApp
            </a>
            <a
              href="#contact"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full glass border border-charcoal/10 text-charcoal font-semibold px-7 py-4 hover:-translate-y-0.5 transition-all"
            >
              <FileText size={17} /> Get Quote
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-semibold text-blush-dark">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.suffix === "/5" ? 1 : 0}
                  />
                </div>
                <div className="text-xs text-charcoal/60 mt-1 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-5xl overflow-hidden shadow-soft aspect-[4/5]">
            <Image
              src="/images/hero-model.png"
              alt="Advanced skin & hair treatments at Jasmin Clinic"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-8 glass rounded-3xl px-6 py-4 shadow-soft"
          >
            <p className="font-display text-sm font-semibold">
              10+ Years of Trust
            </p>
            <p className="text-xs text-charcoal/60">
              Medical dermatology, done right.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
