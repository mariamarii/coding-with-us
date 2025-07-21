import { fetchPaginatedCourses } from '@/queries/courses';
import { CourseCardProps } from '@/types/skills';

export async function getRecommendedCourses() {
  try {
    const courses = await fetchPaginatedCourses(1, 5);
    return { courses, loading: false, error: null };
  } catch (err) {
    return { courses: [], loading: false, error: 'Failed to load recommended courses' };
  }
}