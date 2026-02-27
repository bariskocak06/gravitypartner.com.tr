import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function getSupabaseServer() {
  if (!url || !serviceKey) return null;
  return createClient(url, serviceKey);
}

export type SiteUser = {
  id: string;
  email: string;
  password_hash: string;
  created_at: string;
};
