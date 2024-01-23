'use client';

import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await fetch('/api/logout');

      router.replace('/login');
    } catch (error) {}
  };

  return <Button onClick={() => logout()}>Keluar</Button>;
};

export default LogoutButton;
