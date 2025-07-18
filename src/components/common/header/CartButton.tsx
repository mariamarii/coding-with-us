"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CartButtonProps } from '@/types/header';

const CartButton: React.FC<CartButtonProps> = ({ className = "w-8 h-8 bg-gray-100 w-[44px] h-[44px] hover:bg-gray-200 rounded-full" }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
    >
      <Image
        src="/cart.svg"
        alt="Cart"
        width={24}
        height={24}
        className="w-5 h-5"
      />
    </Button>
  );
};

export default CartButton; 