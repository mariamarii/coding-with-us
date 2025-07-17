import React from 'react';
import { CourseCardProps } from '@/types/skills';
import CourseCard from '@/components/common/courseCard';

interface SkillsSectionProps {
  courses: CourseCardProps[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ courses }) => {
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
              From critical skills to technical topics, explore our comprehensive course collection.
            </p>
          </div>

          <div className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar">
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <CourseCard key={course.title || index} {...course} />
              ))
            ) : (
              <p className="text-gray-600">No courses available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;