"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    id: "veri-sorumlusu",
    title: "Veri Sorumlusu",
    content:
      "Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla Gravity (Gravity Systems / ilgili tüzel kişilik) tarafından işlenmektedir. Gizlilik ile ilgili talepleriniz için iletişim sayfamızdan bize ulaşabilirsiniz.",
  },
  {
    id: "toplanan-veriler",
    title: "Toplanan Veriler",
    content:
      "Web sitemiz ve hizmet süreçlerimiz kapsamında toplanan veriler: iletişim formu ve sistem teşhisi formu aracılığıyla ad-soyad, e-posta, telefon, şirket adı, sektör, bütçe aralığı ve hedef bilgileri; web sitesi kullanımı sırasında teknik loglar (IP adresi, cihaz bilgisi, sayfa görüntüleme); gerekirse çerezler ve benzeri teknolojiler aracılığıyla elde edilen veriler. Bu veriler yalnızca belirtilen amaçlarla ve yasal çerçeve dahilinde işlenir.",
  },
  {
    id: "amac-ve-hukuki-sebep",
    title: "İşleme Amaçları ve Hukuki Sebepler",
    content:
      "Toplanan veriler; talebinizin değerlendirilmesi, sistem teşhisi ve teklif süreçlerinin yürütülmesi, iletişim kurulması, hizmet kalitesinin artırılması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenir. İşleme hukuki sebepleri: açık rızanız, sözleşmenin ifası veya sözleşme öncesi talebinizin yerine getirilmesi, meşru menfaat ve kanuni yükümlülük kapsamında olabilir.",
  },
  {
    id: "saklama-sureleri",
    title: "Saklama Süreleri",
    content:
      "Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal saklama sürelerine uygun olarak muhafaza edilir. Amaç ortadan kalktığında veya yasal süreler dolduğunda verileriniz silinir, anonymize edilir veya erişime kapatılır.",
  },
  {
    id: "haklariniz",
    title: "Haklarınız",
    content:
      "KVKK'nın 11. maddesi uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde tazminat talep etme haklarına sahipsiniz. Başvurularınızı yazılı veya kayıtlı elektronik ortamda iletebilirsiniz.",
  },
  {
    id: "cerezler",
    title: "Çerezler ve Teknolojiler",
    content:
      "Site deneyimini iyileştirmek için çerez ve benzeri teknolojiler kullanılabilir. Zorunlu çerezler sitenin çalışması için gereklidir; diğer çerezler tercihinize bağlıdır. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.",
  },
  {
    id: "iletisim",
    title: "İletişim",
    content:
      "Gizlilik ve kişisel veri talepleriniz için bize iletişim sayfası üzerinden veya proje sürecinde paylaşılan resmî iletişim kanallarından ulaşabilirsiniz. Talepleriniz, mevzuatla belirlenen süreler içinde değerlendirilir.",
  },
];

export function PrivacyPageContent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground">
      <section className="border-b border-[#1F1F1F] bg-[#0D0D0D] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-indigo-300"
          >
            YASAL
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Gizlilik Politikası
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-zinc-400"
          >
            Kişisel verilerinizin işlenmesi ve haklarınız hakkında bilgilendirme metni.
          </motion.p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="scroll-mt-24"
            >
              <h2 className="font-semibold text-white sm:text-xl">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-zinc-400">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1F1F1F] bg-[#0D0D0D] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-zinc-400">
            Sorularınız için{" "}
            <Link
              href="/contact"
              className="font-medium text-indigo-300 underline decoration-indigo-500/50 underline-offset-2 transition hover:text-indigo-200"
            >
              İletişim
            </Link>{" "}
            sayfamızdan bize ulaşabilirsiniz.
          </p>
        </div>
      </section>
    </div>
  );
}
