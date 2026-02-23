/* Home page for Gravity — meta performance infrastructure */
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

const heroWordsLine1 = ["Campaign", "management", "is", "dead."];
const heroWordsLine2 = ["Growth", "architecture", "wins."];

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
    <div className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none radial-highlight right-[-120px] top-[-80px]" />
      <div className="pointer-events-none mesh-blob left-[-240px] bottom-[-260px]" />

      {/* HERO */}
      <section className="relative dot-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]" />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-20 pt-12 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8 lg:pb-24 lg:pt-10">
          {/* Left column */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 bg-[#111127]/90 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-indigo-200 shadow-[0_0_22px_rgba(129,140,248,0.65)]">
              <span>META PERFORMANS ALTYAPISI</span>
              <span className="h-3 w-[1px] bg-indigo-400" />
              <span className="relative h-3 w-3">
                <span className="absolute inset-0 animate-ping rounded-full bg-indigo-500/70" />
                <span className="absolute inset-1 rounded-full bg-indigo-400" />
              </span>
            </div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="w-full max-w-none text-[2.9rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-[3.8rem] lg:text-[5rem]"
            >
              <span className="block">
                {heroWordsLine1.map((word, idx) => (
                  <motion.span
                    key={word + idx}
                    variants={wordVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-block pr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {heroWordsLine2.map((word, idx) => (
                  <motion.span
                    key={word + idx}
                    variants={wordVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-block pr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
              Gravity, algoritmaların size karşı değil, sizin için çalışmasını sağlayan veri
              altyapısını kurar. İzleme, sinyal ve funnel mimarisini Meta&apos;nın gerçekten
              optimize ettiği sisteme göre tasarlarız.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" className="w-full sm:w-auto">
                Sistem Auditi Talep Et
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="#how-it-works">Nasıl Çalıştığını Gör</Link>
              </Button>
            </div>

            <p className="text-xs font-mono uppercase tracking-[0.24em] text-zinc-400">
              7 sektörde performans ekipleri tarafından güvenilen altyapı
            </p>
          </div>

          {/* Right column — metric cards */}
          <div className="relative flex-1">
            <div className="pointer-events-none absolute -right-20 -top-16 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
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
          <div className="space-y-4">
            <Label>ASIL PROBLEM</Label>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
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
          <div className="space-y-4">
            <Label>SİSTEM MİMARİSİ</Label>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Kaybettiğiniz açık artırmanın içi.
            </h2>
          </div>

          {/* Diagram */}
          <div className="overflow-hidden rounded-xl border border-border bg-[#0b0b0f] p-6 sm:p-8">
            <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center md:justify-between">
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
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3 text-sm text-muted-foreground sm:text-base">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-300">
                Total Value formülü
              </p>
              <p className="font-mono text-xs text-zinc-200 sm:text-sm">
                Total Value = Bid × Estimated Action Rate × Ad Quality
              </p>
              <p>
                Her açık artırma bu formülü milisaniyeler içinde hesaplar. Teklifinizden
                çok sinyal kaliteniz önemlidir. Meta event&apos;lerinize güvenemiyorsa,
                kimin aksiyon alacağını doğru tahmin edemez ve bütçeniz gürültüde harcanır.
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground sm:text-base">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-300">
                EMQ ve Estimated Action Rate
              </p>
              <p>
                EMQ (Event Match Quality) doğrudan Estimated Action Rate&apos;i etkiler. 6
                altındaki skor, algoritmanın kimin dönüşüm sağlayacağını güvenilir
                şekilde öngöremediği anlamına gelir ve bu durumda, geniş ama pahalı
                gösterimlere geri döner.
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
            <ModuleCard
              tag="FOUNDATION"
              title="Veri Altyapısı"
              description="Pixel + CAPI entegrasyonu ve deduplication mantığı. EMQ skorunu 8+ seviyesine taşıma. Gerçek zamanlı event doğrulama."
            />
            <ModuleCard
              tag="PERFORMANCE"
              title="Creative Engineering"
              description="Scroll davranışına göre kurgulanmış hook sistemi. Yorgunluk takibi ve otomatik creative rotasyon tetikleyicileri."
            />
            <ModuleCard
              tag="CONVERSION"
              title="Funnel Mimarisi"
              description="Landing page psikolojisi haritalaması. Sürtünme (friction) analizi. Öğrenmeyi hızlandırmak için micro-conversion dizilimi."
            />
            <ModuleCard
              tag="SCALE"
              title="Scaling Mantığı"
              description="Learning phase matematiği. Bütçe ölçekleme eşikleri. Stabilite kontrol protokolleri."
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

      {/* CTA BLOCK */}
      <section className="border-y border-border bg-gradient-to-br from-[#050510] via-[#050505] to-[#050512]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center space-y-6"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2.3rem]">
              Daha fazla reklama ihtiyacınız yok.
              <br />
              Çalışan bir sisteme ihtiyacınız var.
            </h2>
            <Button size="lg" className="mt-2 px-10 text-sm sm:text-base">
              10 Dakikalık Audit Talep Et
            </Button>
            <p className="text-xs text-muted-foreground">
              Taahhüt yok. Mevcut altyapınızı teşhis ediyoruz.
            </p>
          </motion.div>
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
    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-300">
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
      className={`float-card rounded-xl border ${accentColor} bg-[#0c0c12]/90 p-4 backdrop-blur`}
      style={{ animationDuration: floatDuration }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between text-[11px] text-zinc-400">
        <span>{title}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
          LIVE
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <div
          className={`font-mono text-xl ${
            accent === "indigo" ? "text-indigo-300" : "text-emerald-300"
          }`}
        >
          {value}
        </div>
      </div>
      <p className="mt-1 text-[11px] text-zinc-500">{subtitle}</p>
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
    >
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="2,24 10,18 20,22 30,14 40,16 50,10 60,14 70,8 80,12 90,6 100,10 110,4 118,6"
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
    <div className="group relative overflow-hidden rounded-xl border border-border bg-[#141427] p-5 transition-transform transition-shadow hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(129,140,248,0.55)]">
      <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-indigo-500 via-indigo-400 to-transparent" />
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#141420] text-indigo-300">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-zinc-50">{title}</h3>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{text}</p>
    </div>
  );
}

function BrokenSignalIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
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
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
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
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
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
      className="flex h-20 min-w-[120px] flex-col justify-center rounded-lg border border-border bg-[#111123] px-4 text-xs text-zinc-200"
      whileHover={{
        boxShadow: "0 0 20px rgba(99,102,241,0.4)",
        borderColor: "rgba(99,102,241,0.9)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
        NODE
      </span>
      <span className="mt-1 text-[11px] font-semibold text-zinc-100">
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

function ModuleCard({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-[#111123] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-400/90 hover:shadow-[0_0_32px_rgba(129,140,248,0.7)]">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-emerald-400 to-indigo-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-zinc-50">{title}</h3>
        <span className="rounded-full border border-indigo-500/40 bg-[#101020] px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.18em] text-indigo-200">
          {tag}
        </span>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{description}</p>
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
