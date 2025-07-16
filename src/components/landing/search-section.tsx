"use client";

import React, { useState } from 'react';
import { Search, Building, BookOpen, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState<{name: string; image: string} | null>(null);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isUniversityOpen, setIsUniversityOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);

    const universities = [
    {
      name: 'Harvard University',
      image: '/harvard.svg'
    },
    {
      name: 'MIT',
      image: '/mass.svg'
    },
    {
      name: 'Berkeley',
      image: '/berkely.svg'
    },
    {
      name: 'Columbia',
      image: '/colombia.svg'
    },
    {
      name: 'Cambridge',
      image: '/campridge.svg'
    },
  ];

  const courses = [
    'Computer Science',
    'Business Administration',
    'Engineering',
    'Medicine',
    'Arts & Humanities',
    'Social Sciences',
    'Natural Sciences',
    'Law'
  ];

  return (
    <section className="w-full bg-[#F9F9F9] py-8 relative ">
      {/* Background blur effect */}
      <div className="absolute inset-0 "></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Search and Filter Bar - positioned to overlap with landing section */}
        <div className="bg-[#F8F8F8] rounded-md shadow-lg p-4 mb-8 max-w-4xl mx-auto -mt-16 relative z-50">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Input */}
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

            {/* Vertical Line */}
            <div className="hidden lg:block w-px h-10 bg-gray-300 mx-2"></div>

            {/* University Dropdown */}
            <div className="relative flex-1">
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
                <ChevronDown className={`w-4 h-4 text-[#76b729] transition-transform ${isUniversityOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {isUniversityOpen && (
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
                          // Fallback to colored square if image fails to load
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
              )}
            </div>

            {/* Course Dropdown */}
            <div className="relative flex-1">
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
                <ChevronDown className={`w-4 h-4 text-[#76b729] transition-transform ${isCourseOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {isCourseOpen && (
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
              )}
            </div>
          </div>
        </div>

        {/* Collaboration Statement */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
            We collaborate with{' '}
            <span className="text-[#76B729]">350+</span>{' '}
            leading universities and companies
          </h2>
        </div>

        {/* University Logos */}
        <div className="flex justify-between items-center opacity-80">
          {universities.map((university) => (
            <div key={university.name} className="flex flex-col items-center">
              <div className="w-40 h-32 rounded-lg flex items-center justify-center mb-2">
                <img 
                  src={university.image} 
                  alt={`${university.name} logo`}
                  className="w-40 h-32 object-contain"
                  onError={(e) => {
                    // Fallback to colored square if image fails to load
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
      </div>
    </section>
  );
};

export default SearchSection; 