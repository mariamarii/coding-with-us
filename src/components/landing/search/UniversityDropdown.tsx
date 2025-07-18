'use client';

import React from 'react';
import { Building, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UniversityDropdownList } from './UniversityDropdownList';

interface UniversityDropdownProps {
  selectedUniversity: { name: string; image: string } | null;
  isUniversityOpen: boolean;
  setSelectedUniversity: (university: { name: string; image: string } | null) => void;
  setIsUniversityOpen: (open: boolean) => void;
}

export function UniversityDropdown({
  selectedUniversity,
  isUniversityOpen,
  setSelectedUniversity,
  setIsUniversityOpen,
}: UniversityDropdownProps) {
  return (
    <div 
      className="relative flex-1"
      onMouseEnter={() => setIsUniversityOpen(true)}
      onMouseLeave={() => setIsUniversityOpen(false)}
    >
      <Button
        variant="outline"
        className="w-full h-10 justify-between border-gray-200 text-gray-400 hover:bg-gray-50 text-sm rounded-md bg-[#F2F2F2]"
        onClick={() => setIsUniversityOpen(!isUniversityOpen)}
      >
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400">
            {selectedUniversity ? selectedUniversity.name : 'University'}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4  transition-transform ${isUniversityOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {isUniversityOpen && (
        <UniversityDropdownList
          setSelectedUniversity={setSelectedUniversity}
          setIsUniversityOpen={setIsUniversityOpen}
        />
      )}
    </div>
  );
} 