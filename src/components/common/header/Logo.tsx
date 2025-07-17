"use client";
import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => (
  <div className="flex items-start cursor-pointer flex-shrink-0">
  <Image
    src="/logo-scroll.svg"
    alt="Logo"
    width={90}
    height={36}
    className="w-auto h-10 lg:h-12"
  />
</div>

);

export default Logo;