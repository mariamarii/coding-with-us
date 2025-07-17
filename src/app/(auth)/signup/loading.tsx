export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <div className="grid w-full max-w-6xl gap-0 md:grid-cols-2">
        <div className="hidden md:block">
          <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>
        </div>

        <div className="flex flex-col justify-center w-full px-6 py-12 md:px-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="h-8 bg-gray-200 animate-pulse rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-2/3"></div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
                <div className="h-10 bg-gray-200 animate-pulse rounded"></div>
              </div>
              
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
                <div className="h-10 bg-gray-200 animate-pulse rounded"></div>
              </div>
              
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
                <div className="h-10 bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
            
            <div className="h-10 bg-gray-200 animate-pulse rounded"></div>
            
            <div className="space-y-4">
              <div className="h-px bg-gray-300"></div>
              <div className="h-10 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 