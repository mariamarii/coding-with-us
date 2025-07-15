import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { ExploreMenuProps } from '@/types/landingProps';


const splitCoursesIntoColumns = (courses: string[], columns: number) => {
  const itemsPerColumn = Math.ceil(courses.length / columns);
  const result: string[][] = [];
  
  for (let i = 0; i < columns; i++) {
    const start = i * itemsPerColumn;
    const end = start + itemsPerColumn;
    result.push(courses.slice(start, end));
  }
  
  return result;
};

const ExploreMenu: React.FC<ExploreMenuProps> = ({ open, onItemClick, courses, categories, error }) => {
  const handleItemClick = (item: string, type: 'category' | 'course') => {
    onItemClick(item, type);
  };

  const courseColumns = splitCoursesIntoColumns(courses, 2);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/10 pointer-events-auto z-[1200]"
        onClick={() => onItemClick('', 'category')}
      />
      
      <Card
        className={`fixed top-[100px] left-1/2 transform -translate-x-1/2 w-[716px] h-[411px] rounded-lg border border-gray-200 overflow-hidden flex flex-col bg-white shadow-2xl pointer-events-auto z-[1201] transition-all duration-300 ease-out ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        }`}
      >
        <div className="h-full flex">
          <div className="w-[30%] border-r border-gray-200 h-full flex flex-col">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="mr-3 flex items-center">
                  <Image
                    src="/category.svg"
                    alt="Category Icon"
                    width={20}
                    height={20}
                    className="text-[#76B729]"
                  />
                </div>
                <h3
                  className="text-gray-900"
                  style={{
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    marginLeft: '-3px',
                  }}
                >
                  Categories
                </h3>
              </div>
              <div className="flex-1">
                <ul className="space-y-1">
                  {error ? (
                    <li className="text-red-400 text-sm">Failed to load categories</li>
                  ) : categories.length === 0 ? (
                    <li className="text-gray-700 text-sm">No categories available</li>
                  ) : (
                    categories.map((category, index) => (
                      <li key={index}>
                        <button
                          className="w-full text-left py-2 px-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors duration-200 text-gray-700 hover:text-gray-900"
                          style={{
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            paddingLeft: '30px',
                          }}
                          onClick={() => handleItemClick(category, 'category')}
                        >
                          {category}
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-[70%] h-full flex flex-col">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="mr-3 flex items-center">
                  <Image
                    src="/courses.svg"
                    alt="Course Icon"
                    width={20}
                    height={20}
                    className="text-[#76B729]"
                  />
                </div>
                <h3
                  className="text-gray-900"
                  style={{
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    marginLeft: '-3px',
                  }}
                >
                  Courses
                </h3>
              </div>
              <div className="flex-1 flex gap-6">
                {error ? (
                  <div className="text-red-400 text-sm w-full text-center">Failed to load courses</div>
                ) : courses.length === 0 ? (
                  <div className="text-gray-700 text-sm w-full text-center">No courses available</div>
                ) : (
                  courseColumns.map((column, columnIndex) => (
                    <div key={columnIndex} className="flex-1">
                      <ul className="space-y-1">
                        {column.map((course, index) => (
                          <li key={index}>
                            <button
                              className="w-full text-left py-2 px-3 rounded-md cursor-pointer hover:bg-gray-50 transition-colors duration-200 text-gray-700 hover:text-gray-900"
                              style={{
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                paddingLeft: '30px',
                              }}
                              onClick={() => handleItemClick(course, 'course')}
                            >
                              {course}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ExploreMenu;
