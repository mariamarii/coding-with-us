"use client";
import React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/components/ui/navigation-menu';
import { splitItemsIntoColumns } from '@/lib/navigation-utils';
import { NavigationPage } from '@/types/navigation';
import NavButton from './NavButton';
import NavDropdown from './NavDropdown';
import ExploreMenuContent from './ExploreMenuContent'; 
import UniversitiesMenuContent from './UniversitiesMenuContent';

interface DesktopNavigationProps {
  currentPage: NavigationPage;
  handleNavClick: (page: NavigationPage) => void;
  courses: string[] | undefined;
  categories: string[] | undefined;
  universities: string[] | undefined;
  error: string | null;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  currentPage,
  handleNavClick,
  courses,
  categories,
  universities,
  error
}) => {
  const courseColumns = splitItemsIntoColumns(courses || [], 2);
  const categoryColumns = splitItemsIntoColumns(categories || [], 1);
  const universityColumns = splitItemsIntoColumns(universities || [], 2);

  return (
    <nav className="hidden xl:flex items-center gap-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavButton
              page="home"
              currentPage={currentPage}
              onClick={handleNavClick}
            >
              Home
            </NavButton>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavButton
              page="about"
              currentPage={currentPage}
              onClick={handleNavClick}
            >
              About us
            </NavButton>
          </NavigationMenuItem>
          
          <NavDropdown
            page="courses"
            currentPage={currentPage}
            onClick={handleNavClick}
            menuContent={
              <ExploreMenuContent
                courseColumns={courseColumns}
                categoryColumns={categoryColumns}
                error={error}
              />
            }
          >
            Courses
          </NavDropdown>
          
          <NavDropdown
            page="universities"
            currentPage={currentPage}
            onClick={handleNavClick}
            menuContent={
              <UniversitiesMenuContent
                universities={universityColumns}
                error={error}
              />
            }
          >
            Universities
          </NavDropdown>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNavigation;