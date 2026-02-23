import type { Metadata } from "next";
import { ContactPageClient } from "./contact-page-client";

export const metadata: Metadata = {
  title: "İletişim | Gravity",
  description:
    "Sistem teşhisi talebi veya genel sorularınız için Gravity ile iletişime geçin.",
  keywords: ["Gravity iletişim", "sistem teşhisi talep", "Meta reklam danışmanlık"],
};

export default function ContactPage() {
  return <ContactPageClient />;
}
