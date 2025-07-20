import { Button } from "@/components/ui/button"

export function SupportButton() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <Button className="w-12 h-12 sm:w-14 sm:h-14 bg-[#76b729] hover:bg-[#5a8f1f] text-white rounded-full shadow-lg flex items-center justify-center transition-colors p-0">
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </Button>
    </div>
  )
} 