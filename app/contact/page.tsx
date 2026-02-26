import type { Metadata } from "next";
import { ContactPageClient } from "./contact-page-client";

export const metadata: Metadata = {
  title: "İletişim | Gravity",
  description:
    "Sistem teşhisi talebi veya genel sorularınız için Gravity ile iletişime geçin.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
