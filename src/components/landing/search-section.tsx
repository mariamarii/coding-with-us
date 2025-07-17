'use client';

import React from 'react';
import { Search, Building, BookOpen, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearch } from '@/hooks/use-search';
import { universities } from '@/data/universities';
import { courses } from '@/data/courses';

export function SearchSection() {
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

  return (
    <section className="w-full bg-[#F9F9F9] py-8 relative ">
      <div className="absolute inset-0 "></div>
      
      <div className="relative z-10 w-[72%] mx-auto px-4">
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
        />

        <CollaborationStatement />

        <UniversityLogos />
      </div>
    </section>
  );
}

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
}

function SearchBar({
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
}: SearchBarProps) {
  return (
    <div className="bg-[#F8F8F8] rounded-md shadow-lg p-4 mb-8 max-w-4xl mx-auto -mt-16 relative z-50">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <SearchInput 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
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

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function SearchInput({ searchQuery, setSearchQuery }: SearchInputProps) {
  return (
    <div className="flex-[2] relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
      <Input
        type="text"
        placeholder="What do you want to learn?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 h-10 border-gray-200 focus:ring-[#76b729] text-sm rounded-md bg-[#F2F2F2]"
      />
    </div>
  );
}

interface UniversityDropdownProps {
  selectedUniversity: { name: string; image: string } | null;
  isUniversityOpen: boolean;
  setSelectedUniversity: (university: { name: string; image: string } | null) => void;
  setIsUniversityOpen: (open: boolean) => void;
}

function UniversityDropdown({
  selectedUniversity,
  isUniversityOpen,
  setSelectedUniversity,
  setIsUniversityOpen,
}: UniversityDropdownProps) {
  return (
    <div 
      className="relative flex-1"
      onMouseEnter={() => setIsUniversityOpen(true)}
      onMouseLeave={() => setIsUniversityOpen(false)}
    >
      <Button
        variant="outline"
        className="w-full h-10 justify-between border-gray-200 hover:bg-gray-50 text-sm rounded-md bg-[#F2F2F2]"
        onClick={() => setIsUniversityOpen(!isUniversityOpen)}
      >
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4 text-gray-400" />
          <span className="text-gray-700">
            {selectedUniversity ? selectedUniversity.name : 'University'}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4  transition-transform ${isUniversityOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {isUniversityOpen && (
        <UniversityDropdownList
          setSelectedUniversity={setSelectedUniversity}
          setIsUniversityOpen={setIsUniversityOpen}
        />
      )}
    </div>
  );
}

interface UniversityDropdownListProps {
  setSelectedUniversity: (university: { name: string; image: string } | null) => void;
  setIsUniversityOpen: (open: boolean) => void;
}

function UniversityDropdownList({
  setSelectedUniversity,
  setIsUniversityOpen,
}: UniversityDropdownListProps) {
  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
      {universities.map((university) => (
        <button
          key={university.name}
          className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-md last:rounded-b-md flex items-center gap-3"
          onClick={() => {
            setSelectedUniversity(university);
            setIsUniversityOpen(false);
          }}
        >
          <img 
            src={university.image} 
            alt={`${university.name} logo`}
            className="w-8 h-8 object-contain border border-gray-200 rounded"
            onLoad={() => console.log(`Loaded: ${university.image}`)}
            onError={(e) => {
              console.log(`Failed to load: ${university.image}`);
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className={`w-6 h-6 rounded bg-red-600 flex items-center justify-center text-white text-xs font-bold hidden`}>
            {university.name.charAt(0)}
          </div>
          {university.name}
        </button>
      ))}
    </div>
  );
}

interface CourseDropdownProps {
  selectedCourse: string;
  isCourseOpen: boolean;
  setSelectedCourse: (course: string) => void;
  setIsCourseOpen: (open: boolean) => void;
}

function CourseDropdown({
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
        className="w-full h-10 justify-between border-gray-200 hover:bg-gray-50 text-sm rounded-md bg-[#F2F2F2]"
        onClick={() => setIsCourseOpen(!isCourseOpen)}
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-gray-400" />
          <span className="text-gray-700">
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

interface CourseDropdownListProps {
  setSelectedCourse: (course: string) => void;
  setIsCourseOpen: (open: boolean) => void;
}

function CourseDropdownList({
  setSelectedCourse,
  setIsCourseOpen,
}: CourseDropdownListProps) {
  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
      {courses.map((course) => (
        <button
          key={course}
          className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
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

function CollaborationStatement() {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
        We collaborate with{' '}
        <span className="text-[#76B729]">350+</span>{' '}
        leading universities and companies
      </h2>
    </div>
  );
}

function UniversityLogos() {
  return (
    <div className="flex overflow-x-auto space-x-8 pb-4 hide-scrollbar">
      {universities.map((university) => (
        <div key={university.name} className="flex flex-col items-center flex-shrink-0">
          <div className="w-40 h-32 rounded-lg flex items-center justify-center mb-2">
            <img 
              src={university.image} 
              alt={`${university.name} logo`}
              className="w-40 h-32 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className={`w-14 h-14 rounded bg-red-600 flex items-center justify-center text-white text-xs font-bold hidden`}>
              {university.name.charAt(0)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 