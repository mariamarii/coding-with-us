import React from 'react';
import { CategoryFolder } from '@/types/skills';

interface CategoryTabsProps {
  categories: CategoryFolder[];
  activeIndex: number;
  onChange: (index: number) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeIndex, onChange }) => (
  <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
    {categories.map((category, index) => (
      <button
        key={category.categoryId}
        onClick={() => onChange(index)}
        className={`flex items-center rounded-full transition-all duration-200 ${
          activeIndex === index
            ? 'bg-[#76B729] text-[#FFFFFF] shadow-lg'
            : 'bg-none text-[#282837] border border-[#D9D9D9] hover:bg-gray-50'
        }`}
        style={{
          minWidth: '180px',
          minHeight: '67px',
          fontWeight: 700,
          fontSize: '16px',
          padding: '0 16px',
        }}
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-1">
            <img src={category.icon} alt={`${category.name} icon`} className="w-5 h-5" />
            <span className="truncate">{category.name}</span>
          </div>
          <span className="text-xs opacity-75">{category.learnerCount}</span>
        </div>
      </button>
    ))}
  </div>
);

export default CategoryTabs;
