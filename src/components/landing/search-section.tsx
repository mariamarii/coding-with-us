'use client';

import React from 'react';
import { useSearchWithoutEffects } from '@/hooks/useSearchWithoutEffects';
import { SearchBar } from './search/SearchBar';
import { CollaborationStatement } from './search/CollaborationStatement';
import { UniversityLogos } from './search/UniversityLogos';
import CourseList from './skills/CourseList';

interface SearchSectionProps {
  courses: import('@/types/skills').CourseCardProps[];
}

export function SearchSection({ courses }: SearchSectionProps) {
  const {
    searchQuery,
    debouncedSearchQuery,
    selectedUniversity,
    selectedCourse,
    isUniversityOpen,
    isCourseOpen,
    shouldSearch,
    isTyping,
    setSearchQuery,
    setSelectedUniversity,
    setSelectedCourse,
    setIsUniversityOpen,
    setIsCourseOpen,
  } = useSearchWithoutEffects({
    delay: 500,
    minCharacters: 3
  });

  // Filter courses by debounced search query with minimum 3 characters
  const filteredCourses = shouldSearch
    ? courses.filter(course =>
        course.title.toLowerCase().includes(debouncedSearchQuery.trim().toLowerCase())
      )
    : [];

  return (
    <section className="w-full bg-[#F9F9F9] py-8 relative ">
      <div className="absolute inset-0 "></div>
      
      <div className="relative z-10 w-[72%] mx-auto">
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedUniversity={selectedUniversity}
          selectedCourse={selectedCourse}
          isUniversityOpen={isUniversityOpen}
          isCourseOpen={isCourseOpen}
          setSelectedUniversity={setSelectedUniversity}
          setSelectedCourse={setSelectedCourse}
          setIsUniversityOpen={setIsUniversityOpen}
          setIsCourseOpen={setIsCourseOpen}
          filteredCourses={filteredCourses}
          debouncedSearchQuery={debouncedSearchQuery}
          isTyping={isTyping}
        />

        <CollaborationStatement />

        <UniversityLogos />
      </div>
    </section>
  );
} 