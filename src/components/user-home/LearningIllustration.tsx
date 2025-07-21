import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface LearningIllustrationProps {
  imageSrc: string;
  altText?: string;
}

const LearningIllustration: React.FC<LearningIllustrationProps> = ({ 
  imageSrc, 
  altText = "Learning Illustration" 
}) => {
  console.log('LearningIllustration imageSrc:', imageSrc);

  return (
    <Card className="flex flex-1 justify-end bg-transparent border-0 shadow-none">
      <CardContent className="p-0">
        <Card className="relative w-80 h-80 bg-transparent border-0 shadow-none">
          <CardContent className="p-0 relative w-full h-full">
            <Image 
              src={imageSrc} 
              alt={altText} 
              fill 
              className="object-contain"
              priority
              onLoad={() => console.log('Image loaded successfully')}
              onError={(e) => console.error('Image failed to load:', e)}
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default LearningIllustration; 