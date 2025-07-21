import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface GreetingSectionProps {
  userName: string;
}

const GreetingSection: React.FC<GreetingSectionProps> = ({ userName }) => {
  return (
    <Card className="w-[72%] mx-auto pt-8 pb-6 bg-transparent border-0 shadow-none">
      <CardContent className="p-0">
        <h1 className="text-3xl font-bold text-gray-900">
          Good Evening, {userName}
        </h1>
      </CardContent>
    </Card>
  );
};

export default GreetingSection; 