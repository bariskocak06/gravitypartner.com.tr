"use client";

import Image from "next/image";

const XL_LOGO_NAMES = new Set([
  "Türk Hava Yolları",
  "Migros",
  "Remax",
  "Starbucks",
]);

/** Garanti tek başına çok büyük gösteriliyor */
const GARANTI_NAME = "Garanti Bankası";

const LARGE_LOGO_NAMES = new Set([
  "Cumhurbaşkanlığı",
  "İletişim Başkanlığı",
  "Sağlık Bakanlığı",
  "Kültür Turizm Bakanlığı",
  "Çevre ve Şehircilik Bakanlığı",
  "Nusret",
  "Amerikan Hastanesi",
]);

const REFERENCE_ORDER: { name: string; src: string | null }[] = [
  { name: "Cumhurbaşkanlığı", src: "/ref/cumhurbaskanligi.svg" },
  { name: "İletişim Başkanlığı", src: "/ref/iletisim_baskanligi.svg" },
  { name: "Sağlık Bakanlığı", src: "/ref/saglik_bakanligi.svg" },
  { name: "Kültür Turizm Bakanlığı", src: "/ref/kultur_turizm_bakanligi.svg" },
  { name: "Çevre ve Şehircilik Bakanlığı", src: "/ref/cevre_sehircilik_bakanligi.svg" },
  { name: "Meta", src: null },
  { name: "Türk Hava Yolları", src: "/ref/turk_hava_yollari.svg" },
  { name: "ASELSAN", src: null },
  { name: "Starbucks", src: "/ref/starbucks.svg" },
  { name: "Nusret", src: "/ref/nusret.svg" },
  { name: "Garanti Bankası", src: "/ref/garanti_bankasi.svg" },
  { name: "Migros", src: "/ref/migros.svg" },
  { name: "Turkish Cargo", src: "/ref/turkish_cargo.svg" },
  { name: "Remax", src: "/ref/remax.svg" },
  { name: "Pidem", src: "/ref/pidem.svg" },
  { name: "SR Döner", src: "/ref/sr_doner.svg" },
  { name: "Şımart", src: "/ref/simart.svg" },
  { name: "100 Burger", src: "/ref/100_burger.svg" },
  { name: "The Stock Coffee", src: null },
  { name: "The StockMount", src: null },
  { name: "İstanbul DJ Academy", src: null },
  { name: "Technoise Radio", src: null },
  { name: "Amerikan Hastanesi", src: "/ref/amerikan_hastanesi.svg" },
  { name: "Koru Hastanesi", src: "/ref/koru_hastanesi.svg" },
  { name: "Aile Hastanesi", src: "/ref/aile_hastanesi.svg" },
  { name: "Çevre Hastanesi", src: null },
];

export function ReferenceLogos() {
  const withLogos = REFERENCE_ORDER.filter((r) => r.src !== null);
  return (
    <div className="min-h-[200px] border-t border-[#1F1F1F] bg-[#111111] py-10">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400">
          Referanslar
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
          {withLogos.map((ref) => {
            const isGaranti = ref.name === GARANTI_NAME;
            const isXl = XL_LOGO_NAMES.has(ref.name);
            const isLarge = LARGE_LOGO_NAMES.has(ref.name);
            const sizeClass = isGaranti
              ? "h-28 w-72 sm:h-32 sm:w-80 md:h-36 md:w-96"
              : isXl
                ? "h-20 w-52 sm:h-24 sm:w-60"
                : isLarge
                  ? "h-16 w-40 sm:h-20 sm:w-48"
                  : "h-12 w-28";
            const maxHClass = isGaranti
              ? "max-h-28 sm:max-h-32 md:max-h-36"
              : isXl
                ? "max-h-20 sm:max-h-24"
                : isLarge
                  ? "max-h-16 sm:max-h-20"
                  : "max-h-12";
            return (
              <div
                key={ref.name}
                className={`flex shrink-0 items-center justify-center opacity-90 transition hover:opacity-100 ${sizeClass}`}
                title={ref.name}
                suppressHydrationWarning
              >
                <Image
                  src={ref.src!}
                  alt={ref.name}
                  width={isGaranti ? 384 : isXl ? 240 : isLarge ? 192 : 112}
                  height={isGaranti ? 144 : isXl ? 96 : isLarge ? 80 : 48}
                  className={`w-auto object-contain ${maxHClass}`}
                  suppressHydrationWarning
                  unoptimized
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
