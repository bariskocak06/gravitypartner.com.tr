import { notFound } from "next/navigation";
import { getSectorBySlug, SECTOR_SLUGS } from "@/lib/sector-data";
import { SectorPageLayout } from "@/components/sector-page-layout";

export function generateStaticParams() {
  return SECTOR_SLUGS.map((slug) => ({ slug }));
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getSectorBySlug(slug);
  if (!data) notFound();
  return <SectorPageLayout data={data} />;
}
