"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/lib/data";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY.length));

  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-blush-light/40">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-gold"
          >
            Inside The Clinic
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl mt-4"
          >
            A space designed to feel like home
          </motion.h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {GALLERY.map((img, i) => (
            <motion.button
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              onClick={() => setActiveIndex(i)}
              className="relative block w-full rounded-3xl overflow-hidden shadow-card group break-inside-avoid"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-charcoal/60 backdrop-blur px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {img.category}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[70] bg-charcoal/90 flex items-center justify-center p-6"
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 w-11 h-11 rounded-full glass flex items-center justify-center text-white"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-8 w-11 h-11 rounded-full glass flex items-center justify-center text-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <motion.div
              key={activeIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image
                src={GALLERY[activeIndex].src}
                alt={GALLERY[activeIndex].alt}
                fill
                sizes="90vw"
                className="object-cover"
              />
            </motion.div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-8 w-11 h-11 rounded-full glass flex items-center justify-center text-white"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
