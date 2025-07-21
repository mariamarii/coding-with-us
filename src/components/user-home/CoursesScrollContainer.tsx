"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import CourseCard from '@/components/common/courseCard';
import { CourseCardProps } from '@/types/skills';

interface CoursesScrollContainerProps {
  courses: CourseCardProps[];
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  onScroll: () => void;
}

const CoursesScrollContainer: React.FC<CoursesScrollContainerProps> = ({
  courses,
  scrollContainerRef,
  onScroll
}) => {
  return (
    <Card className="relative bg-transparent border-0 shadow-none">
      <CardContent className="p-0">
        <Card 
          ref={scrollContainerRef}
          onScroll={onScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth bg-transparent border-0 shadow-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <CardContent className="p-0 flex gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="flex-shrink-0 w-[300px] bg-transparent border-0 shadow-none">
                <CardContent className="p-0">
                  <CourseCard {...course} />
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default CoursesScrollContainer; 