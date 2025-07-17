'use client';

import React from 'react';
import { universities } from '@/data/universities';

export function UniversityLogos() {
  return (
    <div className="flex overflow-x-auto space-x-8 pb-4 hide-scrollbar">
      {universities.map((university) => (
        <div key={university.name} className="flex flex-col items-center flex-shrink-0">
          <div className="w-40 h-32 rounded-lg flex items-center justify-center mb-2">
            <img 
              src={university.image} 
              alt={`${university.name} logo`}
              className="w-40 h-32 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className={`w-14 h-14 rounded bg-red-600 flex items-center justify-center text-white text-xs font-bold hidden`}>
              {university.name.charAt(0)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 