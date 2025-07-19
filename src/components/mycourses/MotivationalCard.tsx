import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface MotivationalMessage {
  headline: string;
  body: string;
}

interface MotivationalCardProps {
  message: MotivationalMessage;
}

const MotivationalCard: React.FC<MotivationalCardProps> = ({ message }) => {
  console.log('MotivationalCard received message:', message);

  return (
    <Card className="bg-white shadow-lg border-0 rounded-none w-[200px] sm:w-[325px]">
      <CardContent className="p-6">
        <Card className="flex items-start gap-4 bg-transparent border-0 shadow-none">
          <CardContent className="p-0 flex-1">
            <h2 className="text-[20px] font-[700] text-[#76B729] mb-3">
              {message?.headline || 'Default Title'}
            </h2>
            <p className="text-[#282837] font-[400] text-[12px] leading-relaxed">
              {message?.body || 'Default body text'}
            </p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default MotivationalCard; 