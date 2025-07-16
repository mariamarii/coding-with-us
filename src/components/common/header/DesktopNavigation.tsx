'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';

const splitIntoColumns = (items: string[], columns: number) => {
  const perColumn = Math.ceil(items.length / columns);
  const result: string[][] = [];
  for (let i = 0; i < columns; i++) {
    result.push(items.slice(i * perColumn, (i + 1) * perColumn));
  }
  return result;
};

const DesktopNav: React.FC<{
  currentPage: 'home' | 'about' | 'explore';
  handleNavClick: (page: 'home' | 'about' | 'explore') => void;
  isDarkMode: boolean;
  courses?: string[];
  categories?: string[];
  error: string | null;
}> = ({ currentPage, handleNavClick, isDarkMode, courses = [], categories = [], error }) => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const handleExploreClick = () => {
    setIsExploreOpen(!isExploreOpen);
    handleNavClick('explore');
  };

  const handleCloseExplore = () => {
    setIsExploreOpen(false);
  };

  const courseColumns = splitIntoColumns(courses, 2);
  const categoryColumns = splitIntoColumns(categories, 1);

  return (
    <>
      <nav className="hidden xl:flex items-center pl-[20px] gap-6 relative z-50">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className={`text-base font-normal hover:text-[#76B729] ${
                  currentPage === 'home'
                    ? 'text-[#76B729] border-b-2 border-[#76B729] font-bold'
                    : isDarkMode
                    ? 'text-gray-400 border-b-2 border-transparent'
                    : 'text-gray-800 border-b-2 border-transparent'
                }`}
                onClick={() => {
                  handleNavClick('home');
                  setIsExploreOpen(false);
                }}
              >
                Home
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className={`text-base font-normal hover:text-[#76B729] ${
                  currentPage === 'about'
                    ? 'text-[#76B729] border-b-2 border-[#76B729] font-bold'
                    : isDarkMode
                    ? 'text-gray-400 border-b-2 border-transparent'
                    : 'text-gray-800 border-b-2 border-transparent'
                }`}
                onClick={() => {
                  handleNavClick('about');
                  setIsExploreOpen(false);
                }}
              >
                About us
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className={`text-base font-normal hover:text-[#76B729] ${
                  currentPage === 'explore'
                    ? 'text-[#76B729] border-b-2 border-[#76B729] font-bold'
                    : isDarkMode
                    ? 'text-gray-400 border-b-2 border-transparent'
                    : 'text-gray-800 border-b-2 border-transparent'
                }`}
                onClick={handleExploreClick}
              >
                Explore
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {isExploreOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/10 z-[40]"
            onClick={handleCloseExplore}
          />

          {/* Explore Card */}
          <Card className="fixed top-[100px] left-1/2 -translate-x-1/2 w-[716px] h-[411px] z-[50] rounded-lg border border-gray-200 overflow-hidden flex flex-col bg-white shadow-2xl transition-all">
            <div className="h-full flex">
              {/* Categories */}
              <div className="w-[30%] border-r border-gray-200 h-full flex flex-col">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="mr-3 flex items-center">
                      <Image src="/category.svg" alt="Category" width={20} height={20} />
                    </div>
                    <h3 className="text-gray-900 font-bold text-sm">Categories</h3>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <ul className="space-y-1">
                      {error ? (
                        <li className="text-red-400 text-sm">Failed to load categories</li>
                      ) : categories.length === 0 ? (
                        <li className="text-gray-700 text-sm">No categories available</li>
                      ) : (
                        categoryColumns[0].map((category, idx) => (
                          <li key={idx}>
                            <Link
                              href={`/category/${category}`}
                              className="block py-2 px-3 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                              onClick={handleCloseExplore}
                            >
                              {category}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Courses */}
              <div className="w-[70%] h-full flex flex-col">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="mr-3 flex items-center">
                      <Image src="/courses.svg" alt="Courses" width={20} height={20} />
                    </div>
                    <h3 className="text-gray-900 font-bold text-sm">Courses</h3>
                  </div>
                  <div className="flex-1 flex gap-6 overflow-y-auto">
                    {error ? (
                      <div className="text-red-400 text-sm w-full text-center">Failed to load courses</div>
                    ) : courses.length === 0 ? (
                      <div className="text-gray-700 text-sm w-full text-center">No courses available</div>
                    ) : (
                      courseColumns.map((column, colIdx) => (
                        <div key={colIdx} className="flex-1">
                          <ul className="space-y-1">
                            {column.map((course, idx) => (
                              <li key={idx}>
                                <Link
                                  href={`/course/${course}`}
                                  className="block py-2 px-3 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                  onClick={handleCloseExplore}
                                >
                                  {course}
                                </Link>
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
      )}
    </>
  );
};

export default DesktopNav;
