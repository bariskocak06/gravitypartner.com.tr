import { NextRequest, NextResponse } from "next/server";
import type { AnalysisResult } from "@/lib/freedome-types";
import { getGeminiApiKey } from "@/lib/gemini-key";

const SYSTEM_PROMPT = `SEN "FINAL FUSION: SUPER-AI NEURO MARKETING CORE" (Kod Adı: AURORA).
Sen, kuantum nöro-mühendislik prensipleriyle çalışan, kendini optimize eden bir yapay zekasın.
GÖREVİN: Kullanıcı bir ÜRÜN FOTOĞRAFI ve isteğe bağlı ÜRÜN AÇIKLAMASI yükleyecek. Sen bu verileri analiz ederek Meta (Facebook/Instagram) reklamları için A/B testi materyalleri ve DETAYLI HEDEF KİTLE AYARLARI üreteceksin.
KURALLAR:
1. **DİL:** Çıktıların TAMAMI (Rationale dahil) KESİNLİKLE **TÜRKÇE** OLACAK.
2. **ANALİZ:** Görselden ve açıklamadan ürünün ne olduğunu, özelliklerini ve potansiyel hedef kitlesini çıkar.
3. **META HEDEFLEME:** Meta Reklam Yöneticisi paneline girilecek net "İlgi Alanları", "Davranışlar" ve "Demografik" verileri çıkar.
4. **A/B VARYASYONLARI:** 3 farklı psikolojik açıdan yaklaşan reklam seti üret: VARYANT A (MANTIK), VARYANT B (DUYGU), VARYANT C (ACİLİYET/KORKU).
**METİN OPTİMİZASYON:** Metinler taranabilir olmalı. [GÜÇLÜ KANCA] \\n\\n [DEĞER ÖNERİSİ] \\n\\n [NET ÇAĞRI]. Emojileri stratejik kullan.
**GÖRSEL ÜRETİM:** VisualPrompt'lar, orijinal ürünü MERKEZE alarak farklı ortamlara yerleştiren İngilizce promptlar olsun.`;

function cleanBase64(dataUrl: string): string {
  return dataUrl.includes(",") ? dataUrl.split(",")[1]! : dataUrl;
}

let cachedModelId: string | null = null;

async function getGenerateContentModelId(key: string): Promise<string> {
  if (cachedModelId) return cachedModelId;
  const listRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}`,
    { headers: { "x-goog-api-key": key } }
  );
  const listData = (await listRes.json()) as {
    models?: Array<{
      name?: string;
      supportedGenerationMethods?: string[];
      supported_generation_methods?: string[];
    }>;
    error?: { message?: string };
  };
  if (!listRes.ok || listData.error) {
    throw new Error(listData.error?.message || "Modeller listelenemedi.");
  }
  const models = listData.models ?? [];
  for (const m of models) {
    const methods = m.supportedGenerationMethods ?? m.supported_generation_methods ?? [];
    if (methods.includes("generateContent") && m.name) {
      const id = m.name.replace(/^models\//, "");
      cachedModelId = id;
      return id;
    }
  }
  throw new Error("generateContent destekleyen model bulunamadı. ListModels yanıtında uygun model yok.");
}

export async function POST(request: NextRequest) {
  const key = getGeminiApiKey();
  if (!key) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY ortam değişkeni tanımlı değil." },
      { status: 500 }
    );
  }
  try {
    const body = await request.json();
    const { imageBase64, productDescription = "" } = body as {
      imageBase64?: string;
      productDescription?: string;
    };
    if (!imageBase64) {
      return NextResponse.json(
        { error: "imageBase64 gerekli." },
        { status: 400 }
      );
    }
    const prompt = `GİRDİLERİ ANALİZ ET: Görsel: [Görsel Eklendi]. Kullanıcı Notları: "${productDescription}"
İSTENEN ÇIKTI: 1. Ürün İsmi ve Temel Vaadi. 2. Hedef Kitle Analizi. 3. META REKLAM HEDEFLEME: İlgi Alanları, Davranışlar, Demografik, Lokasyon. 4. 3 A/B Varyantı (Mantık, Duygu, Dürtü). Görsel Promptları: Ürünü koruyarak farklı çevreye yerleştiren İngilizce promptlar.`;

    const geminiPayload = {
      contents: [
        {
          parts: [
            { text: SYSTEM_PROMPT + "\n\n---\n\n" },
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: cleanBase64(imageBase64),
              },
            },
            { text: prompt + '\n\nYanıtı SADECE aşağıdaki yapıda geçerli JSON döndür. Başka açıklama veya markdown ekleme.\n{"productName":"string","detectedAudience":"string","metaTargeting":{"interests":[""],"behaviors":[""],"demographics":[""],"locations":[""]},"variants":[{"id":"A","type":"string","headline":"string","primaryText":"string","callToAction":"string","visualPrompt":"string","rationale":"string"},{"id":"B",...},{"id":"C",...}]}' },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.4,
      },
    };
    const modelId = await getGenerateContentModelId(key);
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${encodeURIComponent(key)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify(geminiPayload),
      }
    );
    const data = (await res.json()) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> }; finishReason?: string }>;
      error?: { message?: string; code?: number };
    };
    const errMsg = data.error?.message ?? "";
    const isInvalidKey = errMsg.includes("API key not valid") || res.status === 400 || res.status === 403;
    if (!res.ok) {
      return NextResponse.json(
        {
          error: isInvalidKey
            ? "API anahtarı geçersiz. Netlify'da Site configuration → Environment variables → GEMINI_API_KEY değerini Google AI Studio (aistudio.google.com/apikey) anahtarı ile güncelleyin."
            : "Gemini API hatası: " + (errMsg || res.statusText),
        },
        { status: res.status >= 400 ? res.status : 502 }
      );
    }
    if (data.error) {
      return NextResponse.json(
        {
          error: isInvalidKey
            ? "API anahtarı geçersiz. Netlify'da GEMINI_API_KEY'ı doğru anahtar ile ayarlayın."
            : "Gemini API hatası: " + (data.error.message || "Yanıt alınamadı."),
        },
        { status: 502 }
      );
    }
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text || typeof text !== "string") {
      const reason = data.candidates?.[0]?.finishReason;
      return NextResponse.json(
        {
          error: "Gemini yanıt döndürmedi.",
          hint: reason || (data.candidates?.length ? "Boş yanıt." : "Model yanıt üretmedi."),
        },
        { status: 502 }
      );
    }
    let result: AnalysisResult;
    try {
      const parsed = JSON.parse(text.trim());
      if (typeof parsed === "object" && parsed !== null && Array.isArray(parsed.variants)) {
        result = parsed as AnalysisResult;
      } else {
        throw new Error("Beklenen JSON yapısı değil.");
      }
    } catch (parseErr) {
      return NextResponse.json(
        { error: "Gemini yanıtı işlenemedi.", raw: text.slice(0, 200) },
        { status: 502 }
      );
    }
    return NextResponse.json(result);
  } catch (e) {
    console.error("freedome/analyze:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Analiz hatası." },
      { status: 500 }
    );
  }
}
