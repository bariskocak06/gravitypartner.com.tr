"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { getAllSectorsForListing } from "@/lib/sector-data";

const FILTERS = [
  { id: "tumu", label: "Tümü" },
  { id: "saglik", label: "Sağlık" },
  { id: "muzik", label: "Müzik" },
  { id: "e-ticaret", label: "E-Ticaret" },
  { id: "gayrimenkul", label: "Gayrimenkul" },
  { id: "sigorta", label: "Sigorta" },
  { id: "egitim", label: "Eğitim" },
  { id: "otomotiv", label: "Otomotiv" },
  { id: "finans", label: "Finans" },
  { id: "turizm", label: "Turizm" },
  { id: "b2b", label: "B2B" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

function filterIdToSlug(id: FilterId): string | null {
  if (id === "tumu") return null;
  if (id === "e-ticaret") return "eticaret";
  return id;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function SolutionsPage() {
  const [filter, setFilter] = useState<FilterId>("tumu");
  const sectors = useMemo(() => getAllSectorsForListing(), []);
  const slugFilter = filterIdToSlug(filter);
  const filtered =
    !slugFilter ? sectors : sectors.filter((s) => s.slug === slugFilter);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border bg-[#070712] px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-300"
          >
            SEKTÖRLER
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Her sektörün büyüme sorunu farklıdır.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mt-4 text-base text-zinc-400 sm:text-lg"
          >
            Gravity, sektörünüze özel sistem mimarisi kurar.
          </motion.p>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 border-b border-border bg-[#050508]/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`shrink-0 rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  filter === f.id
                    ? "border-indigo-400 bg-indigo-500/20 text-indigo-200 shadow-[0_0_16px_rgba(99,102,241,0.4)]"
                    : "border-border bg-[#0d0d12] text-zinc-400 hover:border-indigo-500/50 hover:text-zinc-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sector cards grid */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-zinc-500"
              >
                Bu filtre için sektör bulunamadı.
              </motion.p>
            ) : (
              <motion.div
                key={filter}
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.06 },
                  },
                }}
                className="grid gap-6 sm:grid-cols-2"
              >
                {filtered.map((sector, i) => (
                  <motion.div
                    key={sector.slug}
                    variants={cardVariants}
                    custom={i}
                    className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-xl border border-[#1F1F1F] bg-[#0d0d14] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-400/70 hover:shadow-[0_0_28px_rgba(99,102,241,0.35)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-indigo-400/90">
                        {sector.number}
                      </span>
                      <h2 className="font-semibold uppercase tracking-wider text-white">
                        {sector.tag}
                      </h2>
                    </div>
                    <p className="mt-4 leading-snug text-zinc-400">
                      {sector.cardStatement}
                    </p>
                    <div className="my-4 h-px w-full bg-[#1F1F1F]" />
                    <div className="flex flex-wrap gap-2">
                      {sector.cardServices.map((service) => (
                        <span
                          key={service}
                          className="rounded border border-indigo-500/50 bg-[#11111a] px-2.5 py-1 font-mono text-[11px] text-zinc-300 transition-transform duration-150 hover:scale-105 hover:border-indigo-400/70 hover:text-zinc-100"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3 pt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/solutions/${sector.slug}`} title={`${sector.title} - Sistemi İncele`}>
                          Sistemi İncele
                        </Link>
                      </Button>
                      <Button size="sm" className="shadow-[0_0_16px_rgba(99,102,241,0.35)]" asChild>
                        <Link href="/audit" title="Teklif Al">Teklif Al</Link>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-gradient-to-b from-[#050508] to-[#070712] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Sektörünüz listede yok mu?
          </h2>
          <p className="mt-3 text-zinc-400">
            Her büyüme sorununa sistem kurarız.
          </p>
          <div className="mt-8">
            <Button size="lg" className="w-full sm:w-auto shadow-[0_0_24px_rgba(99,102,241,0.5)]" asChild>
              <Link href="/audit" title="Teklif Al">Teklif Al</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
