import { useState } from "react"
import { toast } from "sonner"

export function useEnrollment() {
  const [couponCode, setCouponCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handleApplyCoupon = async (coupon: string) => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code")
      return
    }

    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (couponCode.toLowerCase().includes("discount")) {
        toast.success(`Coupon "${couponCode}" applied successfully! 20% discount applied.`)
        setCouponCode("")
      } else {
        toast.error("Invalid coupon code. Please try again.")
      }
    } catch (error) {
      toast.error("Failed to apply coupon. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Google Data Analytics Professional Certificate",
        text: "Get on the fast track to a career in Data Analytics with this professional certificate!",
        url: window.location.href,
      }).catch(() => {
        navigator.clipboard.writeText(window.location.href)
        toast.success("Course link copied to clipboard!")
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success("Course link copied to clipboard!")
    }
  }

  const handlePreviewCourse = () => {
    setIsVideoModalOpen(true)
    toast.info("Opening course preview...")
  }

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  const handleEnrollNow = () => {
    toast.success("Redirecting to enrollment...")
  }

  const handleAddToCart = () => {
    toast.success("Course added to cart!")
  }

  return {
    couponCode,
    setCouponCode,
    isLoading,
    isVideoModalOpen,
    handleApplyCoupon,
    handleShare,
    handlePreviewCourse,
    handleCloseVideoModal,
    handleEnrollNow,
    handleAddToCart,
  }
} 