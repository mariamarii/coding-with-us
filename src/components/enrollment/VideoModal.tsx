"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl?: string
  title?: string
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  if (!isOpen) return null

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    if (!url) return null
    
    // Handle different YouTube URL formats
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const match = url.match(youtubeRegex)
    
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`
      
    }
    
    // For non-YouTube URLs, return as is for regular video element
    return url
  }

  const embedUrl = videoUrl ? getEmbedUrl(videoUrl) : null
  const isYouTube = videoUrl && videoUrl.includes('youtube.com') || videoUrl?.includes('youtu.be')

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div 
        className="relative w-full max-w-4xl mx-4 overflow-hidden bg-white rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">{title || "Course Preview"}</h3>
          <Button
            onClick={onClose}
            variant="ghost"
            className="w-8 h-8 p-0 hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>
        
        <div className="relative bg-black aspect-video">
          {embedUrl ? (
            isYouTube ? (
              <iframe
                src={embedUrl}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title || "Course Preview"}
              />
            ) : (
              <video
                src={embedUrl}
                controls
                className="w-full h-full"
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-white rounded-full bg-opacity-20">
                  <svg width="40" height="40" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.3652 44V38.5733C33.3652 31.57 38.3152 28.7466 44.3652 32.23L49.0586 34.9433L53.7519 37.6566C59.8019 41.14 59.8019 46.86 53.7519 50.3433L49.0586 53.0566L44.3652 55.77C38.3152 59.2533 33.3652 56.3933 33.3652 49.4266V44Z" stroke="white" strokeWidth="5.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M44.0007 80.6667C64.2511 80.6667 80.6673 64.2505 80.6673 44C80.6673 23.7496 64.2511 7.33337 44.0007 7.33337C23.7502 7.33337 7.33398 23.7496 7.33398 44C7.33398 64.2505 23.7502 80.6667 44.0007 80.6667Z" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-lg font-medium">Video preview not available</p>
                <p className="mt-2 text-sm text-gray-300">Please contact support for video access</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 