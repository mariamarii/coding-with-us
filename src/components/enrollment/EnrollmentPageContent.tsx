"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CourseEnrollmentCard } from "./CourseEnrollmentCard"
import { CourseHeader } from "./CourseHeader"
import { CourseInfo } from "./CourseInfo"
import { CourseActions } from "./CourseActions"
import { CourseDetails } from "./CourseDetails"
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
    <Card className="relative min-h-[150vh] overflow-hidden bg-gray-50 border-none shadow-none rounded-none">
      
      {/* SVG Circle Background - Top Right - Hidden on mobile */}
      <Card className="absolute inset-0 hidden bg-transparent border-none shadow-none pointer-events-none lg:block">
        <svg width="200" height="400" viewBox="0 0 267 540" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 transform translate-x-[-200px] lg:translate-x-[-300px] -translate-y-40 rotate-270">
          <path d="M270 0C419.117 0 540 120.883 540 270C540 419.117 419.117 540 270 540C120.883 540 0 419.117 0 270C0 120.883 120.883 0 270 0ZM270 91C171.141 91 91 171.141 91 270C91 368.859 171.141 449 270 449C368.859 449 449 368.859 449 270C449 171.141 368.859 91 270 91Z" fill="#C0DE9D"/>
        </svg>
      </Card>
     

      <Card className="container relative z-10 py-12 mx-auto bg-transparent border-none shadow-none">
        {/* SVG Circle Background - Right Mid - Positioned relative to first section */}
        <Card className="absolute right-0 z-0 hidden transform -translate-y-1/2 bg-transparent border-none shadow-none pointer-events-none top-1/2 xl:right-10 lg:block">
          <svg width="200" height="400" viewBox="0 0 267 540" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M270 0C419.117 0 540 120.883 540 270C540 419.117 419.117 540 270 540C120.883 540 0 419.117 0 270C0 120.883 120.883 0 270 0ZM270 91C171.141 91 91 171.141 91 270C91 368.859 171.141 449 270 449C368.859 449 449 368.859 449 270C449 171.141 368.859 91 270 91Z" fill="#C0DE9D"/>
          </svg>
        </Card>
        
        <Card className="w-[72%] mx-auto max-w-7xl relative z-10 border-none shadow-none bg-transparent">
          <Card className="flex flex-col gap-8 bg-transparent border-none shadow-none lg:gap-12 xl:flex-row">
            <Card className="flex-1 space-y-8 bg-transparent border-none shadow-none xl:max-w-4xl">
              <CourseHeader courseInfo={courseInfo} />
              <CourseInfo courseInfo={courseInfo} />
              
              <CourseActions 
                courseInfo={courseInfo}
                onEnrollNow={handleEnrollNow}
                onAddToCart={handleAddToCart}
              />
           
            </Card>

            <Card className="xl:sticky xl:top-8 xl:self-start xl:min-w-[320px] xl:max-w-[380px] relative border-none shadow-none bg-transparent">
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
              
            </Card>
          </Card>
        </Card>
      </Card>

      {/* Course Details Section with additional top spacing */}
      <Card className="mt-32 bg-transparent border-none shadow-none">
        <CourseDetails courseInfo={courseInfo} />
      </Card>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideoModal}
        title={courseInfo.title}
        videoUrl={courseInfo.videoPreview?.videoUrl}
      />
    </Card>
  )
} 
