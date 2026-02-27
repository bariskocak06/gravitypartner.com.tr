"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { getSupabaseServer } from "@/lib/supabase-server";

export type RegisterState = { error?: string };

export async function register(
  _prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const password = formData.get("password") as string;
  const confirm = formData.get("confirmPassword") as string;

  if (!email || !password) {
    return { error: "E-posta ve şifre girin." };
  }
  if (password.length < 6) {
    return { error: "Şifre en az 6 karakter olmalı." };
  }
  if (password !== confirm) {
    return { error: "Şifreler eşleşmiyor." };
  }

  const supabase = getSupabaseServer();
  if (!supabase) {
    return { error: "Kayıt şu an kullanılamıyor. Lütfen daha sonra deneyin." };
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const { error } = await supabase.from("site_users").insert({
    email,
    password_hash: passwordHash,
  });

  if (error) {
    if (error.code === "23505") return { error: "Bu e-posta adresi zaten kayıtlı." };
    return { error: "Kayıt oluşturulamadı. Lütfen tekrar deneyin." };
  }

  redirect("/auth/signin?registered=1");
}
