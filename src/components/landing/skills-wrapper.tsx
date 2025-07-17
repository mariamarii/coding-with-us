"use client";
import React from 'react';
import { CategoryFolder, CourseCardProps } from '@/types/skills';
import SkillsSection from './skill';

interface SkillsWrapperProps {
  coursesByCategory: Record<string, CourseCardProps[]>;
  categories: CategoryFolder[];
}

const SkillsWrapper: React.FC<SkillsWrapperProps> = ({
  coursesByCategory,
  categories,
}) => {
  // Flatten all courses from all categories into a single array
  const allCourses = Object.values(coursesByCategory).flat();

  return (
    <SkillsSection courses={allCourses} />
  );
};

export default SkillsWrapper; 