"use client";
import React from 'react';
import Image from 'next/image';

const Logo: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => (
  <div className="flex items-center cursor-pointer flex-shrink-0">
    <div className="w-auto h-8 flex items-center justify-center">
      <Image
        src={isDarkMode ? '/logoDark.svg' : '/logo-scroll.svg'}
        alt="Logo"
        width={60}
        height={32}
        className="lg:w-24 lg:h-12"
      />
    </div>
  </div>
);

export default Logo;