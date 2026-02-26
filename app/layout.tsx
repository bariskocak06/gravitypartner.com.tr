import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gravitypartner.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Gravity — Meta Performans Altyapısı",
  description:
    "Gravity, Meta reklam algoritmalarının sizin aleyhinize değil, lehinize çalışmasını sağlayan veri altyapısı ve performans sistemleri kurar.",
  authors: [{ name: "Gravity", url: baseUrl }],
  publisher: "Gravity",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gravity — Meta Performans Altyapısı",
    description:
      "Gravity, Meta reklam algoritmalarının sizin aleyhinize değil, lehinize çalışmasını sağlayan veri altyapısı ve performans sistemleri kurar.",
    url: "/",
    siteName: "Gravity",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gravity — Meta Performans Altyapısı",
    description:
      "Gravity, Meta reklam algoritmalarının sizin aleyhinize değil, lehinize çalışmasını sağlayan veri altyapısı ve performans sistemleri kurar.",
  },
};

// Önbellek kapalı: her istek güncel içerik (mobil güncelleme sorunu için)
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gravity",
    description:
      "Gravity, Meta reklam algoritmalarının sizin aleyhinize değil, lehinize çalışmasını sağlayan veri altyapısı ve performans sistemleri kurar.",
    url: baseUrl,
    logo: `${baseUrl}/favicon.ico`,
  };

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
