"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-6 pt-28 pb-24">
        <div className="max-w-5xl mx-auto">

          {/* Top trust bar — simplified, cleaner */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto flex items-center justify-center gap-6 bg-white px-5 py-2 
                       rounded-full border border-slate-200 shadow-sm w-fit text-xs text-slate-600"
          >
            <span className="font-medium text-black">Digital Ink</span>
            <span className="hidden md:inline-block">•</span>
            <span className="hidden md:inline-block">47+ Projects</span>
            <span className="hidden md:inline-block">•</span>
            <span className="hidden md:inline-block">18 Clients Served</span>
            <span className="hidden md:inline-block">•</span>
            <span className="text-brand-blue">24h response guarantee</span>
          </motion.div>

          {/* Main content */}
          <div className="mt-12 flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-4xl md:text-6xl lg:text-[62px] font-semibold leading-tight tracking-tight text-black"
              style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
            >
              Building Digital Products
              <br />
              <span className="text-brand-blue">That Leave a Mark.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl"
            >
              Digital Ink is a modern engineering & design company crafting
              world-class software, automations, and digital experiences for
              forward-thinking teams across Africa.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                           bg-black text-white font-medium shadow hover:bg-brand-blue 
                           hover:text-white transition"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border 
                           border-slate-300 text-slate-700 hover:border-brand-blue 
                           hover:text-brand-blue transition"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Feature strip — minimal & classy */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl"
            >
              <FeatureCard
                tag="Design"
                title="Product Design"
                desc="Interfaces, UX systems & brand identity."
              />
              <FeatureCard
                tag="Engineering"
                title="Web & Mobile"
                desc="Next.js, React Native & full-stack builds."
              />
              <FeatureCard
                tag="Automation"
                title="Bots & Workflows"
                desc="WhatsApp flows, scrapers, parsers & AI."
              />
            </motion.div>
          </div>

          {/* Footer hint */}
          <div className="mt-14 text-center text-xs text-slate-400">
            Precision-built · Fast · Modern · Minimal
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small reusable card component */
function FeatureCard({
  tag,
  title,
  desc,
}: {
  tag: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-5 rounded-2xl border border-slate-200 hover:border-brand-blue transition">
      <div className="text-xs font-semibold text-brand-blue">{tag}</div>
      <div className="mt-2 font-medium text-black">{title}</div>
      <div className="text-sm text-slate-500">{desc}</div>
    </div>
  );
}
