import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface DecorativeDotsProps {
  count?: number;
  className?: string;
}

const DecorativeDots: React.FC<DecorativeDotsProps> = ({ 
  count = 20, 
  className = "w-[200px] sm:w-[325px] mt-4" 
}) => {
  return (
    <Card className={`${className} bg-transparent border-0 shadow-none`}>
      <CardContent className="p-0">
        <Card className="flex justify-between items-center bg-transparent border-0 shadow-none">
          <CardContent className="p-0 flex justify-between items-center w-full">
            {Array.from({ length: count }).map((_, index) => (
              <Card
                key={index}
                className="w-[7px] h-[7px] bg-white rounded-full border-0 shadow-none"
              />
            ))}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default DecorativeDots; 