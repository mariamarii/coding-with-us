"use client";
import React, { useState } from 'react';
import { CategoryFolder, CourseCardProps } from '@/types/skills';
import CourseCard from '../common/courseCard';

interface SkillsSectionProps {
  coursesByCategory: Record<string, CourseCardProps[]>;
  categories: CategoryFolder[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ coursesByCategory, categories }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const getCurrentCourses = (): CourseCardProps[] => {
    return coursesByCategory[categories[activeCategory]?.categoryId] || [];
  };
  
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

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="border-none text-4xl font-bold text-gray-900 mb-4">
              All the skills you need in one place
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              From critical skills to technical topics, explore our comprehensive course categories.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={category.categoryId}
                onClick={() => setActiveCategory(index)}
                className={`flex justify-center items-center rounded-full transition-all duration-200 ${
                  activeCategory === index
                    ? 'bg-[#76B729] text-[#FFFFFF] shadow-lg'
                    : 'bg-none text-[#282837] border border-gray-300 hover:bg-gray-50'
                }`}
                style={{
                  minWidth: '180px',
                  height: '67px',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  padding: '0 16px',
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-1">
                    <img src={category.icon} alt={`${category.name} icon`} className="w-5 h-5" />
                    <span className="truncate">{category.name}</span>
                  </div>
                  <span className="text-xs opacity-75">{category.learnerCount}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar">
            {getCurrentCourses().length > 0 ? (
              getCurrentCourses().map((course, index) => (
                <CourseCard key={course.title || index} {...course} />
              ))
            ) : (
              <p className="text-gray-600">No courses available for this category.</p>
            )}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-gray-800 rounded-lg text-gray-800 bg-none hover:bg-gray-50 transition-colors duration-200 font-bold text-base leading-none tracking-normal">
              Explore more {categories[activeCategory]?.name.toLowerCase() || 'courses'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;