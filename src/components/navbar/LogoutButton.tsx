'use client';

import { Button } from '../ui/button';
import { clientComponentSupabaseClient } from '@/lib/supabaseClient/client';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await clientComponentSupabaseClient.auth.signOut();

      router.replace('/login');
    } catch (error) {}
  };

  return <Button onClick={() => logout()}>Keluar</Button>;
};

export default LogoutButton;
