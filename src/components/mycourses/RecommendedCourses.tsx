"use client";
import React from 'react';
import HorizontalCoursesSection from './HorizontalCoursesSection';
import { fetchPaginatedCourses } from '@/queries/courses';
import { CourseCardProps } from '@/types/skills';

const RecommendedCourses: React.FC = () => {
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
        setError('Failed to load recommended courses');
        console.error('Error loading recommended courses:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (loading) {
    return (
      <HorizontalCoursesSection
        title="Recommended Courses for you"
        courses={[]}
        backgroundColor="bg-gray-50"
        loading={true}
      />
    );
  }

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