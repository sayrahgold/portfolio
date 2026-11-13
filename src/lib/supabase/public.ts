import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// Cookie-free client for reading public content (safe inside "use cache").
export function createPublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createSupabaseClient(url, key, { auth: { persistSession: false } });
}
