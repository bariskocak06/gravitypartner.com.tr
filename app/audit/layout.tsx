import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistem Teşhisi | Gravity",
  description:
    "Meta, Google, TikTok ve tüm dijital reklam kanallarınızda performans altyapısı denetimi. Veri kalitesi, learning phase, creative yorgunluk ve funnel analizi.",
  keywords: [
    "sistem teşhisi",
    "reklam altyapısı denetimi",
    "Meta Pixel kontrol",
    "CAPI analiz",
    "learning phase",
    "funnel analizi",
    "performans denetimi",
  ],
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
