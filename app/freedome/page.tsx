"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { AnalysisResult } from "@/lib/freedome-types";
import { Button } from "@/components/ui/button";

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
  const [isProcessingFile, setIsProcessingFile] = useState(false);
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

  const compressImage = (dataUrl: string, maxSize = 1200, quality = 0.82): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const scale = Math.min(1, maxSize / Math.max(w, h));
        const cw = Math.round(w * scale);
        const ch = Math.round(h * scale);
        const canvas = document.createElement("canvas");
        canvas.width = cw;
        canvas.height = ch;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(dataUrl);
          return;
        }
        ctx.drawImage(img, 0, 0, cw, ch);
        try {
          const out = canvas.toDataURL("image/jpeg", quality);
          resolve(out);
        } catch {
          resolve(dataUrl);
        }
      };
      img.onerror = () => reject(new Error("Görsel yüklenemedi"));
      img.src = dataUrl;
    });
  };

  const processFile = (file: File) => {
    if (!file?.type.startsWith("image/")) {
      alert("Lütfen geçerli bir resim dosyası yükleyin.");
      return;
    }
    setIsProcessingFile(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const dataUrl = reader.result as string;
      try {
        const compressed = await compressImage(dataUrl);
        setUploadedImage(compressed);
      } catch {
        setUploadedImage(dataUrl);
      } finally {
        setIsProcessingFile(false);
      }
    };
    reader.readAsDataURL(file);
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
    <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col max-w-6xl">
      {apiKeyConfigured === false && (
        <div className="mb-6 rounded-xl border border-amber-500/50 bg-amber-500/10 px-4 py-3 text-sm text-amber-200/95">
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
      <header className="flex justify-between items-end mb-8 border-b border-border pb-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-emerald-400 tracking-tighter">
            FreeDome
          </h1>
          <p className="text-xs text-indigo-200/80 tracking-[0.4em] mt-2 uppercase font-mono">
            Özgür Reklam Mimarı
          </p>
        </div>
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors"
        >
          ← Gravity
        </Link>
      </header>

      {step === 0 && (
        <div className="flex-1 flex flex-col justify-center items-center w-full">
          <div className="w-full max-w-2xl mx-auto bg-card/80 p-8 rounded-3xl border border-border backdrop-blur-lg">
            <label
              htmlFor="freedome-file-input"
              className={`block w-full aspect-video bg-background/60 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all mb-6 touch-manipulation ${
                isDragging ? "border-primary bg-primary/10" : "border-border hover:border-primary active:border-primary"
              }`}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                const file = e.dataTransfer.files?.[0];
                if (file) processFile(file);
              }}
            >
              {isProcessingFile ? (
                <p className="text-primary font-mono text-sm pointer-events-none animate-pulse">Hazırlanıyor…</p>
              ) : uploadedImage ? (
                <img src={uploadedImage} alt="Önizleme" className="w-full h-full object-contain opacity-80 pointer-events-none rounded-2xl" />
              ) : (
                <>
                  <p className="text-primary font-mono text-sm tracking-widest uppercase pointer-events-none">
                    Ürün fotoğrafını yükle
                  </p>
                  <p className="text-muted-foreground text-xs mt-2 pointer-events-none">galeri veya kamera</p>
                </>
              )}
            </label>
            <input
              id="freedome-file-input"
              type="file"
              ref={fileInputRef}
              className="sr-only"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) processFile(file);
                e.target.value = "";
              }}
            />
            <label className="block text-primary text-xs font-mono font-bold mb-2 uppercase tracking-wider">
              Ürün özellikleri / notlar (opsiyonel)
            </label>
            <textarea
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
              placeholder="Örn: Organik yüz serumu. 25-40 yaş kadın. Lüks hissiyat."
              className="w-full bg-background/60 border border-border rounded-xl p-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 h-32 resize-none mb-6"
            />
            {uploadedImage && (
              <div className="flex justify-center w-full pt-1">
                <Button
                  type="button"
                  onClick={handleGenerate}
                  size="lg"
                  className="w-full sm:w-auto min-w-[280px] min-h-[48px] py-3 font-mono uppercase tracking-[0.2em] touch-manipulation"
                >
                  Hedef kitle ve reklam analizini başlat
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm z-50">
          <div className="flex flex-col items-center gap-4 p-8">
            <div className="w-24 h-24 border-4 border-t-primary border-r-transparent border-b-secondary border-l-transparent rounded-full animate-spin" />
            <p className="text-primary font-mono text-sm tracking-widest uppercase animate-pulse">
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
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-2 font-mono">{analysisResult.productName}</h2>
              <div className="h-px w-12 bg-primary mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">{analysisResult.detectedAudience}</p>
              <button
                type="button"
                onClick={() => { setStep(0); setAnalysisResult(null); setGeneratedImages({}); }}
                className="mt-6 text-xs text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors"
              >
                ↺ Yeni analiz
              </button>
            </div>
            <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
              <h3 className="text-primary font-mono text-sm uppercase tracking-widest mb-6">
                Meta reklam hedefleme matrisi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-muted-foreground uppercase text-xs font-bold mb-2">İlgi alanları</p>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.metaTargeting.interests.map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-indigo-500/20 border border-indigo-500/40 text-indigo-200 rounded text-xs">{item}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground uppercase text-xs font-bold mb-2">Davranışlar</p>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.metaTargeting.behaviors.map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 rounded text-xs">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-6 font-mono">A/B reklam varyantları</h3>
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

          <p className="text-center text-sm text-muted-foreground">
            Meta reklamlarına doğrudan yükleme için{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Gravity ile iletişime geçin
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
}
