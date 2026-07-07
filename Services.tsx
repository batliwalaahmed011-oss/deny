"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Zap,
  Sparkles,
  Wind,
  Gem,
  ShieldCheck,
  Heart,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Zap,
  Sparkles,
  Wind,
  Gem,
  ShieldCheck,
  Heart,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-blush-light/40">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-gold"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl mt-4"
          >
            Treatments crafted around you
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group relative rounded-4xl bg-white overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl glass flex items-center justify-center">
                    <Icon size={20} className="text-gold" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-charcoal/65 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blush-dark group-hover:gap-2.5 transition-all"
                  >
                    Learn More <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
