import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CategoryFolder } from '@/types/skills';

interface PopularTopicsProps {
  categories: CategoryFolder[];
}

const PopularTopics: React.FC<PopularTopicsProps> = ({ categories }) => {
  return (
    <div className="py-8  w-[72%] mx-auto bg-white text-decoration-none">
      <h2
        className="pb-6 border-none text-left text-[32px] font-[700] text-[#000000] leading-[100%] tracking-[0%]"
      >
        Popular Topics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <Card
            key={category.categoryId}
            className="w-full max-w-[248px] min-h-[257px] shadow-none border-none rounded-xl transition-all duration-300 ease-in-out 
                       cursor-pointer flex flex-col items-center bg-[#F9F9F9] 
                       hover:-translate-y-1"
          >
            <CardContent className="flex flex-col items-center justify-center text-center p-4 h-full w-full">
              <div className="mb-4 flex items-center justify-center 
                             w-[clamp(60px, 15vw, 80px)] h-[clamp(60px, 15vw, 80px)]">
                <img
                  src={category.icon}
                  alt={`${category.name} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p
                className="font-[700] font-[16px] text-[#282837] leading-[100%] tracking-[0%] m-0"
              >
                {category.name}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularTopics;