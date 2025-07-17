export interface CourseContent {
  courseName: string;
  subcourseName: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'lesson' | 'file';
}

export interface CourseLandingPage {
  courseName: string;
  courseDescription: string;
  courseCategory: string;
  durationFrom: string;
  durationTo: string;
  courseOverview: string;
  courseImage: File | null;
  thumbnail: string;
}

export interface CourseCreationData {
  content: CourseContent;
  landingPage: CourseLandingPage;
  pricing?: any;
  account?: any;
}

export interface CourseCategory {
  id: string;
  name: string;
} 