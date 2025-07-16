"use client";
import React from 'react';
import { StepItemProps, Step } from '@/types/landingProps';

const StepItem: React.FC<StepItemProps> = ({ step, isLast }) => (
  <div className="py-3 relative">
    <div className="flex items-start w-full">
      <div className="relative flex flex-col items-center mr-4 min-h-full">
       <div className="w-8 h-8 box-content rounded-full border-2 border-[gray-800] bg-gray-100 text-gray-800 flex items-center justify-center  leading-none font-medium relative z-10 flex-shrink-0">
  {step.number}
</div>

        {!isLast && (
          <div className="w-0.5 bg-gray-800 font-thin absolute top-8 left-4 h-[calc(100%+55px)] sm:h-[calc(100%+55px)] md:h-[calc(100%+55px)] z-0" />
        )}
      </div>
      <div className="flex-1 pt-1">
        <h3 className="mb-2 font-bold text-xl leading-none text-gray-900">
          {step.title}
        </h3>
        <p className=" text-base font-[400] leading-none text-gray-[#282837]">
          {step.description}
        </p>
      </div>
    </div>
  </div>
);

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: 'Take online courses by industry experts',
      description: 'Lessons are self-paced so you\'ll never be late for class or miss a deadline.',
    },
    {
      number: 2,
      title: 'Get a Course Certificate',
      description: 'Your answers are graded by experts, not machines. Get an industry-recognized Course Certificate to prove your skills.',
    },
    {
      number: 3,
      title: 'Advance your career',
      description: 'Use your new skills in your existing job or to get a new job in Programming. Get help from our community.',
    },
  ];

  return (
    <section className=" bg-gray-100 w-full px-3 sm:px-4 py-6 sm:py-8 md:py-10 lg:py-12 mx-auto">
      <div className=" w-full sm:max-w-[100%] md:max-w-[70%] lg:max-w-[50%] mx-auto ">
        <h2 className="mb-6 font-bold text-3xl leading-none text-gray-900  border-none">
          How It Works
        </h2>

        <div className="">
          {steps.map((step, index) => (
            <div className="relative">
              <StepItem
                key={step.number}
                step={step}
                isLast={index === steps.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;