'use client';

import React from 'react';
import { courses } from '@/data/courses';

interface CourseDropdownListProps {
  setSelectedCourse: (course: string) => void;
  setIsCourseOpen: (open: boolean) => void;
}

export function CourseDropdownList({
  setSelectedCourse,
  setIsCourseOpen,
}: CourseDropdownListProps) {
  return (
    <div className="absolute top-full left-0 right-0 mt-1 text-gray-800 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
      {courses.map((course) => (
        <button
          key={course}
          className="w-full px-3 py-2 text-left text-gray-800 text-sm hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
          onClick={() => {
            setSelectedCourse(course);
            setIsCourseOpen(false);
          }}
        >
          {course}
        </button>
      ))}
    </div>
  );
} 