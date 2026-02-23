# Netlify DNS Doğrulama — Natro’da Düzeltme

## Sorun
- **CNAME** kaydında İçerik olarak `https://gravitypartner.netlify.app/` yazılmış.
- CNAME’de sadece **hostname** (site adı) olmalı, `https://` veya `/` olmamalı.

## Natro’da Yapılacaklar

### 1. www için CNAME’i düzeltin
- **DNS Hizmeti ve Yönetimi** → **Tüm Kayıtlar**
- **www** satırındaki **İçerik** alanını bulun.
- Şu an: `https://gravitypartner.netlify.app/` (YANLIŞ)
- Şöyle yapın: **sadece** `gravitypartner.netlify.app`  
  - `https://` yok  
  - `http://` yok  
  - Sondaki `/` yok  
  - Sadece: `gravitypartner.netlify.app`

| Tipi   | Adı                 | İçerik (doğru)        |
|--------|---------------------|------------------------|
| CNAME  | www                 | gravitypartner.netlify.app |

Kaydedin.

### 2. Apex (ana alan adı) — zaten doğru olabilir
- **gravitypartner.com.tr** için **A** kaydı: **75.2.60.5** (Netlify load balancer)  
  Bu doğru. Değiştirmeyin.

### 3. TXT kaydı
- Netlify domain doğrulaması için TXT genelde gerekmez.
- İçerikte `https://gravitypartner.netlify.app/` olan TXT’yi **silebilirsiniz** veya olduğu gibi bırakabilirsiniz; site çalışması için zorunlu değil.

## Özet
- **www** → CNAME → İçerik: **gravitypartner.netlify.app** (sadece bu)
- **gravitypartner.com.tr** → A → 75.2.60.5

Kaydettikten sonra **5–30 dakika** bekleyin; DNS yayılımı zaman alır. Netlify’da **Domain management** → **Verify DNS configuration** ile tekrar deneyin.
