import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çözümler | Gravity",
  description:
    "Sektöre özel Meta performans altyapısı ve büyüme sistemleri. Sağlık, e-ticaret, finans, eğitim ve daha fazlası.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
