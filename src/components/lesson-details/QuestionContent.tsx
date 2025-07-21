import { Button } from '@/components/ui/button';
import { renderMarkdown } from './markdown';
interface QuestionContentProps {
  content: string;
  questionId: string;
  onReply: (questionId: string) => void;
}

export function QuestionContent({ content, questionId, onReply }: QuestionContentProps) {
  return (
    <>
      <div className="prose prose-sm max-w-none mb-2 text-xs sm:text-sm lg:text-base leading-relaxed text-[#000000]">
        {renderMarkdown(content)}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onReply(questionId)}
        className="h-auto p-0 text-xs text-gray-900 hover:text-gray-700 sm:text-sm"
      >
        Reply
      </Button>
    </>
  );
}

