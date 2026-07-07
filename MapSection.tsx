"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { CLINIC } from "@/lib/data";

export default function MapSection() {
  const query = encodeURIComponent(CLINIC.mapsEmbedQuery);
  return (
    <section className="relative py-20 md:py-28 bg-blush-light/40">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-4xl overflow-hidden shadow-soft relative"
        >
          <div className="absolute top-6 left-6 z-10 glass rounded-2xl px-5 py-4 flex items-center gap-3 max-w-xs">
            <MapPin size={20} className="text-blush-dark shrink-0" />
            <p className="text-sm font-medium">{CLINIC.address}</p>
          </div>
          <iframe
            title="Jasmin Skin Hair Laser Clinic location"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
