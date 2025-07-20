import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface VideoPreviewProps {
  className?: string
  onPreviewCourse?: () => void
  thumbnailUrl?: string
}

export function VideoPreview({ className, onPreviewCourse, thumbnailUrl }: VideoPreviewProps) {
  return (
    <div className={cn("relative h-36 sm:h-44 md:h-48 bg-[#F1F8EA] rounded-t-lg overflow-hidden p-2 sm:p-3", className)}>
      {/* Video Thumbnail */}
      <div className="flex items-center justify-center w-full h-full">
        {thumbnailUrl ? (
          <img 
            src={thumbnailUrl} 
            alt="Course preview thumbnail" 
            className="object-cover w-full h-full rounded-lg"
          />
        ) : (
          <div className="text-center">
            <div className="flex items-center justify-center w-40 h-40 mx-auto mb-2 bg-white rounded-full shadow-lg sm:w-16 sm:h-16">
              <svg width="80" height="80" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8">
                <path d="M33.3652 44V38.5733C33.3652 31.57 38.3152 28.7466 44.3652 32.23L49.0586 34.9433L53.7519 37.6566C59.8019 41.14 59.8019 46.86 53.7519 50.3433L49.0586 53.0566L44.3652 55.77C38.3152 59.2533 33.3652 56.3933 33.3652 49.4266V44Z" stroke="#76b729" strokeWidth="5.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M44.0007 80.6667C64.2511 80.6667 80.6673 64.2505 80.6673 44C80.6673 23.7496 64.2511 7.33337 44.0007 7.33337C23.7502 7.33337 7.33398 23.7496 7.33398 44C7.33398 64.2505 23.7502 80.6667 44.0007 80.6667Z" stroke="#76b729" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-xs font-medium text-white sm:text-sm">Preview this course</p>
          </div>
        )}
      </div>

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          onClick={onPreviewCourse}
          className="p-0 transition-all duration-300 bg-transparent border-none hover:bg-transparent hover:opacity-75"
        >
          <img
            src="/video-circle.svg"
            alt="Play video"
            className="transition-transform h-14 w-14 hover:scale-105"
          />
        </Button>
      </div>
    </div>
  )
}