import type { Metadata } from "next";
import { PrivacyPageContent } from "./privacy-page-content";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Gravity",
  description:
    "Gravity gizlilik politikası. Kişisel verilerinizin işlenmesi, saklanması ve haklarınız hakkında bilgi.",
  keywords: ["Gizlilik politikası", "KVKK", "kişisel veri", "Gravity"],
};

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
