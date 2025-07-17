'use client';

import React from 'react';
import { universities } from '@/data/universities';

interface UniversityDropdownListProps {
  setSelectedUniversity: (university: { name: string; image: string } | null) => void;
  setIsUniversityOpen: (open: boolean) => void;
}

export function UniversityDropdownList({
  setSelectedUniversity,
  setIsUniversityOpen,
}: UniversityDropdownListProps) {
  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
      {universities.map((university) => (
        <button
          key={university.name}
          className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-md last:rounded-b-md flex items-center gap-3"
          onClick={() => {
            setSelectedUniversity(university);
            setIsUniversityOpen(false);
          }}
        >
          <img 
            src={university.image} 
            alt={`${university.name} logo`}
            className="w-8 h-8 object-contain border border-gray-200 rounded"
            onLoad={() => console.log(`Loaded: ${university.image}`)}
            onError={(e) => {
              console.log(`Failed to load: ${university.image}`);
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className={`w-6 h-6 rounded bg-red-600 flex items-center justify-center text-white text-xs font-bold hidden`}>
            {university.name.charAt(0)}
          </div>
          {university.name}
        </button>
      ))}
    </div>
  );
} 