import { fetcher } from "../lib/fetcher-client";
import { api } from "../config/api";
import { CourseCardProps } from "@/types/skills";
import { Course } from "@/types/course";


export async function fetchCourses(): Promise<CourseCardProps[]> {
  const rawCourses = await fetcher<Course[]>(api.courses(), {}, false);
  if (!rawCourses) {
    throw new Error("Failed to fetch courses");
  }

  return rawCourses.map((course) => ({
    id: course.id,
    title: course.name,
    imageUrl: course.image,
    categoryId: course.categoryId,
    instructor: "Unknown Instructor",
    rating: 5,
    reviews: 10000,
    currentPrice: course.price,
    originalPrice: 349.99, 
    badges: [ "Best seller","Certificate"], 
    level: "Beginner", 
  }));
}