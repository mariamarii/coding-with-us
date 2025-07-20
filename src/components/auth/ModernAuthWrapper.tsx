import { ReactNode } from 'react';
import Image from 'next/image';

interface ModernAuthWrapperProps {
  children: ReactNode;
  title: string;
  mode: 'login' | 'signup';
}

export function ModernAuthWrapper({ children, title, mode }: ModernAuthWrapperProps) {
  return (
    <div className="flex min-h-screen bg-[#F9F9F9]">
      {/* Left side - Illustration */}
      <div className="items-center justify-center hidden p-12 lg:flex lg:w-1/2">
        <div className="max-w-md">
          <Image
            src="/authform.svg"
            alt="Authentication Illustration"
            width={400}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex items-center justify-center w-full p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">{title}</h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
