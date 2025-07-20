import { useState } from "react"

export function useEnrollmentState() {
  const [couponCode, setCouponCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return {
    couponCode,
    setCouponCode,
    isLoading,
    setIsLoading,
    isVideoModalOpen,
    setIsVideoModalOpen
  }
}
