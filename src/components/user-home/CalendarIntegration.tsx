"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface CalendarIntegrationProps {
  onGoogleCalendar?: () => void;
  onICalendar?: () => void;
}

const CalendarIntegration: React.FC<CalendarIntegrationProps> = ({ 
  onGoogleCalendar, 
  onICalendar 
}) => {
  return (
    <div className="mb-6">
      <p className="text-sm text-[#75757E] mb-3">
        Add lesson schedules of all courses to your calendar:
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={onGoogleCalendar}
          className="border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Google Calendar
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onICalendar}
          className="border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          <Calendar className="w-4 h-4 mr-2" />
          iCalendar / Outlook
        </Button>
      </div>
    </div>
  );
};

export default CalendarIntegration;