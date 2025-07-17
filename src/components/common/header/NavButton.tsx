import React from 'react';
import { Button } from '@/components/ui/button';
import { NavigationPage } from '@/types/navigation';

interface NavButtonProps {
  page: NavigationPage;
  currentPage: NavigationPage;
  onClick: (page: NavigationPage) => void;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({
  page,
  currentPage,
  onClick,
  children
}) => {
  const isActive = currentPage === page;
  
  const getButtonClasses = () => {
    const baseClasses = "text-base font-normal hover:text-[#76B729] rounded-none border-b-2";
    
    if (isActive) {
      return `${baseClasses} text-[#76B729] border-[#76B729] font-bold`;
    }
    
    return `${baseClasses} border-transparent text-gray-800`;
  };

  return (
    <Button
      variant="ghost"
      className={getButtonClasses()}
      onClick={() => onClick(page)}
    >
      {children}
    </Button>
  );
};

export default NavButton;