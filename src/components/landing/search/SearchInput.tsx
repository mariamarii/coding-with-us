'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredCourses: import('@/types/skills').CourseCardProps[];
  debouncedSearchQuery: string;
  isTyping: boolean;
}

export function SearchInput({ searchQuery, setSearchQuery, filteredCourses, debouncedSearchQuery, isTyping }: SearchInputProps) {
  const showResults = debouncedSearchQuery.trim().length >= 3 && filteredCourses.length > 0;

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
      
      {/* Show search results */}
      {showResults && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {filteredCourses.map((course) => (
            <div key={course.title + course.categoryId} className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer">
              <img 
                src={course.imageUrl} 
                alt={course.title} 
                className="w-8 h-8 object-cover rounded"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/course.png";
                }}
              />
              <span className="text-sm text-gray-800">{course.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 