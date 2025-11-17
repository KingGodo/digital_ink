"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-10 lg:px-20 bg-white text-black"
    >
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-black/50 text-center"
        >
          About Us
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold text-center tracking-tight mt-3"
        >
          Building digital clarity for Africa’s next generation.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto text-center"
        >
          Digital Ink Technologies designs and engineers products with a single belief:
          technology should feel effortless.  
          We build tools that remove friction, reduce complexity, and unlock meaningful
          impact for teams across Africa.
        </motion.p>

        {/* Split section */}
        <div className="mt-20 grid md:grid-cols-2 gap-16">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-medium tracking-tight">
              What we believe
            </h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Digital experiences should be precise, fast, and calm.  
              From product design to automation pipelines, we focus on eliminating noise —
              so users can focus only on what matters.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <h3 className="text-2xl font-medium tracking-tight">
              How we work
            </h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              We combine design, engineering, and systems thinking to create products that
              scale smoothly.  
              Every build is modular, performance-minded, and optimised for the African
              context — low data, high urgency, and rapid iteration.
            </p>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-neutral-500 max-w-xl mx-auto">
            We’re not an agency.  
            We’re a design-engineering partner committed to building products that
            last — simple, scalable, and unmistakably yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
