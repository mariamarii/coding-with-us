'use client';

import { useCallbackPage } from '../../../hooks/useCallbackPage';

export default function CallbackPage() {
  const { error } = useCallbackPage();

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-red-600">Authentication Error</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold text-green-600">Authentication Successful</h1>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}
