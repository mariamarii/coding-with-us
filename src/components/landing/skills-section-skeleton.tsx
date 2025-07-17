import { Skeleton } from "@/components/ui/skeleton";
import CourseCardSkeleton from "@/components/common/course-card-skeleton";

const SkillsSectionSkeleton = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-80 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        <div className="grid gap-8">
          {[...Array(3)].map((_, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-3">
                <Skeleton className="w-12 h-12 rounded-lg" />
                <div>
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, courseIndex) => (
                  <CourseCardSkeleton key={courseIndex} />
                ))}
              </div>

              <div className="text-center">
                <Skeleton className="h-5 w-48 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSectionSkeleton; 