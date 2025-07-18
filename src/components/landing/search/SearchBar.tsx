'use client';

import React from 'react';
import { SearchInput } from './SearchInput';
import { UniversityDropdown } from './UniversityDropdown';
import { CourseDropdown } from './CourseDropdown';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedUniversity: { name: string; image: string } | null;
  selectedCourse: string;
  isUniversityOpen: boolean;
  isCourseOpen: boolean;
  setSelectedUniversity: (university: { name: string; image: string } | null) => void;
  setSelectedCourse: (course: string) => void;
  setIsUniversityOpen: (open: boolean) => void;
  setIsCourseOpen: (open: boolean) => void;
  filteredCourses: import('@/types/skills').CourseCardProps[];
}

export function SearchBar({
  searchQuery,
  setSearchQuery,
  selectedUniversity,
  selectedCourse,
  isUniversityOpen,
  isCourseOpen,
  setSelectedUniversity,
  setSelectedCourse,
  setIsUniversityOpen,
  setIsCourseOpen,
  filteredCourses,
}: SearchBarProps) {
  return (
    <div className="bg-[#F8F8F8] rounded-md shadow-lg p-4 mb-8 w-[90%] mx-auto -mt-16 relative z-50">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <SearchInput 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredCourses={filteredCourses}
        />

        <div className="hidden lg:block w-px h-10 bg-gray-300 mx-2"></div>

        <UniversityDropdown
          selectedUniversity={selectedUniversity}
          isUniversityOpen={isUniversityOpen}
          setSelectedUniversity={setSelectedUniversity}
          setIsUniversityOpen={setIsUniversityOpen}
        />

        <CourseDropdown
          selectedCourse={selectedCourse}
          isCourseOpen={isCourseOpen}
          setSelectedCourse={setSelectedCourse}
          setIsCourseOpen={setIsCourseOpen}
        />
      </div>
    </div>
  );
} 