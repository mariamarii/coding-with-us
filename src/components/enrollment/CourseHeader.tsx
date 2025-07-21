import { CourseInfo } from "@/types/enrollment"
import Image from "next/image"

interface CourseHeaderProps {
  courseInfo: CourseInfo
}

export function CourseHeader({ courseInfo }: CourseHeaderProps) {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <Image 
          src={courseInfo.institution.logo} 
          alt={`${courseInfo.institution.name} logo`}
          width={80}
          height={80}
          className="w-auto h-12 sm:h-16 lg:h-20"
        />        
      </div>
      <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl sm:mb-4">
        {courseInfo.title}
      </h1>
    </div>
  )
} 