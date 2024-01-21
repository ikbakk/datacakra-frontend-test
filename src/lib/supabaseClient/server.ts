import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const serverComponentSupabaseClient = createServerComponentClient(
  {
    cookies,
  },
  {
    supabaseKey: process.env.SUPABASE_KEY,
    supabaseUrl: process.env.SUPABASE_URL,
  },
);
