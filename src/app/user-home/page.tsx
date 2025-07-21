import React from 'react';
import UserHomeHeroWrapper from '@/components/user-home/UserHomeHeroWrapper';
import CoursesSection from '@/components/user-home/CoursesSection';
import RecommendedCourses from '@/components/user-home/RecommendedCourses';
import TopSoldCourses from '@/components/user-home/TopSoldCourses';
import { getRecommendedCourses } from '@/hooks/useCourses';

export default async function UserHomePage() {
  const { courses, error,  } = await getRecommendedCourses();

  return (
    <div className="min-h-screen bg-white">
      <UserHomeHeroWrapper />
      <CoursesSection />
      <RecommendedCourses courses={courses} error={error} />
      <TopSoldCourses courses={courses} error={error} />
    </div>
  );
}