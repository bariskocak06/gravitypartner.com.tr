# GitHub'a Push Rehberi

## 1. GitHub'da yeni repo oluşturun

1. [github.com](https://github.com) → giriş yapın
2. Sağ üst **+** → **New repository**
3. **Repository name:** `gravitypartner.com.tr` (veya istediğiniz isim)
4. **Public** seçin
5. **"Add a README file"** işaretlemeyin (projede zaten dosyalar var)
6. **Create repository** tıklayın

## 2. Projeyi commit edip GitHub'a gönderin

Terminalde proje klasöründe şu komutları çalıştırın:

```bash
# Proje klasörüne gidin
cd /Users/bariskocak/gravitypartner.com.tr

# Tüm değişiklikleri ekleyin
git add .

# Commit
git commit -m "Netlify ve GitHub için hazır"

# GitHub'daki repo adresinizi ekleyin (KULLANICI ve REPO'yu kendi bilginizle değiştirin)
git remote add origin https://github.com/KULLANICIADI/REPO-ADI.git

# Ana dalı gönderin (ilk push)
git push -u origin main
```

**Örnek:** Kullanıcı adınız `bariskocak`, repo adı `gravitypartner` ise:

```bash
git remote add origin https://github.com/bariskocak/gravitypartner.git
git push -u origin main
```

## 3. Şifre / token

- **HTTPS** kullanıyorsanız: GitHub artık şifre kabul etmiyor; **Personal Access Token (PAT)** isteyecek.
  - GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**
  - `repo` yetkisini işaretleyin, token'ı kopyalayın.
  - `git push` sırasında şifre yerine bu token'ı yapıştırın.

- **SSH** kullanmak isterseniz:
  ```bash
  git remote add origin git@github.com:KULLANICIADI/REPO-ADI.git
  git push -u origin main
  ```
  SSH anahtarınızın GitHub hesabınıza ekli olması gerekir.

## 4. Sonraki güncellemeler

Kod değiştirdikten sonra:

```bash
git add .
git commit -m "Açıklama yazın"
git push
```
