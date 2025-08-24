import { createClient } from "@supabase/supabase-js";

export function getSupabaseService() {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY!;
  return createClient(url, key, { auth: { persistSession: false } });
}

export function getSupabaseAnon() {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_ANON_KEY!;
  return createClient(url, key, { auth: { persistSession: false } });
}
