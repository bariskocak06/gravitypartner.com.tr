"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { AnalysisResult } from "@/lib/freedome-types";

export default function FreedomePage() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [productDesc, setProductDesc] = useState("");
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [imageWarning, setImageWarning] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [apiKeyConfigured, setApiKeyConfigured] = useState<boolean | null>(null);
  const [apiKeyError, setApiKeyError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/freedome/status")
      .then((r) => r.json())
      .then((data) => {
        setApiKeyConfigured(data.ok === true);
        setApiKeyError(data.error ?? null);
      })
      .catch(() => {
        setApiKeyConfigured(false);
        setApiKeyError("Bağlantı hatası.");
      });
  }, []);

  const processFile = (file: File) => {
    if (file?.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setUploadedImage(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      alert("Lütfen geçerli bir resim dosyası yükleyin.");
    }
  };

  const handleGenerate = async () => {
    if (!uploadedImage) {
      alert("Lütfen önce ürün fotoğrafı yükleyin.");
      return;
    }
    setStep(1);
    setLoading(true);
    try {
      setLoadingMessage("Görsel ve veriler taranıyor...");
      const analyzeRes = await fetch("/api/freedome/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: uploadedImage,
          productDescription: productDesc,
        }),
      });
      if (!analyzeRes.ok) {
        const err = await analyzeRes.json().catch(() => ({}));
        throw new Error(err.error || "Analiz başarısız.");
      }
      const result = (await analyzeRes.json()) as AnalysisResult;
      setAnalysisResult(result);

      setLoadingMessage("A/B test görselleri üretiliyor (3 varyant)...");
      setImageWarning(null);
      const imageMap: Record<string, string> = {};
      let lastWarning: string | null = null;
      for (const variant of result.variants) {
        try {
          const imgRes = await fetch("/api/freedome/generate-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              visualPrompt: variant.visualPrompt,
              originalImageBase64: uploadedImage,
            }),
          });
          const imgData = await imgRes.json();
          imageMap[variant.id] = imgData.imageBase64 || uploadedImage;
          if (imgData.warning) lastWarning = imgData.warning;
        } catch {
          imageMap[variant.id] = uploadedImage;
          lastWarning = "Görsel API yanıt vermedi. Orijinal fotoğraf kullanıldı.";
        }
      }
      if (lastWarning) setImageWarning(lastWarning);
      setGeneratedImages(imageMap);
      setStep(2);
    } catch (e) {
      console.error(e);
      alert("Hata: " + (e instanceof Error ? e.message : "Analiz başarısız."));
      setStep(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
      {apiKeyConfigured === false && (
        <div className="mb-6 rounded-xl border border-amber-500/50 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
          <p className="font-semibold">Gemini API anahtarı sorunu</p>
          <p className="mt-1 text-amber-200/90">
            {apiKeyError ? (
              apiKeyError
            ) : (
              <>
                Analiz çalışması için <strong>GEMINI_API_KEY</strong> ortam değişkeni gerekli.
                Yerelde: proje kökünde <code className="rounded bg-black/30 px-1">.env.local</code> dosyasına{" "}
            <code className="rounded bg-black/30 px-1">GEMINI_API_KEY=your_key</code> ekleyin.
            Netlify’da: Site → Environment variables → <code className="rounded bg-black/30 px-1">GEMINI_API_KEY</code>.
            Anahtar:{" "}
                <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  Google AI Studio
                </a>
                .
              </>
            )}
          </p>
        </div>
      )}
      <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] via-white to-[#8b5cf6] tracking-tighter">
            FreeDome
          </h1>
          <p className="text-xs text-[#06b6d4]/80 tracking-[0.4em] mt-2 uppercase font-mono">
            Özgür Reklam Mimarı
          </p>
        </div>
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-white font-mono"
        >
          ← Gravity
        </Link>
      </header>

      {step === 0 && (
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="w-full max-w-2xl bg-[#0f172a]/50 p-8 rounded-3xl border border-white/10 backdrop-blur-lg">
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                const file = e.dataTransfer.files?.[0];
                if (file) processFile(file);
              }}
              className={`w-full aspect-video bg-black/40 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all mb-6 ${
                isDragging ? "border-[#06b6d4] bg-[#06b6d4]/10" : "border-gray-700 hover:border-[#06b6d4]"
              }`}
            >
              {uploadedImage ? (
                <img src={uploadedImage} alt="Önizleme" className="w-full h-full object-contain opacity-80" />
              ) : (
                <>
                  <p className="text-[#06b6d4] font-mono text-sm tracking-widest uppercase">
                    {isDragging ? "Görseli bırak!" : "Ürün fotoğrafını yükle"}
                  </p>
                  <p className="text-gray-500 text-xs mt-2">veya tıkla</p>
                </>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) processFile(file);
              }}
            />
            <label className="block text-[#06b6d4] text-xs font-mono font-bold mb-2 uppercase tracking-wider">
              Ürün özellikleri / notlar (opsiyonel)
            </label>
            <textarea
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
              placeholder="Örn: Organik yüz serumu. 25-40 yaş kadın. Lüks hissiyat."
              className="w-full bg-black/40 border border-gray-700 rounded-xl p-4 text-sm text-gray-300 focus:border-[#06b6d4] focus:outline-none h-32 resize-none mb-6"
            />
            {uploadedImage && (
              <button
                onClick={handleGenerate}
                className="w-full md:w-auto px-12 py-4 bg-white text-black font-bold tracking-[0.2em] rounded hover:bg-[#06b6d4] transition-all uppercase text-sm"
              >
                Hedef kitle ve reklam analizini başlat
              </button>
            )}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050b14]/90 backdrop-blur-sm z-50">
          <div className="flex flex-col items-center gap-4 p-8">
            <div className="w-24 h-24 border-4 border-t-[#06b6d4] border-r-transparent border-b-[#8b5cf6] border-l-transparent rounded-full animate-spin" />
            <p className="text-[#06b6d4] font-mono text-sm tracking-widest uppercase animate-pulse">
              {loadingMessage}
            </p>
          </div>
        </div>
      )}

      {step === 2 && analysisResult && (
        <div className="pb-12 space-y-12">
          {imageWarning && (
            <div className="rounded-lg border border-amber-500/50 bg-amber-500/10 text-amber-200 px-4 py-3 text-sm">
              {imageWarning}
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-2 font-mono">{analysisResult.productName}</h2>
              <div className="h-px w-12 bg-[#06b6d4] mb-4" />
              <p className="text-sm text-gray-300 leading-relaxed">{analysisResult.detectedAudience}</p>
              <button
                type="button"
                onClick={() => { setStep(0); setAnalysisResult(null); setGeneratedImages({}); }}
                className="mt-6 text-xs text-gray-500 hover:text-white uppercase tracking-widest"
              >
                ↺ Yeni analiz
              </button>
            </div>
            <div className="lg:col-span-2 bg-[#0f172a] border border-[#fbbf24]/20 rounded-xl p-6">
              <h3 className="text-[#fbbf24] font-mono text-sm uppercase tracking-widest mb-6">
                Meta reklam hedefleme matrisi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-gray-500 uppercase text-xs font-bold mb-2">İlgi alanları</p>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.metaTargeting.interests.map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-900/30 border border-blue-500/30 text-blue-200 rounded text-xs">{item}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 uppercase text-xs font-bold mb-2">Davranışlar</p>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.metaTargeting.behaviors.map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 text-purple-200 rounded text-xs">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 font-mono">A/B reklam varyantları</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {analysisResult.variants.map((variant) => (
                <div key={variant.id} className="bg-white text-black rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                  <div className="p-3 border-b border-gray-100 text-xs text-gray-800 whitespace-pre-wrap">{variant.primaryText}</div>
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    {generatedImages[variant.id] ? (
                      <img
                        src={generatedImages[variant.id]}
                        alt={`Varyant ${variant.id}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">Görsel yok</div>
                    )}
                  </div>
                  <div className="p-2 bg-gray-50 border-t flex justify-between items-center">
                    <p className="font-bold text-sm truncate">{variant.headline}</p>
                    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-xs font-semibold">{variant.callToAction}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            Meta reklamlarına doğrudan yükleme için{" "}
            <Link href="/contact" className="text-[#06b6d4] hover:underline">
              Gravity ile iletişime geçin
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
}
