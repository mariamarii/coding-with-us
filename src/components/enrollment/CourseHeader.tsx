import { CourseInfo } from "@/types/enrollment"

interface CourseHeaderProps {
  courseInfo: CourseInfo
}

export function CourseHeader({ courseInfo }: CourseHeaderProps) {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <img 
          src={courseInfo.institution.logo} 
          alt={`${courseInfo.institution.name} logo`}
          className="h-12 sm:h-16 lg:h-20 w-auto"
        />        
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
        {courseInfo.title}
      </h1>
    </div>
  )
} 