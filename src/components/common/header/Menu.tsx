import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { cn } from '@/lib/utils';
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

const MenuHeader = ({ icon, title }: { icon: string; title: string }) => (
  <div className="flex items-center mb-6">
    <div className="mr-3 flex items-center">
      <Image
        src={icon}
        alt={`${title} Icon`}
        width={20}
        height={20}
        className="text-[#76B729]"
      />
    </div>
    <h3 className="text-gray-900 font-bold text-sm leading-none tracking-normal -ml-1">
      {title}
    </h3>
  </div>
);

const MenuItem = ({ 
  item, 
  type, 
  onClick 
}: { 
  item: string; 
  type: 'category' | 'course'; 
  onClick: (item: string, type: 'category' | 'course') => void;
}) => (
  <li>
    <Button
      variant="ghost"
      className="w-full justify-start text-left py-2 px-3 rounded-md h-auto font-normal text-sm leading-none tracking-normal text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
      style={{ paddingLeft: '30px' }}
      onClick={() => onClick(item, type)}
    >
      {item}
    </Button>
  </li>
);

const ExploreMenu: React.FC<ExploreMenuProps> = ({ 
  open, 
  onItemClick, 
  courses, 
  categories, 
  error,
  handleExploreHover,
  handleExploreLeave,
}) => {
  const handleItemClick = (item: string, type: 'category' | 'course') => {
    onItemClick(item, type);
  };

  const courseColumns = splitCoursesIntoColumns(courses, 2);

  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className="h-auto px-0 py-2 text-base font-normal border-b-2 border-transparent rounded-none hover:bg-transparent hover:text-[#76B729] transition-all duration-200 flex items-center gap-1"
          onMouseEnter={handleExploreHover}
          onMouseLeave={handleExploreLeave}
        >
          Explore
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <Card className={cn(
            "w-[716px] h-[411px] rounded-lg border border-gray-200 overflow-hidden bg-white shadow-2xl pointer-events-auto transition-all duration-300 ease-out",
            open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          )}>
            <CardContent className="p-0 h-full">
              <div className="h-full flex">
                {/* Categories Section */}
                <div className="w-[30%] h-full flex flex-col">
                  <div className="p-6 h-full flex flex-col">
                    <MenuHeader icon="/category.svg" title="Categories" />
                    <div className="flex-1 overflow-y-auto">
                      <ul className="space-y-1">
                        {error ? (
                          <li className="text-red-400 text-sm px-3 py-2">
                            Failed to load categories
                          </li>
                        ) : categories.length === 0 ? (
                          <li className="text-gray-700 text-sm px-3 py-2">
                            No categories available
                          </li>
                        )ទ

System: ) : (
                          categories.map((category, index) => (
                            <MenuItem
                              key={index}
                              item={category}
                              type="category"
                              onClick={handleItemClick}
                            />
                          ))
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Vertical Separator */}
                <Separator orientation="vertical" className="h-full" />

                {/* Courses Section */}
                <div className="w-[70%] h-full flex flex-col">
                  <div className="p-6 h-full flex flex-col">
                    <MenuHeader icon="/courses.svg" title="Courses" />
                    <div className="flex-1 flex gap-6 overflow-y-auto">
                      {error ? (
                        <div className="text-red-400 text-sm w-full text-center">
                          Failed to load courses
                        </div>
                      ) : courses.length === 0 ? (
                        <div className="text-gray-700 text-sm w-full text-center">
                          No courses available
                        </div>
                      ) : (
                        courseColumns.map((column, columnIndex) => (
                          <div key={columnIndex} className="flex-1">
                            <ul className="space-y-1">
                              {column.map((course, index) => (
                                <MenuItem
                                  key={index}
                                  item={course}
                                  type="course"
                                  onClick={handleItemClick}
                                />
                              ))}
                            </ul>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
};

export default ExploreMenu;