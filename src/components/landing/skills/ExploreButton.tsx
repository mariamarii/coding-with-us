import React from 'react';

interface ExploreButtonProps {
  categoryName?: string;
}

const ExploreButton: React.FC<ExploreButtonProps> = ({ categoryName }) => (
  <div className="text-center mt-12">
    <button className="inline-flex items-center px-6 py-3 border border-[#282837] rounded-lg text-gray-800 bg-none hover:bg-gray-50 transition-colors duration-200 font-bold text-[16px] text-[#282837]">
      Explore more {categoryName?.toLowerCase() || 'courses'}
    </button>
  </div>
);

export default ExploreButton;
