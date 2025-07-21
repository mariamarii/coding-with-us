import { useState, useEffect } from 'react';
import { fetchPaginatedCourses } from '@/queries/courses';
import { CourseCardProps } from '@/types/skills';

export function useTopSoldCourses() {
  const [courses, setCourses] = useState<CourseCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const fetchedCourses = await fetchPaginatedCourses(1, 5);
        if (!fetchedCourses || fetchedCourses.length === 0) {
          throw new Error('No courses found');
        }
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

  return { courses, loading, error };
}