"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function SignedInBanner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { status } = useSession();
  const [visible, setVisible] = useState(false);

  const signedIn = searchParams.get("signed_in") === "1";

  useEffect(() => {
    if (status === "authenticated" && signedIn) {
      setVisible(true);
      const t = setTimeout(() => {
        setVisible(false);
        const params = new URLSearchParams(searchParams);
        params.delete("signed_in");
        const q = params.toString();
        router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
      }, 4000);
      return () => clearTimeout(t);
    }
  }, [status, signedIn, pathname, searchParams, router]);

  if (!visible) return null;

  return (
    <div
      role="alert"
      className="fixed top-20 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-emerald-500/40 bg-emerald-950/95 px-4 py-2.5 text-sm font-mono text-emerald-200 shadow-lg backdrop-blur-sm"
    >
      Giriş yapıldı. Hoş geldiniz.
    </div>
  );
}
