"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { CLINIC } from "@/lib/data";

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop floating stack */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-3">
        <motion.a
          href={`https://wa.me/${CLINIC.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-soft"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={26} />
        </motion.a>
        <motion.a
          href={`tel:${CLINIC.phone}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.15, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-charcoal text-white flex items-center justify-center shadow-soft"
          aria-label="Call now"
        >
          <Phone size={22} />
        </motion.a>
      </div>

      {/* Mobile sticky contact bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden glass-dark border-t border-white/10">
        <a
          href={`tel:${CLINIC.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm border-r border-white/10"
        >
          <Phone size={18} /> Call Now
        </a>
        <a
          href={`https://wa.me/${CLINIC.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm bg-[#25D366]/90"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </>
  );
}
