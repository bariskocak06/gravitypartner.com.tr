"use client";

import Link from "next/link";
import { useActionState } from "react";
import { register, type RegisterState } from "./actions";

const initialState: RegisterState = {};

export function RegisterForm() {
  const [state, formAction] = useActionState(register, initialState);

  return (
    <div className="w-full max-w-sm space-y-4">
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase tracking-wider">
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-lg border border-border bg-background/80 px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
            placeholder="ornek@email.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase tracking-wider">
            Şifre
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={6}
            className="w-full rounded-lg border border-border bg-background/80 px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
            placeholder="En az 6 karakter"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase tracking-wider">
            Şifre (tekrar)
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            minLength={6}
            className="w-full rounded-lg border border-border bg-background/80 px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
            placeholder="••••••••"
          />
        </div>
        {state?.error && (
          <p className="text-sm text-red-400 font-mono">{state.error}</p>
        )}
        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-2.5 font-mono text-sm font-medium text-white hover:opacity-90 transition"
        >
          Üye ol
        </button>
      </form>
      <p className="text-center text-sm text-muted-foreground">
        Zaten üye misiniz?{" "}
        <Link href="/auth/signin" className="text-primary hover:underline font-mono">
          Giriş yap
        </Link>
      </p>
    </div>
  );
}
