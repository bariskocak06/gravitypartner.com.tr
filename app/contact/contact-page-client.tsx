"use client";

import { motion } from "framer-motion";
import { SistemTeshisiForm } from "@/components/sistem-teshisi-form";

export function ContactPageClient() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground">
      <section className="border-b border-[#1F1F1F] bg-[#0D0D0D] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-300"
          >
            İLETİŞİM
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Büyümeye Başla
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-zinc-400"
          >
            10 dakikalık sistem teşhisi talebi. 24 saat içinde analiz başlar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="mt-10"
          >
            <SistemTeshisiForm
              title="Büyümeye Başla"
              subtitle="10 dakikalık sistem teşhisi talebi. 24 saat içinde analiz başlar."
              showTitle={false}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
