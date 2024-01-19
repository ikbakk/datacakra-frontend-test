import { createClient } from '@supabase/supabase-js';

export const supabaseClient = createClient(
  process.env.SUPABASE_URL! || process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_KEY! || process.env.NEXT_PUBLIC_SUPABASE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  },
);
