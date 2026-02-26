import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özgür Reklam Mimarı | FreeDome | Gravity",
  description:
    "Ürün fotoğrafından Meta reklamları için A/B test materyalleri ve hedef kitle analizi üreten yapay zeka aracı.",
  alternates: { canonical: "/freedome" },
};

export default function FreedomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="pointer-events-none radial-highlight right-[-120px] top-[-80px]" />
      <div className="pointer-events-none mesh-blob left-[-240px] bottom-[-260px]" />
      <div className="relative dot-grid min-h-screen">
        {children}
      </div>
    </div>
  );
}
