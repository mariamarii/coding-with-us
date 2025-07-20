import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCourseDetails } from "@/hooks/useCourseDetails"

export function CourseNavigation() {
  const { activeTab, handleTabChange } = useCourseDetails()

  return (
    <Card className="mb-8 bg-transparent border-b border-gray-200 rounded-none shadow-none">
      <CardContent className="flex p-0 space-x-8">
        <Button 
          variant="ghost" 
          className={`px-1 pb-4 font-medium border-b-2 rounded-none ${
            activeTab === 'overview' 
              ? 'text-[#76B729] border-[#76B729]' 
              : 'text-gray-500 border-transparent hover:text-gray-700'
          }`}
          onClick={() => handleTabChange('overview')}
        >
          Overview
        </Button>
        <Button 
          variant="ghost"
          className={`px-1 pb-4 font-medium border-b-2 rounded-none ${
            activeTab === 'courses' 
              ? 'text-[#76B729] border-[#76B729]' 
              : 'text-gray-500 border-transparent hover:text-gray-700'
          }`}
          onClick={() => handleTabChange('courses')}
        >
          Courses
        </Button>
        <Button 
          variant="ghost"
          className={`px-1 pb-4 font-medium border-b-2 rounded-none ${
            activeTab === 'qa' 
              ? 'text-[#76B729] border-[#76B729]' 
              : 'text-gray-500 border-transparent hover:text-gray-700'
          }`}
          onClick={() => handleTabChange('qa')}
        >
          Q/A
        </Button>
      </CardContent>
    </Card>
  )
}
