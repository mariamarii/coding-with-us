import { LandingSection } from '@/components/landing/landing-section';
import { SearchSection } from '@/components/landing/search-section';
import DesignedForPeopleSec from '@/components/landing/designed-for-people-sec';
import HowItWorksSec from '@/components/landing/how-it-works-sec';
import PopularTopics from '@/components/landing/popular-topics';
import SkillsWrapper from '@/components/landing/skills-wrapper';
import { ReviewsSection } from '@/components/landing/reviews-section';
import { fetchCategories } from '@/queries/categories';
import { fetchCourses } from '@/queries/courses';
import { CategoryFolder, CourseCardProps } from '@/types/skills';
import CTAWrapper from '@/components/landing/cta-wrapper';

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

  return (
    <div className="landing-page">
      <main>
        <LandingSection />
        <SearchSection courses={courses} />
        <SkillsWrapper coursesByCategory={coursesByCategory} categories={categories} />
        <DesignedForPeopleSec />
        <HowItWorksSec />
        <PopularTopics categories={categories} />
        
        <ReviewsSection />
        <CTAWrapper 
          title="start online learning"
          subtitle="ENHANCE YOUR SKILLS WITH BEST ONLINE COURSES"
          buttonText="Get Started"
          redirectPath="/courses"
        />
      </main>
    </div>
  );
}
