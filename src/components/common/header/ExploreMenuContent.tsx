'use client';
import Image from 'next/image';

import React from 'react';
import Link from 'next/link';

type Props = {
  courseColumns: string[][] | undefined;
  categoryColumns: string[][] | undefined;
  error: string | null;
};

const defaultCategories = ['Training', 'Design and Development'];

const defaultCourses = [
  'Python Programming', 'Digital Logic', 'Computer Organization', 'Data Structure',
  'Java Programming 1', 'Java Programming 2', 'Operating System', 'Algorithms',
  'Web Development', 'Payment in Installments', 'Database', 'C++', 'Math'
];

const ExploreMenuContent: React.FC<Props> = ({ courseColumns, categoryColumns, error }) => {
  const shouldUseDefaultCategories = !categoryColumns || categoryColumns.flat().length === 0 || error;
  const shouldUseDefaultCourses = !courseColumns || courseColumns.flat().length === 0 || error;

  const categoriesToRender = shouldUseDefaultCategories
    ? [[...defaultCategories]]
    : categoryColumns;

  const coursesToRender = shouldUseDefaultCourses
    ? [defaultCourses.slice(0, 8), defaultCourses.slice(8)]
    : courseColumns;

  return (
    <div className="w-[70vw] max-w-[700px] min-w-[500px] p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Categories (1/3 width) */} 
       <div className="basis-1/3 flex-grow-0 flex gap-3">
  {/* Icon on the far left */}
  <div className="pt-1">
    <Image
      src="/category.svg"
      alt="Category Icon"
      width={20}
      height={20}
      className="object-contain"
    />
  </div>

  {/* Text content */}
  <div className="flex-1">
    <h3 className="text-sm font-semibold text-gray-800 mb-2">Categories</h3>
    <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-3">
      {categoriesToRender.flat().map((category, index) => (
        <Link
          key={index}
          href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
          className="block text-sm text-gray-600 hover:text-[#76B729] transition-colors py-1"
        >
          {category}
        </Link>
      ))}
    </div>
  </div>
</div>


        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-200 mx-2"></div>
             
        {/* Courses (2/3 width) */}
       <div className="basis-2/3 flex-grow-0 flex gap-3">
  {/* Icon on the far left */}
  <div className="pt-1">
    <Image
      src="/courses.svg"
      alt="Courses Icon"
      width={20}
      height={20}
      className="object-contain"
    />
  </div>

  {/* Text content */}
  <div className="flex-1">
    <h3 className="text-sm font-semibold text-gray-800 mb-2">Courses</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1">
      {coursesToRender.flat().map((course, index) => (
        <Link
          key={index}
          href={`/course/${course.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
          className="block text-sm text-gray-600 hover:text-[#76B729] transition-colors py-1"
        >
          {course}
        </Link>
      ))}
    </div>
  </div>
</div>

      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">Error loading menu: {error}</p>
        </div>
      )}
    </div>
  );
};

export default ExploreMenuContent;
