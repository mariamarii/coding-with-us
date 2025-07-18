"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MobileMenuNavigationProps } from '@/types/header';
import { splitItemsIntoColumns } from '@/lib/navigation-utils';

const MobileMenuNavigation: React.FC<MobileMenuNavigationProps> = ({
  isDarkMode,
  handleNavClick,
  expandedCourses,
  setExpandedCourses,
  expandedUniversities,
  setExpandedUniversities,
  courses,
  categories,
  universities,
  error
}) => {
  // Prepare data for courses and universities
  const courseColumns = splitItemsIntoColumns(courses || [], 2);
  const categoryColumns = splitItemsIntoColumns(categories || [], 1);
  const universityColumns = splitItemsIntoColumns(universities || [], 2);

  const defaultCategories = ['Training', 'Design and Development'];
  const defaultCourses = [
    'Python Programming', 'Digital Logic', 'Computer Organization', 'Data Structure',
    'Java Programming 1', 'Java Programming 2', 'Operating System', 'Algorithms',
    'Web Development', 'Payment in Installments', 'Database', 'C++', 'Math'
  ];
  const defaultUniversities = [
    'Cairo University', 'Ain Shams University', 'Alexandria University', 'Mansoura University',
    'Zagazig University', 'Tanta University', 'Helwan University', 'Benha University',
    'Assiut University', 'Suez Canal University', 'Minia University', 'South Valley University'
  ];

  const shouldUseDefaultCategories = !categoryColumns || categoryColumns.flat().length === 0 || error;
  const shouldUseDefaultCourses = !courseColumns || courseColumns.flat().length === 0 || error;
  const shouldUseDefaultUniversities = !universityColumns || universityColumns.flat().length === 0 || error;

  const categoriesToRender = shouldUseDefaultCategories ? defaultCategories : categoryColumns.flat();
  const coursesToRender = shouldUseDefaultCourses ? defaultCourses : courseColumns.flat();
  const universitiesToRender = shouldUseDefaultUniversities ? defaultUniversities : universityColumns.flat();

  return (
    <nav className="p-4 space-y-2">
      <Button
        variant="ghost"
        className={`w-full pl-4 justify-start text-left text-base font-[400] text-[20px] ${
          isDarkMode ? 'text-[#282837]' : 'text-gray-700'
        }`}
        onClick={() => handleNavClick('home')}
      >
        Home
      </Button>
      <Button
        variant="ghost"
        className={`w-full pl-4 text-left justify-start text-base font-[400] text-[20px] ${
          isDarkMode ? 'text-[#282837]' : 'text-gray-700'
        }`}
        onClick={() => handleNavClick('about')}
      >
        About us
      </Button>
      
      {/* Courses Section */}
      <div className="space-y-2">
        <Button
          variant="ghost"
          className={`w-full pl-4 text-left justify-start text-base font-[400] text-[20px] flex items-center justify-between ${
            isDarkMode ? 'text-[#282837]' : 'text-gray-700'
          }`}
          onClick={() => setExpandedCourses(!expandedCourses)}
        >
          <span>Courses</span>
          {expandedCourses ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </Button>
        {expandedCourses && (
          <div className="pl-4 space-y-3">
            {/* Categories */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Image src="/category.svg" alt="Category" width={16} height={16} />
                <span className="text-sm font-medium text-gray-600">Categories</span>
              </div>
              <div className="space-y-1">
                {categoriesToRender.map((category, index) => (
                  <Link
                    key={index}
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-sm text-gray-500 hover:text-[#76B729] pl-6"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Courses */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Image src="/courses.svg" alt="Courses" width={16} height={16} />
                <span className="text-sm font-medium text-gray-600">Courses</span>
              </div>
              <div className="space-y-1">
                {coursesToRender.slice(0, 8).map((course, index) => (
                  <Link
                    key={index}
                    href={`/course/${course.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                    className="block text-sm text-gray-500 hover:text-[#76B729] pl-6"
                  >
                    {course}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Universities Section */}
      <div className="space-y-2">
        <Button
          variant="ghost"
          className={`w-full pl-4 text-left justify-start text-base font-[400] text-[20px] flex items-center justify-between ${
            isDarkMode ? 'text-[#282837]' : 'text-gray-700'
          }`}
          onClick={() => setExpandedUniversities(!expandedUniversities)}
        >
          <span>Universities</span>
          {expandedUniversities ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </Button>
        {expandedUniversities && (
          <div className="pl-4 space-y-2">
            <div className="flex items-center gap-2">
              <Image src="/database.svg" alt="Universities" width={16} height={16} />
              <span className="text-sm font-medium text-gray-600">Universities</span>
            </div>
            <div className="space-y-1">
              {universitiesToRender.slice(0, 8).map((university, index) => (
                <Link
                  key={index}
                  href={`/university/${university.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                  className="block text-sm text-gray-500 hover:text-[#76B729] pl-6"
                >
                  {university}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileMenuNavigation; 