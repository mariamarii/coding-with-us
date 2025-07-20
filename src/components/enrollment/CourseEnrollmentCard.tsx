import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CourseEnrollmentCardProps } from "@/types/enrollment"
import { VideoPreview } from "./VideoPreview"

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
  const renderIcon = (type: "video" | "device" | "certificate") => {
    const iconClasses = "w-6 h-6 border-[1.5px] border-[#292d32] relative"
    
    switch (type) {
      case "video":
        return (
          <div className={cn(iconClasses, "rounded")}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[6px] border-l-[#292d32] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
            </div>
          </div>
        )
      case "device":
        return (
          <div className={cn(iconClasses, "rounded-sm")}>
            <div className="absolute left-[8.33%] right-[12.71%] top-[10.54%] bottom-[29.37%] border-[1.5px] border-[#292d32] rounded-sm" />
            <div className="absolute left-[41.67%] right-[58.33%] top-[70.62%] bottom-[10.54%] border-[1.5px] border-[#292d32] rounded-sm" />
          </div>
        )
      case "certificate":
        return (
          <div className={cn(iconClasses, "rounded-full")}>
            <div className="absolute left-[20.83%] right-[20.83%] top-[8.33%] bottom-[33.33%] border-[1.5px] border-[#292d32] rounded-sm" />
            <div className="absolute left-[50.63%] right-[49.37%] top-[68.75%] bottom-[22.5%] border-[1.5px] border-[#292d32] rounded-sm" />
          </div>
        )
    }
  }

  return (
    <Card className={cn("w-[280px] bg-[#F1F8EA] rounded-lg shadow-lg overflow-hidden", className)}>
      <VideoPreview 
        onPreviewCourse={onPreviewCourse} 
        thumbnailUrl={videoPreview?.thumbnailUrl}
      />
      
      <CardContent className="p-4 bg-[#F1F8EA] space-y-4 ">
        <div className="text-[20px] font-bold leading-6 text-[#282837]">Practical Info</div>
        
        <div className="flex items-center justify-between">
          <span className="text-[20px] font-normal leading-6 text-[#282837]">Price:</span>
          <span className="text-[20px] font-bold leading-6 text-[#76b729]">{price}</span>
        </div>

        <div className="space-y-3">
          <div className="text-[20px] font-bold leading-6 text-[#282837]">This Course includes:</div>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                {renderIcon(feature.icon)}
                <span className="text-sm font-normal leading-[16px] text-[#282837]">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-bold leading-[16px] text-[#282837]">Apply coupon</div>
          <div className="flex gap-2">
            <Input placeholder="Enter coupon" className="flex-1 h-[40px] bg-white border border-gray-300 rounded text-sm text-[#282837] placeholder:text-[#9b9b9b]" />
            <Button className="h-[40px] bg-[#76b729] hover:bg-[#5a8f1f] text-white font-bold text-sm rounded-lg border-none px-4" onClick={() => onApplyCoupon?.("")}>Apply</Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold leading-[16px] text-[#76b729]">Share</span>
          <Button onClick={onShare} className="w-6 h-6 border-[1.5px] border-[#76b729] rounded-full relative hover:bg-[#76b729] transition-colors p-0">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border-[1.5px] border-[#76b729] rounded-full" />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#76b729] rounded-full" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 