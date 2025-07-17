import { redirect } from 'next/navigation';
import Image from 'next/image';
import AuthChangeForm from '@/components/auth/AuthChangeForm';
import { getCurrentUser } from '@/lib/session';

export default async function ChangeEmailPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
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
            email={user.email ?? ''} 
          />
        </div>
      </div>
    </div>
  );
}
