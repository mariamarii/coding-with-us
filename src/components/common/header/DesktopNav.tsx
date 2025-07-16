"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';

const splitItemsIntoColumns = (items: string[], columns: number) => {
  const itemsPerColumn = Math.ceil(items.length / columns);
  const result: string[][] = [];
  
  for (let i = 0; i < columns; i++) {
    const start = i * itemsPerColumn;
    const end = start + itemsPerColumn;
    result.push(items.slice(start, end));
  }
  
  return result;
};

const DesktopNav: React.FC<{
  currentPage: 'home' | 'about' | 'explore';
  handleNavClick: (page: 'home' | 'about' | 'explore') => void;
  isDarkMode: boolean;
  courses: string[] | undefined;
  categories: string[] | undefined;
  error: string | null;
}> = ({ currentPage, handleNavClick, isDarkMode, courses, categories, error }) => {
  const courseColumns = splitItemsIntoColumns(courses || [], 2);
  const categoryColumns = splitItemsIntoColumns(categories || [], 1);

  return (
    <nav className="hidden xl:flex items-center pl-[20px] gap-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Button
              variant="ghost"
              className={`text-base font-normal hover:text-[#76B729] ${
                currentPage === 'home'
                  ? 'text-[#76B729] rounded-none border-b-2 border-[#76B729] font-bold'
                  : isDarkMode
                  ? 'text-gray-400 border-b-2 rounded-none border-transparent'
                  : 'text-gray-800 border-b-2 rounded-none border-transparent'
              }`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              variant="ghost"
              className={`text-base font-normal hover:text-[#76B729] ${
                currentPage === 'about'
                  ? 'text-[#76B729] rounded-none border-b-2 border-[#76B729] font-bold'
                  : isDarkMode
                  ? 'text-gray-400 rounded-none border-b-2 border-transparent'
                  : 'text-gray-800 rounded-none border-b-2 border-transparent'
              }`}
              onClick={() => handleNavClick('about')}
            >
              About us
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`text-base font-normal hover:text-[#76B729] flex items-center gap-1 ${
                currentPage === 'explore'
                  ? 'text-[#76B729] rounded-none border-b-2 border-[#76B729] font-bold'
                  : isDarkMode
                  ? 'text-gray-400 rounded-none border-b-2 border-transparent'
                  : 'text-gray-800 rounded-none border-b-2 border-transparent'
              }`}
              onClick={() => handleNavClick('explore')}
            >
              Explore
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[90vw] max-w-[900px] min-w-[600px] p-6 bg-white rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Categories Column */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-[#76B729] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">📁</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-800">Categories</h3>
                    </div>
                    {categoryColumns.length > 0 ? (
                      <div className="grid grid-cols-1 gap-4">
                        {categoryColumns.map((column, columnIndex) => (
                          <div key={columnIndex} className="space-y-2">
                            {column.map((category, index) => (
                              <Link
                                key={index}
                                href={`/category/${category}`}
                                className="block text-sm text-gray-600 hover:text-[#76B729] transition-colors py-1"
                              >
                                {category}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Link href="/category/training" className="block text-sm text-gray-600 hover:text-[#76B729] transition-colors py-1">
                          Training
                        </Link>
                        <Link href="/category/design-development" className="block text-sm text-gray-600 hover:text-[#76B729] transition-colors py-1">
                          Design and development
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Courses Column */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-[#76B729] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">📚</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-800">Courses</h3>
                    </div>
                    {courseColumns.length > 0 && courses && courses.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {courseColumns.map((column, columnIndex) => (
                          <div key={columnIndex} className="space-y-2">
                            {column.map((course, index) => (
                              <Link
                                key={index}
                                hre
System: I'll provide the remaining component files to complete the modularization of the Header component. Below are the files for `SearchBar.tsx`, `DesktopControls.tsx`, `MobileMenu.tsx`, and the main `Header.tsx` that composes all the components. Each file is wrapped in its own `<xaiArtifact>` tag with a unique `artifact_id`, maintaining the same functionality as the original code. I've also fixed the incomplete `DesktopNav.tsx` from the previous response by including the full courses list and corrected any truncated parts.

---

<xaiArtifact artifact_id="947a518b-e964-40e7-9f5d-d8fd23909962" artifact_version_id="926402df-3157-4e63-a156-666c492ed36a" title="SearchBar.tsx" contentType="text/typescript">
"use client";
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchBar: React.FC = () => (
  <div className="flex-1 mx-4 md:mx-6 lg:mx-8 xl:max-w-md">
    <div className="relative w-full">
      <Input
        type="search"
        placeholder="What do you want to learn?"
        className="w-full h-vx9 bg-gray-50 border-none rounded-lg pl-4 pr-10 text-sm focus:ring-[#76B729]"
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
  </div>
);

export default SearchBar;