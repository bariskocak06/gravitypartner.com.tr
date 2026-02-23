"use client";

import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const HERO_WORDS = ["We", "Build", "Growth", "Infrastructure."];

const FUNCTION_CARDS = [
  {
    title: "Performance Engineering",
    tag: "TEMEL",
    body: "Reklam altyapısının teknik katmanını yönetir. Sinyal kalitesi, learning phase stabilitesi ve ölçekleme protokolleri bu disiplinin çıktısıdır.",
  },
  {
    title: "Creative Strategy",
    tag: "KREATİF",
    body: "Hook mühendisliğinden kreatif rotasyon sistemine kadar içeriğin performans değişkenlerini tasarlar. Estetik değil, dönüşüm odaklı kreatif.",
  },
  {
    title: "Data and Tracking",
    tag: "VERİ",
    body: "Pixel, CAPI, server-side tracking ve event mimarisi. Algoritmanın görmesi gereken her veri noktasını doğru şekilde iletir.",
  },
  {
    title: "Automation and CRM",
    tag: "OTOMASYON",
    body: "Lead sonrası sürecin otomasyonu. WhatsApp akışları, CRM entegrasyonu ve müşteri yaşam döngüsü sistemleri bu fonksiyonun çıktısıdır.",
  },
  {
    title: "Growth Strategy",
    tag: "STRATEJİ",
    body: "Büyüme hedeflerini sisteme dönüştürür. Bütçe dağılım mantığı, kanal stratejisi ve ölçekleme planlaması burada şekillenir.",
  },
];

const TIMELINE_NODES = [
  {
    step: "01",
    title: "Teşhis",
    description:
      "Mevcut altyapının teknik ve stratejik analizi yapılır. Sinyal kalitesi, funnel mimarisi ve platform tutarlılığı incelenir. Sorun tanımlanmadan çözüm üretilemez.",
  },
  {
    step: "02",
    title: "Mimari Kurulum",
    description:
      "Veri katmanı, tracking altyapısı ve funnel sistemi inşa edilir. Bu aşama olmadan büyüme tesadüfe kalır.",
  },
  {
    step: "03",
    title: "Test ve Optimizasyon",
    description:
      "Kurulan sistem kontrollü koşullarda test edilir. Creative performansı, dönüşüm oranları ve sinyal kalitesi izlenir. Hipotez değil, veri yönlendirir.",
  },
  {
    step: "04",
    title: "Ölçekleme",
    description:
      "Sistem stabil çalıştıktan sonra büyüme protokolleri devreye girer. Bütçe artışı öğrenme fazını bozmadan kontrollü eşiklerle yapılır.",
  },
];

export default function AboutPage() {
  const reducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center dot-grid bg-[#0A0A0A] px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[#0A0A0A]/80" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-300"
          >
            HAKKIMIZDA
          </motion.p>
          <motion.h1
            className="mt-6 flex flex-wrap justify-center gap-x-2 gap-y-1 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {HERO_WORDS.map((word, i) => (
              <motion.span key={i} variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg text-zinc-400 sm:text-xl"
          >
            Büyüme altyapısı kuruyoruz.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-[600px] leading-[1.8] text-zinc-200"
          >
            Gravity, performans reklamcılığını mühendislik disiplinine taşıyan bir büyüme partneridir. Yaratıcılığı veri ile, stratejiyi matematikle, büyümeyi sistemle birleştirir. Sektör fark etmeksizin tek hedef öngörülebilir gelirdir.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-indigo-300"
          >
            Ajans değil. Growth Infrastructure Partner.
          </motion.p>
        </div>
      </section>

      {/* Core Team + Function cards */}
      <section className="border-t border-[#1F1F1F] bg-[#0D0D0D] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-300"
              >
                EKİP YAPISI
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-4 text-2xl font-semibold text-white sm:text-3xl"
              >
                Gravity Core Team
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-4 leading-relaxed text-zinc-300"
              >
                Gravity; kreatif, veri, yazılım ve performans disiplinlerinden oluşan çapraz fonksiyonlu bir yapıdır. İsim değil, fonksiyon. Departman değil, mimari.
              </motion.p>
              <p className="mt-6 text-sm text-zinc-500">
                Freelancer değil. Altyapı organizasyonu.
              </p>
            </div>
            <div className="space-y-4">
              {FUNCTION_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: reducedMotion ? 0 : i * 0.08 }}
                  className="group rounded-lg border border-[#1F1F1F] border-l-[3px] border-l-indigo-500 bg-[#161616] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/60 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] sm:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-white">{card.title}</h3>
                    <span className="rounded bg-indigo-500/90 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white">
                      {card.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {card.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Çalışma Modeli - Timeline */}
      <section className="border-t border-[#1F1F1F] bg-[#0A0A0A] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-300"
          >
            SÜREÇ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-2xl font-semibold text-white sm:text-3xl"
          >
            Nasıl Çalışıyoruz?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-2 text-zinc-400"
          >
            Her müşteri ilişkisi aynı dört adımla başlar ve ilerler.
          </motion.p>

          {/* Timeline: vertical on mobile, horizontal on desktop */}
          <div className="mt-12 lg:mt-16">
            {/* Desktop: horizontal timeline with SVG line */}
            <div className="hidden lg:block">
              <div className="relative">
                <svg
                  className="absolute left-0 top-8 h-0.5 w-full overflow-visible"
                  viewBox="0 0 1000 2"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <line
                    x1="0"
                    y1="1"
                    x2="1000"
                    y2="1"
                    stroke="#1F1F1F"
                    strokeWidth="2"
                    fill="none"
                  />
                  <motion.path
                    d="M 0 1 L 1000 1"
                    stroke="rgb(99, 102, 241)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: reducedMotion ? 0 : 1,
                      ease: "easeOut",
                    }}
                  />
                </svg>
                <div className="grid grid-cols-4 gap-4 pt-16">
                  {TIMELINE_NODES.map((node, i) => (
                    <motion.div
                      key={node.step}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        delay: reducedMotion ? 0 : 0.15 * (i + 1) + 0.3,
                      }}
                      className="flex max-w-[220px] flex-col items-center text-center"
                    >
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-500 font-mono text-lg font-semibold text-white">
                        {node.step}
                      </div>
                      <h3 className="mt-4 font-bold text-white">{node.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {node.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: vertical timeline */}
            <div className="space-y-8 lg:hidden">
              {TIMELINE_NODES.map((node, i) => (
                <motion.div
                  key={node.step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: reducedMotion ? 0 : i * 0.1 }}
                  className="relative flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500 font-mono text-sm font-semibold text-white">
                    {node.step}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white">{node.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {node.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Konum Cümlesi - Closing block */}
      <section className="relative border-t border-[#1F1F1F] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(99,102,241,0.03),transparent_60%)]"
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[1.1]">
            <span className="block">Büyüme platformdan değil,</span>
            <span className="block">mimariden gelir.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[500px] text-zinc-400">
            Gravity; Meta, Google, TikTok ve tüm dijital reklam platformlarında veri temelli performans analizi yaparak markaların ölçeklenebilir büyüme altyapısını kurar.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="w-full sm:w-auto shadow-[0_0_24px_rgba(99,102,241,0.5)]"
              asChild
            >
              <Link href="/audit">Sistem Teşhisi İste</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/solutions">Çözümleri İncele</Link>
            </Button>
          </div>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.24em] text-indigo-300">
            technology · art · growth · GRAVITY: THE CENTER OF GROWTH
          </p>
        </motion.div>
      </section>
    </div>
  );
}
