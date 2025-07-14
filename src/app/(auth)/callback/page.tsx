'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const CallbackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    if (error) {
     
      router.push('/?error=mariam');
      return;
    }

    if (token) {
      // Store token in localStorage (or cookies if SSR required)
      localStorage.setItem('accessToken', token);
      router.push('/');
    } else {
      router.push('/?error=moaz');
    }
  }, [router, searchParams]);

  return <div className="text-center mt-10 text-lg font-medium">Processing login...</div>;
};

export default CallbackPage;
