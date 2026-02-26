import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistem Teşhisi | Gravity",
  description:
    "Meta, Google, TikTok ve tüm dijital reklam kanallarınızda performans altyapısı denetimi. Veri kalitesi, learning phase, creative yorgunluk ve funnel analizi.",
  alternates: { canonical: "/audit" },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
