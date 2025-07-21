import { Skeleton } from '@/components/ui/skeleton';

export default function CoursesSectionLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Progress Header Skeleton */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-2 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-6 w-20" />
        </div>
      </div>
      
      <div className="flex">
        {/* Sidebar Skeleton */}
        <div className="w-80 bg-white border-r border-gray-200 h-screen p-6">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-16" />
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-6 w-full" />
                <div className="ml-6 space-y-1">
                  {[1, 2].map((j) => (
                    <Skeleton key={j} className="h-4 w-full" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Main Content Skeleton */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl space-y-6">
            <Skeleton className="h-4 w-64" />
            <Skeleton className="h-8 w-96" />
            <Skeleton className="h-4 w-48" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
} 