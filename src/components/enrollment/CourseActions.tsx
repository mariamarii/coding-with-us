import { Button } from "@/components/ui/button"
import { CourseInfo } from "@/types/enrollment"

interface CourseActionsProps {
  courseInfo: CourseInfo
  onEnrollNow: () => void
  onAddToCart: () => void
}

export function CourseActions({ courseInfo, onEnrollNow, onAddToCart }: CourseActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Button
        onClick={onEnrollNow}
        className="bg-[#76b729] hover:bg-[#5a8f1f] text-white font-bold text-lg py-4 px-8 rounded-lg border-none"
      >
        Enroll now {courseInfo.price}
      </Button>
      <Button
        onClick={onAddToCart}
        variant="outline"
        className="border-[#76b729] text-[#76b729] hover:bg-[#76b729] hover:text-white font-bold text-lg py-4 px-8 rounded-lg"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
        Add to cart
      </Button>
    </div>
  )
} 