import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { renderMarkdown } from './markdown';
import { Reply } from '@/hooks/useQuestions';

interface ReplyItemProps {
  reply: Reply;
}

export function ReplyItem({ reply }: ReplyItemProps) {
  return (
    <div className="flex items-start space-x-3 mt-4">
      <Avatar className="flex-shrink-0 w-6 h-6 bg-blue-100">
        <AvatarFallback className="text-[#76B729] font-medium text-xs">
          {reply.userInitials}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col mb-2 space-y-1 text-xs sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2 sm:text-sm">
          <div className="flex items-center space-x-2">
            <a href="#" className="text-[#76B729] underline hover:text-[#91C554]">
              {reply.userName}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 sm:hidden">•</span>
            <span className="hidden text-gray-400 sm:inline">•</span>
            <span className="text-gray-500">{reply.timeAgo}</span>
          </div>
        </div>
        <div className="prose prose-sm max-w-none text-xs sm:text-sm lg:text-base leading-relaxed text-[#000000]">
          {renderMarkdown(reply.content)}
        </div>
      </div>
    </div>
  );
}

