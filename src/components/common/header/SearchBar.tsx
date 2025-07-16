"use client";
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
const SearchBar: React.FC = () => (
  <div className="flex-1 mx-4 md:mx-6 lg:mx-8 xl:max-w-md">
    <div className="relative w-full">
      <Input
        type="search"
        placeholder="What do you want to learn?"
        className="w-full h-9 bg-gray-50 border-none rounded-lg pl-4 pr-10 text-sm focus:ring-[#76B729]"
      />
      {/* <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" /> */}
      <Image
        src='/search.svg'
        alt="Search"
        width={24}
        height={24}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"/>

    </div>
  </div>
);

export default SearchBar;