# Netlify ortam değişkenleri (FreeDome)

FreeDome (Özgür Reklam Mimarı) canlı sitede çalışsın diye Netlify’da şu değişkeni tanımlayın.

## 1. Netlify panelinden

1. [Netlify](https://app.netlify.com) → Sitenizi seçin.
2. Sol menü: **Build & deploy** → **Environment variables**.
3. **Add a variable** veya **Add multiple variables**.
4. Şunu ekleyin:

| Key (değişken adı) | Value (değer) | Scope |
|--------------------|---------------|--------|
| `GEMINI_API_KEY`   | Google AI Studio’dan kopyaladığınız API anahtarı | Production (veya All) |

5. **Save**.
6. **Deploys** → **Trigger deploy** → **Clear cache and deploy site**.

Önemli:
- **Key** mutlaka `GEMINI_API_KEY` olmalı (kod bu ismi okuyor).
- **Value** tek satır, başta/sonda boşluk olmamalı.
- “0 values in all deploy contexts” görürseniz, değişkene **Value** atanmamış demektir; Edit ile değeri girin ve Production scope seçin.

## 2. Netlify CLI ile (isteğe bağlı)

Terminalde proje klasöründe:

```bash
npx netlify link   # Henüz link yoksa
npx netlify env:set GEMINI_API_KEY "BURAYA_ANAHTARINIZI_YAPIŞTIRIN"
```

Ardından Netlify’dan **Trigger deploy** yapın.

---

## Anahtarın çalıştığını test etmek

Terminalde (anahtarınızı `YOUR_KEY` yerine yazın):

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models?key=YOUR_KEY"
```

- **200 ve JSON** (içinde `"models"` geçiyorsa) → Anahtar geçerli; sorun Netlify ortam değişkeni veya deploy’dadır.
- **400 / "API key not valid"** → Anahtar Google tarafından kabul edilmiyor; [Google AI Studio](https://aistudio.google.com/apikey) üzerinden yeni anahtar oluşturun, kısıtlama (restrict) koymayın.

Anahtar almak: [Google AI Studio – API keys](https://aistudio.google.com/apikey) → Create API key.
