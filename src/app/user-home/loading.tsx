import React from 'react';

const UserHomeLoading: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-gray-50 border-0 shadow-none">
        <div className="w-[72%] mx-auto pt-8 pb-6 bg-transparent border-0 shadow-none">
          <div className="h-8 bg-gray-200 animate-pulse rounded w-64 mb-4"></div>
          <div className="h-8 bg-gray-200 animate-pulse rounded w-48 mb-4"></div>
          <div className="h-8 bg-gray-200 animate-pulse rounded w-32"></div>
        </div>
      </div>
      <div className="w-full bg-gray-50 border-0 shadow-none">
        <div className="w-[72%] mx-auto pt-8 pb-6 bg-transparent border-0 shadow-none">
          <div className="h-8 bg-gray-200 animate-pulse rounded w-64 mb-4"></div>
          <div className="h-8 bg-gray-200 animate-pulse rounded w-48 mb-4"></div>
          <div className="h-8 bg-gray-200 animate-pulse rounded w-32"></div>
        </div>
      </div>
      <div className="w-full bg-gray-50 border-0 shadow-none">
        <div className="w-[72%] mx-auto pt-8 pb-6 bg-transparent border-0 shadow-none">
          <div className="h-8 bg-gray-200 animate-pulse rounded w-64 mb-4"></div>
          <div className="h-8 bg-gray-200 animate-pulse rounded w-48 mb-4"></div>
          <div className="h-8 bg-gray-200 animate-pulse rounded w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default UserHomeLoading;