"use client";
import React from 'react';
import { FeatureItemProps } from '@/types/landingProps';

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-center mb-6 md:mb-8 gap-4">
    <div className="flex-shrink-0 w-[100px] h-[73.9px] flex items-center justify-center">
      <img src={icon} alt={`${title} icon`} className="w-full h-full object-contain" />
    </div>
    <div className="flex-1">
      <div>
        <h3 className="inline font-bold text-xl leading-none tracking-normal text-[#282837] mr-1">
          {title}
        </h3>
      
        <span className="inline font-inter font-normal text-xl leading-none tracking-normal text-[#282837] sm:block sm:mt-2 lg:inline lg:mt-0">
          {description}
        </span>
      </div>
    </div>
  </div>
);

const BusyPeopleSection: React.FC = () => {
  const features = [
    {
      icon: "/calender.svg",
      title: "Study at your own place:",
      description: "you'll never be late for class or miss a deadline",
    },
    {
      icon: "/labtop.svg",
      title: "Learn anywhere any time:",
      description: "all you need is an internet connection",
    },
  ];

  return (
    <section className="w-full min-h-[200px] md:min-h-auto px-3 sm:px-4 py-6 sm:py-8 md:py-10 lg:py-12 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-full sm:max-w-[100%] md:max-w-[70%] lg:max-w-[50%] mx-auto">
        <h2 className="font-bold text-2xl border-none leading-none tracking-normal text-[#282837] mb-5 sm:mb-6 md:mb-7 lg:mb-8">
          Designed for busy People
        </h2>
        
        <div className="min-w-full lg:min-w-[50%]">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusyPeopleSection;