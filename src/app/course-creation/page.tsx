"use client";

import { useCourseCreation } from '@/hooks/useCourseCreation';
import CourseSidebar from '@/components/course-creation/CourseSidebar';
import LandingPageContent from '@/components/course-creation/LandingPageContent';
import { Card } from '@/components/ui/card';

export default function CourseCreationPage() {
  const {
    courseData,
    activeSection,
    contentExpanded,
    publishingExpanded,
    categories,
    setActiveSection,
    setContentExpanded,
    setPublishingExpanded,
    handleInputChange,
    handleImageUpload,
    addLesson,
  } = useCourseCreation();

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row p-2 md:p-4 gap-2 md:gap-4">
      <Card className="w-full md:w-56 h-[70vh] md:sticky top-4">
        <CourseSidebar
          courseData={courseData}
          activeSection={activeSection}
          contentExpanded={contentExpanded}
          publishingExpanded={publishingExpanded}
          onInputChange={handleInputChange}
          onSectionChange={setActiveSection}
          onContentToggle={() => setContentExpanded(!contentExpanded)}
          onPublishingToggle={() => setPublishingExpanded(!publishingExpanded)}
          onAddChapter={addLesson}
        />
      </Card>
      
      <div className="flex-1 w-full max-w-2xl">
        {activeSection === 'landing' && (
          <LandingPageContent
            courseData={courseData}
            categories={categories}
            onInputChange={handleInputChange}
            onImageUpload={handleImageUpload}
          />
        )}
        
        {activeSection === 'pricing' && (
          <div className="max-w-xl">
            <h1 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h1>
            <p className="text-gray-600 text-sm">Pricing section coming soon...</p>
          </div>
        )}
        
        {activeSection === 'account' && (
          <div className="max-w-xl">
            <h1 className="text-lg font-semibold text-gray-900 mb-4">Account</h1>
            <p className="text-gray-600 text-sm">Account section coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
} 