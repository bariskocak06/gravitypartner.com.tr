# Netlify’da Yayınlama

Bu proje Netlify’da yayınlanmak için hazırdır.

## Adımlar

### 1. Kodu Git’e pushlayın

Projeyi GitHub, GitLab veya Bitbucket’a pushlayın (henüz yapmadıysanız).

```bash
git init
git add .
git commit -m "Netlify için hazır"
git remote add origin https://github.com/KULLANICI/REPO.git
git push -u origin main
```

### 2. Netlify’a bağlayın

1. [app.netlify.com](https://app.netlify.com) adresine gidin ve giriş yapın.
2. **Add new site** → **Import an existing project**.
3. **Deploy with GitHub** (veya kullandığınız Git servisi) ile depoyu seçin.
4. Netlify otomatik olarak Next.js’i algılar; ayarlar şöyle olmalı:
   - **Build command:** `npm run build` (veya `next build`)
   - **Publish directory:** `.next`
   - **Base directory:** (boş bırakın)
5. **Site ayarları** → **Environment variables** bölümünde gerekirse `NODE_VERSION = 20` ekleyin (projede `netlify.toml` ile zaten tanımlı).
6. **Deploy site** ile yayını başlatın.

### 3. Domain (isteğe bağlı)

- Netlify varsayılan adres verir: `https://rastgele-isim.netlify.app`
- **Domain settings** → **Add custom domain** ile kendi domain’inizi (örn. `gravitypartner.com.tr`) ekleyebilirsiniz.

## Yerel Test (Netlify CLI)

Netlify ortamını yerelde denemek için:

```bash
npm install -g netlify-cli
netlify dev
```

Tarayıcıda `http://localhost:8888` açılır.

## Notlar

- Node sürümü `.nvmrc` ve `package.json` → `engines.node` ile **20** olarak ayarlıdır.
- Build ayarları `netlify.toml` içinde tanımlıdır; Netlify bu dosyayı otomatik kullanır.
