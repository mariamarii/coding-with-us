"use client";
import React, { useState } from 'react';
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
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const handleCategoryChange = (index: number) => {
    setActiveCategoryIndex(index);
  };

  return (
    <SkillsSection
      coursesByCategory={coursesByCategory}
      categories={categories}
      activeCategoryIndex={activeCategoryIndex}
      onCategoryChange={handleCategoryChange}
    />
  );
};

export default SkillsWrapper; 