"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { CLINIC, SERVICES } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Replace with your form endpoint (e.g. Formspree, API route, or CRM webhook)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
            Book your consultation
          </h2>
          <p className="text-charcoal/65 leading-relaxed mb-10">
            Have a question or ready to begin your treatment journey? Reach
            out and our team will respond within a few hours.
          </p>

          <div className="space-y-5">
            <a
              href={`tel:${CLINIC.phone}`}
              className="flex items-center gap-4 group"
            >
              <span className="w-12 h-12 rounded-2xl bg-blush-light flex items-center justify-center shrink-0">
                <Phone size={18} className="text-blush-dark" />
              </span>
              <div>
                <p className="text-xs text-charcoal/50">Call us</p>
                <p className="font-medium group-hover:text-blush-dark transition-colors">
                  {CLINIC.phoneDisplay}
                </p>
              </div>
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="w-12 h-12 rounded-2xl bg-blush-light flex items-center justify-center shrink-0">
                <MessageCircle size={18} className="text-blush-dark" />
              </span>
              <div>
                <p className="text-xs text-charcoal/50">WhatsApp</p>
                <p className="font-medium group-hover:text-blush-dark transition-colors">
                  Message us directly
                </p>
              </div>
            </a>
            <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-4 group">
              <span className="w-12 h-12 rounded-2xl bg-blush-light flex items-center justify-center shrink-0">
                <Mail size={18} className="text-blush-dark" />
              </span>
              <div>
                <p className="text-xs text-charcoal/50">Email</p>
                <p className="font-medium group-hover:text-blush-dark transition-colors">
                  {CLINIC.email}
                </p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-blush-light flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-blush-dark" />
              </span>
              <div>
                <p className="text-xs text-charcoal/50">Visit us</p>
                <p className="font-medium">{CLINIC.address}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-3 rounded-4xl bg-white p-8 md:p-10 shadow-soft"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-16"
            >
              <CheckCircle2 size={48} className="text-sage mb-4" />
              <h3 className="font-display text-2xl font-semibold mb-2">
                Thank you!
              </h3>
              <p className="text-charcoal/65">
                We&apos;ve received your request and will contact you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-charcoal/10 bg-ivory px-4 py-3.5 text-sm focus:border-gold outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    className="w-full rounded-2xl border border-charcoal/10 bg-ivory px-4 py-3.5 text-sm focus:border-gold outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full rounded-2xl border border-charcoal/10 bg-ivory px-4 py-3.5 text-sm focus:border-gold outline-none transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your concern..."
                  className="w-full rounded-2xl border border-charcoal/10 bg-ivory px-4 py-3.5 text-sm focus:border-gold outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-charcoal text-ivory font-semibold px-8 py-4 shadow-soft hover:shadow-glow disabled:opacity-60 transition-all"
              >
                {loading ? "Sending..." : "Send Request"} <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
