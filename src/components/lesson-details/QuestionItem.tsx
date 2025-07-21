import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Question } from '@/hooks/useQuestions';
import { QuestionHeader } from './QuestionHeader';
import { QuestionContent } from './QuestionContent';
import { EditForm } from './EditForm';
import { ReplyForm } from './ReplyForm';
import { QuestionActions } from './QuestionActions';
import { RepliesList } from './RepliesList';

interface QuestionItemProps {
  question: Question;
  openMenuId: string | null;
  setOpenMenuId: (id: string | null) => void;
  editingQuestionId: string | null;
  editingContent: string;
  setEditingContent: (value: string) => void;
  replyingQuestionId: string | null;
  replyContent: string;
  setReplyContent: (value: string) => void;
  handleReply: (questionId: string) => void;
  handleAddReply: (questionId: string) => void;
  handleCancelReply: () => void;
  handleEdit: (questionId: string) => void;
  handleSaveEdit: (questionId: string) => void;
  handleCancelEdit: () => void;
  handleDelete: (questionId: string) => void;
}

export function QuestionItem({
  question,
  openMenuId,
  setOpenMenuId,
  editingQuestionId,
  editingContent,
  setEditingContent,
  replyingQuestionId,
  replyContent,
  setReplyContent,
  handleReply,
  handleAddReply,
  handleCancelReply,
  handleEdit,
  handleSaveEdit,
  handleCancelEdit,
  handleDelete,
}: QuestionItemProps) {
  const isEditing = editingQuestionId === question.id;
  const isReplying = replyingQuestionId === question.id;

  return (
    <div className="px-4 pb-4 border-b border-gray-200 sm:pb-6 sm:px-0">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <Avatar className="flex-shrink-0 w-8 h-8 bg-green-100 sm:w-10 sm:h-10">
          <AvatarFallback className="text-[#76B729] font-medium text-xs sm:text-sm">
            {question.userInitials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-col mb-2 space-y-1 text-xs sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2 sm:text-sm">
            <div className="flex items-center space-x-2">
              <a href="#" className="text-[#76B729] underline hover:text-[#91C554]">
                {question.userName}
              </a>
              <span className="hidden text-gray-400 sm:inline">•</span>
              <span className="text-gray-900">{question.lecture}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 sm:hidden">•</span>
              <span className="hidden text-gray-400 sm:inline">•</span>
              <span className="text-gray-500">{question.timeAgo}</span>
            </div>
          </div>

          {isEditing ? (
            <EditForm
              content={editingContent}
              onContentChange={setEditingContent}
              onSave={() => handleSaveEdit(question.id)}
              onCancel={handleCancelEdit}
            />
          ) : (
            <QuestionContent
              content={question.content}
              questionId={question.id}
              onReply={handleReply}
            />
          )}

          <RepliesList replies={question.replies} />

          {isReplying && (
            <ReplyForm
              content={replyContent}
              onContentChange={setReplyContent}
              onSubmit={() => handleAddReply(question.id)}
              onCancel={handleCancelReply}
            />
          )}
        </div>

        {!isEditing && !isReplying && (
          <QuestionActions
            questionId={question.id}
            isOpen={openMenuId === question.id}
            onOpenChange={(open) => setOpenMenuId(open ? question.id : null)}
            onEdit={() => handleEdit(question.id)}
            onDelete={() => handleDelete(question.id)}
          />
        )}
      </div>
    </div>
  );
}
