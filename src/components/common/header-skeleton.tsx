import { Skeleton } from "@/components/ui/skeleton";

const HeaderSkeleton = () => {
  return (
    <div className="relative">
      <div className="sm:flex bg-[#282837] text-white px-4 py-3 text-xs justify-end gap-4">
        <div className="flex justify-end gap-4 w-[92%] mx-auto">
          <Skeleton className="h-4 w-12 bg-gray-600" />
          <Skeleton className="h-4 w-20 bg-gray-600" />
        </div>
      </div>

      <header className="bg-white border-none">
        <div className="mx-auto w-[90%]">
          <div className="flex items-center justify-between h-12 lg:h-14 w-full">
            <div className="flex items-center">
              <Skeleton className="w-32 h-8" />
            </div>
            <div className="ml-auto w-[90%] flex justify-between items-start">
              <div className="">
                <div className="hidden xl:flex items-center gap-6">
                  {[...Array(4)].map((_, index) => (
                    <Skeleton key={index} className="h-6 w-16" />
                  ))}
                </div>
              </div>
              <div className="flex items-end gap-2 flex-shrink-0">
                <Skeleton className="w-20 h-8" />
                <Skeleton className="w-10 h-10 rounded-full xl:hidden" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderSkeleton; 