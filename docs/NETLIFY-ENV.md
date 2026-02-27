# Netlify ortam değişkenleri

Bu dokümanda Netlify’da ortam değişkeni ekleme adımları ve sitede kullanılan tüm değişkenler listelenir.

---

## Netlify adımları (özet)

1. **Netlify’a girin**  
   Tarayıcıda [https://app.netlify.com](https://app.netlify.com) adresine gidin ve giriş yapın.

2. **Siteyi seçin**  
   Sitenizi (örn. gravitypartner.com.tr) listeden tıklayın.

3. **Environment variables sayfasına gidin**  
   Sol menüden **Site configuration** (veya **Build & deploy**) → **Environment variables** tıklayın.

4. **Değişken ekleyin**  
   Sağ üstte **Add a variable** veya **Add single variable** / **Add multiple variables** butonuna tıklayın.  
   - **Key:** Değişken adı (örn. `GEMINI_API_KEY`) — tam olarak yazın, büyük/küçük harf önemli.  
   - **Value:** Değeri yapıştırın; başta/sonda boşluk veya satır atlaması olmasın.  
   - **Scopes:** En azından **Production** işaretli olsun (veya **All**).  
   Sonra **Save** veya **Create variable** deyin.

5. **Birden fazla değişken**  
   Aynı adımları her değişken için tekrarlayın (Add a variable → Key, Value, Save).

6. **Deploy alın**  
   Üst menüden **Deploys** sekmesine geçin. **Trigger deploy** → **Clear cache and deploy site** seçin.  
   Ortam değişkenleri sadece **yeni deploy**’da devreye girer; bu yüzden mutlaka deploy tetikleyin.

7. **Kontrol**  
   Deploy bittikten sonra canlı sitede (https://gravitypartner.com.tr) ilgili özelliği test edin.

**Dikkat:** Bir değişkende "0 values in all deploy contexts" yazıyorsa, **Value** alanı boş veya scope seçilmemiş demektir. Değişkene **Edit** deyip değeri girin ve **Production** (veya All) seçin.

---

## 1. Netlify panelinden (FreeDome – Gemini)

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

---

## Google ile giriş (opsiyonel)

Sitede “Giriş yap” ve Google ile oturum açma özelliği için aşağıdaki değişkenleri ekleyin.

### Netlify’da eklenecekler

| Key | Value | Açıklama |
|-----|--------|----------|
| `AUTH_SECRET` | Rastgele gizli anahtar | Üretmek için: `npx auth secret` (proje klasöründe) |
| `SUPABASE_URL` | (Opsiyonel) Üye ol + giriş için Supabase proje URL | Supabase Dashboard → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | (Opsiyonel) Aynı projenin service_role anahtarı | Tabloyu oluşturmak için: `docs/SUPABASE-USERS-TABLE.sql` |
| `AUTH_EMAIL` | (Opsiyonel) Tek kullanıcı yedek e-posta (Supabase olmadan) | |
| `AUTH_PASSWORD` | (Opsiyonel) Tek kullanıcı yedek şifre | |
| `GOOGLE_CLIENT_ID` | (Opsiyonel) Google OAuth Client ID | Aşağıdaki adımlarla alınır |
| `GOOGLE_CLIENT_SECRET` | (Opsiyonel) Google OAuth Client Secret | Aynı ekrandan kopyalanır |

### Google OAuth bilgilerini alma

1. [Google Cloud Console](https://console.cloud.google.com/) → Proje seçin (veya yeni proje oluşturun).
2. **APIs & Services** → **Credentials** → **Create Credentials** → **OAuth client ID**.
3. Uygulama türü: **Web application**.
4. **Authorized redirect URIs** kısmına ekleyin:
   - Canlı: `https://gravitypartner.com.tr/api/auth/callback/google`
   - Yerel: `http://localhost:3000/api/auth/callback/google`
5. **Create** deyip **Client ID** ve **Client secret** değerlerini kopyalayın; Netlify’da `GOOGLE_CLIENT_ID` ve `GOOGLE_CLIENT_SECRET` olarak yapıştırın.

`AUTH_SECRET` yoksa veya Google bilgileri eksikse “Giriş yap” tıklanınca hata alırsınız; bu değişkenleri tanımladıktan sonra **Clear cache and deploy** yapın.

---

## Üye ol / Giriş yap (Supabase) için Netlify adımları

“Üye ol” ve e-posta/şifre ile girişin canlıda çalışması için Netlify’da şu iki değişkeni ekleyin:

1. **Site configuration** → **Environment variables** → **Add a variable**.
2. **Key:** `SUPABASE_URL`  
   **Value:** Supabase projenizin URL’i (örn. `https://xxxxx.supabase.co`).  
   Supabase Dashboard → **Settings** → **API** → **Project URL**.
3. **Save**.
4. Tekrar **Add a variable**:
   - **Key:** `SUPABASE_SERVICE_ROLE_KEY`  
   - **Value:** Aynı sayfadaki **service_role** (Secret) anahtarı — **anon** değil, **service_role** kullanın.
5. **Save**.
6. **Deploys** → **Trigger deploy** → **Clear cache and deploy site**.

Deploy bittikten sonra canlı sitede “Üye ol” ve “Giriş yap” deneyebilirsiniz.

**Supabase’te `site_users` tablosu yoksa:** Table Editor’da bu tabloyu görmezsiniz; giriş ya env’deki yedek hesapla (AUTH_EMAIL / AUTH_PASSWORD) çalışır ya da hata verir. Tabloyu oluşturmak için: Supabase Dashboard → **SQL Editor** → `docs/SUPABASE-USERS-TABLE.sql` dosyasındaki SQL’i yapıştırıp **Run** deyin. Sonra “Üye ol” ile kayıt olan kullanıcılar bu tabloda listelenir.
