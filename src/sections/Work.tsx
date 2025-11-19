"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import product from "@/assets/product.png";

export default function Work() {
  return (
    <section
      id="work"
      className="py-32 px-6 md:px-10 lg:px-20 bg-white text-black"
    >
      <div className="max-w-5xl mx-auto text-center mb-28">
        <p className="text-xs uppercase tracking-widest text-black/40">
          Case Studies
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-3">
          Work that blends clarity, speed & precision.
        </h2>

        <p className="mt-5 text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
          Every project is built like a product — carefully shaped, performance-minded, and ready for scale.
        </p>
      </div>

      <FeaturedProject
        title="Formify"
        tag="MVP • WhatsApp • Web"
        description="A transaction-tracking platform designed for informal businesses. Built with a WhatsApp-first workflow, zero-friction data entry, and a real-time analytics engine optimised for low-data environments across Africa."
        image={product}
        href="https://formify-frontend-livid.vercel.app/"
      />
    </section>
  );
}

function FeaturedProject({
  title,
  tag,
  description,
  image,
  href,
}: {
  title: string;
  tag: string;
  description: string;
  image: any;
  href: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-6xl mx-auto"
    >
      <Link href={href} target="_blank">
        <div className="relative rounded-3xl overflow-hidden bg-white border border-black/10 shadow-[0_0_60px_rgba(0,0,0,0.06)] hover:shadow-[0_0_80px_rgba(0,0,0,0.09)] transition">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-black/[0.02] via-transparent to-blue-500/[0.03]" />

          <div className="grid md:grid-cols-2 gap-0 items-stretch cursor-pointer">
            {/* Text */}
            <div className="p-10 md:p-14 flex flex-col justify-center relative z-10">
              <div className="text-xs uppercase tracking-wide text-blue-600 font-medium mb-3">
                {tag}
              </div>

              <h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                {title}
              </h3>

              <p className="mt-5 text-neutral-700 leading-relaxed text-sm md:text-base max-w-md">
                {description}
              </p>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-black group-hover:text-blue-600 transition">
                View full case study
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="relative h-72 md:h-auto bg-neutral-50"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain p-10 md:p-14 drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
