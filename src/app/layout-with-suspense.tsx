import { Suspense } from 'react';
import AppHeader from '@/components/common/app-header';
import AppFooter from '@/components/common/app-footer';
import { LandingSection } from '@/components/landing/landing-section';
import { SearchSection } from '@/components/landing/search-section';
import SkillsSection from '@/components/landing/skill';
import DesignedForPeopleSec from '@/components/landing/designed-for-people-sec';
import HowItWorksSec from '@/components/landing/how-it-works-sec';
import PopularTopics from '@/components/landing/popular-topics';
import { ReviewsSection } from '@/components/landing/reviews-section';
import SkillsSectionSkeleton from '@/components/landing/skills-section-skeleton';
import ReviewsSectionSkeleton from '@/components/landing/reviews-section-skeleton';
import PopularTopicsSkeleton from '@/components/landing/popular-topics-skeleton';

// Example of how to use Suspense boundaries with loading skeletons
export default function LayoutWithSuspense() {
  return (
    <div className="landing-page">
      <AppHeader 
        courses={[]} 
        categories={[]} 
        error={null} 
      />
      <main>
        <LandingSection />
        <SearchSection />
        
        {/* Skills Section with Suspense */}
        <Suspense fallback={<SkillsSectionSkeleton />}>
          <SkillsSection 
            coursesByCategory={{}} 
            categories={[]} 
          />
        </Suspense>
        
        <DesignedForPeopleSec />
        <HowItWorksSec />
        
        {/* Popular Topics with Suspense */}
        <Suspense fallback={<PopularTopicsSkeleton />}>
          <PopularTopics categories={[]} />
        </Suspense>
        
        {/* Reviews Section with Suspense */}
        <Suspense fallback={<ReviewsSectionSkeleton />}>
          <ReviewsSection />
        </Suspense>
      </main>
      <AppFooter 
        courses={[]} 
        categories={[]} 
        error={null} 
      />
    </div>
  );
} 