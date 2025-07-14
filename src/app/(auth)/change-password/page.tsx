import Image from 'next/image';
import AuthChangeForm from '@/components/auth/AuthChangeForm';

export default function ChangePasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <div className="grid md:grid-cols-2 gap-0 max-w-6xl w-full">
     
        <div className="hidden md:block">
          <Image
            src="/authform.svg"
            alt="Reset password illustration"
            width={637}
            height={722}
            className="object-contain w-full h-full"
            priority
          />
        </div>

        <div className="flex flex-col justify-center px-6 md:px-10 py-12 w-full">
          <AuthChangeForm />
        </div>
      </div>
    </div>
  );
}
