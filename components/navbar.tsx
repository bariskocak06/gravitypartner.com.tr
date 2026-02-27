"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/solutions", label: "Çözümler" },
  { href: "/freedome", label: "Özgür Reklam Mimarı" },
  { href: "/audit", label: "Sistem Teşhisi" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
];

export function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mounted) return;
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 10);
    });
    return () => unsubscribe();
  }, [scrollY, mounted]);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      suppressHydrationWarning
      style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
      className={`sticky top-0 z-40 border-b border-border/80 transition-colors ${
        isScrolled ? "bg-[#050505]/95" : "bg-[#050505]/80"
      }`}
    >
      {mounted && (
        <div
          className="pointer-events-none absolute inset-0 bg-[#0a0a0a]/50"
          aria-hidden="true"
        />
      )}
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" title="Gravity - Ana Sayfa">
          <span suppressHydrationWarning className="block h-9 w-9">
            <Image
              src="/gravity-logo.svg"
              alt="Gravity logosu"
              width={40}
              height={40}
              className="h-9 w-9 object-contain drop-shadow-[0_0_20px_rgba(148,163,253,1)]"
              priority
              suppressHydrationWarning
            />
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg tracking-[0.25em] text-zinc-100">
              GRAVITY
            </span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_14px_rgba(99,102,241,0.9)]">
              <span className="absolute inset-0 rounded-full bg-indigo-400/70 blur-[3px]" />
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-base font-medium text-zinc-200 sm:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                scroll
                title={link.label}
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
          {status !== "loading" && (
            status === "authenticated" ? (
              <span className="hidden sm:flex items-center gap-2 text-xs text-zinc-400 font-mono max-w-[140px] truncate" title={session.user?.email ?? ""}>
                {session.user?.email}
              </span>
            ) : (
              <>
                <Link
                  href="/auth/register"
                  className="hidden sm:inline-flex text-xs font-mono text-zinc-500 hover:text-zinc-100 transition"
                  title="Üye ol"
                >
                  Üye ol
                </Link>
                <Link
                  href="/auth/signin"
                  className="hidden sm:inline-flex text-xs font-mono text-zinc-400 hover:text-zinc-100 transition"
                  title="Giriş yap"
                >
                  Giriş yap
                </Link>
              </>
            )
          )}
          {status === "authenticated" && (
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/" })}
              className="hidden sm:inline-flex text-xs font-mono text-zinc-500 hover:text-zinc-300 transition"
              title="Çıkış yap"
            >
              Çıkış
            </button>
          )}
          <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="/audit" title="Sistem Teşhisi Talep Et">Sistem Teşhisi Talep Et</Link>
          </Button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#2a2a2a] bg-[#111] text-zinc-200 transition hover:border-indigo-500/50 hover:bg-[#1a1a1a] sm:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            suppressHydrationWarning
          >
            {isMenuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden suppressHydrationWarning>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden suppressHydrationWarning>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm sm:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
              role="presentation"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 top-16 z-40 border-b border-[#1F1F1F] bg-[#0a0a0a]/98 px-4 py-6 sm:hidden"
            >
              <nav className="mx-auto flex max-w-6xl flex-col gap-1">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      scroll
                      title={link.label}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition ${
                        active
                          ? "bg-indigo-500/15 text-indigo-200"
                          : "text-zinc-300 hover:bg-[#1a1a1a] hover:text-zinc-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="mt-4 border-t border-[#1F1F1F] pt-4 space-y-2">
                  {status === "authenticated" ? (
                    <>
                      <p className="px-4 text-xs text-zinc-500 font-mono truncate" title={session.user?.email ?? ""}>
                        {session.user?.email}
                      </p>
                      <button
                        type="button"
                        onClick={() => { setIsMenuOpen(false); signOut({ callbackUrl: "/" }); }}
                        className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-zinc-400 hover:bg-[#1a1a1a] hover:text-zinc-100"
                      >
                        Çıkış yap
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/auth/register"
                        onClick={() => setIsMenuOpen(false)}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 hover:bg-[#1a1a1a] hover:text-zinc-100"
                      >
                        Üye ol
                      </Link>
                      <Link
                        href="/auth/signin"
                        onClick={() => setIsMenuOpen(false)}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-[#1a1a1a] hover:text-zinc-100"
                      >
                        Giriş yap
                      </Link>
                    </>
                  )}
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link href="/audit" onClick={() => setIsMenuOpen(false)} scroll title="Sistem Teşhisi Talep Et">
                      Sistem Teşhisi Talep Et
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

