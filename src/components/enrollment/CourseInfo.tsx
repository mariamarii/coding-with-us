import { CourseInfo as CourseInfoType } from "@/types/enrollment"

interface CourseInfoProps {
  courseInfo: CourseInfoType
}

export function CourseInfo({ courseInfo }: CourseInfoProps) {
  return (
    <div className="mb-8">
      <p className="text-lg text-gray-700 leading-relaxed mb-8">{courseInfo.description}</p>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-medium text-sm">{courseInfo.instructor.avatar}</span>
          </div>
          <span className="text-gray-700">instructor {courseInfo.instructor.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="text-red-600 font-bold text-sm">{courseInfo.institution.logo}</div>
            <span className="text-gray-600 text-sm">{courseInfo.institution.name}</span>
          </div>
          <div className="text-gray-600 text-sm">{courseInfo.certification}</div>
        </div>
      </div>
      
      <div className="text-gray-600 text-sm">{courseInfo.enrollmentCount.toLocaleString()} already enrolled</div>
    </div>
  )
} 