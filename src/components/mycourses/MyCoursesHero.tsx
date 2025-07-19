"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useCarousel } from '@/hooks/useCarousel';
import { MotivationalMessage } from '@/types/motivational';
import GreetingSection from './GreetingSection';
import NavigationArrows from './NavigationArrows';
import MotivationalCard from './MotivationalCard';
import DecorativeDots from './DecorativeDots';
import LearningIllustration from './LearningIllustration';

const motivationalMessages: MotivationalMessage[] = [
  {
    headline: "Slow and steady",
    body: "Try learning just 5-10 minutes a day. Continue your course and reach your peak potential.",
  },
  {
    headline: "Consistency is key",
    body: "Small daily progress leads to big results. Keep pushing forward with your learning journey.",
  }
];

interface MyCoursesHeroProps {
  userName?: string;
}

const MyCoursesHero: React.FC<MyCoursesHeroProps> = ({ userName = "Guest" }) => {
  const { currentIndex, next, prev } = useCarousel({ 
    totalItems: motivationalMessages.length 
  });

  const currentMessage = motivationalMessages[currentIndex];



  return (
    <Card className="w-full bg-gray-50 border-0 shadow-none">
      <CardContent className="p-0">
        <GreetingSection userName={userName} />

      {/* Main Content Area */}
        <Card className="w-[72%] mx-auto pb-12 bg-transparent border-0 shadow-none">
          <CardContent className="p-0">
            <Card className="bg-[#A5E2D0] p-8 relative !rounded-none overflow-hidden border-0 shadow-none">
              <CardContent className="p-0 relative">
                <NavigationArrows onPrev={prev} onNext={next} />

                <Card className="flex flex-col lg:flex-row w-full sm:w-[90%] mx-0 sm:mx-auto gap-8 items-center bg-transparent border-0 shadow-none">
                  <CardContent className="p-0">
            {/* Left Side - Motivational Message Card */}
                    <Card className="flex-1 relative p-0 sm:p-[40px] bg-transparent border-0 shadow-none">
                      <CardContent className="p-0">
                        <MotivationalCard message={currentMessage} />
                        <DecorativeDots />
                </CardContent>
              </Card>
                  </CardContent>

            {/* Right Side - Learning Illustration */}
                  <LearningIllustration imageSrc="/Mycourse.svg" />
                </Card>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default MyCoursesHero; 