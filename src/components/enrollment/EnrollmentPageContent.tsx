"use client"

import { CourseEnrollmentCard } from "./CourseEnrollmentCard"
import { CourseHeader } from "./CourseHeader"
import { CourseInfo } from "./CourseInfo"
import { CourseActions } from "./CourseActions"
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
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      
      {/* SVG Circle Background - Top Right */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="200" height="400" viewBox="0 0 267 540" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 opacity-20 transform translate-y-20">
          <path d="M270 0C419.117 0 540 120.883 540 270C540 419.117 419.117 540 270 540C120.883 540 0 419.117 0 270C0 120.883 120.883 0 270 0ZM270 91C171.141 91 91 171.141 91 270C91 368.859 171.141 449 270 449C368.859 449 449 368.859 449 270C449 171.141 368.859 91 270 91Z" fill="#C0DE9D"/>
        </svg>
      </div>

      {/* SVG Circle Background - Bowl Shape */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="200" height="400" viewBox="0 0 267 540" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 opacity-20 transform translate-x-[-150px] -translate-y-20 rotate-270">
          <path d="M270 0C419.117 0 540 120.883 540 270C540 419.117 419.117 540 270 540C120.883 540 0 419.117 0 270C0 120.883 120.883 0 270 0ZM270 91C171.141 91 91 171.141 91 270C91 368.859 171.141 449 270 449C368.859 449 449 368.859 449 270C449 171.141 368.859 91 270 91Z" fill="#C0DE9D"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8  relative z-10">
        <div className="w-[72%] mx-auto">
                      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto justify-between">
              <div className="flex-1 lg:max-w-2xl">
                <CourseHeader courseInfo={courseInfo} />
                <CourseInfo courseInfo={courseInfo} />
                <CourseActions 
                  courseInfo={courseInfo}
                  onEnrollNow={handleEnrollNow}
                  onAddToCart={handleAddToCart}
                />
              </div>

              <div className="lg:sticky lg:top-8 lg:self-start lg:ml-auto">
                <CourseEnrollmentCard
                  price={courseInfo.price}
                  features={courseInfo.features}
                  onApplyCoupon={handleApplyCoupon}
                  onShare={handleShare}
                  onPreviewCourse={handlePreviewCourse}
                  videoPreview={courseInfo.videoPreview}
                  className="shadow-xl"
                />
              </div>
            </div>
          </div>
      </div>

      <SupportButton />
      
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideoModal}
        title={courseInfo.title}
        videoUrl={courseInfo.videoPreview?.videoUrl}
      />
    </div>
  )
} 