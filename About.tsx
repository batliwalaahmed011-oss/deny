"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, Users } from "lucide-react";
import { CLINIC } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="rounded-4xl overflow-hidden shadow-soft aspect-[4/3] relative">
            <Image
              src="/images/celebrity-wall.png"
              alt="Dr. Jasmin Gandhi with well-known clients"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 glass rounded-3xl p-5 shadow-soft w-44">
            <p className="font-display text-2xl font-semibold text-blush-dark">
              10+
            </p>
            <p className="text-xs text-charcoal/70 leading-snug mt-1">
              Years trusted by patients &amp; public figures alike
            </p>
          </div>
        </motion.div>

        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-gold"
          >
            About the clinic
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl mt-4 leading-tight"
          >
            Where medical expertise meets bespoke skincare.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 text-charcoal/70 leading-relaxed text-lg"
          >
            {CLINIC.tagline} Founded by {CLINIC.doctor}, {CLINIC.qualification.toLowerCase()},
            our clinic blends advanced medical technology with a calm,
            personalised approach — because every face has a different story
            to tell.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 grid sm:grid-cols-3 gap-6"
          >
            {[
              { icon: GraduationCap, label: "MBBS, DDV Certified" },
              { icon: Award, label: "10+ Years Experience" },
              { icon: Users, label: "15,000+ Patients Treated" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-2xl bg-blush-light flex items-center justify-center">
                  <item.icon size={20} className="text-blush-dark" />
                </div>
                <p className="text-sm font-medium text-charcoal/80 leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
