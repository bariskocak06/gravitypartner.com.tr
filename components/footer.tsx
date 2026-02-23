import Link from "next/link";
import { ReferenceLogos } from "@/components/reference-logos";

const footerLinks = [
  { href: "/solutions", label: "Çözümler" },
  { href: "/audit", label: "Sistem Teşhisi" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
  { href: "/privacy", label: "Gizlilik" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#050505]">
      <ReferenceLogos />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
            teknoloji · sanat · büyüme ·{" "}
            <span className="text-zinc-100">GRAVITY: BÜYÜMENİN MERKEZİ</span>
          </div>
          <div className="font-mono text-[11px] text-zinc-500" suppressHydrationWarning>
            © {new Date().getFullYear()} Gravity Systems. Tüm hakları saklıdır.
          </div>
        </div>
        <nav className="flex flex-wrap gap-4 text-xs text-zinc-500">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="h-[1px] w-full bg-indigo-500/80" />
    </footer>
  );
}

