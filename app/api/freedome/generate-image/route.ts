import { NextRequest, NextResponse } from "next/server";

function cleanBase64(dataUrl: string): string {
  return dataUrl.includes(",") ? dataUrl.split(",")[1]! : dataUrl;
}

export async function POST(request: NextRequest) {
  let originalImageBase64: string | undefined;
  try {
    const body = await request.json();
    const { visualPrompt, originalImageBase64: orig } = body as {
      visualPrompt?: string;
      originalImageBase64?: string;
    };
    originalImageBase64 = orig;
    if (!visualPrompt || !originalImageBase64) {
      return NextResponse.json(
        { error: "visualPrompt ve originalImageBase64 gerekli." },
        { status: 400 }
      );
    }

    const nanoBananaKey = process.env.NANO_BANANA_API_KEY;
    const imageBase64ForFallback =
      originalImageBase64.startsWith("data:")
        ? originalImageBase64
        : `data:image/jpeg;base64,${originalImageBase64}`;

    const geminiKey = process.env.GEMINI_API_KEY;
    const imagePrompt = `Place this product into a new environment: ${visualPrompt}. Style: award-winning commercial photography, 8k, detailed, cinematic lighting. Product is the central focus. Do not alter the product's design, color, or shape. Only change the background and lighting. No text in the image. Output a single image.`;

    if (nanoBananaKey) {
      const enhancedPrompt = `Keep the product from this image exactly as it is. ${imagePrompt}`;

      const res = await fetch("https://api.nano-banana.run/v1/edit", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${nanoBananaKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: cleanBase64(originalImageBase64),
          prompt: enhancedPrompt,
          model: "nano-banana-v1",
        }),
      });

      const data = (await res.json()) as Record<string, unknown>;

      const imageUrl =
        (data.edited_image_url as string) ??
        (data.editedImageUrl as string) ??
        (data.image_url as string) ??
        (Array.isArray((data as { images?: string[] }).images)
          ? (data as { images: string[] }).images[0]
          : undefined);

      if (imageUrl && typeof imageUrl === "string") {
        return NextResponse.json({ imageBase64: imageUrl, source: "nano-banana" });
      }

      if (!res.ok) {
        const errMsg =
          (data.error as string) ??
          (data.message as string) ??
          `HTTP ${res.status}`;
        return NextResponse.json(
          {
            imageBase64: imageBase64ForFallback,
            warning: `Nano Banana: ${errMsg}. Orijinal görsel kullanıldı.`,
          }
        );
      }

      return NextResponse.json({
        imageBase64: imageBase64ForFallback,
        warning:
          "Nano Banana yanıtta görsel döndürmedi. Orijinal görsel kullanıldı. API yanıt formatını kontrol edin.",
      });
    }

    if (geminiKey) {
      try {
        const modelId = "gemini-2.5-flash-image";
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${geminiKey}`;
        const geminiBody = {
          contents: [
            {
              parts: [
                {
                  inlineData: {
                    mimeType: "image/jpeg",
                    data: cleanBase64(originalImageBase64),
                  },
                },
                { text: imagePrompt },
              ],
            },
          ],
        };
        const gRes = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(geminiBody),
        });
        const gData = (await gRes.json()) as {
          candidates?: Array<{
            content?: { parts?: Array<{ inlineData?: { mimeType?: string; data?: string }; text?: string }> };
          }>;
          error?: { message?: string };
        };
        if (!gRes.ok) {
          const errMsg = gData.error?.message || `HTTP ${gRes.status}`;
          return NextResponse.json({
            imageBase64: imageBase64ForFallback,
            warning: `Gemini görsel: ${errMsg}. Orijinal görsel kullanıldı.`,
          });
        }
        const parts = gData.candidates?.[0]?.content?.parts ?? [];
        for (const part of parts) {
          const id = part.inlineData ?? (part as { inline_data?: { mime_type?: string; data?: string } }).inline_data;
          const raw = id as { mimeType?: string; mime_type?: string; data?: string } | undefined;
          const mime = raw?.mimeType ?? raw?.mime_type ?? "image/png";
          const data = raw?.data;
          if (data) {
            const dataUrl = data.startsWith("data:") ? data : `data:${mime};base64,${data}`;
            return NextResponse.json({ imageBase64: dataUrl, source: "gemini" });
          }
        }
        return NextResponse.json({
          imageBase64: imageBase64ForFallback,
          warning: "Gemini yanıtta görsel döndürmedi. Orijinal görsel kullanıldı.",
        });
      } catch (e) {
        console.error("freedome/generate-image gemini:", e);
        return NextResponse.json({
          imageBase64: imageBase64ForFallback,
          warning: "Gemini görsel isteği başarısız. Orijinal görsel kullanıldı.",
        });
      }
    }

    return NextResponse.json({
      imageBase64: imageBase64ForFallback,
      warning: "GEMINI_API_KEY veya NANO_BANANA_API_KEY tanımlayın. Orijinal görsel kullanıldı.",
    });
  } catch (e) {
    console.error("freedome/generate-image:", e);
    const fallback =
      originalImageBase64 &&
      (originalImageBase64.startsWith("data:")
        ? originalImageBase64
        : `data:image/jpeg;base64,${originalImageBase64}`);
    return NextResponse.json({
      imageBase64: fallback || "https://via.placeholder.com/1080x1080.png?text=Gorsel+yuklenemedi",
    });
  }
}
