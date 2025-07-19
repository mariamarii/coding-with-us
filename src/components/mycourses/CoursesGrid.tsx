"use client";
import React from 'react';
import { Course } from '@/types/course';
import CourseCard from './CourseCard';

interface CoursesGridProps {
  courses: Course[];
  onContinueCourse?: (courseId: number) => void;
}

const CoursesGrid: React.FC<CoursesGridProps> = ({ courses, onContinueCourse }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {courses.map((course) => (
        <CourseCard 
          key={course.id} 
          course={course} 
          onContinue={onContinueCourse}
        />
      ))}
    </div>
  );
};

export default CoursesGrid; 