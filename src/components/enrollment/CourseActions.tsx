import { Button } from "@/components/ui/button"
import { CourseInfo } from "@/types/enrollment"
import { CardContent } from "../ui/card"

interface CourseActionsProps {
  courseInfo: CourseInfo
  onEnrollNow: () => void
  onAddToCart: () => void
}

export function CourseActions({ courseInfo, onEnrollNow, onAddToCart }: CourseActionsProps) {
  return (
    <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:gap-4 sm:mb-6">
      {/* Enroll Button and Text Container */}
      <div className="flex flex-col w-full gap-2 sm:w-auto">
        <Button
          onClick={onEnrollNow}
          className="bg-[#76b729] hover:bg-[#5a8f1f] text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-10 rounded-sm border-none w-full sm:w-auto"
        >
          Enroll now {courseInfo.price}
        </Button>
        
        {/* Already Enrolled Text - Under Enroll Button */}
        <CardContent className="p-0 text-sm text-center text-gray-800">
          {courseInfo.enrollmentCount.toLocaleString()} already enrolled
        </CardContent>
      </div>
      
      <Button
        onClick={onAddToCart}
        variant="outline"
        className="border-[#76b729] text-[#76b729] hover:bg-gray-100 hover:text-[#76b729] font-bold text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-10 rounded-sm bg-gray-50 w-full sm:min-w-[200px] sm:w-auto"
      >
        <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mr-2">
          <path d="M2.5 2H4.24001C5.32001 2 6.17 2.93 6.08 4L5.25 13.96C5.11 15.59 6.39999 16.99 8.03999 16.99H18.69C20.13 16.99 21.39 15.81 21.5 14.38L22.04 6.88C22.16 5.22 20.9 3.87 19.23 3.87H6.32001" stroke="#76B729" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.75 22C17.4404 22 18 21.4404 18 20.75C18 20.0596 17.4404 19.5 16.75 19.5C16.0596 19.5 15.5 20.0596 15.5 20.75C15.5 21.4404 16.0596 22 16.75 22Z" stroke="#76B729" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.75 22C9.44036 22 10 21.4404 10 20.75C10 20.0596 9.44036 19.5 8.75 19.5C8.05964 19.5 7.5 20.0596 7.5 20.75C7.5 21.4404 8.05964 22 8.75 22Z" stroke="#76B729" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.5 8H21.5" stroke="#76B729" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Add to cart
      </Button>
    </div>
  )
} 