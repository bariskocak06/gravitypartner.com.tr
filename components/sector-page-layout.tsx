"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { SectorData } from "@/lib/sector-data";
import { useState } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
};

const reducedSectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function SectorPageLayout({ data }: { data: SectorData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const variants = reducedMotion ? reducedSectionVariants : sectionVariants;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border bg-[#070712] px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-300"
          >
            {data.tag}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-zinc-400 sm:text-lg"
          >
            {data.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button size="lg" variant="outline" asChild>
              <a href="#hizmetler">Sistemi İncele</a>
            </Button>
            <Button size="lg" className="shadow-[0_0_20px_rgba(99,102,241,0.4)]" asChild>
              <Link href="/audit">Teklif Al</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Nelere Bakıyoruz */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white sm:text-2xl"
          >
            Nelere Bakıyoruz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-2 text-zinc-400"
          >
            Sisteminizi analiz etmeden önce kontrol ettiğimiz kritik noktalar.
          </motion.p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.diagnostics.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={variants}
                custom={reducedMotion ? 0 : i}
                className="group relative overflow-hidden rounded-xl border border-[#1F1F1F] bg-[#161616] p-5 transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)]"
              >
                <div className="absolute inset-y-0 left-0 w-[2px] bg-indigo-500" />
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="border-t border-border bg-[#050508] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white sm:text-2xl"
          >
            Neler Yapıyoruz
          </motion.h2>
          <div className="mt-8 space-y-10">
            {data.serviceGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.05 }}
              >
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-indigo-300">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((service) => (
                    <span
                      key={service}
                      className="rounded border border-indigo-500/50 bg-[#11111a] px-2.5 py-1 font-mono text-[11px] text-zinc-300 transition-transform duration-150 hover:scale-105 hover:border-indigo-400/70 hover:text-zinc-100"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white sm:text-2xl"
          >
            Sık Sorulan Sorular
          </motion.h2>
          <div className="mt-8 space-y-2">
            {data.faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-[#0d0d14]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-white transition-colors hover:bg-[#11111a]"
                >
                  {item.question}
                  <span
                    className={`shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="h-4 w-4 text-zinc-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: reducedMotion ? 0 : 0.25,
                        ease: "easeOut",
                      }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-zinc-400">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-gradient-to-b from-[#050508] to-[#070712] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {data.closingCta}
          </h2>
          <div className="mt-8">
            <Button
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_24px_rgba(99,102,241,0.5)]"
              asChild
            >
              <Link href="/audit">Teklif Al</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
