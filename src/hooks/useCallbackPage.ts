'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useCallbackPage = () => {
  const router = useRouter();
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return { error };
}; 