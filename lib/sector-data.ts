export type SectorSlug =
  | "saglik"
  | "muzik"
  | "eticaret"
  | "gayrimenkul"
  | "sigorta"
  | "egitim"
  | "otomotiv"
  | "finans"
  | "turizm"
  | "b2b";

export interface DiagnosticItem {
  title: string;
  description: string;
}

export interface ServiceGroup {
  category: string;
  items: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SectorData {
  slug: SectorSlug;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  diagnostics: DiagnosticItem[];
  serviceGroups: ServiceGroup[];
  faq: FAQItem[];
  closingCta: string;
  cardStatement: string;
  cardServices: string[];
}

export const SECTOR_SLUGS: SectorSlug[] = [
  "saglik",
  "muzik",
  "eticaret",
  "gayrimenkul",
  "sigorta",
  "egitim",
  "otomotiv",
  "finans",
  "turizm",
  "b2b",
];

export const SECTORS_DATA: Record<SectorSlug, SectorData> = {
  saglik: {
    slug: "saglik",
    number: "01",
    tag: "SAĞLIK SEKTÖRÜ",
    title: "Hasta kazanım sistemleri. Klinikten sağlık turizmine.",
    subtitle:
      "Meta reklam yönetimi, Google Ads ve klinik SEO hizmetleri; mevzuata uygunluk ve dönüşüm mimarisi olmadan sonuç üretmez.",
    cardStatement: "Hasta kazanım sistemleri. Klinikten sağlık turizmine.",
    cardServices: [
      "Meta Reklam Yönetimi",
      "Google Ads",
      "TikTok Reklamları",
      "Klinik SEO",
      "Lokal SEO",
      "Google Business",
    ],
    diagnostics: [
      {
        title: "Hasta Kazanım Maliyeti",
        description: "CPL trendleri ve sektör karşılaştırması",
      },
      {
        title: "CAPI Kurulum Derinliği",
        description: "Sunucu taraflı veri akışı kontrolü",
      },
      {
        title: "Lead Kalitesi",
        description: "Form doldurma ile gerçek hasta oranı",
      },
      {
        title: "WhatsApp Dönüşüm Akışı",
        description: "Lead sonrası hız ve otomasyon",
      },
      {
        title: "Landing Page Uyumu",
        description: "Reklam mesajı ile sayfa tutarlılığı",
      },
      {
        title: "Hedefleme Segmentasyonu",
        description: "Klinik türüne göre kitle yapısı",
      },
    ],
    serviceGroups: [
      {
        category: "Performans Reklam",
        items: [
          "Meta Reklam Yönetimi",
          "Google Ads",
          "TikTok Reklamları",
          "Sağlık Turizmi Reklamları",
          "Lead Generation",
        ],
      },
      {
        category: "SEO ve Organik",
        items: [
          "Klinik SEO",
          "Lokal SEO",
          "Medikal İçerik SEO",
          "Google Business Optimizasyonu",
          "Blog İçerik Stratejisi",
        ],
      },
      {
        category: "Dönüşüm Sistemi",
        items: [
          "Pixel ve CAPI Kurulumu",
          "Server-Side Tracking",
          "CRM Entegrasyonu",
          "Landing Page Tasarımı",
          "WhatsApp Akışı",
        ],
      },
      {
        category: "Prodüksiyon",
        items: [
          "Doktor Marka Çekimi",
          "Klinik Tanıtım Filmi",
          "Reels Prodüksiyonu",
          "Medikal İçerik Üretimi",
        ],
      },
    ],
    faq: [
      {
        question: "Sağlık sektöründe Meta reklam çalışır mı?",
        answer:
          "Çalışır ama standart kampanya kurgusuyla değil. Sağlık kategorisi Meta kısıtlı kategoriler listesindedir. Doğru sinyal mimarisi olmadan algoritma kimi dönüştüreceğini öğrenemez. CAPI kurulumu ve server-side tracking bu yüzden zorunludur.",
      },
      {
        question: "Kaç günde hasta gelmeye başlar?",
        answer:
          "Altyapı doğru kurulduğunda öğrenme fazı 7 ila 14 gün sürer. İlk leadler bu süre içinde gelir. Kampanyanın stabil çalışması ve tahmin edilebilir maliyet üretmesi 3 ila 4 hafta alır.",
      },
      {
        question: "Google mu yoksa Meta mı?",
        answer:
          "İkisi farklı niyetlere hitap eder. Google aktif arayan hastaya ulaşır. Meta henüz aramayan ama potansiyel olan kitleye görünür olmanızı sağlar. En güçlü sistem ikisini birlikte çalıştırır.",
      },
      {
        question: "Sağlık turizminde dijital pazarlama nasıl çalışır?",
        answer:
          "Uluslararası hasta kazanımı coğrafya bazlı kampanya mimarisi gerektirir. Hedef pazarların her birinin arama davranışı, güven eşiği ve karar süreci farklıdır. Landing page dil ve kültür adaptasyonu olmadan uluslararası trafik dönüşmez.",
      },
      {
        question: "Doktor kişisel markası neden önemli?",
        answer:
          "İnsanlar kliniğe değil doktora güvenir. Kişisel marka içeriği hem organik erişim üretir hem de reklamın dönüşüm oranını doğrudan artırır.",
      },
    ],
    closingCta: "Sağlık sektörü altyapınızı inceleyelim.",
  },
  muzik: {
    slug: "muzik",
    number: "02",
    tag: "MÜZİK VE SANATÇI",
    title: "Algoritmayı çalıştıran streaming ve imaj sistemi.",
    subtitle:
      "Spotify stream artırma kampanyasından TikTok müzik viral stratejisine kadar her adım algoritma mantığıyla tasarlanır.",
    cardStatement: "Algoritmayı çalıştıran streaming ve imaj sistemi.",
    cardServices: [
      "Spotify Stream Kampanyası",
      "YouTube Müzik Reklamı",
      "TikTok Sound Büyütme",
      "Meta Reklam",
      "Sanatçı Konumlandırma",
      "İmaj Mühendisliği",
    ],
    diagnostics: [
      {
        title: "Streaming Büyüme Hızı",
        description: "Aylık dinleyici ve stream trendi analizi",
      },
      {
        title: "Platform Dağılımı",
        description: "Spotify, YouTube, TikTok dengesi",
      },
      {
        title: "Hook Performansı",
        description: "İlk 3 saniye izlenme ve tamamlama oranı",
      },
      {
        title: "Kitle Demografisi",
        description: "Yaş, lokasyon ve platform bazlı analiz",
      },
      {
        title: "Influencer Etki Kalitesi",
        description: "Takipçi etkileşim oranı kontrolü",
      },
      {
        title: "İmaj Tutarlılığı",
        description: "Platform genelinde marka algısı",
      },
    ],
    serviceGroups: [
      {
        category: "Streaming Büyütme",
        items: [
          "Spotify Stream Kampanyası",
          "YouTube Müzik Reklamı",
          "TikTok Sound Büyütme",
          "Apple Music Tanıtımı",
          "Playlist Algoritma Stratejisi",
        ],
      },
      {
        category: "Reklam Yönetimi",
        items: [
          "Meta Reklam Yönetimi",
          "YouTube Ads",
          "TikTok Reklam Yönetimi",
          "Global Müzik Reklamları",
        ],
      },
      {
        category: "İmaj ve Algı",
        items: [
          "Sanatçı Konumlandırma",
          "İmaj Mühendisliği",
          "Marka Kimliği",
          "Dijital Persona",
          "Storytelling",
        ],
      },
      {
        category: "Prodüksiyon",
        items: [
          "Müzik Klibi Prodüksiyonu",
          "Viral Video Kurgusu",
          "Konsept Klip",
          "Performans Video",
        ],
      },
      {
        category: "Influencer",
        items: [
          "Mikro Influencer Kampanyası",
          "TikTok Creator Network",
          "Viral Challenge Kurgusu",
          "Sound Zinciri",
        ],
      },
    ],
    faq: [
      {
        question: "Spotify stream nasıl artırılır?",
        answer:
          "Organik ve ücretli iki yol mevcuttur. Organik büyüme için playlist pitch stratejisi, TikTok sound viral kampanyası ve YouTube algoritmasına uygun içerik üretimi gerekir. Ücretli tarafta ise Meta ve TikTok reklamlarıyla müziği doğrudan Spotify trafiğine çeviren kampanya kurgusu kullanılır.",
      },
      {
        question: "Türk sanatçı global pazara nasıl çıkar?",
        answer:
          "Pazar önceliği kritiktir. Türk pop için Almanya, Hollanda ve Avustralya diaspora kitleleri ilk adım olarak düşük maliyetli ve yüksek dönüşümlüdür. Platform bazlı hedefleme ve dil adaptasyonu olmadan global kitleye ulaşmak bütçe yakar.",
      },
      {
        question: "Bir şarkıyı viral yapmak mümkün mü?",
        answer:
          "Viral kontrol edilemez ancak olasılığı artırmak mümkündür. TikTok sound bazlı içerik zinciri, doğru mikro influencer seçimi ve hook mühendisliği viral olma ihtimalini sistematik olarak yükseltir.",
      },
      {
        question: "Müzik klibinin pazarlamaya etkisi nedir?",
        answer:
          "Klibin görsel kalitesi izleyicinin sanatçıya atfettiği değeri doğrudan belirler. Reklam olarak kullanılacak kliplerde ilk 3 saniye her şeydir.",
      },
    ],
    closingCta: "Sanatçı büyüme sisteminizi birlikte kuralım.",
  },
  eticaret: {
    slug: "eticaret",
    number: "03",
    tag: "E-TİCARET",
    title: "ROAS'ı stabilize eden, öğrenme fazını koruyan sistem.",
    subtitle:
      "Shopify reklam yönetimi ve Meta reklam optimizasyonu için sağlam sinyal altyapısı ve öğrenme fazı kontrolü şarttır.",
    cardStatement: "ROAS'ı stabilize eden, öğrenme fazını koruyan sistem.",
    cardServices: [
      "Meta ROAS Yönetimi",
      "Google Shopping",
      "TikTok Shop",
      "Retargeting",
      "CAPI Entegrasyonu",
      "UGC Prodüksiyon",
    ],
    diagnostics: [
      {
        title: "ROAS Stabilitesi",
        description: "Son 30 günlük performans trendi",
      },
      {
        title: "Sinyal Kalitesi",
        description: "EMQ skoru ve event eşleme kontrolü",
      },
      {
        title: "Sepet Terk Oranı",
        description: "Funnel sızıntı noktaları",
      },
      {
        title: "Creative Yorgunluğu",
        description: "Frekans ve tıklama oranı düşüşü",
      },
      {
        title: "Öğrenme Fazı Durumu",
        description: "Kaç kampanya aktif öğrenimde",
      },
      {
        title: "Ölçekleme Hazırlığı",
        description: "Bütçe artışına stabilite kapasitesi",
      },
    ],
    serviceGroups: [
      {
        category: "Performans Reklam",
        items: [
          "Meta ROAS Yönetimi",
          "Google Shopping",
          "TikTok Shop",
          "Retargeting Sistemi",
          "Sepet Terk Stratejisi",
        ],
      },
      {
        category: "Affiliate",
        items: [
          "Affiliate Sistem Kurulumu",
          "Influencer Satış Ortaklığı",
          "Komisyon Modeli",
          "Satış Ağı Yönetimi",
        ],
      },
      {
        category: "Ürün Pazarlama",
        items: [
          "USP Analizi",
          "Fiyatlandırma Stratejisi",
          "Landing Page Optimizasyonu",
          "A/B Test Kurgusu",
        ],
      },
      {
        category: "Otomasyon",
        items: [
          "Pixel ve CAPI Entegrasyonu",
          "Server-Side Tracking",
          "Creative Rotasyonu",
          "Learning Phase Yönetimi",
          "Ölçekleme Planı",
        ],
      },
      {
        category: "Prodüksiyon",
        items: [
          "Ürün Video Çekimi",
          "UGC İçerik Üretimi",
          "Performance Kreatif",
          "Hook Mühendisliği",
        ],
      },
    ],
    faq: [
      {
        question: "Meta reklamlarım neden artık çalışmıyor?",
        answer:
          "Büyük ihtimalle sinyal problemi var. iOS 14 sonrasında browser-side pixel verisi ciddi ölçüde azaldı. Algoritma yarım veriyle öğreniyor, yanlış kitleye teklif veriyor, ROAS düşüyor. CAPI entegrasyonu olmadan bu döngüyü kırmak mümkün değil.",
      },
      {
        question: "ROAS ne zaman stabil hale gelir?",
        answer:
          "Öğrenme fazı tamamlandıktan sonra, genellikle 50 optimizasyon eventi sonrasında. Bu süreçte bütçeyi fazla artırmak veya kampanyayı düzenlemek öğrenmeyi sıfırlar.",
      },
      {
        question: "Hangi ürünler Meta'da çalışır?",
        answer:
          "Görsel olarak anlatılabilen, impulse satın almayı tetikleyen ürünler Meta'da en iyi çalışır. Yüksek bilet ürünlerde retargeting ve uzun funnel gerekir.",
      },
      {
        question: "UGC içerik neden bu kadar önemli?",
        answer:
          "Meta algoritması doğal görünen içeriklere daha düşük maliyetle daha fazla erişim tanır. Gerçek kullanıcı videoları daha yüksek tıklama oranı, daha düşük CPM ve daha iyi dönüşüm üretiyor.",
      },
    ],
    closingCta: "E-ticaret altyapınızı analiz edelim.",
  },
  gayrimenkul: {
    slug: "gayrimenkul",
    number: "04",
    tag: "GAYRİMENKUL",
    title:
      "Proje lansmanından yatırımcı segmentasyonuna kaliteli lead sistemi.",
    subtitle:
      "Konut projesi dijital pazarlaması ve lüks konut pazarlama stratejileri doğru alıcıya ulaşmak için ileri segmentasyon gerektirir.",
    cardStatement:
      "Proje lansmanından yatırımcı segmentasyonuna kaliteli lead sistemi.",
    cardServices: [
      "Lansman Kampanyası",
      "Lead Filtreleme",
      "Yatırımcı Segmentasyonu",
      "Lokasyon Hedefleme",
      "CRM Entegrasyonu",
      "Drone Prodüksiyon",
    ],
    diagnostics: [
      {
        title: "Lead Başına Maliyet",
        description: "Sektör ortalamasıyla karşılaştırma",
      },
      {
        title: "Lead Kalite Filtresi",
        description: "Nitelikli alıcı oranı analizi",
      },
      {
        title: "Hedefleme Hassasiyeti",
        description: "Lokasyon ve gelir segmentasyonu",
      },
      {
        title: "Landing Page Dönüşümü",
        description: "Ziyaretçiden forma dönüşüm oranı",
      },
      {
        title: "CRM Entegrasyonu",
        description: "Lead takip ve satış döngüsü bağlantısı",
      },
      {
        title: "Prodüksiyon Etkisi",
        description: "Görsel kalite ve tıklama oranı ilişkisi",
      },
    ],
    serviceGroups: [
      {
        category: "Kampanya",
        items: [
          "Proje Lansman Kampanyası",
          "Yüksek Bütçeli Lead Filtreleme",
          "Yatırımcı Segmentasyonu",
          "Lokasyon Hedefleme",
        ],
      },
      {
        category: "Altyapı",
        items: [
          "Landing Page Tasarımı",
          "CRM Entegrasyonu",
          "WhatsApp Satış Akışı",
        ],
      },
      {
        category: "Prodüksiyon",
        items: [
          "Drone Video",
          "3D Tanıtım Filmi",
          "Proje Görsel Kimliği",
        ],
      },
    ],
    faq: [
      {
        question: "Gayrimenkulde dijital lead kalitesi nasıl artırılır?",
        answer:
          "Düşük kaliteli lead problemi genellikle hedefleme değil filtreleme sorunudur. Bütçe aralığı, lokasyon tercihi ve zaman çizelgesi gibi ön filtreleme soruları form aşamasına eklenmesi satış ekibinin zamanını doğru kişilere harcamasını sağlar.",
      },
      {
        question: "Lüks konut pazarlaması nasıl farklı çalışır?",
        answer:
          "Kitle daha küçük, karar süreci daha uzun, güven eşiği çok daha yüksektir. İçerik fiyat değil yaşam tarzı ve statü üzerine kurulur. Retargeting döngüsü 30 ila 90 güne uzar.",
      },
      {
        question: "Proje lansmanı için ne kadar önceden başlamalıyız?",
        answer:
          "En az 60 ila 90 gün önce. İlk 30 gün farkındalık ve liste oluşturma, ikinci 30 gün sıcak kitle besleme, son dönem dönüşüm kampanyasıdır.",
      },
    ],
    closingCta: "Proje lansman stratejinizi birlikte planlayalım.",
  },
  sigorta: {
    slug: "sigorta",
    number: "05",
    tag: "SİGORTA",
    title: "Poliçe satışını sisteme bağlayan lead altyapısı.",
    subtitle:
      "Sigorta lead toplama ve poliçe satış reklam yönetimi için risk bazlı segmentasyon ve otomatik takip akışları zorunludur.",
    cardStatement: "Poliçe satışını sisteme bağlayan lead altyapısı.",
    cardServices: [
      "Poliçe Lead Kampanyası",
      "Risk Segmentasyonu",
      "WhatsApp Satış Akışı",
      "CRM Entegrasyonu",
      "Yenileme Otomasyonu",
    ],
    diagnostics: [
      {
        title: "Lead Yanıt Hızı",
        description: "İlk temas süresinin satışa etkisi",
      },
      {
        title: "Form Kalitesi",
        description: "Doldurulan formların poliçeye dönüşüm oranı",
      },
      {
        title: "Segment Uyumu",
        description: "Ürün tipine göre kitle eşleşmesi",
      },
      {
        title: "WhatsApp Otomasyon Akışı",
        description: "Lead sonrası süreç kontrolü",
      },
      {
        title: "Yenileme Sistemi",
        description: "Mevcut müşteri retansiyon otomasyonu",
      },
      {
        title: "Platform Seçimi",
        description: "Google ve Meta ürün tipi uyumu",
      },
    ],
    serviceGroups: [
      {
        category: "Kampanya",
        items: [
          "Poliçe Lead Kampanyası",
          "Risk Bazlı Segmentasyon",
          "Google Arama Reklamları",
          "Meta Kampanya Yönetimi",
        ],
      },
      {
        category: "Otomasyon",
        items: [
          "WhatsApp Satış Akışı",
          "CRM Entegrasyonu",
          "Yenileme Otomasyon Sistemi",
          "Lead Skorlama",
        ],
      },
    ],
    faq: [
      {
        question: "Sigorta leadleri neden dönüşmüyor?",
        answer:
          "Çoğunlukla hız problemidir. Sigorta kararları karşılaştırmalıdır. İlk 5 dakika içinde dönülmeyen lead büyük ihtimalle başka bir acenteye gitmiştir. WhatsApp otomasyon akışı olmadan lead maliyeti boşa gider.",
      },
      {
        question: "Hangi sigorta ürünleri dijitalde çalışır?",
        answer:
          "Trafik, kasko ve sağlık sigortası yüksek arama hacmiyle Google'da güçlüdür. Hayat sigortası ve bireysel emeklilik ise daha uzun karar süreciyle Meta retargeting'e daha uygundur.",
      },
    ],
    closingCta: "Sigorta lead sisteminizi inceleyelim.",
  },
  egitim: {
    slug: "egitim",
    number: "06",
    tag: "EĞİTİM",
    title: "Öğrenci adayını kayda dönüştüren sistem.",
    subtitle:
      "Kurs reklam yönetimi, özel okul reklam stratejisi ve üniversite dijital pazarlama hizmetlerini kapsayan bütünleşik sistem.",
    cardStatement: "Öğrenci adayını kayda dönüştüren sistem.",
    cardServices: [
      "Öğrenci Lead Kampanyası",
      "Eğitim SEO",
      "Webinar Funnel",
      "Demo Otomasyonu",
      "Kayıt Dönüşüm Sistemi",
    ],
    diagnostics: [
      {
        title: "Başvuru Başına Maliyet",
        description: "Sezonluk trend analizi",
      },
      {
        title: "Webinar Funnel Performansı",
        description: "Kayıt ve katılım oranları",
      },
      {
        title: "Sezon Dışı Liste Büyütme",
        description: "Sıcak kitle hazırlık durumu",
      },
      {
        title: "Landing Page Dönüşümü",
        description: "Form terk noktaları",
      },
      {
        title: "Demo Otomasyonu",
        description: "Başvurudan görüşmeye geçiş hızı",
      },
      {
        title: "İçerik SEO Durumu",
        description: "Organik başvuru katkısı",
      },
    ],
    serviceGroups: [
      {
        category: "Kampanya",
        items: [
          "Öğrenci Lead Kampanyası",
          "Google Arama Reklamları",
          "Meta Kampanya Yönetimi",
          "TikTok Eğitim Reklamları",
        ],
      },
      {
        category: "SEO",
        items: [
          "Eğitim Kurumu SEO",
          "Anahtar Kelime Stratejisi",
          "İçerik Optimizasyonu",
        ],
      },
      {
        category: "Funnel",
        items: [
          "Webinar Funnel Kurulumu",
          "Demo Otomasyonu",
          "Kayıt Dönüşüm Sistemi",
          "CRM Entegrasyonu",
        ],
      },
    ],
    faq: [
      {
        question: "Eğitim kurumları için en iyi lead kaynağı hangisi?",
        answer:
          "Kurs ve kısa eğitimler için Meta ve TikTok hızlı karar veren genç kitleye ulaşmada güçlüdür. Özel okul ve üniversite için Google arama ve velilere yönelik Meta kampanyaları daha etkilidir.",
      },
      {
        question: "Kayıt sezonu dışında ne yapılmalı?",
        answer:
          "Marka bilinirliği ve liste büyütme dönemidir. Sezonsuz dönemde toplanan sıcak kitle kayıt döneminde en düşük maliyetle dönüşür.",
      },
    ],
    closingCta: "Öğrenci kazanım sisteminizi analiz edelim.",
  },
  otomotiv: {
    slug: "otomotiv",
    number: "07",
    tag: "OTOMOTİV",
    title: "Test sürüşünden satışa otomotiv lead sistemi.",
    subtitle:
      "Oto galeri reklam yönetimi ve araç satış dijital pazarlaması lokasyon bazlı hedefleme ve hızlı WhatsApp akışları olmadan yavaş çalışır.",
    cardStatement: "Test sürüşünden satışa otomotiv lead sistemi.",
    cardServices: [
      "Araç Lead Kampanyası",
      "Lokasyon Hedefleme",
      "WhatsApp Satış Sistemi",
      "Test Sürüşü Funnel",
    ],
    diagnostics: [
      {
        title: "Showroom Trafiği",
        description: "Dijital reklamın fiziksel ziyarete etkisi",
      },
      {
        title: "WhatsApp Sorgu Kalitesi",
        description: "Gerçek alıcı oranı",
      },
      {
        title: "Lokasyon Hedefleme Hassasiyeti",
        description: "Coğrafik kapsama analizi",
      },
      {
        title: "Test Sürüşü Funnel",
        description: "Talep ve gerçekleşme oranı",
      },
      {
        title: "Stok Kampanya Uyumu",
        description: "Reklam ile mevcut araç eşleşmesi",
      },
      {
        title: "Segment Bazlı Performans",
        description: "Marka ve araç tipi bazında analiz",
      },
    ],
    serviceGroups: [
      {
        category: "Kampanya",
        items: [
          "Araç Lead Kampanyası",
          "Lokasyon Bazlı Hedefleme",
          "Google Arama Reklamları",
          "Meta Kampanya Yönetimi",
        ],
      },
      {
        category: "Satış Sistemi",
        items: [
          "WhatsApp Satış Sistemi",
          "Test Sürüşü Funnel Kurulumu",
          "CRM Entegrasyonu",
          "Lead Otomasyon",
        ],
      },
    ],
    faq: [
      {
        question: "Oto galeride dijital reklam işe yarar mı?",
        answer:
          "Evet, özellikle lokal hedeflemeyle. Belirli bir ilçe veya şehir bazlı Meta ve Google kampanyaları showroom trafiği ve WhatsApp sorgulaması üretmede hızlı sonuç verir.",
      },
      {
        question: "İkinci el araç satışında reklam nasıl kurgulanır?",
        answer:
          "Her araç için ayrı reklam yerine marka ve segment bazlı kampanya kurgusu daha verimlidir. Stok değişiminde kampanyayı sürekli düzenleme ihtiyacını ortadan kaldırır.",
      },
    ],
    closingCta: "Otomotiv lead sisteminizi inceleyelim.",
  },
  finans: {
    slug: "finans",
    number: "08",
    tag: "FİNANS VE YATIRIM",
    title: "Güven mimarisi üzerine kurulu finans lead sistemi.",
    subtitle:
      "Finansal danışmanlık reklamı ve yatırım reklam yönetiminde güven en kritik dönüşüm faktörüdür.",
    cardStatement: "Güven mimarisi üzerine kurulu finans lead sistemi.",
    cardServices: [
      "Finans Lead Kampanyası",
      "Webinar Funnel",
      "Güven Mimarisi",
      "CRM Lead Skorlama",
    ],
    diagnostics: [
      {
        title: "Güven Skoru",
        description: "İçerik kalitesi ve otorite sinyalleri",
      },
      {
        title: "Lead Kalitesi",
        description: "Gerçek yatırımcı oranı analizi",
      },
      {
        title: "Webinar Funnel",
        description: "Kayıt ve satışa dönüşüm oranı",
      },
      {
        title: "Uyumluluk Riski",
        description: "Meta reklam politikası kontrol",
      },
      {
        title: "CRM Lead Skorlama",
        description: "Potansiyel değer sıralaması",
      },
      {
        title: "Retargeting Döngüsü",
        description: "Karar süreci uzunluğuna uyum",
      },
    ],
    serviceGroups: [
      {
        category: "Kampanya",
        items: [
          "Finans Lead Kampanyası",
          "Google Arama Reklamları",
          "Meta Kampanya Yönetimi",
          "LinkedIn Reklamları",
        ],
      },
      {
        category: "Funnel",
        items: [
          "Webinar Funnel Sistemi",
          "Güven Mimarisi Tasarımı",
          "CRM Entegrasyonu",
          "Lead Skorlama",
        ],
      },
    ],
    faq: [
      {
        question: "Finans sektöründe Meta reklam kısıtlamaları neler?",
        answer:
          "Meta finansal ürünlerin reklamında kredi skoru, gelir durumu ve borç bilgisine dayalı hedeflemeyi yasaklar. Güven üreten içerik yani eğitim videoları ve uzman içerikleri dönüşüm oranını en güçlü şekilde etkiler.",
      },
      {
        question: "Webinar funnel neden bu kadar etkili?",
        answer:
          "Finansal karar yüksek güven gerektirir. Webinar potansiyel müşteriyle gerçek zamanlı ilişki kurar, itirazları canlı karşılar ve satış döngüsünü kısaltır.",
      },
    ],
    closingCta: "Finans lead altyapınızı birlikte kuralım.",
  },
  turizm: {
    slug: "turizm",
    number: "09",
    tag: "TURİZM VE OTEL",
    title: "Rezervasyonu artıran, sezonu uzatan kampanya altyapısı.",
    subtitle:
      "Otel reklam yönetimi ve turizm Meta kampanyaları sezonluk dalgalanmalara karşı dayanıklı bir mimari gerektirir.",
    cardStatement: "Rezervasyonu artıran, sezonu uzatan kampanya altyapısı.",
    cardServices: [
      "Rezervasyon Kampanyası",
      "Sezonluk Optimizasyon",
      "Google Hotel Ads",
      "Influencer İş Birliği",
    ],
    diagnostics: [
      {
        title: "Rezervasyon Başına Maliyet",
        description: "Sezon bazlı trend",
      },
      {
        title: "Google Hotel Ads Performansı",
        description: "Görünürlük ve tıklama oranı",
      },
      {
        title: "Sezon Öncesi Hazırlık",
        description: "Erken rezervasyon kampanya durumu",
      },
      {
        title: "Influencer İş Birliği Etkisi",
        description: "İçerik kalite ve dönüşüm analizi",
      },
      {
        title: "Tekrar Misafir Oranı",
        description: "Retansiyon kampanya etkinliği",
      },
      {
        title: "Platform Dağılımı",
        description: "Meta, Google ve OTA dengesi",
      },
    ],
    serviceGroups: [
      {
        category: "Kampanya",
        items: [
          "Rezervasyon Kampanyası",
          "Sezonluk Kampanya Optimizasyonu",
          "Google Hotel Ads",
          "Meta Kampanya Yönetimi",
        ],
      },
      {
        category: "Büyüme",
        items: [
          "Influencer İş Birlikleri",
          "Erken Rezervasyon Sistemi",
          "Retansiyon Kampanyaları",
          "İçerik Stratejisi",
        ],
      },
    ],
    faq: [
      {
        question: "Otel doluluk oranı nasıl artırılır?",
        answer:
          "Sezonluk kampanya optimizasyonu ve erken rezervasyon teşvik sistemi en hızlı yoldur. Google Hotel Ads yüksek satın alma niyetiyle gelen trafiği direkt rezervasyona yönlendirir.",
      },
      {
        question: "Influencer iş birlikleri işe yarıyor mu?",
        answer:
          "Doğru profille evet. Takipçi sayısı değil kitle uyumu önemlidir. 50 bin takipçili bir seyahat içerik üreticisi 1 milyon takipçili genel bir içerik üreticisinden çok daha iyi sonuç verebilir.",
      },
    ],
    closingCta: "Turizm kampanya sisteminizi inceleyelim.",
  },
  b2b: {
    slug: "b2b",
    number: "10",
    tag: "B2B VE KURUMSAL",
    title: "Demodan imzaya B2B satış döngüsünü kısaltan sistem.",
    subtitle:
      "B2B lead ajansı hizmetleri ve kurumsal reklam yönetimi uzun satış döngüleri nedeniyle farklı bir funnel mimarisi gerektirir.",
    cardStatement: "Demodan imzaya B2B satış döngüsünü kısaltan sistem.",
    cardServices: [
      "Demo Lead Kampanyası",
      "LinkedIn Reklamları",
      "Webinar Funnel",
      "Satış CRM Entegrasyonu",
    ],
    diagnostics: [
      {
        title: "Demo Dönüşüm Oranı",
        description: "Talep ile gerçekleşme analizi",
      },
      {
        title: "LinkedIn Hedefleme Kalitesi",
        description: "Karar verici erişim oranı",
      },
      {
        title: "Satış Döngüsü Uzunluğu",
        description: "Funnel tıkanma noktaları",
      },
      {
        title: "CRM Bağlantısı",
        description: "Dijital leadın satışa izlenebilirliği",
      },
      {
        title: "Webinar Funnel Etkinliği",
        description: "Kayıt ve satışa dönüşüm",
      },
      {
        title: "İçerik Otorite Skoru",
        description: "Sektörde güven ve bilinirlik düzeyi",
      },
    ],
    serviceGroups: [
      {
        category: "Kampanya",
        items: [
          "Demo Lead Kampanyası",
          "LinkedIn Reklam Yönetimi",
          "Google Arama Reklamları",
          "Meta Kampanya Yönetimi",
        ],
      },
      {
        category: "Funnel",
        items: [
          "Webinar Funnel Sistemi",
          "Demo Otomasyonu",
          "Satış CRM Entegrasyonu",
          "Lead Skorlama",
        ],
      },
    ],
    faq: [
      {
        question: "B2B'de Meta reklam çalışır mı?",
        answer:
          "Evet ama LinkedIn kadar hassas hedefleme sunmaz. Meta geniş kitleden farkındalık yaratmak için kullanılır. LinkedIn ise sektör, unvan ve şirket büyüklüğüne göre karar vericilere doğrudan ulaşır.",
      },
      {
        question: "B2B satış döngüsü çok uzun, reklam nasıl ölçülür?",
        answer:
          "Kısa vadeli metrik olarak demo talepleri ve lead başına maliyet takip edilir. CRM entegrasyonu olmadan dijital reklamın satışa etkisini ölçmek mümkün değildir.",
      },
      {
        question: "Demo funneli nasıl kurulur?",
        answer:
          "Reklam, kısa landing page, anında takvim rezervasyonu ve otomatik hatırlatma serisi şeklinde kurulur. Her adımda kayıp olur ve hangi adımda ne kadar kayıp olduğunu görmek için form analizi kurulur.",
      },
    ],
    closingCta: "B2B lead sisteminizi birlikte kuralım.",
  },
};

export function getSectorBySlug(slug: string): SectorData | null {
  if (slug in SECTORS_DATA) return SECTORS_DATA[slug as SectorSlug];
  return null;
}

export function getAllSectorsForListing(): SectorData[] {
  return SECTOR_SLUGS.map((s) => SECTORS_DATA[s]);
}
