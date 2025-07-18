'use client';

import { useSession } from 'next-auth/react';
 
export const useSessionToken = () => {
  const { data: session } = useSession();
  return session?.accessToken || '';
}; 