interface SidebarLessonProps {
    lesson: {
      id: string;
      title: string;
      order: number;
      isCompleted: boolean;
      isActive: boolean;
    };
    sectionOrder: number;
    currentSectionId: string;
    onSectionClick: (lessonId: string) => void;
    onToggle: () => void;
  }
  
  export function SidebarLesson({
    lesson,
    sectionOrder,
    currentSectionId,
    onSectionClick,
    onToggle,
  }: SidebarLessonProps) {
    const isActive = lesson.id === currentSectionId;
  
    return (
      <button
        onClick={() => {
          onSectionClick(lesson.id);
          if (window.innerWidth < 1024) {
            onToggle();
          }
        }}
        className={`flex items-center space-x-2 w-full p-2 rounded transition-colors ${
          isActive ? 'bg-gray-50 text-gray-700' : 'hover:bg-gray-50 text-gray-700'
        }`}
      >
        {lesson.isCompleted ? (
          <div className="w-5 h-5 rounded-full bg-[#75757E] flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-gray-400" fill="#75757E" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        <span className="text-xs lg:text-sm">
          {sectionOrder}.{lesson.order} {lesson.title}
        </span>
      </button>
    );
  }