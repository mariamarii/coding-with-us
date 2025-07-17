'use client';

import { useCallbackPage } from '../../../hooks/useCallbackPage';

export default function CallbackPage() {
  const { error, isProcessing } = useCallbackPage();

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-red-600">Authentication Error</h1>
          <p className="text-gray-600">{error}</p>
          <p className="text-sm text-gray-500 mt-2">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <h1 className="mb-4 text-2xl font-bold text-green-600">Processing Login</h1>
          <p className="text-gray-600">Please wait while we complete your authentication...</p>
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
