import { ChevronDown, ChevronRight } from 'lucide-react';
import { SidebarLesson } from './SidebarLesson';

interface SidebarSectionProps {
  section: {
    id: string;
    title: string;
    order: number;
    isCompleted: boolean;
    Subsection: {
      id: string;
      title: string;
      order: number;
      isCompleted: boolean;
      isActive: boolean;
    }[];
  };
  isExpanded: boolean;
  toggleSection: (sectionId: string) => void;
  currentSectionId: string;
  onSectionClick: (lessonId: string) => void;
  onToggle: () => void;
}

export function SidebarSection({
  section,
  isExpanded,
  toggleSection,
  currentSectionId,
  onSectionClick,
  onToggle,
}: SidebarSectionProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => toggleSection(section.id)}
          className="flex items-center justify-between text-left w-full hover:bg-gray-50 py-2 rounded transition-colors"
        >
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full bg-[#75757E] flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-medium text-gray-900 text-sm lg:text-base">
              {section.order} {section.title}
            </span>
          </div>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </button>
      </div>
      {isExpanded && (
        <div className="ml-6 space-y-1">
          {section.Subsection.map((lesson) => (
            <SidebarLesson
              key={lesson.id}
              lesson={lesson}
              sectionOrder={section.order}
              currentSectionId={currentSectionId}
              onSectionClick={onSectionClick}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}