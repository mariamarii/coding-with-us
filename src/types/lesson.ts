export interface Lesson {
  id: string;
  title: string;
  sectionId: string;
  order: number;
  estimatedTime: number; // in minutes
  isCompleted: boolean;
  isActive: boolean;
}

export interface CourseSection {
  id: string;
  title: string;
  order: number;
  Subsection: Lesson[];
  isCompleted: boolean;
}

export interface LessonProgress {
  currentLessonId: string;
  totalLessons: number;
  completedLessons: number;
  currentScore: number;
  totalScore: number;
  percentage: number;
}

export interface LessonContent {
  title: string;
  estimatedTime: number;
  content: string;
  videoUrl?: string;
} 