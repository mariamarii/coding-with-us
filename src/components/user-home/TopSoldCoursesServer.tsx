import React from 'react';
import HorizontalCoursesSection from './HorizontalCoursesSection';
import { fetchPaginatedCourses } from '@/queries/courses';

const TopSoldCoursesServer: React.FC = async () => {
  try {
    const courses = await fetchPaginatedCourses(1, 5);
    
    return (
      <HorizontalCoursesSection
        title="Top Sold courses"
        courses={courses}
        backgroundColor="bg-white"
      />
    );
  } catch (error) {
    console.error('Error loading top sold courses:', error);
    
    return (
      <HorizontalCoursesSection
        title="Top Sold courses"
        courses={[]}
        backgroundColor="bg-white"
        error="Failed to load top sold courses"
      />
    );
  }
};

export default TopSoldCoursesServer; 