import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gravitypartner.com.tr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: [] },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
