import React from 'react';
import { CourseCardProps } from '@/types/skills';
import CourseCard from '@/components/common/courseCard';

interface CourseListProps {
  courses: CourseCardProps[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => (
  <div className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar">
    {courses.length > 0 ? (
      courses.map((course, index) => (
        <CourseCard key={course.title || index} {...course} />
      ))
    ) : (
      <p className="text-gray-600">No courses available for this category.</p>
    )}
  </div>
);

export default CourseList;
