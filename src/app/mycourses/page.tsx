"use client";
import MyCoursesHeroWrapper from '@/components/mycourses/MyCoursesHeroWrapper';
import CoursesSection from '@/components/mycourses/mycoursesList';
import RecommendedCourses from '@/components/mycourses/RecommendedCourses';
import TopSoldCourses from '@/components/mycourses/TopSoldCourses';

export default function MyCoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <MyCoursesHeroWrapper />
      <CoursesSection />
      <RecommendedCourses />
      <TopSoldCourses />
    </div>
  );
} 