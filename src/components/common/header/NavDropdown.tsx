import React from 'react';
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { NavigationPage } from '@/types/navigation';

interface NavDropdownProps {
  page: NavigationPage;
  currentPage: NavigationPage;
  isDarkMode: boolean;
  onClick: (page: NavigationPage) => void;
  children: React.ReactNode;
  menuContent: React.ReactNode;
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  page,
  currentPage,
  isDarkMode,
  onClick,
  children,
  menuContent
}) => {
  const isActive = currentPage === page;
  
  const getTriggerClasses = () => {
    const baseClasses = "text-base font-normal hover:text-[#76B729] flex items-center gap-1 rounded-none border-b-2";
    
    if (isActive) {
      return `${baseClasses} text-[#76B729] border-[#76B729] font-bold`;
    }
    
    return `${baseClasses} border-transparent ${
      isDarkMode ? 'text-gray-400' : 'text-gray-800'
    }`;
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={getTriggerClasses()}
        onClick={() => onClick(page)}
      >
        {children}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="border-none shadow-none outline-none p-0 z-50">
        {menuContent}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavDropdown; 