import { ReplyItem } from './ReplyItem';
import { Reply } from '@/hooks/useQuestions';

interface RepliesListProps {
  replies: Reply[];
}

export function RepliesList({ replies }: RepliesListProps) {
  if (replies.length === 0) return null;

  return (
    <div className="mt-4 ml-6 border-l-2 border-gray-200 pl-4">
      {replies.map((reply) => (
        <ReplyItem key={reply.id} reply={reply} />
      ))}
    </div>
  );
}