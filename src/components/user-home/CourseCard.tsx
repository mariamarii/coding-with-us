"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import { Course } from '@/types/course';

interface CourseCardProps {
  course: Course;
  onContinue?: (courseId: number) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onContinue }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md">
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            priority
          />
          
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex items-end p-4">
            <h3 className="text-white font-medium text-sm leading-tight">
              {course.title}
            </h3>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[gray-600]">
              {course.currentPoints} / {course.totalPoints} Points ({course.progress}%)
            </span>
          </div>
          
          <Progress 
            value={course.progress} 
            className="h-2 bg-gray-200 [&>div]:bg-[#76B729]"
          />
          
          
        </div>
        <Button 
            onClick={() => onContinue?.(course.id)}
            className="w-full rounded-none bg-[#76B729] hover:bg-[#76B721] text-white font-bold py-8 shadow-sm"
          >
            Continue lesson 1.4
          </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard; 