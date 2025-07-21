"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface RecommendedCoursesHeaderProps {
  title?: string;
}

const RecommendedCoursesHeader: React.FC<RecommendedCoursesHeaderProps> = ({ 
  title = "Recommended Courses for you" 
}) => {
  return (
    <Card className="flex mb-8 bg-transparent border-0 shadow-none">
      <CardContent className="p-0">
        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>
      </CardContent>
    </Card>
  );
};

export default RecommendedCoursesHeader; 