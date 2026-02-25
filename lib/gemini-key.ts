/**
 * Ortam değişkeninden Gemini API anahtarını alır; boşluk ve görünmeyen karakterleri temizler.
 */
export function getGeminiApiKey(): string {
  const raw = process.env.GEMINI_API_KEY;
  if (raw == null) return "";
  return raw.replace(/[\s\r\n\u00a0]+/g, "").trim();
}
