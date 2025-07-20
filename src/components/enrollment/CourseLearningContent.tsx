import { CourseInfo } from "@/types/enrollment"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCourseDetails } from "@/hooks/useCourseDetails"

interface CourseLearningContentProps {
  courseInfo: CourseInfo
}

export function CourseLearningContent({ courseInfo }: CourseLearningContentProps) {
  const {
    learningPoints,
    visibleSkills,
    showAllSkills,
    handleShowAllSkills
  } = useCourseDetails()

  return (
    <>
      {/* What you will learn */}
      <Card className="mb-12 bg-transparent border-none shadow-none">
        <CardHeader className="p-0 pb-6">
          <CardTitle className="text-2xl font-bold text-gray-900">What you will learn</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 p-0 md:grid-cols-2">
          {learningPoints.map((point: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-base leading-relaxed text-gray-700">{point}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills you'll gain */}
      <Card className="mb-12 bg-transparent border-none shadow-none">
        <CardHeader className="p-0 pb-6">
          <CardTitle className="text-2xl font-bold text-gray-900">Skills you'll gain</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3 p-0">
          {visibleSkills.map((skill: string, index: number) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="px-3 py-2 text-sm font-medium text-black rounded-4xl bg-[#D5E9BD] hover:bg-[#C5D9AD]"
            >
              {skill}
            </Badge>
          ))}
          <Button 
            variant="ghost"
            className="px-3 py-2 text-sm font-medium text-[#76B729] hover:text-green-700"
            onClick={handleShowAllSkills}
          >
            {showAllSkills ? 'Show less' : 'View all skills'}
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
