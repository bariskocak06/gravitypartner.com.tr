"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const BUDGET_OPTIONS = [
  "5.000 TL altı",
  "5.000 - 20.000 TL",
  "20.000 - 100.000 TL",
  "100.000 TL üzeri",
];

const PLATFORM_OPTIONS = ["Meta", "Google", "TikTok", "LinkedIn", "Diğer"];

const GOAL_OPTIONS = [
  "Karlı büyüme",
  "ROAS stabilizasyonu",
  "CPL düşürme",
  "Yeni pazara giriş",
  "Sistem kurulumu",
];

const SECTOR_OPTIONS = [
  "Sağlık",
  "E-Ticaret",
  "Gayrimenkul",
  "Sigorta",
  "Eğitim",
  "Finans",
  "B2B Hizmetler",
  "Turizm",
  "Müzik ve Eğlence",
  "Diğer",
];

export interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  sector?: string;
  budget?: string;
  platforms?: string;
  goal?: string;
  problem?: string;
}

export function SistemTeshisiForm({
  title = "Sistem Teşhisini Başlat",
  subtitle = "10 dakikalık sistem teşhisi talebi. 24 saat içinde analiz başlar.",
  showTitle = true,
}: {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    sector: "",
    budget: "",
    platforms: [] as string[],
    goal: "",
    problem: "",
  });

  function validate(): boolean {
    const e: FormErrors = {};
    if (!values.name?.trim()) e.name = "Ad Soyad gerekli.";
    if (!values.company?.trim()) e.company = "Şirket adı gerekli.";
    if (!values.email?.trim()) e.email = "E-posta gerekli.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Geçerli bir e-posta girin.";
    if (!values.sector) e.sector = "Sektör seçin.";
    if (!values.budget) e.budget = "Bütçe aralığı seçin.";
    if (values.platforms.length === 0) e.platforms = "En az bir platform seçin.";
    if (!values.goal) e.goal = "Ana hedef seçin.";
    if (!values.problem?.trim()) e.problem = "Bu alan gerekli.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const form = e.currentTarget;
    const botFieldValue = form.querySelector<HTMLInputElement>('input[name="bot-field"]')?.value ?? "";
    const payload = new URLSearchParams({
      "form-name": "sistem-teshisi",
      "bot-field": botFieldValue,
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      sector: values.sector,
      budget: values.budget,
      platforms: values.platforms.join(", "),
      goal: values.goal,
      problem: values.problem.trim(),
    });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
        } else {
          setLoading(false);
          setErrors((prev) => ({ ...prev, problem: "Gönderim başarısız. Lütfen tekrar deneyin." }));
        }
      })
      .catch(() => {
        setLoading(false);
        setErrors((prev) => ({ ...prev, problem: "Bağlantı hatası. Lütfen tekrar deneyin." }));
      });
  }

  function togglePlatform(p: string) {
    setValues((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(p)
        ? prev.platforms.filter((x) => x !== p)
        : [...prev.platforms, p],
    }));
    if (errors.platforms)
      setErrors((prev) => ({ ...prev, platforms: undefined }));
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto max-w-lg rounded-xl border border-[#1F1F1F] bg-[#111111] p-8 shadow-inner"
      >
        <CheckmarkIcon className="mx-auto mb-6 h-16 w-16 text-emerald-400" />
        <h3 className="text-center text-xl font-semibold text-white">
          Talebiniz alındı.
        </h3>
        <p className="mt-3 text-center text-zinc-400">
          Sistem teşhisi talebi sistemimize iletildi. Ekibimiz 24 saat içinde
          analizi başlatmak üzere sizinle iletişime geçecek.
        </p>
        <p className="mt-4 text-center text-sm text-zinc-500">
          Bu süreçte herhangi bir hazırlık yapmanıza gerek yok.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {showTitle && (
        <>
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            {title}
          </h2>
          <p className="mt-2 text-zinc-400">{subtitle}</p>
        </>
      )}
      <motion.form
        name="sistem-teshisi"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className={`rounded-xl border border-[#1F1F1F] bg-[#111111] p-6 shadow-inner sm:p-8 ${showTitle ? "mt-8" : ""}`}
      >
        <input type="hidden" name="form-name" value="sistem-teshisi" />
        <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
          <label htmlFor="st-bot-field">Bu alanı doldurmayın</label>
          <input type="text" id="st-bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <FloatingInput
            id="st-name"
            label="Ad Soyad"
            value={values.name}
            onChange={(v) => setValues((prev) => ({ ...prev, name: v }))}
            error={errors.name}
            onBlur={() => errors.name && validate()}
            setErrors={setErrors}
            required
          />
          <FloatingInput
            id="st-company"
            label="Şirket Adı"
            value={values.company}
            onChange={(v) => setValues((prev) => ({ ...prev, company: v }))}
            error={errors.company}
            onBlur={() => errors.company && validate()}
            setErrors={setErrors}
            required
          />
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <FloatingInput
            id="st-email"
            type="email"
            label="E-posta"
            value={values.email}
            onChange={(v) => setValues((prev) => ({ ...prev, email: v }))}
            error={errors.email}
            onBlur={() => errors.email && validate()}
            setErrors={setErrors}
            required
          />
          <FloatingInput
            id="st-phone"
            type="tel"
            label="Telefon"
            value={values.phone}
            onChange={(v) => setValues((prev) => ({ ...prev, phone: v }))}
            setErrors={setErrors}
            optional
          />
        </div>
        <div className="mt-5">
          <FloatingSelect
            id="st-sector"
            label="Sektör"
            value={values.sector}
            onChange={(v) => setValues((prev) => ({ ...prev, sector: v }))}
            error={errors.sector}
            onBlur={() => errors.sector && validate()}
            options={SECTOR_OPTIONS}
            required
          />
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <FloatingSelect
            id="st-budget"
            label="Aylık Reklam Bütçesi"
            value={values.budget}
            onChange={(v) => setValues((prev) => ({ ...prev, budget: v }))}
            error={errors.budget}
            onBlur={() => errors.budget && validate()}
            options={BUDGET_OPTIONS}
            required
          />
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Kullandığınız Platformlar <span className="text-red-400">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {PLATFORM_OPTIONS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => togglePlatform(p)}
                  className={`rounded-lg border px-3 py-2 text-sm transition-all ${
                    values.platforms.includes(p)
                      ? "border-indigo-500 bg-indigo-500/20 text-indigo-200"
                      : "border-[#1F1F1F] bg-[#161616] text-zinc-400 hover:border-indigo-500/50"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            {errors.platforms && (
              <p className="mt-1 text-xs text-red-400">{errors.platforms}</p>
            )}
          </div>
        </div>
        <div className="mt-5">
          <FloatingSelect
            id="st-goal"
            label="Ana Hedefiniz"
            value={values.goal}
            onChange={(v) => setValues((prev) => ({ ...prev, goal: v }))}
            error={errors.goal}
            onBlur={() => errors.goal && validate()}
            options={GOAL_OPTIONS}
            required
          />
        </div>
        <div className="mt-5">
          <FloatingTextarea
            id="st-problem"
            label="En Büyük Sorunuz"
            value={values.problem}
            onChange={(v) => setValues((prev) => ({ ...prev, problem: v }))}
            error={errors.problem}
            onBlur={() => errors.problem && validate()}
            placeholder="Mevcut sistemde neyin çalışmadığını düşünüyorsunuz?"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-8 w-full rounded-lg bg-indigo-600 py-3.5 font-medium text-white shadow-[0_0_24px_rgba(99,102,241,0.5)] transition-all hover:shadow-[0_0_32px_rgba(99,102,241,0.6)] disabled:opacity-70"
          disabled={loading}
        >
          {loading ? "Gönderiliyor..." : "Teşhisi Başlat"}
        </button>
      </motion.form>
    </div>
  );
}

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  onBlur,
  setErrors,
  required,
  optional,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  onBlur?: () => void;
  setErrors: (fn: (e: FormErrors) => FormErrors) => void;
  required?: boolean;
  optional?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const floated = value.length > 0 || focused;
  return (
    <div className="relative self-start">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onFocus={() => {
          setFocused(true);
          setErrors((e) => {
            const next = { ...e };
            if (id.endsWith("name")) delete next.name;
            if (id.endsWith("company")) delete next.company;
            if (id.endsWith("email")) delete next.email;
            if (id.endsWith("phone")) delete next.phone;
            return next;
          });
        }}
        onBlurCapture={() => setFocused(false)}
        required={required}
        className={`peer w-full rounded-lg border bg-[#161616] px-4 pt-5 pb-2 text-white outline-none transition-colors placeholder:opacity-0 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 ${
          error ? "border-red-500" : "border-[#1F1F1F]"
        }`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          floated
            ? "top-1.5 text-xs text-indigo-400"
            : "top-1/2 -translate-y-1/2 text-sm text-zinc-500"
        }`}
      >
        {label}
        {required && <span className="text-red-400"> *</span>}
        {optional && (
          <span className="text-zinc-600"> (isteğe bağlı)</span>
        )}
      </label>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function FloatingSelect({
  id,
  label,
  value,
  onChange,
  error,
  onBlur,
  options,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  onBlur?: () => void;
  options: string[];
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const floated = value.length > 0 || focused;
  return (
    <div className="relative self-start">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onFocus={() => setFocused(true)}
        onBlurCapture={() => setFocused(false)}
        className={`block w-full appearance-none rounded-lg border bg-[#161616] px-4 pt-5 pb-2 pr-10 text-white outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 ${
          error ? "border-red-500" : "border-[#1F1F1F]"
        }`}
      >
        <option value="" />
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          floated
            ? "top-1.5 text-xs text-indigo-400"
            : "top-1/2 -translate-y-1/2 text-sm text-zinc-500"
        }`}
      >
        {label}
        {required && <span className="text-red-400"> *</span>}
      </label>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          suppressHydrationWarning
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  value,
  onChange,
  error,
  onBlur,
  placeholder,
  rows,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  onBlur?: () => void;
  placeholder: string;
  rows: number;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const floated = value.length > 0 || focused;
  return (
    <div className="relative self-start">
      {/* Boşken etiket yukarıda, placeholder ile çakışmasın */}
      {!floated ? (
        <label
          htmlFor={id}
          className="mb-2 block text-sm text-zinc-500"
        >
          {label}
          {required && <span className="text-red-400"> *</span>}
        </label>
      ) : null}
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onFocus={() => setFocused(true)}
        onBlurCapture={() => setFocused(false)}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={`w-full resize-none rounded-lg border bg-[#161616] px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 ${
          error ? "border-red-500" : "border-[#1F1F1F]"
        } ${floated ? "pt-8" : ""}`}
      />
      {floated ? (
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-4 top-3 text-xs text-indigo-400 transition-all duration-200"
        >
          {label}
          {required && <span className="text-red-400"> *</span>}
        </label>
      ) : null}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function CheckmarkIcon({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 52 52"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 27l7 7 17-18"
        initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      />
    </motion.svg>
  );
}
