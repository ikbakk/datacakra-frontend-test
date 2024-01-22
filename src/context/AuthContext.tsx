'use client';

import { useRouter } from 'next/navigation';
import { createContext } from 'react';

type AuthContextType = {
  name: string;
  isLoggedIn: boolean;
  token: string;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const user = localStorage.getItem('user');
  const userJSON = user ? JSON.parse(user) : null;

  if (!user) {
    router.replace('/login');
  }

  return (
    <AuthContext.Provider
      value={{
        ...userJSON,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
