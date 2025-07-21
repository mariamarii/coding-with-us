export interface Course {
  id: number;
  title: string;
  name?: string; // API response might use 'name' instead of 'title'
  progress: number;
  totalPoints: number;
  currentPoints: number;
  image: string;
  categoryId?: string; // API response might include categoryId
  price?: number; // API response might include price
}