import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Gravity",
  description:
    "Gravity, performans reklamcılığını mühendislik disiplinine taşıyan bir büyüme altyapısı partneridir. Ajans değil. Growth Infrastructure Partner.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
