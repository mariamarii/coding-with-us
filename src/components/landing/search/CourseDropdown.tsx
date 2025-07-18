'use client';

import React from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CourseDropdownList } from './CourseDropdownList';

interface CourseDropdownProps {
  selectedCourse: string;
  isCourseOpen: boolean;
  setSelectedCourse: (course: string) => void;
  setIsCourseOpen: (open: boolean) => void;
}

export function CourseDropdown({
  selectedCourse,
  isCourseOpen,
  setSelectedCourse,
  setIsCourseOpen,
}: CourseDropdownProps) {
  return (
    <div 
      className="relative flex-1"
      onMouseEnter={() => setIsCourseOpen(true)}
      onMouseLeave={() => setIsCourseOpen(false)}
    >
      <Button
        variant="outline"
        className="w-full h-10 text-gray-400 justify-between border-gray-200 hover:bg-gray-50 text-sm rounded-md bg-[#F2F2F2]"
        onClick={() => setIsCourseOpen(!isCourseOpen)}
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400">
            {selectedCourse || 'Course'}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isCourseOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {isCourseOpen && (
        <CourseDropdownList
          setSelectedCourse={setSelectedCourse}
          setIsCourseOpen={setIsCourseOpen}
        />
      )}
    </div>
  );
} 