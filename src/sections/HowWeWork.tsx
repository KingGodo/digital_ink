"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "1. Discovery & Alignment",
      description:
        "We begin with a deep conversation to understand your business goals, users, and constraints. No guesswork — only clarity.",
    },
    {
      title: "2. Research & Strategy",
      description:
        "We analyze your market, competitors, and product requirements to define a winning direction with measurable outcomes.",
    },
    {
      title: "3. Design & Prototyping",
      description:
        "From UX flows to high-fidelity visuals, we craft a functional and beautiful experience built around real users.",
    },
    {
      title: "4. Development & Engineering",
      description:
        "We build fast, scalable products using modern frameworks — engineered for reliability and long-term growth.",
    },
    {
      title: "5. Launch & Optimization",
      description:
        "We deploy, monitor performance, and refine the experience to make sure your product succeeds in the real world.",
    },
  ];

  return (
    <section id="process" className="py-32 px-6 md:px-10 lg:px-20 bg-white text-black">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-widest text-black/50">Our Process</p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-3">
            From Idea to Launch — Done Right.
          </h2>

          <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto">
            No fluff. No endless meetings. A clear, efficient, and deeply collaborative workflow built for real results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 space-y-14 relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-blue/30 via-neutral-200 to-transparent hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="md:flex md:items-center md:gap-10"
            >
              <div className="flex items-center gap-4 md:w-1/2">
                <CheckCircle2 className="w-8 h-8 text-brand-blue shrink-0" />
                <h3 className="text-xl font-medium">{step.title}</h3>
              </div>

              <p className="text-neutral-600 md:w-1/2 mt-2 md:mt-0">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                       bg-black text-white font-medium shadow hover:bg-brand-blue 
                       transition"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
