'use client';

import { SectionProgressHeader } from './LessonProgressHeader';
import { SectionSidebar } from './LessonSidebar';
import { SectionContent } from './LessonContent';
import { CourseSection } from '@/types/lesson';
import { useLessonDetails as useSectionDetails } from '@/hooks/useLessonDetails';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const mockSections: CourseSection[] = [
  {
    id: 'section-0',
    title: 'Welcome and introduction',
    order: 0,
    isCompleted: true,
    Subsection: [],
  },
  {
    id: 'section-1',
    title: 'Course Section data 01',
    order: 1,
    isCompleted: true,
    Subsection: [],
  },
  {
    id: 'section-2',
    title: 'Course Section data 02',
    order: 2,
    isCompleted: false,
    Subsection: [
      {
        id: 'lesson-2-1',
        title: 'Lesson 01',
        sectionId: 'section-2',
        order: 1,
        estimatedTime: 30,
        isCompleted: true,
        isActive: false,
      },
      {
        id: 'lesson-2-2',
        title: 'Lesson 02',
        sectionId: 'section-2',
        order: 2,
        estimatedTime: 22,
        isCompleted: false,
        isActive: true,
      },
    ],
  },
  {
    id: 'section-3',
    title: 'Course Section data 03',
    order: 3,
    isCompleted: false,
    Subsection: [],
  },
];

export function SectionDetailsPage() {
  const {
    isSidebarOpen,
    currentLessonId: currentSectionId,
    progress,
    toggleSidebar,
    handleLessonClick: handleSectionClick,
  } = useSectionDetails({ sections: mockSections });

  return (
    <Card className="min-h-screen border-none rounded-none">
      <CardContent className="p-0">
        <div className="w-full lg:w-[72%] xl:w-[72%] 2xl:w-[72%] mx-auto flex flex-col min-h-screen">
          {/* Progress Header */}
          <SectionProgressHeader progress={progress} />
          
          {/* Main content area with sidebar and content */}
          <div className="flex flex-1 min-h-0">
            {/* Sidebar */}
            <SectionSidebar
              sections={mockSections}
              currentSectionId={currentSectionId}
              isOpen={isSidebarOpen}
              onToggle={toggleSidebar}
              onSectionClick={handleSectionClick}
            />
            
            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 ${!isSidebarOpen ? 'lg:w-full' : ''}`}>
              {/* Sidebar toggle button - shows when sidebar is closed */}
              {!isSidebarOpen && (
                <div className="py-4 border-b border-border w-[90%] lg:w-full mx-auto">
                  <Button
                    variant="ghost"
                    onClick={toggleSidebar}
                    className="flex items-center space-x-2"
                  >
                    <Menu className="w-5 h-5" />
                    <span className="text-sm font-medium">Sections Navigator</span>
                  </Button>
                </div>
              )}
              
              <SectionContent SectionId={currentSectionId} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}