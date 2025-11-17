"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-black/5 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO + NAME */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo />
          <span className="hidden sm:inline-block font-bold text-xl tracking-tight 
             bg-black bg-clip-text text-transparent group-hover:opacity-70 transition">
            Digital Ink
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          <NavMenu />
          <Button
            asChild
            className="rounded-full px-6 py-2 text-sm font-semibold 
                       bg-black text-white shadow-md hover:bg-neutral-900 transition"
          >
            <Link href="/contact">Let’s Talk</Link>
          </Button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/10 animate-in fade-in slide-in-from-top duration-200"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <NavMenu mobile />
            <Button
              asChild
              className="rounded-full px-6 py-2 text-sm font-semibold bg-black text-white"
            >
              <Link href="/contact" onClick={() => setOpen(false)}>
                Let’s Talk
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------------- */
/*               NAVIGATION MENU            */
/* ---------------------------------------- */
function NavMenu({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      <NavLink href="/services" label="Services" mobile={mobile} />
      <NavLink href="/work" label="Work" mobile={mobile} />
      <NavLink href="/about" label="About" mobile={mobile} />
      <NavLink href="/blog" label="How It Works" mobile={mobile} />
    </>
  );
}

/* ---------------------------------------- */
/*               NAV LINK ITEM              */
/* ---------------------------------------- */
function NavLink({
  href,
  label,
  mobile,
}: {
  href: string;
  label: string;
  mobile?: boolean;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`font-medium transition-all tracking-tight ${
        mobile ? "text-lg py-2" : "text-sm"
      } ${active ? "text-black font-semibold" : "text-slate-600 hover:text-black"}`}
    >
      {label}
    </Link>
  );
}

/* ---------------------------------------- */
/*                  LOGO                    */
/* ---------------------------------------- */
function Logo() {
  return (
    <div className="flex items-center">
      <svg width="34" height="34" viewBox="0 0 24 24" className="rounded-xl shadow-sm">
        <rect width="24" height="24" rx="7" fill="black" />
        <path
          d="M6 16c3-4 9-8 12-4"
          stroke="#00C18B"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
