import { CourseInfo } from "@/types/enrollment"
import { CourseNavigation } from "./CourseNavigation"
import { CourseLearningContent } from "./CourseLearningContent"

interface CourseContentProps {
  courseInfo: CourseInfo
}

export function CourseContent({ courseInfo }: CourseContentProps) {
  return (
    <>
      <CourseNavigation />
      <CourseLearningContent courseInfo={courseInfo} />
    </>
  )
}
