"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export type SignInState = { error?: string };

export async function signInWithCredentials(
  _prevState: SignInState,
  formData: FormData
): Promise<SignInState> {
  const email = (formData.get("email") as string)?.trim();
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "E-posta ve şifre girin." };
  }

  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (result?.error) {
    return { error: "E-posta veya şifre hatalı." };
  }

  redirect("/?signed_in=1");
}
