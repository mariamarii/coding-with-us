"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { CourseCardProps } from '@/types/skills';
import RecommendedCoursesHeader from './RecommendedCoursesHeader';
import ScrollNavigationButtons from './ScrollNavigationButtons';
import CoursesScrollContainer from './CoursesScrollContainer';
import { Skeleton } from '@/components/ui/skeleton';

interface HorizontalCoursesSectionProps {
  title: string;
  courses: CourseCardProps[];
  backgroundColor?: string;
  loading?: boolean;
  error?: string | null;
}

const HorizontalCoursesSection: React.FC<HorizontalCoursesSectionProps> = ({
  title,
  courses,
  backgroundColor = "bg-gray-50",
  loading = false,
  error = null
}) => {
  const {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    checkScrollPosition
  } = useHorizontalScroll();

  // Loading skeleton
  if (loading) {
    return (
      <Card className={`w-full ${backgroundColor} py-12 border-0 shadow-none`}>
        <CardContent className="p-0">
          <Card className="w-[72%] mx-auto relative bg-transparent border-0 shadow-none">
            <CardContent className="p-0">
              <RecommendedCoursesHeader title={title} />
              
              <div className="flex gap-6 overflow-x-auto">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex-shrink-0 w-[300px]">
                    <Skeleton className="w-full h-[268px] rounded-t-lg" />
                    <div className="p-4 space-y-2">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />
                      <Skeleton className="h-3 w-1/4" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    );
  }

  // Error state
  if (error) {
    return (
      <Card className={`w-full ${backgroundColor} py-12 border-0 shadow-none`}>
        <CardContent className="p-0">
          <Card className="w-[72%] mx-auto relative bg-transparent border-0 shadow-none">
            <CardContent className="p-0">
              <RecommendedCoursesHeader title={title} />
              
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <p className="text-gray-500 text-lg mb-2">Unable to load courses</p>
                  <p className="text-gray-400 text-sm">{error}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`w-full ${backgroundColor} py-12 border-0 shadow-none`}>
      <CardContent className="p-0">
        <Card className="w-[72%] mx-auto relative bg-transparent border-0 shadow-none">
          <CardContent className="p-0">
            <RecommendedCoursesHeader title={title} />
            
            <ScrollNavigationButtons
              canScrollLeft={canScrollLeft}
              canScrollRight={canScrollRight}
              onScrollLeft={scrollLeft}
              onScrollRight={scrollRight}
            />

            <CoursesScrollContainer
              courses={courses}
              scrollContainerRef={scrollContainerRef}
              onScroll={checkScrollPosition}
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default HorizontalCoursesSection; 