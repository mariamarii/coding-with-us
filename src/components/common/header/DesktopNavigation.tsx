"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import ExploreMenuContent from './ExploreMenuContent'; 


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
      <NavigationMenu
        
      >
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
  <NavigationMenuContent className="border-none shadow-none outline-none p-0 z-50">
  <ExploreMenuContent
    courseColumns={courseColumns}
    categoryColumns={categoryColumns}
    error={error}
  />
</NavigationMenuContent>

          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNav;