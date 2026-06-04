"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { AttorneyProfile } from "@/types/attorney";

interface HeroSectionProps {
  attorney: AttorneyProfile;
}

export default function HeroSection({ attorney }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, ${attorney.theme.background}ee 40%, ${attorney.theme.background}88 70%, transparent), url('${attorney.theme.heroImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[0.7rem] tracking-[0.25em] uppercase mb-4"
          style={{ color: attorney.theme.accent }}
        >
          {attorney.firm}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light leading-[1.05] mb-6 max-w-3xl"
          style={{ color: attorney.theme.primary }}
        >
          <span className="block text-[clamp(2.5rem,7vw,5.5rem)]">{attorney.name}</span>
          <span
            className="block mt-3 text-[clamp(1.2rem,3vw,2rem)] italic font-light"
            style={{ color: attorney.theme.accent }}
          >
            {attorney.title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          style={{ color: `${attorney.theme.primary}bb` }}
        >
          {attorney.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="#contact"
            className="inline-block px-8 py-3 text-[0.7rem] tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: attorney.theme.primary }}
          >
            Schedule Consultation
          </Link>
          <Link
            href="#about"
            className="inline-block px-8 py-3 border text-[0.7rem] tracking-[0.2em] uppercase transition-colors hover:bg-[var(--attorney-primary)] hover:text-[var(--attorney-bg)]"
            style={{
              borderColor: attorney.theme.primary,
              color: attorney.theme.primary,
            }}
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
