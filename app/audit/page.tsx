"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { SistemTeshisiForm } from "@/components/sistem-teshisi-form";

const PLATFORMS = [
  { name: "Meta Ads", sub: "Facebook, Instagram, WhatsApp" },
  { name: "Google Ads", sub: "Search, Display, Shopping, YouTube" },
  { name: "TikTok Ads" },
  { name: "LinkedIn Ads" },
  { name: "X Ads" },
  { name: "Programatik Kampanyalar" },
  { name: "Affiliate Trafik Sistemleri" },
  { name: "Influencer Marketing" },
];

const SECTORS = [
  "Sağlık",
  "E-Ticaret",
  "Gayrimenkul",
  "Sigorta",
  "Eğitim",
  "Finans",
  "B2B Hizmetler",
  "Turizm",
  "Müzik ve Eğlence",
];

const ANALYSIS_CARDS = [
  {
    num: "01",
    tag: "TEMEL KATMAN",
    title: "Veri Kalitesi ve Sinyal Derinliği",
    body: "Event eşleşme kalitesi, dönüşüm doğrulama, çift sayım kontrolü ve server-side tracking derinliği analiz edilir. Performans reklam denetiminin temeli budur.",
    result: "Algoritmanın doğru veriyle çalışıp çalışmadığı netleşir.",
  },
  {
    num: "02",
    tag: "ENTEGRASYON",
    title: "Platform Sinyal Tutarlılığı",
    body: "Meta Pixel ve CAPI kontrolü, Google Tag ile GA4 entegrasyonu, TikTok event doğrulama ve cross-platform attribution analizi yapılır. Platformlar arası veri çelişkisi hem bütçe israfına hem yanlış optimizasyona yol açar.",
    result: "Tüm platformlar aynı dili konuşur hale gelir.",
  },
  {
    num: "03",
    tag: "ÖLÇEKLEME",
    title: "Learning Phase ve Algoritma Stabilitesi",
    body: "Öğrenme süreci analizi, bütçe dalgalanma kontrolü ve ölçekleme eşik planlaması yapılır. Yanlış zamanda yapılan bütçe artışı öğrenmeyi sıfırlar ve sistemi başa döndürür.",
    result: "Kaotik büyüme değil kontrollü ölçekleme mümkün olur.",
  },
  {
    num: "04",
    tag: "KREATİF",
    title: "Creative Performans ve Yorgunluk Analizi",
    body: "Frekans artış kontrolü, CTR düşüş eğrisi, hook performans ölçümü ve platforma özel creative rotasyon planı oluşturulur. Kreatif yorgunluğu fark edilmeden önce performans düşmeye başlar.",
    result: "Performans düşmeden sürdürülebilir reklam sistemi kurulur.",
  },
  {
    num: "05",
    tag: "DÖNÜŞÜM",
    title: "Funnel ve Dönüşüm Mimarisi",
    body: "Drop-off haritalaması, form terk oranı analizi, mikro dönüşüm dizilimi ve CRM entegrasyon kontrolü yapılır. Sızıntı noktası bulunmadan ölçekleme anlamsızdır.",
    result: "Aynı trafik daha yüksek dönüşüm oranıyla çalışır.",
  },
  {
    num: "06",
    tag: "BÜTÇE",
    title: "Bütçe Verimliliği ve ROAS Analizi",
    body: "Kanal bazlı maliyet analizi, müşteri edinme maliyeti (CAC), yaşam boyu değer (LTV) projeksiyonu ve platform karşılaştırmalı performans değerlendirmesi yapılır.",
    result: "Bütçenin nerede çalıştığı ve nerede boşa gittiği görünür olur.",
  },
];

const GRAVITY_CHIPS = [
  "Veri doğru mu?",
  "Algoritma optimize oluyor mu?",
  "Creative sinyal üretiyor mu?",
  "Funnel sızdırıyor mu?",
  "Ölçekleme mümkün mü?",
];

function useCountUp(end: number, durationMs: number, enabled: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / durationMs, 1);
      setValue(Math.round(t * end));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, durationMs, enabled]);
  return value;
}

export default function AuditPage() {
  const reducedMotion = useReducedMotion();
  const countUpValue = useCountUp(94, 1800, true);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A0A0A] px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-full max-w-2xl bg-[radial-gradient(ellipse_80%_80%_at_100%_0%,rgba(99,102,241,0.03),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-300"
            >
              SİSTEM TEŞHİSİ
              {!reducedMotion && (
                <span className="ml-1 inline-block h-3 w-0.5 animate-pulse bg-indigo-400" />
              )}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 }}
              className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
            >
              <span className="block">Kampanya performansına bakmıyoruz.</span>
              <span className="block">Altyapıyı analiz ediyoruz.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-xl text-zinc-400 sm:text-base"
            >
              Gravity Sistem Teşhisi; Meta, Google, TikTok, YouTube, LinkedIn ve tüm dijital reklam kanallarınızda teknik ve stratejik performans denetimi yapar.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="flex flex-wrap gap-3"
            >
              <span className="rounded-lg border-l-2 border-indigo-500 bg-[#111111] px-4 py-2.5 text-sm text-zinc-300">
                6 Kritik Analiz Katmanı
              </span>
              <span className="rounded-lg border-l-2 border-indigo-500 bg-[#111111] px-4 py-2.5 text-sm text-zinc-300">
                Platform Bağımsız Denetim
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`relative w-full max-w-sm rounded-xl border border-indigo-500/70 bg-[#0c0c12]/90 p-5 backdrop-blur sm:p-6 ${reducedMotion ? "" : "float-card"}`}
            style={reducedMotion ? {} : { animationDuration: "4s" }}
          >
            <div className="flex items-center justify-between text-[12px] text-zinc-300">
              <span>Sistem Skoru</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-indigo-300">
                <span className="relative h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-indigo-500/70" />
                  <span className="absolute inset-0 rounded-full bg-indigo-400" />
                </span>
                LIVE
              </span>
            </div>
            <div className="mt-3 font-mono text-3xl text-indigo-300 sm:text-4xl">
              {countUpValue}
            </div>
            <div className="mt-4 space-y-2.5">
              {[
                { label: "Sinyal Kalitesi", status: "Analiz ediliyor", color: "emerald" },
                { label: "Learning Phase", status: "Stabil", color: "emerald" },
                { label: "Creative Yorgunluk", status: "İzleniyor", color: "amber" },
                { label: "Funnel Sızıntısı", status: "Tespit edildi", color: "red" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-2 text-[11px]"
                >
                  <span className="text-zinc-400">{row.label}</span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${
                        row.color === "emerald"
                          ? "bg-emerald-400"
                          : row.color === "amber"
                            ? "bg-amber-400"
                            : "bg-red-400"
                      }`}
                    />
                    <span className="text-zinc-300">{row.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform coverage */}
      <section className="border-t border-[#1F1F1F] bg-[#0D0D0D] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white sm:text-2xl"
          >
            Hangi platformları kapsıyor?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-2 text-zinc-400"
          >
            Hedef platform değil, platformlar arası altyapı performansıdır.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-2 rounded-lg border border-[#1F1F1F] bg-[#161616] px-4 py-3 transition-all duration-200 hover:border-indigo-500/60 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded bg-[#1F1F1F] text-indigo-400">
                  <PlatformIcon index={i} />
                </span>
                <div>
                  <span className="font-medium text-white">{p.name}</span>
                  {p.sub && (
                    <span className="ml-1.5 text-xs text-zinc-500">{p.sub}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-6 text-center text-sm text-zinc-500">
            Amaç: Platform değil, altyapı performansını ölçmek.
          </p>
        </div>
      </section>

      {/* 6 Analysis blocks */}
      <section className="border-t border-[#1F1F1F] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white sm:text-2xl"
          >
            Neleri Analiz Ediyoruz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-2 text-zinc-400"
          >
            Her analiz katmanı bağımsız çalışır ve birbirini besler.
          </motion.p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {ANALYSIS_CARDS.map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: reducedMotion ? 0 : i * 0.1 }}
                className="group rounded-xl border border-[#1F1F1F] bg-[#0d0d12] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/50 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-xs text-indigo-400">{card.num}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {card.tag}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{card.body}</p>
                <div className="mt-4 rounded border-l-2 border-emerald-500/80 bg-[#0a0f0a]/50 px-3 py-2">
                  <p className="text-xs font-medium text-zinc-300">
                    Sonuç: {card.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-t border-[#1F1F1F] bg-[#0D0D0D] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white sm:text-2xl"
          >
            Hangi Sektörler İçin?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {SECTORS.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-[#1F1F1F] bg-[#161616] px-4 py-2 text-sm text-zinc-300 transition-all duration-200 hover:border-indigo-500/50 hover:text-white"
              >
                {s}
              </span>
            ))}
          </motion.div>
          <p className="mt-6 text-center text-sm text-zinc-500">
            Sektör değişir. Sistem değişmez.
          </p>
        </div>
      </section>

      {/* Gravity Farki */}
      <section className="relative border-t border-[#1F1F1F] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-indigo-500/5"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white sm:text-2xl"
          >
            Bu Bir Kampanya Raporu Değildir.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 leading-relaxed text-zinc-400"
          >
            Gravity Sistem Teşhisi bir büyüme altyapısı denetimidir. Veri doğru mu, algoritma doğru optimize oluyor mu, creative sinyal üretiyor mu, funnel sızdırıyor mu, ölçekleme mümkün mü? Bu sorulara net yanıt veriyoruz. Büyüme platformdan değil mimariden gelir.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {GRAVITY_CHIPS.map((q) => (
              <span
                key={q}
                className="rounded border border-indigo-500/50 bg-[#0d0d12] px-3 py-1.5 font-mono text-[11px] text-zinc-300"
              >
                {q}
              </span>
            ))}
          </motion.div>
          <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-indigo-300">
            Ajans değil. Growth Infrastructure Partner.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="border-t border-[#1F1F1F] bg-[#0A0A0A] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SistemTeshisiForm />
      </section>
    </div>
  );
}

function PlatformIcon({ index }: { index: number }) {
  const icons = [
    <svg key="meta" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    <svg key="google" viewBox="0 0 24 24" className="h-4 w-4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>,
    <svg key="tiktok" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>,
    <svg key="linkedin" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    <svg key="x" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    <svg key="prog" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    <svg key="aff" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>,
    <svg key="inf" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
  ];
  return icons[index] ?? icons[0];
}
