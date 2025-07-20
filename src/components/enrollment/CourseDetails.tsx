import { CourseInfo } from "@/types/enrollment"
import { Card, CardContent } from "@/components/ui/card"
import { CourseStats } from "./CourseStats"
import { CourseContent } from "./CourseContent"

interface CourseDetailsProps {
  courseInfo: CourseInfo
}

export function CourseDetails({ courseInfo }: CourseDetailsProps) {
  // Use courseInfo props as needed
  console.log('Course info:', courseInfo)

  return (
    <Card className="relative py-12 bg-white border-none shadow-none">
      <CardContent className="container px-4 mx-auto sm:px-6 lg:px-8">
        <Card className="mx-auto w-[72%] pt-24 pb-16 border-none shadow-none bg-transparent">
          
          {/* Course Stats Component */}
          <CourseStats />

          {/* Course Content Component */}
          <CourseContent courseInfo={courseInfo} />

        </Card>
      </CardContent>
    </Card>
  )
}
