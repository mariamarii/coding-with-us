import HeaderSkeleton from "@/components/common/header-skeleton";
import SkillsSectionSkeleton from "@/components/landing/skills-section-skeleton";
import ReviewsSectionSkeleton from "@/components/landing/reviews-section-skeleton";
import PopularTopicsSkeleton from "@/components/landing/popular-topics-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

const LandingSectionSkeleton = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-96 mx-auto mb-6" />
          <Skeleton className="h-6 w-80 mx-auto mb-8" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SearchSectionSkeleton = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-80 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-50 rounded-lg">
            <Skeleton className="h-12 flex-1" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </section>
  );
};

const DesignedForPeopleSkeleton = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Skeleton className="h-10 w-80 mb-6" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <Skeleton className="h-12 w-40" />
          </div>
          <div>
            <Skeleton className="w-full h-80 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSkeleton = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="text-center">
              <Skeleton className="w-16 h-16 mx-auto mb-4 rounded-full" />
              <Skeleton className="h-6 w-32 mx-auto mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FooterSkeleton = () => {
  return (
    <footer className="bg-[#2a2a3a] text-white pt-32 pb-8">
      <div className="w-[72%] mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-between gap-12 lg:gap-0">
          <div className="space-y-4">
            <Skeleton className="w-32 h-8 bg-gray-600" />
            <Skeleton className="w-64 h-4 bg-gray-600" />
          </div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="w-24 h-6 bg-gray-600" />
              {[...Array(4)].map((_, itemIndex) => (
                <Skeleton key={itemIndex} className="w-20 h-4 bg-gray-600" />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-600">
        <Skeleton className="w-full h-12 bg-gray-600" />
      </div>
    </footer>
  );
};

const PageSkeleton = () => {
  return (
    <div className="landing-page">
      <HeaderSkeleton />
      <main>
        <LandingSectionSkeleton />
        <SearchSectionSkeleton />
        <SkillsSectionSkeleton />
        <DesignedForPeopleSkeleton />
        <HowItWorksSkeleton />
        <PopularTopicsSkeleton />
        <ReviewsSectionSkeleton />
      </main>
      <FooterSkeleton />
    </div>
  );
};

export default PageSkeleton; 