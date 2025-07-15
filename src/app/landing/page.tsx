import AppHeader from '@/components/common/app-header';
import DesignedForPeopleSec from '@/components/landing/designed-for-people-sec';
import HowItWorksSec from '@/components/landing/how-it-works-sec';
import LandingSection from '@/components/landing/landing-section';
import PopularTopics from '@/components/landing/popular-topics';
import ReviewsSection from '@/components/landing/reviews';
import SkillsSection from '@/components/landing/skill';
import { fetchCategories } from '@/queries/categories';
import { fetchCourses } from '@/queries/courses';
import { CategoryFolder, CourseCardProps } from '@/types/skills';

function groupCoursesByCategory(courses: CourseCardProps[]): Record<string, CourseCardProps[]> {
  return courses.reduce((acc, course) => {
    const categoryId = course.categoryId;
    if (!acc[categoryId]) {
      acc[categoryId] = [];
    }
    acc[categoryId].push(course);
    return acc;
  }, {} as Record<string, CourseCardProps[]>);
}

export default async function LandingPage() {
  let categories: CategoryFolder[] = [];
  try {
    categories = await fetchCategories();
    console.log('Fetched categories:', categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }

  let courses: CourseCardProps[] = [];
  try {
    courses = await fetchCourses();
    console.log('Fetched courses:', courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
  }

  const coursesByCategory = groupCoursesByCategory(courses);
  console.log('Courses by category:', coursesByCategory);

  return (
    <div className="landing-page">
      <main>
        <LandingSection />
        <DesignedForPeopleSec />
        <HowItWorksSec />
        <PopularTopics categories={categories} />
        <SkillsSection coursesByCategory={coursesByCategory} categories={categories} />
        <ReviewsSection />
      </main>
    </div>
  );
}