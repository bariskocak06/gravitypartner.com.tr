import { NextResponse } from "next/server";

/**
 * Supabase env değişkenlerinin sunucuda tanımlı olup olmadığını kontrol eder.
 * Değerleri göstermez; sadece "var mı" bilgisi. Sorun giderdikten sonra bu route silinebilir.
 */
export async function GET() {
  const supabaseUrl = Boolean(process.env.SUPABASE_URL);
  const supabaseKey = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
  return NextResponse.json({
    supabaseUrl,
    supabaseKey,
    kayitKullanilabilir: supabaseUrl && supabaseKey,
  });
}
