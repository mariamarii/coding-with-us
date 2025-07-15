"use client";
import React from 'react';
import { StepItemProps, Step } from '@/types/landingProps';

const StepItem: React.FC<StepItemProps> = ({ step, isLast }) => (
  <div className="p-3 relative">
    <div className="flex items-start w-full">
      <div className="relative flex flex-col items-center mr-4 min-h-full">
        <div className="w-8 h-8 rounded-full border-2 border-gray-800 bg-gray-100 text-gray-800 flex items-center justify-center text-xl font-normal relative z-10 flex-shrink-0">
          {step.number}
        </div>
        {!isLast && (
          <div className="w-0.5 bg-gray-800 absolute top-8 left-3.5 h-[calc(100%+55px)] sm:h-[calc(100%+55px)] md:h-[calc(100%+55px)] z-0" />
        )}
      </div>
      <div className="flex-1 pt-1">
        <h3 className="mb-2 font-bold text-xl leading-none text-gray-900">
          {step.title}
        </h3>
        <p className="font-normal text-base leading-none text-gray-600">
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
    <section className="py-20 bg-gray-100 min-w-[50%] mx-auto">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="mb-12 font-bold text-3xl leading-none text-gray-900 px-6 border-none">
          How It Works
        </h2>

        <div className="min-w-[50%]">
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