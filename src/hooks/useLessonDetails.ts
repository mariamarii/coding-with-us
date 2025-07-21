'use client';

import { useState } from 'react';
import { CourseSection, LessonProgress } from '@/types/lesson';

interface UseLessonDetailsProps {
  sections: CourseSection[];
  initialLessonId?: string;
}

export function useLessonDetails({ sections, initialLessonId }: UseLessonDetailsProps) {
  // Start with sidebar closed - it will be shown/hidden via CSS responsive classes
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentLessonId, setCurrentLessonId] = useState(initialLessonId || 'lesson-2-2');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLessonClick = (lessonId: string) => {
    setCurrentLessonId(lessonId);
  };

  // Calculate progress based on completed lessons
  const calculateProgress = (): LessonProgress => {
    let totalLessons = 0;
    let completedLessons = 0;
    let currentScore = 0;
    const totalScore = 200; // Mock total score

    sections.forEach(section => {
      section.Subsection.forEach(lesson => {
        totalLessons++;
        if (lesson.isCompleted) {
          completedLessons++;
          currentScore += 50; // Mock score per lesson
        }
      });
    });

    const percentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    return {
      currentLessonId,
      totalLessons,
      completedLessons,
      currentScore,
      totalScore,
      percentage,
    };
  };

  const progress = calculateProgress();

  return {
    isSidebarOpen,
    currentLessonId,
    progress,
    toggleSidebar,
    handleLessonClick,
  };
} 