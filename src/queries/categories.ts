import { fetcher } from "../lib/fetcher-client";
import { api, USE_MOCK_DATA } from "../config/api";
import { CategoryFolder } from "@/types/skills";
import { Category } from "@/types/category";

// Fallback data for when API is not available
const fallbackCategories: CategoryFolder[] = [
  {
    name: "Web Development",
    learnerCount: "400K+ learners",
    icon: "/database.svg",
    courseCount: 15,
    categoryId: "1",
  },
  {
    name: "Mobile Development",
    learnerCount: "250K+ learners",
    icon: "/labtop.svg",
    courseCount: 12,
    categoryId: "2",
  },
  {
    name: "Data Science",
    learnerCount: "300K+ learners",
    icon: "/database.svg",
    courseCount: 18,
    categoryId: "3",
  },
  {
    name: "Design",
    learnerCount: "200K+ learners",
    icon: "/learnDesign.svg",
    courseCount: 10,
    categoryId: "4",
  },
];

export async function fetchCategories(): Promise<CategoryFolder[]> {
  // Only use mock data if explicitly enabled
  if (USE_MOCK_DATA) {
    console.log('[Categories] Using mock data (explicitly enabled)');
    return fallbackCategories;
  }

  // Try different possible category endpoints
  const possibleEndpoints = [
    `${process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:7061"}/Api/V1/categories`,
    `${process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:7061"}/Api/V1/category`,
    `${process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:7061"}/Api/V1/course-categories`,
    `${process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:7061"}/Api/V1/courses/categories`,
  ];

  for (const endpoint of possibleEndpoints) {
    try {
      console.log(`[Categories] Trying endpoint: ${endpoint}`);
      
      // Try with raw=true first to see the full response structure
      const rawResponse = await fetcher<any>(endpoint, {}, true);
      console.log(`[Categories] Raw API response from ${endpoint}:`, rawResponse);
      
      // Try to extract categories from different possible response structures
      let rawCategories: Category[] | null = null;
      
      if (rawResponse) {
        if (Array.isArray(rawResponse)) {
          // Direct array response
          rawCategories = rawResponse;
        } else if (rawResponse.data && Array.isArray(rawResponse.data)) {
          // Nested data property
          rawCategories = rawResponse.data;
        } else if (rawResponse.categories && Array.isArray(rawResponse.categories)) {
          // Categories property
          rawCategories = rawResponse.categories;
        } else if (rawResponse.items && Array.isArray(rawResponse.items)) {
          // Items property
          rawCategories = rawResponse.items;
        }
      }
      
      console.log(`[Categories] Extracted categories from ${endpoint}:`, rawCategories);
      
      if (rawCategories && rawCategories.length > 0) {
        console.log(`[Categories] Successfully fetched ${rawCategories.length} categories from ${endpoint}`);
        console.log(`[Categories] First category:`, rawCategories[0]);
        
        const mappedCategories = rawCategories.map((category) => ({
    name: category.name,
    learnerCount: "400K+ learners", 
    icon: "/database.svg", 
    courseCount: 5,
    categoryId: category.id,
  }));
        
        console.log(`[Categories] Mapped categories:`, mappedCategories);
        return mappedCategories;
      }
      
  } catch (error) {
      console.log(`[Categories] Endpoint ${endpoint} failed:`, error);
      continue; // Try next endpoint
    }
  }

  console.warn('All category endpoints failed, using fallback data');
  return fallbackCategories;
}