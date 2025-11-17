"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, Bot } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Product & UX Design",
      desc: "World-class interfaces and design systems crafted with clarity, precision, and emotional intelligence.",
      tag: "Design",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Web & Mobile Engineering",
      desc: "Next.js, React Native, cloud architectures — built with speed, stability and a long-term vision.",
      tag: "Engineering",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI & Automation",
      desc: "Custom AI tools, WhatsApp flows, automated processes, and intelligent business infrastructure.",
      tag: "Automation",
    },
  ];

  return (
    <section id="services" className="w-full bg-white py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-black/40">
            What we do
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mt-3">
            Services that define modern digital experience.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group border border-black/5 rounded-2xl p-8 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="h-14 w-14 rounded-full bg-black text-white flex items-center justify-center mb-6 group-hover:scale-105 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-black/60 leading-relaxed">
                {item.desc}
              </p>

              {/* Tag */}
              <div className="mt-6 text-xs font-medium text-blue-600 tracking-wide">
                {item.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
