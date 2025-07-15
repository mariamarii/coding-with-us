import { fetcher } from "../lib/fetcher-client";
import { api } from "../config/api";
import { CategoryFolder } from "@/types/skills";
import { Category } from "@/types/category";


export async function fetchCategories(): Promise<CategoryFolder[]> {
  const rawCourses = await fetcher<Category[]>(api.categories(), {}, false);
  if (!rawCourses) {
    throw new Error("Failed to fetch courses");
  }

  return rawCourses.map((category) => ({
    
    name: category.name,
    learnerCount: "400K+ learners", 
    icon: "/database.svg", 
    courseCount: 5,
    categoryId: category.id,
  }));
}