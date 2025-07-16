import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NavButton = ({
  isActive,
  children,
  onClick,
  isDarkMode,
}: {
  isActive?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  isDarkMode: boolean;
}) => (
  <Button
    variant="ghost"
    className={cn(
      "h-auto px-0 py-2 text-base font-normal border-b-2 border-transparent rounded-none hover:bg-transparent hover:text-[#76B729] transition-all duration-200",
      isActive
        ? 'text-[#76B729] border-b-2 border-[#76B729] font-bold'
        : isDarkMode
          ? 'text-[#BCBCBC]'
          : 'text-[#282837]'
    )}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default NavButton;