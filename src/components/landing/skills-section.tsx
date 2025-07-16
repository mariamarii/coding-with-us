'use client';

import React from 'react';
import { CategoryFolder, CourseCardProps } from '@/types/skills';
import CourseCard from '@/components/common/courseCard';

interface SkillsSectionProps {
  coursesByCategory: Record<string, CourseCardProps[]>;
  categories: CategoryFolder[];
}

export function SkillsSection({ coursesByCategory, categories }: SkillsSectionProps) {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Explore Skills by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover courses organized by skill categories to help you find exactly what you need to learn
          </p>
        </div>

        <div className="grid gap-8">
          {categories.map((category) => {
            const categoryCourses = coursesByCategory[category.categoryId] || [];
            
            if (categoryCourses.length === 0) return null;

            return (
              <div key={category.categoryId} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img 
                      src={category.icon} 
                      alt={category.name}
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                    <p className="text-sm text-gray-500">
                      {category.courseCount} courses • {category.learnerCount} learners
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryCourses.slice(0, 3).map((course, index) => (
                    <CourseCard key={`${course.categoryId}-${index}`} {...course} />
                  ))}
                </div>

                {categoryCourses.length > 3 && (
                  <div className="text-center">
                    <button className="text-[#76B729] hover:text-[#6BA524] font-medium">
                      View all {categoryCourses.length} courses in {category.name}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 