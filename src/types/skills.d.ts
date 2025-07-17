export interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  currentPrice: number;
  originalPrice: number;
  badges: string[];
  level: string;
  imageUrl: string;
  categoryId: string; 
}

export interface CategoryFolder {
  name: string;
  learnerCount: string;
  icon: string;
  courseCount: number;
  categoryId: string;
}