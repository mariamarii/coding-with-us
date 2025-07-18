'use client';

import React from 'react';
import { useSearch } from '@/hooks/use-search';
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
    selectedUniversity,
    selectedCourse,
    isUniversityOpen,
    isCourseOpen,
    setSearchQuery,
    setSelectedUniversity,
    setSelectedCourse,
    setIsUniversityOpen,
    setIsCourseOpen,
  } = useSearch();

  // Filter courses by search query (case-insensitive)
  const filteredCourses = searchQuery.trim()
    ? courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
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
        />

        <CollaborationStatement />

        <UniversityLogos />
      </div>
    </section>
  );
} 