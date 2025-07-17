"use client";
import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import AuthChangeForm from './AuthChangeForm';

export default function ChangePasswordWrapper() {
  const { user, isAuthenticated, isLoading } = useAuthRedirect();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
        <div className="grid w-full max-w-6xl gap-0 md:grid-cols-2">
          <div className="hidden md:block bg-gray-200 animate-pulse rounded-lg"></div>
          <div className="flex flex-col justify-center w-full px-6 py-12 md:px-10">
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
              <div className="h-12 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect via useAuthRedirect
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <div className="grid w-full max-w-6xl gap-0 md:grid-cols-2">
        <div className="hidden md:block">
          <img
            src="/authform.svg"
            alt="Reset password illustration"
            className="object-contain w-full h-full"
          />
        </div>

        <div className="flex flex-col justify-center w-full px-6 py-12 md:px-10">
          <AuthChangeForm 
            email={user?.email ?? ''} 
          />
        </div>
      </div>
    </div>
  );
} 