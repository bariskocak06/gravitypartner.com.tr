"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/audit", label: "Audit" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 10);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const backdropOpacity = useTransform(scrollY, [0, 200], [0.6, 0.9]);

  return (
    <motion.header
      style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
      className={`sticky top-0 z-40 border-b border-border/80 transition-colors ${
        isScrolled ? "bg-[#050505]/95" : "bg-[#050505]/80"
      }`}
    >
      <motion.div
        style={{ backgroundColor: "rgba(10,10,10,0.5)", opacity: backdropOpacity }}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-[0.25em] text-zinc-300">
            GRAVITY
          </span>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]">
            <span className="absolute inset-0 rounded-full bg-indigo-400/60 blur-[3px]" />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-medium text-zinc-400 sm:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors hover:text-zinc-100 ${
                  active ? "text-zinc-100" : ""
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-indigo-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Get Audit
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

