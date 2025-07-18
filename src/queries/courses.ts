import { fetcher } from "../lib/fetcher-client";
import { api, USE_MOCK_DATA } from "../config/api";
import { CourseCardProps } from "@/types/skills";
import { Course } from "@/types/course";

// Fallback data for when API is not available
const fallbackCourses: CourseCardProps[] = [
  {
    title: "Introduction to Web Development",
    imageUrl: "/course.png",
    categoryId: "1",
    instructor: "John Doe",
    rating: 4.8,
    reviews: 1250,
    currentPrice: 49.99,
    originalPrice: 99.99,
    badges: ["Top Rated", "Best Seller"],
    level: "Beginner",
  },
  {
    title: "Advanced JavaScript Concepts",
    imageUrl: "/course.png",
    categoryId: "1",
    instructor: "Jane Smith",
    rating: 4.9,
    reviews: 890,
    currentPrice: 79.99,
    originalPrice: 149.99,
    badges: ["Popular"],
    level: "Intermediate",
  },
  {
    title: "React Fundamentals",
    imageUrl: "/course.png",
    categoryId: "2",
    instructor: "Mike Johnson",
    rating: 4.7,
    reviews: 2100,
    currentPrice: 59.99,
    originalPrice: 119.99,
    badges: ["Top Rated"],
    level: "Beginner",
  },
  {
    title: "iOS App Development",
    imageUrl: "/course.png",
    categoryId: "2",
    instructor: "Sarah Wilson",
    rating: 4.6,
    reviews: 1500,
    currentPrice: 89.99,
    originalPrice: 179.99,
    badges: ["New"],
    level: "Intermediate",
  },
  {
    title: "Data Science Fundamentals",
    imageUrl: "/course.png",
    categoryId: "3",
    instructor: "Dr. Alex Chen",
    rating: 4.9,
    reviews: 3200,
    currentPrice: 69.99,
    originalPrice: 139.99,
    badges: ["Top Rated", "Best Seller"],
    level: "Beginner",
  },
  {
    title: "Machine Learning Basics",
    imageUrl: "/course.png",
    categoryId: "3",
    instructor: "Prof. Maria Garcia",
    rating: 4.8,
    reviews: 2100,
    currentPrice: 99.99,
    originalPrice: 199.99,
    badges: ["Popular"],
    level: "Intermediate",
  },
  {
    title: "UI/UX Design Principles",
    imageUrl: "/course.png",
    categoryId: "4",
    instructor: "Lisa Thompson",
    rating: 4.7,
    reviews: 1800,
    currentPrice: 54.99,
    originalPrice: 109.99,
    badges: ["Top Rated"],
    level: "Beginner",
  },
  {
    title: "Advanced Design Systems",
    imageUrl: "/course.png",
    categoryId: "4",
    instructor: "David Kim",
    rating: 4.6,
    reviews: 950,
    currentPrice: 74.99,
    originalPrice: 149.99,
    badges: ["New"],
    level: "Advanced",
  },
];

export async function fetchCourses(): Promise<CourseCardProps[]> {
  // Only use mock data if explicitly enabled
  if (USE_MOCK_DATA) {
    console.log('[Courses] Using mock data (explicitly enabled)');
    return fallbackCourses;
  }

  try {
    const apiUrl = api.courses();
    console.log(`[Courses] Attempting to fetch from: ${apiUrl}`);
    console.log(`[Courses] API Base URL: ${process.env.NEXT_PUBLIC_API_BASE_URL}`);
    
    const rawCourses = await fetcher<Course[]>(apiUrl, {}, false);
    console.log(`[Courses] Raw response:`, rawCourses);
    
    if (!rawCourses) {
      console.warn('No courses data received from API, using fallback data');
      return fallbackCourses;
    }

    console.log(`[Courses] Successfully fetched ${rawCourses.length} courses from API`);
    console.log(`[Courses] First course:`, rawCourses[0]);
    
    const mappedCourses = rawCourses.map((course) => ({
      title: course.name,
      imageUrl: course.image,
      categoryId: course.categoryId,
      instructor: "Unknown Instructor",
      rating: 5,
      reviews: 10000,
      currentPrice: course.price,
      originalPrice: 349.99, 
      badges: [ "Top Rated"], 
      level: "Beginner", 
    }));
    
    console.log(`[Courses] Mapped courses:`, mappedCourses);
    return mappedCourses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : String(error),
      type: error instanceof Error ? error.constructor.name : typeof error,
      stack: error instanceof Error ? error.stack : undefined
    });
    console.warn('Using fallback courses data due to API error');
    return fallbackCourses;
  }
}