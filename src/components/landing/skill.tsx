"use client";
import React, { useState } from 'react';
import { CategoryFolder, CourseCardProps } from '@/types/skills';
import CategoryTabs from './skills/CategoryTabs';
import CourseList from './skills/CourseList';
import ExploreButton from './skills/ExploreButton';

interface SkillsSectionProps {
  coursesByCategory: Record<string, CourseCardProps[]>;
  categories: CategoryFolder[];
  activeCategoryIndex: number;
  onCategoryChange: (index: number) => void;
}

// Pure component (no state)
const SkillsSection: React.FC<SkillsSectionProps> = ({
  coursesByCategory,
  categories,
  activeCategoryIndex,
  onCategoryChange,
}) => {
  const currentCategoryId = categories[activeCategoryIndex]?.categoryId;
  const currentCourses = coursesByCategory[currentCategoryId] || [];

  return (
    <>
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <section className="py-16 bg-[#F2F2F2]">
        <div className="w-[72%] mx-auto">
          <div className="text-left mb-12">
            <h2 className="border-none text-[32px] font-[700] text-[#282837]">
              All the skills you need in one place
            </h2>
            <p className="text-[20px] font-[400] text-[#75757E] max-w-full">
              From critical skills to technical topics, explore our comprehensive course categories.
            </p>
          </div>

          <CategoryTabs
            categories={categories}
            activeIndex={activeCategoryIndex}
            onChange={onCategoryChange}
          />

          <CourseList courses={currentCourses} />

          <ExploreButton categoryName={categories[activeCategoryIndex]?.name} />
        </div>
      </section>
    </>
  );
};

// Client wrapper (handles state)
const SkillsSectionWrapper: React.FC<SkillsSectionWrapperProps> = ({
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

export default SkillsSectionWrapper;