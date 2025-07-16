import AppHeader from '@/components/common/app-header';
import AppFooter from '@/components/common/app-footer';
import { LandingSection } from '@/components/landing/landing-section';
import { SearchSection } from '@/components/landing/search-section';
import DesignedForPeopleSec from '@/components/landing/designed-for-people-sec';
import HowItWorksSec from '@/components/landing/how-it-works-sec';
import PopularTopics from '@/components/landing/popular-topics';
import SkillsSection from '@/components/landing/skill';
import { ReviewsSection } from '@/components/landing/reviews-section';
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

export default async function Home() {
  const categories = await fetchCategories();
  const courses = await fetchCourses();
  const coursesByCategory = groupCoursesByCategory(courses);

  // Prepare data for header and footer
  const courseTitles = courses.map(course => course.title);
  const categoryNames = categories.map(category => category.name);

  return (
    <div className="landing-page">
      <AppHeader 
        courses={courseTitles} 
        categories={categoryNames} 
        error={null} 
      />
      <main>
        <LandingSection />
        <SearchSection />
        <SkillsSection coursesByCategory={coursesByCategory} categories={categories} />
        <DesignedForPeopleSec />
        <HowItWorksSec />
        <PopularTopics categories={categories} />
        
        <ReviewsSection />
      </main>
      <AppFooter 
        courses={courseTitles} 
        categories={categoryNames} 
        error={null} 
      />
    </div>
  );
}
