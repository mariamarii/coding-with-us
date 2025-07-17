import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ActionButton = ({
  children,
  variant = 'secondary',
  fullWidth = false,
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
} & React.ComponentProps<typeof Button>) => (
  <Button
    className={cn(
      "font-medium text-sm px-4 py-2 rounded-lg transition-all duration-200",
      variant === 'secondary'
        ? 'bg-[#76B729] hover:bg-[#6BA524] text-white'
        : 'bg-transparent border border-[#76B729] text-[#76B729] hover:bg-[#76B729] hover:text-white',
      fullWidth && 'w-full'
    )}
    {...props}
  >
    {children}
  </Button>
);

export default ActionButton;