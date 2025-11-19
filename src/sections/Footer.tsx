"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white mt-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-24">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="#hero"
              className="text-3xl font-semibold tracking-tight text-white"
            >
              Digital Ink
            </Link>

            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
              High-clarity design & engineering for product teams across Africa.  
              We build systems that scale — calm, fast, and effortless.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <SocialIcon href="mailto:hello@digitalink.africa" icon={<Mail />} />
              <SocialIcon href="tel:+263785150000" icon={<Phone />} />
              <SocialIcon href="https://linkedin.com" icon={<Linkedin />} />
              <SocialIcon href="https://instagram.com" icon={<Instagram />} />
            </div>
          </div>

          {/* Columns */}
          <FooterCol
            title="Company"
            links={[
              { label: "Home", href: "#hero" },        // ⭐ Added Hero redirect
              { label: "About", href: "#about" },
              { label: "Work", href: "#work" },
              { label: "Services", href: "#services" },
              { label: "How We Work", href: "#process" }, // ⭐ Updated
            ]}
          />

          <FooterCol
            title="Connect"
            links={[
              { label: "Contact", href: "#contact" },
              { label: "WhatsApp", href: "https://wa.me/263785150000" },
              { label: "Email Us", href: "mailto:hello@digitalink.africa" },
              { label: "Book a Call", href: "tel:+263785150000" },
            ]}
          />
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 tracking-tight">
          <p>© {new Date().getFullYear()} Digital Ink Technologies. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed with clarity & built for speed.</p>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------
   Footer Column Component
-------------------------------- */

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
        {title}
      </h4>

      <ul className="mt-4 space-y-3">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              href={l.href}
              className="text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------
   Social Icon Button
-------------------------------- */

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white transition"
    >
      {icon}
    </Link>
  );
}
