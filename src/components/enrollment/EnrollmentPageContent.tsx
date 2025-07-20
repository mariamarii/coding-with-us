"use client"

import { Button } from "@/components/ui/button"
import { CourseEnrollmentCard } from "./CourseEnrollmentCard"
import { CourseHeader } from "./CourseHeader"
import { CourseInfo } from "./CourseInfo"
import { CourseActions } from "./CourseActions"
import { CourseDetails } from "./CourseDetails"
import { SupportButton } from "./SupportButton"
import { VideoModal } from "./VideoModal"
import { useEnrollment } from "@/hooks/useEnrollment"
import { CourseInfo as CourseInfoType } from "@/types/enrollment"

interface EnrollmentPageContentProps {
  courseInfo: CourseInfoType
}

export function EnrollmentPageContent({ courseInfo }: EnrollmentPageContentProps) {
  const {
    handleApplyCoupon,
    handleShare,
    handlePreviewCourse,
    handleCloseVideoModal,
    handleEnrollNow,
    handleAddToCart,
    isVideoModalOpen,
  } = useEnrollment()

  return (
    <div className="relative min-h-[150vh] overflow-hidden bg-gray-50">
      
      {/* SVG Circle Background - Top Right - Hidden on mobile */}
      <div className="absolute inset-0 hidden pointer-events-none lg:block">
        <svg width="200" height="400" viewBox="0 0 267 540" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 transform translate-x-[-200px] lg:translate-x-[-300px] -translate-y-40 rotate-270">
          <path d="M270 0C419.117 0 540 120.883 540 270C540 419.117 419.117 540 270 540C120.883 540 0 419.117 0 270C0 120.883 120.883 0 270 0ZM270 91C171.141 91 91 171.141 91 270C91 368.859 171.141 449 270 449C368.859 449 449 368.859 449 270C449 171.141 368.859 91 270 91Z" fill="#C0DE9D"/>
        </svg>
      </div>
     

      <div className="container relative z-10 py-12 mx-auto ">
        {/* SVG Circle Background - Right Mid - Positioned relative to first section */}
        <div className="absolute right-0 z-0 hidden transform -translate-y-1/2 pointer-events-none top-1/2 xl:right-10 lg:block">
          <svg width="200" height="400" viewBox="0 0 267 540" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M270 0C419.117 0 540 120.883 540 270C540 419.117 419.117 540 270 540C120.883 540 0 419.117 0 270C0 120.883 120.883 0 270 0ZM270 91C171.141 91 91 171.141 91 270C91 368.859 171.141 449 270 449C368.859 449 449 368.859 449 270C449 171.141 368.859 91 270 91Z" fill="#C0DE9D"/>
          </svg>
        </div>
        
        <div className="w-[72%] mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col gap-8 lg:gap-12 xl:flex-row">
            <div className="flex-1 space-y-8 xl:max-w-4xl">
              <CourseHeader courseInfo={courseInfo} />
              <CourseInfo courseInfo={courseInfo} />
              
              <CourseActions 
                courseInfo={courseInfo}
                onEnrollNow={handleEnrollNow}
                onAddToCart={handleAddToCart}
              />
              <div className="mb-8 ml-0 text-sm text-gray-800 sm:ml-6 xl:mb-0">
                {courseInfo.enrollmentCount.toLocaleString()} already enrolled
              </div>
            </div>

            <div className="xl:sticky xl:top-8 xl:self-start xl:min-w-[320px] xl:max-w-[380px] relative">
              <CourseEnrollmentCard
                price={courseInfo.price}
                features={courseInfo.features}
                onApplyCoupon={handleApplyCoupon}
                onShare={handleShare}
                onPreviewCourse={handlePreviewCourse}
                videoPreview={courseInfo.videoPreview}
                className="shadow-xl"
              />
              {/* Chat button positioned relative to the course card */}
              <div className="absolute z-10 -right-0 -bottom-2">
                <Button className="w-12 h-12 sm:w-14 sm:h-14 bg-[#76b729] hover:bg-[#5a8f1f] text-white rounded-full shadow-lg flex items-center justify-center transition-colors p-0">
                  <svg className="w-10 h-10 sm:w-9 sm:h-9" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V6.98C22 4.23 19.76 2 17 2ZM8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12ZM12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12ZM16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z" fill="white"/>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details Section with additional top spacing */}
      <div className="mt-32">
        <CourseDetails courseInfo={courseInfo} />
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideoModal}
        title={courseInfo.title}
        videoUrl={courseInfo.videoPreview?.videoUrl}
      />
    </div>
  )
} 