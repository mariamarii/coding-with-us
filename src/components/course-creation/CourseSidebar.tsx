import { ChevronDown, Check, FileText, User, X } from 'lucide-react';
import { CourseCreationData } from '@/types/course-creation';

interface CourseSidebarProps {
  courseData: CourseCreationData;
  activeSection: 'content' | 'landing' | 'pricing' | 'account';
  contentExpanded: boolean;
  publishingExpanded: boolean;
  onInputChange: (section: 'content' | 'landing', field: string, value: string) => void;
  onSectionChange: (section: 'content' | 'landing' | 'pricing' | 'account') => void;
  onContentToggle: () => void;
  onPublishingToggle: () => void;
  onAddChapter: () => void;
}

export default function CourseSidebar({
  courseData,
  activeSection,
  contentExpanded,
  publishingExpanded,
  onInputChange,
  onSectionChange,
  onContentToggle,
  onPublishingToggle,
  onAddChapter,
}: CourseSidebarProps) {
  return (
    <div className="h-full flex flex-col p-3 md:p-4 overflow-y-auto">
      {/* Create your course content */}
      <div className="mb-4 flex-shrink-0">
        <button
          onClick={onContentToggle}
          className={`flex items-center justify-between w-full text-left font-medium mb-2 text-sm transition-colors rounded-md px-2 py-1 ${
            contentExpanded ? 'bg-white text-gray-800' : 'text-gray-800 hover:bg-gray-50'
          }`}
        >
          Create your course content
          <ChevronDown className={`w-3 h-3 transition-transform ${contentExpanded ? 'rotate-180' : ''}`} />
        </button>
        {contentExpanded && (
          <div className="space-y-2">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Section name</label>
              <input
                type="text"
                value={courseData.content.courseName}
                onChange={(e) => onInputChange('content', 'courseName', e.target.value)}
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-xs"
                placeholder="Enter section name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Subsection name</label>
              <input
                type="text"
                value={courseData.content.subcourseName}
                onChange={(e) => onInputChange('content', 'subcourseName', e.target.value)}
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-xs"
                placeholder="Enter subsection name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Lessons ({courseData.content.lessons.length})
              </label>
              <div className="space-y-1">
                <label className="flex items-center text-xs">
                  <input type="radio" name="lesson" className="mr-2" />
                  Lesson 01
                </label>
              </div>
              <div className="flex gap-1 mt-2">
                <button className="flex-1 px-2 py-1 border border-gray-300 rounded-md text-xs hover:bg-gray-50">
                  Add lecture
                </button>
                <button className="flex-1 px-2 py-1 border border-gray-300 rounded-md text-xs hover:bg-gray-50">
                  Add Exam
                </button>
              </div>
            </div>
            <button 
              onClick={onAddChapter}
              className="w-full bg-green-600 text-white py-1 px-2 rounded-md hover:bg-green-700 transition-colors text-xs flex items-center justify-center gap-1"
            >
              Add chapter
              <X className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
      {/* Publishing your course */}
      <div className="flex-1">
        <button
          onClick={onPublishingToggle}
          className={`flex items-center justify-between w-full text-left font-medium mb-2 text-sm transition-colors rounded-md px-2 py-1 ${
            publishingExpanded ? 'bg-white text-gray-800' : 'text-gray-800 hover:bg-gray-50'
          }`}
        >
          Publishing your course
          <ChevronDown className={`w-3 h-3 transition-transform ${publishingExpanded ? 'rotate-180' : ''}`} />
        </button>
        {publishingExpanded && (
          <div className="space-y-1">
            <button
              onClick={() => onSectionChange('landing')}
              className={`flex items-center w-full p-2 rounded-md transition-colors text-xs border ${
                activeSection === 'landing' ? 'bg-green-50 text-green-700 border-green-200' : 'hover:bg-gray-50'
              }`}
            >
              <Check className={`w-4 h-4 mr-2 ${activeSection === 'landing' ? 'text-green-600' : 'text-gray-400'}`} />
              Course landing page
            </button>
            <button
              onClick={() => onSectionChange('pricing')}
              className={`flex items-center w-full p-2 rounded-md transition-colors text-xs ${
                activeSection === 'pricing' ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50'
              }`}
            >
              <FileText className={`w-4 h-4 mr-2 ${activeSection === 'pricing' ? 'text-green-600' : 'text-gray-400'}`} />
              Pricing
            </button>
            <button
              onClick={() => onSectionChange('account')}
              className={`flex items-center w-full p-2 rounded-md transition-colors text-xs ${
                activeSection === 'account' ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50'
              }`}
            >
              <User className={`w-4 h-4 mr-2 ${activeSection === 'account' ? 'text-green-600' : 'text-gray-400'}`} />
              Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 