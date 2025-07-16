import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const CourseCardSkeleton = () => {
  return (
    <Card className="w-full bg-white max-w-sm max-w-[280px] sm:max-w-[340px] md:max-w-[300px] flex-shrink-0 flex flex-col">
      <CardHeader className="p-0">
        <Skeleton className="w-full h-[180px] sm:h-[220px] md:h-[268px] rounded-t-lg" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-4 flex-1">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-8" />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="w-3 h-3 sm:w-4 sm:h-4 rounded" />
            ))}
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-16" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20 rounded" />
          <Skeleton className="h-8 w-24 rounded" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCardSkeleton; 