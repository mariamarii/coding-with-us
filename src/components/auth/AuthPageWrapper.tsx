'use client';

import { Card } from '@/components/ui/card';
import { AuthWrapperProps } from '@/types/auth';

export function AuthWrapper({ children, title}  : AuthWrapperProps) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md p-6 space-y-6 ">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        
        {children}
      </Card>
    </div>
  );
}
