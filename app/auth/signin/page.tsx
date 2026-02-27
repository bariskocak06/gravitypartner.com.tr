import Link from "next/link";
import { auth } from "@/auth";
import { SignInForm } from "./signin-form";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ registered?: string }>;
}) {
  const session = await auth();
  const params = await searchParams;

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
      <h1 className="text-2xl font-mono font-bold text-foreground mb-2">Giriş yap</h1>
      {params.registered === "1" && (
        <p className="mb-4 text-sm text-green-400 font-mono text-center">
          Kayıt tamamlandı. Aşağıdan giriş yapabilirsiniz.
        </p>
      )}
      <p className="text-muted-foreground text-sm mb-6 text-center max-w-sm">
        E-posta ve şifre ile giriş yapın veya Google hesabınızı kullanın.
      </p>
      <SignInForm />
      <Link href="/" className="mt-8 text-muted-foreground hover:text-foreground text-sm font-mono">
        ← Ana sayfaya dön
      </Link>
    </div>
  );
}
