'use client';

import { SidebarHeader } from './SidebarHeader';
import { SidebarSection } from './SidebarSection';
import { useExpandedSections } from '@/hooks/useExpandedSections';
import { CourseSection } from '@/types/lesson';

interface SectionSidebarProps {
  sections: CourseSection[];
  currentSectionId: string;
  isOpen: boolean;
  onToggle: () => void;
  onSectionClick: (lessonId: string) => void;
}

export function SectionSidebar({
  sections,
  currentSectionId,
  isOpen,
  onToggle,
  onSectionClick,
}: SectionSidebarProps) {
  const { expandedSections, toggleSection } = useExpandedSections(
    sections.map((section) => section.id)
  );

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 lg:hidden' : 'opacity-0 pointer-events-none lg:hidden'
        }`}
        onClick={onToggle}
      />
      <div
        className={`fixed lg:relative inset-y-0 left-0 z-50 w-full lg:w-80 xl:w-96 bg-white border-r border-gray-200 overflow-y-auto h-full flex-shrink-0 shadow-none transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${!isOpen ? 'lg:hidden' : ''}`}
      >
        <div className="pr-6 py-6 h-full pl-6 sm:pl-0 bg-gray-50">
          <SidebarHeader onToggle={onToggle} />
          <div className="space-y-4">
            {sections.map((section) => (
              <SidebarSection
                key={section.id}
                section={section}
                isExpanded={expandedSections.has(section.id)}
                toggleSection={toggleSection}
                currentSectionId={currentSectionId}
                onSectionClick={onSectionClick}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}