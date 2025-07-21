'use client';
import React from 'react';
import HorizontalCoursesSection from './HorizontalCoursesSection';
import { CourseCardProps } from '@/types/skills';

interface TopSoldCoursesProps {
  courses: CourseCardProps[];
  error: string | null;
}

const TopSoldCourses: React.FC<TopSoldCoursesProps> = ({ courses, error }) => {
  if (error) {
    return (
      <HorizontalCoursesSection
        title="Top Sold Courses"
        courses={[]}
        backgroundColor="bg-white"
        error={error}
      />
    );
  }

  return (
    <HorizontalCoursesSection
      title="Top Sold Courses"
      courses={courses}
      backgroundColor="bg-white"
    />
  );
};

export default TopSoldCourses;