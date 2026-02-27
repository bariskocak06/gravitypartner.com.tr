import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { getSupabaseServer } from "@/lib/supabase-server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "E-posta ve şifre",
      credentials: {
        email: { label: "E-posta", type: "email" },
        password: { label: "Şifre", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const email = (credentials.email as string).trim().toLowerCase();
        const password = credentials.password as string;

        const supabase = getSupabaseServer();
        if (supabase) {
          const { data: user, error } = await supabase
            .from("site_users")
            .select("id, email, password_hash")
            .eq("email", email)
            .single();
          if (!error && user && (await bcrypt.compare(password, user.password_hash))) {
            return { id: user.id, email: user.email, name: user.email };
          }
        }

        const envEmail = process.env.AUTH_EMAIL;
        const envPassword = process.env.AUTH_PASSWORD;
        if (envEmail && envPassword && email === envEmail.trim().toLowerCase() && password === envPassword) {
          return { id: "1", email: envEmail, name: envEmail };
        }
        return null;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: { strategy: "jwt" },
  trustHost: true,
  callbacks: {
    authorized() {
      return true;
    },
  },
});
