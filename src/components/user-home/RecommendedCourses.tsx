'use client';
import React from 'react';
import HorizontalCoursesSection from './HorizontalCoursesSection';
import { CourseCardProps } from '@/types/skills';

interface RecommendedCoursesProps {
  courses: CourseCardProps[];
  error: string | null;
}

const RecommendedCourses: React.FC<RecommendedCoursesProps> = ({ courses, error }) => {
  if (error) {
    return (
      <HorizontalCoursesSection
        title="Recommended Courses for you"
        courses={[]}
        backgroundColor="bg-gray-50"
        error={error}
      />
    );
  }

  return (
    <HorizontalCoursesSection
      title="Recommended Courses for you"
      courses={courses}
      backgroundColor="bg-gray-50"
    />
  );
};

export default RecommendedCourses;