"use client";
import UserHomeHeroWrapper from '@/components/user-home/UserHomeHeroWrapper';
import CoursesSection from '@/components/user-home/CoursesSection';
import RecommendedCourses from '@/components/user-home/RecommendedCourses';
import TopSoldCourses from '@/components/user-home/TopSoldCourses';

export default function UserHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <UserHomeHeroWrapper />
      <CoursesSection />
      <RecommendedCourses />
      <TopSoldCourses />
    </div>
  );
} 