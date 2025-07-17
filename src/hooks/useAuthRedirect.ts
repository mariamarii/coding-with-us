"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';

export const useAuthRedirect = (redirectTo: string = '/login') => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Still loading

    if (!session?.user || !session?.accessToken) {
      toast.error('You must be logged in to access this page');
      router.push(redirectTo);
    }
  }, [session, status, router, redirectTo]);

  return {
    user: session?.user,
    accessToken: session?.accessToken,
    isAuthenticated: !!session?.user && !!session?.accessToken,
    isLoading: status === 'loading',
  };
}; 