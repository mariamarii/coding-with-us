import { CourseInfo } from "@/types/enrollment"

interface CourseHeaderProps {
  courseInfo: CourseInfo
}

export function CourseHeader({ courseInfo }: CourseHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="text-red-600 font-bold text-2xl">{courseInfo.institution.logo}</div>
        <div className="text-gray-900 font-medium">{courseInfo.institution.name}</div>
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{courseInfo.title}</h1>
    </div>
  )
} 