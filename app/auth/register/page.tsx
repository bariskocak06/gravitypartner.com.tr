import Link from "next/link";
import { auth } from "@/auth";
import { RegisterForm } from "./register-form";

export default async function RegisterPage() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <p className="text-muted-foreground">Zaten giriş yaptınız.</p>
        <Link href="/" className="mt-4 text-primary hover:underline font-mono text-sm">
          Ana sayfaya dön
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-mono font-bold text-foreground mb-2">Üye ol</h1>
      <p className="text-muted-foreground text-sm mb-6 text-center max-w-sm">
        Hesap oluşturun, ardından giriş yap sayfasından giriş yapabilirsiniz.
      </p>
      <RegisterForm />
      <Link href="/" className="mt-8 text-muted-foreground hover:text-foreground text-sm font-mono">
        ← Ana sayfaya dön
      </Link>
    </div>
  );
}
