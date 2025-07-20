import { EnrollmentPageContent } from "@/components/enrollment/EnrollmentPageContent"
import { CourseSection } from "@/components/enrollment/CourseSection"
import { CourseInfo } from "@/types/enrollment"
import { FAQSection } from "@/components/enrollment/FAQSection"

const courseData: CourseInfo = {
  title: "Google Data Analytics Professional Certificate",
  description:
    "Get on the fast track to a career in Data Analytics. In this certificate program, you'll learn in-demand skills, and get AI training from Google experts. Learn at your own pace, no degree or experience required.",
  instructor: {
    name: "Ahmed alaa",
    avatar: "A"
  },
  institution: {
    name: "Massachusetts Institute of Technology",
    logo: "MIT"
  },
  certification: "Google career certificate",
  enrollmentCount: 2830105,
  price: "SR 2,000",
  features: [
    { icon: "video", text: "4.5 hours on-demand video" },
    { icon: "device", text: "Access on mobile and Desktop" },
    { icon: "certificate", text: "Certificate of completion" },
  ],
  videoPreview: {
    thumbnailUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
  }
}

export default function EnrollCoursePage() {
  return (
    <>
      <EnrollmentPageContent courseInfo={courseData} />
      <CourseSection />
      <CourseSection />
      <CourseSection />
      <FAQSection/>
    </>
  )
}

