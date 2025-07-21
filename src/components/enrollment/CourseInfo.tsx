import { CourseInfo as CourseInfoType } from "@/types/enrollment"
import Image from "next/image"

interface CourseInfoProps {
  courseInfo: CourseInfoType
}

export function CourseInfo({ courseInfo }: CourseInfoProps) {
  return (
    <div className="mb-6 sm:mb-8">
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
        {courseInfo.description}
      </p>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
            <Image 
              src={courseInfo.instructor.avatar} 
              alt="Instructor" 
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-gray-800">Instructor</span>
            <span className="text-sm text-gray-700">{courseInfo.instructor.name}</span>
          </div>        
        </div>
        
        <div className="hidden sm:block h-8 w-px bg-gray-300" />

        <div className="flex items-center gap-4">
          <Image 
            src={courseInfo.institution.logo} 
            alt="Institution Logo" 
            width={96}
            height={96}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain flex-shrink-0"
          />
          <div className="text-gray-800 text-sm underline break-words">
            {courseInfo.certification}
          </div>
        </div>
      </div>
    </div>
  )
} 