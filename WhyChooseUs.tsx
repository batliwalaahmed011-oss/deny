"use client";

import { motion } from "framer-motion";
import { Stethoscope, Microscope, HeartHandshake, Sparkle } from "lucide-react";

const REASONS = [
  {
    icon: Stethoscope,
    title: "Doctor-Led Care",
    description:
      "Every treatment plan is personally reviewed and administered under Dr. Jasmin Gandhi's supervision.",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description:
      "FDA-approved lasers and medical-grade devices for safe, effective, science-backed results.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Protocols",
    description:
      "No two treatment plans are alike — every protocol is designed around your skin and goals.",
  },
  {
    icon: Sparkle,
    title: "Hygiene & Comfort",
    description:
      "A calm, sterile, spa-like environment designed to put you at ease from the moment you arrive.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-gold"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl mt-4"
          >
            Excellence, in every detail
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-4xl bg-white p-8 shadow-card hover:shadow-soft transition-shadow duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blush-light to-gold-light flex items-center justify-center mb-6">
                <reason.icon size={24} className="text-blush-dark" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-charcoal/65 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
