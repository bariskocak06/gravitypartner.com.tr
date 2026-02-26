import type { Metadata } from "next";
import { PrivacyPageContent } from "./privacy-page-content";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Gravity",
  description:
    "Gravity gizlilik politikası. Kişisel verilerinizin işlenmesi, saklanması ve haklarınız hakkında bilgi.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
