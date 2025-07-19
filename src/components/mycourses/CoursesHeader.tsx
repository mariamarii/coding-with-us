"use client";
import React from 'react';
import { Button } from '@/components/ui/button';

interface CoursesHeaderProps {
  onSeeAllCourses?: () => void;
}

const CoursesHeader: React.FC<CoursesHeaderProps> = ({ onSeeAllCourses }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Courses You're taking
        </h1>
        <Button 
          variant="link" 
          onClick={onSeeAllCourses}
          className="text-[#76B729] hover:text-[#76B729] text-sm font-medium p-0 h-auto"
        >
          See all courses
        </Button>
      </div>
    </div>
  );
};

export default CoursesHeader; 