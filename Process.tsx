"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36 bg-blush-light/40">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-gold"
          >
            Your Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl mt-4"
          >
            How your treatment unfolds
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center md:text-left"
            >
              <span className="font-display text-5xl font-semibold text-gold-light block mb-4">
                {step.step}
              </span>
              <h3 className="font-display text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-charcoal/65 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
