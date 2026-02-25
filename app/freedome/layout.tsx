import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özgür Reklam Mimarı | FreeDome | Gravity",
  description:
    "Ürün fotoğrafından Meta reklamları için A/B test materyalleri ve hedef kitle analizi üreten yapay zeka aracı.",
};

export default function FreedomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="freedome-aurora min-h-screen bg-[#050b14] text-gray-200">
      {children}
    </div>
  );
}
