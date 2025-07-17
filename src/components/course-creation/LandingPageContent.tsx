import { Calendar, Camera, Image as ImageIcon } from 'lucide-react';
import { CourseCreationData, CourseCategory } from '@/types/course-creation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LandingPageContentProps {
  courseData: CourseCreationData;
  categories: CourseCategory[];
  onInputChange: (section: 'content' | 'landing', field: string, value: string) => void;
  onImageUpload: (file: File | null) => void;
}

export default function LandingPageContent({
  courseData,
  categories,
  onInputChange,
  onImageUpload,
}: LandingPageContentProps) {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onImageUpload(file);
  };

  return (
    <div className="space-y-3 md:space-y-4 max-w-xl">
      <div>
        <h1 className="text-lg font-semibold text-gray-900 mb-1">Course landing page</h1>
        <p className="text-gray-600 text-xs">Create an engaging landing page for your course</p>
      </div>
      
      <Card>
        <CardHeader className="py-2 px-3">
          <CardTitle className="text-base">Course Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 px-3 pb-3">
          {/* Course name */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Course name</label>
            <input
              type="text"
              value={courseData.landingPage.courseName}
              onChange={(e) => onInputChange('landing', 'courseName', e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-xs"
              placeholder="Enter course name"
            />
          </div>

          {/* Course description */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Course discription</label>
            <textarea
              value={courseData.landingPage.courseDescription}
              onChange={(e) => onInputChange('landing', 'courseDescription', e.target.value)}
              rows={3}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-xs"
              placeholder="Enter course description"
            />
          </div>

          {/* Course category */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Course category</label>
            <select
              value={courseData.landingPage.courseCategory}
              onChange={(e) => onInputChange('landing', 'courseCategory', e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-xs"
            >
              <option value="">Choose</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Duration</label>
            <div className="flex gap-2 flex-col sm:flex-row">
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">From</label>
                <div className="relative">
                  <input
                    type="text"
                    value={courseData.landingPage.durationFrom}
                    onChange={(e) => onInputChange('landing', 'durationFrom', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-xs"
                    placeholder="Choose"
                  />
                  <Calendar className="absolute right-2 top-2 w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">to</label>
                <div className="relative">
                  <input
                    type="text"
                    value={courseData.landingPage.durationTo}
                    onChange={(e) => onInputChange('landing', 'durationTo', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-xs"
                    placeholder="Choose"
                  />
                  <Calendar className="absolute right-2 top-2 w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Course Overview */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Course overview</label>
            <textarea
              value={courseData.landingPage.courseOverview}
              onChange={(e) => onInputChange('landing', 'courseOverview', e.target.value)}
              rows={4}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-xs"
              placeholder="what student's will learn"
            />
          </div>

          {/* Course Image */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Course image</label>
            <div className="flex gap-2 flex-col sm:flex-row">
              <div className="w-full sm:w-48 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50">
                <Camera className="w-6 h-6 text-gray-400 mb-1" />
                <ImageIcon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-600 mb-2">
                  Upload your course image here. It must meet our course image quality standards to be accepted. Important guidelines: 750x422 pixels; .jpg, .jpeg, .gif, or .png, no text on the image.
                </p>
                <div className="flex gap-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <label className="bg-green-600 text-white px-3 py-1 rounded-md text-xs cursor-pointer hover:bg-green-700 transition-colors">
                    Upload
                  </label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 