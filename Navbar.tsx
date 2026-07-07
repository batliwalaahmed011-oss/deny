"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC } from "@/lib/data";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled ? "glass shadow-card py-2.5 px-6" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-display text-2xl md:text-3xl font-semibold text-gradient-gold">
              Jasmin
            </span>
            <span className="hidden sm:block text-[11px] tracking-[0.2em] uppercase text-charcoal/60 border-l border-charcoal/20 pl-2">
              Skin · Hair · Laser
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  active === link.href
                    ? "text-blush-dark"
                    : "text-charcoal/70 hover:text-charcoal"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gold rounded-full"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC.phone}`}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-charcoal text-ivory text-sm font-semibold px-5 py-2.5 magnetic-btn hover:shadow-glow"
            >
              <Phone size={15} /> Call Now
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] glass-dark lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-ivory p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-display text-2xl font-semibold text-gradient-gold">
                  Jasmin
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="text-2xl font-display text-charcoal"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href={`tel:${CLINIC.phone}`}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-charcoal text-ivory font-semibold px-6 py-4"
              >
                <Phone size={16} /> Call Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
