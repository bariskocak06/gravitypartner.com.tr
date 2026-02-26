/* Home page for Gravity — meta performance infrastructure */
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SistemTeshisiForm } from "@/components/sistem-teshisi-form";

const heroWordsLine1 = ["Büyüme", "Mühendisliği."];
const heroWordsLine2: string[] = [];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.06,
          },
        },
      };

  const wordVariants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <div className="relative overflow-hidden bg-background text-foreground" suppressHydrationWarning>
      <div className="pointer-events-none radial-highlight right-[-120px] top-[-80px]" />
      <div className="pointer-events-none mesh-blob left-[-240px] bottom-[-260px]" />

      {/* HERO */}
      <section className="relative dot-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]" />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-20 pt-12 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8 lg:pb-24 lg:pt-10">
          {/* Left column */}
          <div className="flex-1 space-y-8">
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-indigo-200/90 sm:text-base">
              İŞLETMENİZİ BÜYÜTEN SİSTEMLER
            </p>

            <h1 className="w-full max-w-none text-[2.9rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-[3.8rem] lg:text-[5rem]">
              {heroWordsLine1.join(" ")}
              {heroWordsLine2.length > 0 ? (
                <>
                  <br />
                  {heroWordsLine2.join(" ")}
                </>
              ) : null}
            </h1>

            <p className="max-w-xl text-sm text-zinc-300 sm:text-base leading-relaxed">
              Gravity, algoritmaların size karşı değil, sizin için çalışmasını sağlayan veri
              altyapısını kurar. İzleme, sinyal ve funnel mimarisini optimize eden sisteme
              göre tasarlarız.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/audit" title="Sistem Teşhisi Talep Et">Sistem Teşhisi Talep Et</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="#how-it-works" title="Nasıl Çalıştığını Gör">Nasıl Çalıştığını Gör</Link>
              </Button>
            </div>

            <p className="text-xs font-mono uppercase tracking-[0.24em] text-zinc-400">
              22 sektörde performans ekipleri tarafından güvenilen altyapı
            </p>
          </div>

          {/* Right column — metric cards */}
          <div className="relative flex-1 flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-400/80 bg-[#111127]/90 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.3em] text-indigo-100 shadow-[0_0_26px_rgba(129,140,248,0.9)]">
              <span>REKLAM PERFORMANS ALTYAPISI</span>
              <span className="h-3 w-[1px] bg-indigo-400" />
              <span className="relative h-3 w-3">
                <span className="absolute inset-0 animate-ping rounded-full bg-indigo-500/70" />
                <span className="absolute inset-1 rounded-full bg-indigo-400" />
              </span>
            </div>
            <div className="pointer-events-none absolute -right-20 -top-16 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-5 sm:gap-6">
              {/* EMQ Score */}
              <MetricCard
                title="EMQ Score"
                value="94/100"
                subtitle="Event match kalitesi"
                accent="emerald"
                floatDuration="3s"
              >
                <Sparkline color="#10B981" />
              </MetricCard>

              {/* Signal Strength */}
              <MetricCard
                title="Signal Strength"
                value="98.2%"
                subtitle="Yüksek doğrulukta olay akışı"
                accent="indigo"
                floatDuration="4s"
              >
                <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                  <span className="relative inline-flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500/60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  </span>
                  <span>Stabil öğrenme</span>
                </div>
              </MetricCard>

              {/* Learning Phase */}
              <MetricCard
                title="Learning Phase"
                value="STABLE"
                subtitle="Öğrenme fazı sınıflandırması"
                accent="emerald"
                floatDuration="5s"
              >
                <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                  <span className="relative inline-flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <span>Stabilite protokolü aktif</span>
                </div>
              </MetricCard>

              {/* Conversion Lift */}
              <MetricCard
                title="Conversion Lift"
                value="+34.7%"
                subtitle="Önceki mimariye göre"
                accent="indigo"
                floatDuration="3.5s"
              >
                <div className="flex items-center gap-2 text-[11px] text-indigo-200">
                  <ArrowUpIcon />
                  <span>Öğrenme verimliliği artışı</span>
                </div>
              </MetricCard>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section id="problem">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="space-y-5">
            <Label>ASIL PROBLEM</Label>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-[2.9rem] lg:leading-snug">
              <span className="block">
                Çoğu markanın trafik sorunu yok.
              </span>
              <span className="block pl-4 text-zinc-300 sm:pl-10">
                Sinyal sorunu var.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <ProblemCard
              icon={<BrokenSignalIcon />}
                title="Zayıf İzleme"
              text="Tarayıcı taraflı pikseller dönüşümlerin %30–60&apos;ını kaçırır. Algoritma eksik veriyle eğitilir."
            />
              <ProblemCard
              icon={<ServerOffIcon />}
                title="Sunucu Taraflı Veri Yok"
                text="CAPI olmadan iOS kısıtlamaları ve reklam engelleyiciler sinyal kalitenizi sessizce yok eder."
            />
              <ProblemCard
              icon={<BrokenFunnelIcon />}
                title="Bozuk Funnel Mimarisi"
                text="Pixel ve CAPI arasındaki uyumsuz event&apos;ler, çoğul sinyallere yol açar. EMQ skorunuz çöker."
            />
          </div>
        </motion.div>
      </Section>

      {/* HOW META REALLY WORKS */}
      <Section id="how-it-works">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="space-y-5">
            <Label>SİSTEM MİMARİSİ</Label>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3.1rem] lg:leading-snug">
              Algoritmanın gizli katmanları.
            </h2>
          </div>

          {/* Diagram */}
          <div className="overflow-hidden rounded-xl border border-border bg-[#0b0b0f] p-3 sm:p-6 md:p-8">
            <div className="flex flex-col items-stretch gap-2 sm:gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
              <AuctionNode label="ADVERTISER" />
              <Connector />
              <AuctionNode label="SIGNAL" />
              <Connector />
              <AuctionNode label="AUCTION" />
              <Connector />
              <AuctionNode label="TOTAL VALUE" />
              <Connector />
              <AuctionNode label="CONVERSION" />
            </div>
          </div>

          {/* Explanation */}
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-3 text-sm text-muted-foreground sm:text-base">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-300">
                Total Value formülü
              </p>
              <div className="inline-flex max-w-xl flex-wrap items-center gap-1 rounded-md border border-indigo-500/70 bg-[#090918] px-3 py-1.5 font-mono text-[11px] text-indigo-100 shadow-[0_0_18px_rgba(129,140,248,0.6)] sm:text-xs">
                <span className="text-zinc-100">Total Value</span>
                <span className="text-zinc-500">=</span>
                <span className="text-emerald-300">Bid</span>
                <span className="text-zinc-500">×</span>
                <span className="text-sky-300">Estimated Action Rate</span>
                <span className="text-zinc-500">×</span>
                <span className="text-violet-300">Ad Quality</span>
              </div>
              <p>
                Her açık artırma, bu denklemi milisaniyeler içinde hesaplar. Mesele ne
                kadar harcadığınız değil, ne kadar güvenilir sinyal ürettiğinizdir.
              </p>
              <p>
                Google, Meta veya TikTok size güvenmiyorsa; kimin aksiyon alacağını doğru
                tahmin edemez.
              </p>
              <p>
                Tahmin zayıfsa, dağıtım zayıflar. Dağıtım zayıfsa, bütçe gürültüde erir.
              </p>
              <p className="font-medium text-white">Sonuç?</p>
              <p>
                Sizden daha az harcayan ama daha temiz veri, daha güçlü içerik ve daha net
                dönüşüm sinyali üreten hesap öne çıkar.
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-emerald-300 sm:text-sm">
                Reklam bütçesi değil, sinyal kalitesi kazanır.
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground sm:text-base">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-300">
                EMQ ve Estimated Action Rate
              </p>
              <div className="inline-flex max-w-xl flex-wrap items-center gap-1 rounded-md border border-emerald-500/70 bg-[#041712] px-3 py-1.5 font-mono text-[11px] text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.6)] sm:text-xs">
                <span className="text-emerald-200">Yüksek EMQ</span>
                <span className="text-zinc-500">=</span>
                <span className="text-emerald-300">Net kimlik eşleşmesi</span>
                <span className="text-zinc-500">+</span>
                <span className="text-sky-300">Temiz veri akışı</span>
                <span className="text-zinc-500">+</span>
                <span className="text-lime-300">Güçlü event mimarisi</span>
              </div>
              <p>
                EMQ (Event Match Quality), Estimated Action Rate&apos;in temel girdisidir.
                Algoritma, dönüşüm ihtimalini bu eşleşme kalitesi üzerinden modeller.
              </p>
              <p>
                Skor 6&apos;nın altına düştüğünde algoritma şunu anlar: Bu kullanıcı eşleşmesi
                yeterince güvenilir değil.
              </p>
              <p>
                Belirsizlik arttığında sistem riskten kaçınır. Yüksek niyetli doğru kitle
                yerine, alakasız ama pahalı gösterimlere döner.
              </p>
              <p className="font-medium text-white">Sonuç?</p>
              <p>
                CPM yükselir, dönüşüm oranı düşer, bütçe verimsiz dağılır.
              </p>
              <p>
                Sizden daha az harcayan ama daha yüksek EMQ, daha net event mimarisi ve daha
                güçlü veri eşleşmesi olan hesap öne çıkar.
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-emerald-300 sm:text-sm">
                Bütçe değil, eşleşme kalitesi kazanır.
              </p>
            </div>
          </div>

          <div className="border-l-2 border-indigo-500/80 bg-[#090912] px-5 py-4 text-xs text-zinc-100 sm:text-sm shadow-[0_0_24px_rgba(129,140,248,0.55)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-200">
              CAPI ZORUNLULUĞU
            </p>
            <p className="mt-2">
              CAPI opsiyonel değildir. 2024 ve sonrasında çalışan bir reklam sisteminin
              temel katmanıdır. Olmadan mimariniz algoritma için görünmez kalır.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* OUR SYSTEM */}
      <Section>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <Label>GRAVITY SİSTEMİ</Label>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Dört modül. Tek mimari.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <SystemModuleCard
              tag="FOUNDATION"
              accent="indigo"
              title="Veri Altyapısı (Pixel + CAPI + Doğrulama)"
              intro="Reklamın gerçekten hasta getirip getirmediğini ölçmeden bütçe büyütmeyiz."
              bullets={[
                "Web sitenize gelişmiş takip sistemi kurarız.",
                "Meta Pixel + Server bağlantısı ile veri kaybını minimuma indiririz.",
                "Aynı dönüşümün iki kez sayılmasını engelleriz (deduplication).",
                "Veri kalitesini artırarak reklam algoritmasının sizi daha doğru hastalara göstermesini sağlarız.",
                "Gerçek zamanlı kontrol paneli ile neyin çalıştığını anında görürüz.",
              ]}
              result="Tahmine dayalı değil, ölçülebilir büyüme."
            />
            <SystemModuleCard
              tag="PERFORMANCE"
              accent="emerald"
              title="Creative Engineering (Tasarım Mühendisliği)"
              intro='Reklam sadece "video çekmek" değildir.'
              bullets={[
                "İlk 3 saniyeyi scroll davranışına göre tasarlarız.",
                "Hangi cümlenin durdurduğunu test ederiz.",
                "Aynı kreatifi yormayız; sistem otomatik olarak varyasyon üretir ve değiştirir.",
                "İzleyici sıkıldığında algoritma fark eder, içerik değişir.",
              ]}
              result="Daha düşük maliyet, daha yüksek dikkat."
            />
            <SystemModuleCard
              tag="CONVERSION"
              accent="violet"
              title="Funnel Mimarisi (Dönüşüm Sistemi)"
              intro="Reklamdan gelen kişi hemen hasta olmaz. Önce ikna olur. Biz:"
              bullets={[
                "Landing page psikolojisini planlarız.",
                "Nerede tereddüt oluştuğunu analiz ederiz.",
                "Formu daha kolay doldurulabilir hale getiririz.",
                "Küçük adımlar (mikro dönüşümler) ile karar sürecini hızlandırırız.",
              ]}
              result="Aynı trafik → Daha fazla randevu."
            />
            <SystemModuleCard
              tag="SCALE"
              accent="cyan"
              title="Scaling Mantığı (Büyütme Protokolü)"
              intro="Reklamı rastgele artırmayız."
              bullets={[
                "Algoritmanın öğrenme sürecini tamamlamasını bekleriz.",
                "Bütçeyi matematiksel eşiklere göre artırırız.",
                "Ani yükseltmeler yerine stabil büyüme sağlarız.",
                "Performans düşmeden ölçekleriz.",
              ]}
              result="Kontrollü büyüme → Gelir artışı."
            />
          </div>
        </motion.div>
      </Section>

      {/* RESULTS + LIVE SIGNAL COUNTER */}
      <Section>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <Label>SİSTEM ÇIKTILARI</Label>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Mimari çalıştığında ne olur.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <ResultCard
              sector="SAĞLIK"
              metric="−42% CPL"
              description="Sinyal onarımı + CAPI implementasyonu. Altyapı yeniden kurulumu sonrası 14 gün içinde lead başı maliyet azaltıldı."
            />
            <ResultCard
              sector="E-TİCARET"
              metric="ROAS STABILIZED"
              description="Scaling hatası sonrası learning phase yeniden kurgulandı. Gelir öngörülebilirliği tek faturalama döngüsü içinde geri geldi."
            />
            <ResultCard
              sector="EĞİTİM"
              metric="2× Conversion Rate"
              description="Micro-conversion haritalaması ile funnel yeniden kuruldu. Algoritma daha hızlı öğrendi, verimlilik eşiğine daha çabuk ulaştı."
            />
          </div>

          <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-[11px] font-mono text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
            <span>↑ Sinyal kalitesi optimize edildi — bugün 847 event eşleştirildi</span>
            <span>↑ Dönüşüm verimliliği iyileşiyor — 12 sistem aktif</span>
          </div>
        </motion.div>
      </Section>

      {/* BÜYÜMEYE BAŞLA - Form */}
      <section id="büyümeye-başla" className="border-t border-border bg-[#0D0D0D] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SistemTeshisiForm
            title="Büyümeye Başla"
            subtitle="10 dakikalık sistem teşhisi talebi. 24 saat içinde analiz başlar."
            showTitle={true}
          />
        </div>
      </section>
    </div>
  );
}

function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="border-t border-border bg-[#070712] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.32em] text-indigo-200">
      {children}
    </p>
  );
}

function MetricCard({
  title,
  value,
  subtitle,
  accent,
  children,
  floatDuration,
}: {
  title: string;
  value: string;
  subtitle: string;
  accent: "indigo" | "emerald";
  children: React.ReactNode;
  floatDuration: string;
}) {
  const accentColor =
    accent === "indigo" ? "border-indigo-500/70 shadow-[0_0_18px_rgba(99,102,241,0.35)]" : "border-emerald-500/70 shadow-[0_0_18px_rgba(16,185,129,0.35)]";

  return (
    <motion.div
      className={`float-card rounded-xl border ${accentColor} bg-[#0c0c12]/90 p-5 sm:p-6 min-h-[150px] sm:min-h-[180px] backdrop-blur`}
      style={{ animationDuration: floatDuration }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between text-[12px] text-zinc-300">
        <span>{title}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400">
          LIVE
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <div
          className={`font-mono text-2xl sm:text-[2rem] ${
            accent === "indigo" ? "text-indigo-300" : "text-emerald-300"
          }`}
        >
          {value}
        </div>
      </div>
      <p className="mt-1 text-[12px] text-zinc-400">{subtitle}</p>
      <div className="mt-3">{children}</div>
    </motion.div>
  );
}

function Sparkline({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 120 32"
      className="h-8 w-full"
      aria-hidden="true"
      role="img"
      suppressHydrationWarning
    >
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="2,24 10,18 20,22 30,14 40,16 50,10 60,14 70,8 80,12 90,6 100,10 110,4 118,6"
        suppressHydrationWarning
      />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 text-emerald-300"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path
        d="M3 9.5 7.5 5l4.5 4.5M7.5 6v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProblemCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-[#141427] p-6 sm:p-7 transition-transform transition-shadow hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(129,140,248,0.55)]">
      <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-indigo-500 via-indigo-400 to-transparent" />
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#141420] text-indigo-300">
          {icon}
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-zinc-50">
          {title}
        </h3>
      </div>
      <p className="mt-3 text-sm sm:text-base text-muted-foreground">
        {text}
      </p>
    </div>
  );
}

function BrokenSignalIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" suppressHydrationWarning>
      <path
        d="M4 14a6 6 0 0 1 6-6m0-4A10 10 0 0 0 2 12m11.5-6.5A10 10 0 0 1 18 12m-4-1a6 6 0 0 0-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M3 3 17 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ServerOffIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" suppressHydrationWarning>
      <rect
        x="3"
        y="3"
        width="14"
        height="5"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="3"
        y="12"
        width="14"
        height="5"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="6" cy="5.5" r="0.9" fill="currentColor" />
      <circle cx="6" cy="14.5" r="0.9" fill="currentColor" />
      <path
        d="M3 3 17 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrokenFunnelIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" suppressHydrationWarning>
      <path
        d="M4 4h12l-4 5v3.5l-4 2.5V9L4 4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 10.5 13 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AuctionNode({ label }: { label: string }) {
  return (
    <motion.div
      className="flex h-14 min-w-0 flex-shrink-0 flex-col justify-center rounded-lg border border-border bg-[#111123] px-3 py-2 text-zinc-200 sm:h-20 sm:min-w-[120px] sm:px-4 sm:py-0 md:h-24 md:min-w-[140px] md:px-5"
      whileHover={{
        boxShadow: "0 0 20px rgba(99,102,241,0.4)",
        borderColor: "rgba(99,102,241,0.9)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-[11px] sm:tracking-[0.24em]">
        NODE
      </span>
      <span className="mt-0.5 text-xs font-semibold leading-tight text-zinc-100 sm:mt-1 sm:text-sm md:text-base">
        {label}
      </span>
    </motion.div>
  );
}

function Connector() {
  return (
    <motion.div
      className="hidden flex-1 items-center justify-center md:flex"
      initial={{ opacity: 0, width: "0%" }}
      whileInView={{ opacity: 1, width: "100%" }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </motion.div>
  );
}

const ACCENT_STYLES = {
  indigo: {
    card: "border-indigo-400/50 shadow-[0_0_24px_rgba(99,102,241,0.25)] hover:border-indigo-400/90 hover:shadow-[0_0_32px_rgba(99,102,241,0.6)]",
    line: "from-indigo-500 via-indigo-400 to-indigo-500",
    tag: "border-indigo-400/80 bg-indigo-500/20 text-indigo-200 shadow-[0_0_14px_rgba(99,102,241,0.6)]",
    bullet: "text-indigo-400",
    result: "text-indigo-300",
  },
  emerald: {
    card: "border-emerald-400/50 shadow-[0_0_24px_rgba(16,185,129,0.25)] hover:border-emerald-400/90 hover:shadow-[0_0_32px_rgba(16,185,129,0.6)]",
    line: "from-emerald-500 via-emerald-400 to-emerald-500",
    tag: "border-emerald-400/80 bg-emerald-500/20 text-emerald-200 shadow-[0_0_14px_rgba(16,185,129,0.6)]",
    bullet: "text-emerald-400",
    result: "text-emerald-300",
  },
  violet: {
    card: "border-violet-400/50 shadow-[0_0_24px_rgba(139,92,246,0.25)] hover:border-violet-400/90 hover:shadow-[0_0_32px_rgba(139,92,246,0.6)]",
    line: "from-violet-500 via-violet-400 to-violet-500",
    tag: "border-violet-400/80 bg-violet-500/20 text-violet-200 shadow-[0_0_14px_rgba(139,92,246,0.6)]",
    bullet: "text-violet-400",
    result: "text-violet-300",
  },
  cyan: {
    card: "border-cyan-400/50 shadow-[0_0_24px_rgba(34,211,238,0.25)] hover:border-cyan-400/90 hover:shadow-[0_0_32px_rgba(34,211,238,0.6)]",
    line: "from-cyan-500 via-cyan-400 to-cyan-500",
    tag: "border-cyan-400/80 bg-cyan-500/20 text-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.6)]",
    bullet: "text-cyan-400",
    result: "text-cyan-300",
  },
} as const;

function SystemModuleCard({
  tag,
  accent = "indigo",
  title,
  intro,
  bullets,
  result,
}: {
  tag: string;
  accent?: keyof typeof ACCENT_STYLES;
  title: string;
  intro: string;
  bullets: string[];
  result: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const s = ACCENT_STYLES[accent];
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setExpanded((e) => !e)}
      onKeyDown={(ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          setExpanded((e) => !e);
        }
      }}
      className={`group relative flex min-h-[200px] cursor-pointer flex-col overflow-hidden rounded-xl border bg-[#111123] p-6 transition-all duration-200 ${s.card}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${s.line} opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${expanded ? "opacity-100" : ""}`}
      />
      <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
        {title}
      </h3>
      <span
        className={`mt-2 inline-block w-fit rounded border px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.2em] ${s.tag}`}
      >
        {tag}
      </span>
      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ease-out ${
          expanded
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0 md:group-hover:max-h-[600px] md:group-hover:opacity-100"
        }`}
      >
        <p className="text-sm text-zinc-300">{intro}</p>
        <ul className="mt-3 space-y-2 text-sm text-zinc-400">
          {bullets.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className={s.bullet}>*</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className={`mt-4 text-sm font-medium ${s.result}`}>
          Sonuç: {result}
        </p>
      </div>
    </div>
  );
}

function ResultCard({
  sector,
  metric,
  description,
}: {
  sector: string;
  metric: string;
  description: string;
}) {
  return (
    <motion.div
      className="group rounded-xl border border-border bg-[#111123] p-5 transition-colors"
      whileHover={{
        boxShadow: "0 0 22px rgba(99,102,241,0.35)",
        borderColor: "rgba(99,102,241,0.9)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
        {sector}
      </p>
      <p className="mt-3 text-lg font-semibold text-zinc-50">{metric}</p>
      <p className="mt-2 text-xs text-muted-foreground">{description}</p>
    </motion.div>
  );
}
