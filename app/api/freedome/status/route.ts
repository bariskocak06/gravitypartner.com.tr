import { NextResponse } from "next/server";

import { getGeminiApiKey } from "@/lib/gemini-key";

const API_KEY_INVALID = "API key not valid";

export async function GET() {
  const key = getGeminiApiKey();
  if (!key) {
    return NextResponse.json({
      ok: false,
      error: "GEMINI_API_KEY tanımlı değil. Netlify → Site configuration → Environment variables içinde ekleyin.",
    });
  }
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}`,
      { headers: { "x-goog-api-key": key } }
    );
    const data = (await res.json()) as { error?: { message?: string }; models?: unknown[] };
    if (!res.ok || data.error) {
      const msg = data.error?.message ?? "";
      const isInvalidKey = msg.includes(API_KEY_INVALID) || res.status === 400 || res.status === 403;
      return NextResponse.json({
        ok: false,
        error: isInvalidKey
          ? "API anahtarı geçersiz. Kontrol: 1) Anahtar aistudio.google.com/apikey adresinden alınmış olmalı (Google AI Studio). 2) Netlify → Environment variables → GEMINI_API_KEY değerinde başta/sonda boşluk olmamalı. 3) Eski anahtarı silip yeni oluşturup tekrar deneyin."
          : msg || "Gemini API'ye bağlanılamadı.",
      });
    }
    return NextResponse.json({ ok: true, keyLength: key.length });
  } catch (e) {
    console.error("freedome/status:", e);
    return NextResponse.json({ ok: false, error: "Bağlantı hatası." });
  }
}
