"use client";
import { fetchPaginatedCourses } from '@/queries/courses';
import { CourseCardProps } from '@/types/skills';

// Custom hook for managing paginated courses without useState/useEffect
export const usePaginatedCourses = () => {
  // Fetch courses with pagination
  const fetchCourses = async (pageIndex: number = 1, pageSize: number = 5): Promise<CourseCardProps[]> => {
    try {
      const courses = await fetchPaginatedCourses(pageIndex, pageSize);
      return courses;
    } catch (error) {
      console.error('Error fetching paginated courses:', error);
      throw error;
    }
  };

  // Fetch recommended courses (first page, 5 items)
  const fetchRecommendedCourses = async (): Promise<CourseCardProps[]> => {
    return await fetchCourses(1, 5);
  };

  // Fetch top sold courses (first page, 5 items)
  const fetchTopSoldCourses = async (): Promise<CourseCardProps[]> => {
    return await fetchCourses(1, 5);
  };

  // Fetch courses with custom pagination
  const fetchCoursesWithPagination = async (pageIndex: number, pageSize: number): Promise<CourseCardProps[]> => {
    return await fetchCourses(pageIndex, pageSize);
  };

  return {
    fetchCourses,
    fetchRecommendedCourses,
    fetchTopSoldCourses,
    fetchCoursesWithPagination
  };
}; 