import React from 'react';
import HorizontalCoursesSection from './HorizontalCoursesSection';
import { fetchPaginatedCourses } from '@/queries/courses';

const RecommendedCoursesServer: React.FC = async () => {
  try {
    const courses = await fetchPaginatedCourses(1, 5);
    
    return (
      <HorizontalCoursesSection
        title="Recommended Courses for you"
        courses={courses}
        backgroundColor="bg-gray-50"
      />
    );
  } catch (error) {
    
    return (
      <HorizontalCoursesSection
        title="Recommended Courses for you"
        courses={[]}
        backgroundColor="bg-gray-50"
        error="Failed to load recommended courses"
      />
    );
  }
};

export default RecommendedCoursesServer; 