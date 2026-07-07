"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-gold"
          >
            Customer Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl mt-4"
          >
            Loved by our patients
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative rounded-4xl bg-white p-8 shadow-card hover:shadow-soft transition-shadow duration-500"
            >
              <Quote size={34} className="text-blush/40 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-charcoal/75 leading-relaxed mb-6">
                {t.review}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold">{t.name}</p>
                  <p className="text-xs text-charcoal/50">{t.city}</p>
                </div>
                <span className="text-xs font-medium text-blush-dark bg-blush-light px-3 py-1.5 rounded-full">
                  {t.treatment}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
