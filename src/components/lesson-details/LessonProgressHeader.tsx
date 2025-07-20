'use client';

import { Progress } from '@/components/ui/progress';
import { Star } from 'lucide-react';
import { LessonProgress } from '@/types/lesson';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface SectionProgressHeaderProps {
  progress: LessonProgress;
}

export function SectionProgressHeader({ progress }: SectionProgressHeaderProps) {
  return (
    <div className="border-b border-border py-4 w-[90%] lg:w-full mx-auto">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center mb-0">
          <span className="text-sm font-medium text-muted-foreground">
            Your score: {progress.currentScore} / {progress.totalScore} ({progress.percentage}%)
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-0">
          <div className="flex-1">
            <Progress 
              value={progress.percentage} 
              className="w-full h-[6px] bg-muted [&>div]:bg-[#76B729]"
            />
          </div>
          
          <div className="w-16 h-12 opacity-60 flex-shrink-0">
            <Image
              src="/certification.svg"
              alt="Certificate of Appreciation"
              width={64}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            className="flex items-center space-x-1 text-sm text-primary hover:text-primary/80"
          >
            <Star className="w-4 h-4 text-primary" />
            <span>Leave rating</span>
          </Button>
        </div>
      </div>
    </div>
  );
}