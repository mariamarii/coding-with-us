export interface Course {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  image: string;
  sections: any[];
  price: number;
}