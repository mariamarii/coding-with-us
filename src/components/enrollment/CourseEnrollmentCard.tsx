import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CourseEnrollmentCardProps } from "@/types/enrollment"
import { VideoPreview } from "./VideoPreview"

const iconMap = {
  video: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.51953 7.10999H21.4795" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.51953 2.10999V6.96999" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.4805 2.10999V6.51999" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.75 14.45V13.25C9.75 11.71 10.84 11.08 12.17 11.85L13.21 12.45L14.25 13.05C15.58 13.82 15.58 15.08 14.25 15.85L13.21 16.45L12.17 17.05C10.84 17.82 9.75 17.19 9.75 15.65V14.45V14.45Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  device: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M10 16.95H6.21C2.84 16.95 2 16.11 2 12.74V6.74003C2 3.37003 2.84 2.53003 6.21 2.53003H16.74C20.11 2.53003 20.95 3.37003 20.95 6.74003" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 21.4699V16.95" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12.95H10" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.74023 21.47H10.0002" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.9993 12.8V18.51C21.9993 20.88 21.4093 21.47 19.0393 21.47H15.4893C13.1193 21.47 12.5293 20.88 12.5293 18.51V12.8C12.5293 10.43 13.1193 9.83997 15.4893 9.83997H19.0393C21.4093 9.83997 21.9993 10.43 21.9993 12.8Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.2445 18.25H17.2535" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  certificate: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12.1504 16.5V18.6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.15039 22H17.1504V21C17.1504 19.9 16.2504 19 15.1504 19H9.15039C8.05039 19 7.15039 19.9 7.15039 21V22V22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
      <path d="M6.15039 22H18.1504" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.46906 11.65C4.71906 11.41 4.05906 10.97 3.53906 10.45C2.63906 9.44998 2.03906 8.24998 2.03906 6.84998C2.03906 5.44998 3.13906 4.34998 4.53906 4.34998H5.18906C4.98906 4.80998 4.88906 5.31998 4.88906 5.84998V8.84998C4.88906 9.84998 5.09906 10.79 5.46906 11.65Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.5293 11.65C19.2793 11.41 19.9393 10.97 20.4593 10.45C21.3593 9.44998 21.9593 8.24998 21.9593 6.84998C21.9593 5.44998 20.8593 4.34998 19.4593 4.34998H18.8093C19.0093 4.80998 19.1093 5.31998 19.1093 5.84998V8.84998C19.1093 9.84998 18.8993 10.79 18.5293 11.65Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function CourseEnrollmentCard({
  className,
  price = "SR 2,000",
  features = [
    { icon: "video", text: "4.5 hours on-demand video" },
    { icon: "device", text: "Access on mobile and Desktop" },
    { icon: "certificate", text: "Certificate of completion" },
  ],
  onApplyCoupon,
  onShare,
  onPreviewCourse,
  videoPreview,
}: CourseEnrollmentCardProps) {
  return (
    <Card className={cn("w-full max-w-xs mx-auto xl:max-w-[280px] xl:w-[280px] bg-[#F1F8EA] rounded-lg shadow-lg overflow-hidden", className)}>
      <VideoPreview 
        onPreviewCourse={onPreviewCourse} 
        thumbnailUrl={videoPreview?.thumbnailUrl}
      />
      
      <CardContent className="p-3 sm:p-4 bg-[#F1F8EA] space-y-3 sm:space-y-4">
        <div className="text-lg sm:text-[20px] font-bold leading-6 text-[#282837]">Practical Info</div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg sm:text-[20px] font-normal leading-6 text-[#282837]">Price:</span>
          <span className="text-lg sm:text-[20px] font-bold leading-6 text-[#76b729]">{price}</span>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="text-lg sm:text-[20px] font-bold leading-6 text-[#282837]">This Course includes:</div>
          <div className="space-y-2 sm:space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                {iconMap[feature.icon as keyof typeof iconMap]}
                <span className="text-xs sm:text-sm font-normal leading-[16px] text-[#282837]">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs sm:text-sm font-bold leading-[16px] text-[#282837]">Apply coupon</div>
          <div className="flex gap-2">
            <Input 
              placeholder="Enter coupon" 
              className="flex-1 h-[36px] sm:h-[40px] bg-white border border-gray-300 rounded text-xs sm:text-sm text-[#282837] placeholder:text-[#9b9b9b]" 
            />
            <Button 
              className="h-[36px] sm:h-[40px] bg-[#76b729] hover:bg-[#5a8f1f] text-white font-bold text-xs sm:text-sm rounded-lg border-none px-3 sm:px-4" 
              onClick={() => onApplyCoupon?.("")}
            >
              Apply
            </Button>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-xs sm:text-sm font-bold leading-[16px] text-[#76b729]">Share</span>
          <Button onClick={onShare} className="p-0 bg-transparent hover:bg-transparent hover:opacity-75">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
              <path d="M7.39969 6.32003L15.8897 3.49003C19.6997 2.22003 21.7697 4.30003 20.5097 8.11003L17.6797 16.6C15.7797 22.31 12.6597 22.31 10.7597 16.6L9.91969 14.08L7.39969 13.24C1.68969 11.34 1.68969 8.23003 7.39969 6.32003Z" stroke="#76B729" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.1094 13.6501L13.6894 10.0601" stroke="#76B729" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
