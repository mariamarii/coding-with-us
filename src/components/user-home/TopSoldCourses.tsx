"use client";
import React from 'react';
import HorizontalCoursesSection from './HorizontalCoursesSection';
import { fetchPaginatedCourses } from '@/queries/courses';
import { CourseCardProps } from '@/types/skills';

const TopSoldCourses: React.FC = () => {
  const [courses, setCourses] = React.useState<CourseCardProps[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const fetchedCourses = await fetchPaginatedCourses(1, 5);
        setCourses(fetchedCourses);
      } catch (err) {
        setError('Failed to load top sold courses');
        console.error('Error loading top sold courses:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (loading) {
    return (
      <HorizontalCoursesSection
        title="Top Sold courses"
        courses={[]}
        backgroundColor="bg-white"
        loading={true}
      />
    );
  }

  if (error) {
    return (
      <HorizontalCoursesSection
        title="Top Sold courses"
        courses={[]}
        backgroundColor="bg-white"
        error={error}
      />
    );
  }

  return (
    <HorizontalCoursesSection
      title="Top Sold courses"
      courses={courses}
      backgroundColor="bg-white"
    />
  );
};

export default TopSoldCourses; 