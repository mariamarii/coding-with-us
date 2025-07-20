export interface CourseFeature {
  icon: "video" | "device" | "certificate"
  text: string
}

export interface CourseEnrollmentCardProps {
  className?: string
  price?: string
  features?: CourseFeature[]
  onApplyCoupon?: (coupon: string) => void
  onShare?: () => void
  onPreviewCourse?: () => void
  videoPreview?: {
    thumbnailUrl?: string
    videoUrl?: string
  }
}

export interface CourseInfo {
  title: string
  description: string
  instructor: {
    name: string
    avatar: string
  }
  institution: {
    name: string
    logo: string
  }
  certification: string
  enrollmentCount: number
  price: string
  features: CourseFeature[]
  videoPreview?: {
    thumbnailUrl?: string
    videoUrl?: string
  }
}

export interface EnrollmentPageProps {
  courseInfo: CourseInfo
} 