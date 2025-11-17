"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-10 lg:px-20 bg-white text-black"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT — Info & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Let’s Build Something Great.
          </h2>

          <p className="mt-5 text-lg text-neutral-700 leading-relaxed max-w-md">
            Whether you're starting a new product, redesigning, or automating your workflow —
            we’ll help you move fast, with clarity and excellence.
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-5">
            <ContactLine
              icon={<Mail className="w-5 h-5" />}
              label="Email"
              value="kingtgodo@gmail.com"
              href="mailto:kingtgodo@gmail.com"
            />
            <ContactLine
              icon={<Phone className="w-5 h-5" />}
              label="Phone"
              value="+263 77 851 3990"
            />
            <ContactLine
              icon={<MapPin className="w-5 h-5" />}
              label="Location"
              value="Harare • Remote Across Africa"
            />
          </div>

          {/* Also include a CTA button */}
          <a
            href="tel:+263785150000"
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full 
                       bg-black text-white shadow hover:bg-brand-blue transition"
          >
            Book a Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* RIGHT — Form */}
        <motion.form
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-neutral-50/70 backdrop-blur-sm p-8 rounded-3xl border border-black/5 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="Your Name"
              className="rounded-xl h-12 border-black/10 focus-visible:ring-black"
            />
            <Input
              placeholder="Email or Phone"
              className="rounded-xl h-12 border-black/10 focus-visible:ring-black"
            />
          </div>

          <Input
            placeholder="Company or Project Name"
            className="rounded-xl h-12 border-black/10 focus-visible:ring-black mt-6"
          />

          <Input
            placeholder="Subject"
            className="rounded-xl h-12 border-black/10 focus-visible:ring-black mt-6"
          />

          <Textarea
            placeholder="Tell us a bit about what you want to build…"
            className="rounded-xl min-h-[160px] border-black/10 focus-visible:ring-black mt-6"
          />

          <div className="flex justify-end mt-7">
            <Button className="rounded-full px-8 py-6 text-lg">
              Send Message
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

/* ----------------------------------- */
/*         ContactLine Component       */
/* ----------------------------------- */

function ContactLine({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="flex items-center gap-3 text-neutral-700 hover:text-black transition"
    >
      <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-100 border border-black/5">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-black/50">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </Wrapper>
  );
}
