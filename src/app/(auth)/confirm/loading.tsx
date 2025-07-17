export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <div className="grid w-full max-w-6xl gap-0 md:grid-cols-2">
        <div className="hidden md:block">
          <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse"></div>
        </div>

        <div className="flex flex-col justify-center w-full px-6 py-12 md:px-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-1/3 h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="w-1/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
            
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 