import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface QuestionHeaderProps {
  userInitials: string;
  userName: string;
  lecture: string;
  timeAgo: string;
}

export function QuestionHeader({ userInitials, userName, lecture, timeAgo }: QuestionHeaderProps) {
  return (
    <div className="flex items-start space-x-3 sm:space-x-4">
      <Avatar className="flex-shrink-0 w-8 h-8 bg-green-100 sm:w-10 sm:h-10">
        <AvatarFallback className="text-[#76B729] font-medium text-xs sm:text-sm">
          {userInitials}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col mb-2 space-y-1 text-xs sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2 sm:text-sm">
          <div className="flex items-center space-x-2">
            <a href="#" className="text-[#76B729] underline hover:text-[#91C554]">
              {userName}
            </a>
            <span className="hidden text-gray-400 sm:inline">•</span>
            <span className="text-gray-900">{lecture}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 sm:hidden">•</span>
            <span className="hidden text-gray-400 sm:inline">•</span>
            <span className="text-gray-500">{timeAgo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}