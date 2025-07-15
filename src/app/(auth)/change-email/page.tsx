'use client';

import Image from 'next/image';
import AuthChangeForm from '@/components/auth/AuthChangeForm';
import { useSession } from 'next-auth/react';

export default function ChangeEmailPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!session) {
    return <div className="flex items-center justify-center h-screen text-red-500">
      You must be logged in to change your email.
    </div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <div className="grid w-full max-w-6xl gap-0 md:grid-cols-2">
        <div className="hidden md:block">
          <Image
            src="/authform.svg"
            alt="Change email illustration"
            width={637}
            height={722}
            className="object-contain w-full h-full"
            priority
          />
        </div>

        <div className="flex flex-col justify-center w-full px-6 py-12 md:px-10">
        
          <AuthChangeForm 
            email={session.user?.email ?? ''} 
            token={session.accessToken ?? ''} 
          />
        </div>
      </div>
    </div>
  );
}
