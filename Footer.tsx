import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { CLINIC } from "@/lib/data";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-ivory pt-20 pb-28 md:pb-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <span className="font-display text-3xl font-semibold text-gradient-gold">
            Jasmin
          </span>
          <p className="mt-4 text-ivory/60 leading-relaxed max-w-sm">
            {CLINIC.tagline} Medical dermatology and bespoke laser treatments
            led by {CLINIC.doctor}, trusted in Surat for over{" "}
            {CLINIC.yearsOfTrust} years.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
            >
              <Instagram size={17} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
            >
              <Facebook size={17} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ivory/60 hover:text-gold transition-colors text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 text-ivory/60">
              <Phone size={16} className="mt-0.5 shrink-0" />
              {CLINIC.phoneDisplay}
            </li>
            <li className="flex items-start gap-3 text-ivory/60">
              <Mail size={16} className="mt-0.5 shrink-0" />
              {CLINIC.email}
            </li>
            <li className="flex items-start gap-3 text-ivory/60">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              {CLINIC.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ivory/40">
        <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
        <p>Designed with care for radiant, healthy skin.</p>
      </div>
    </footer>
  );
}
