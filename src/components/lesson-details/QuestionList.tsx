import { QuestionItem } from './QuestionItem';
import { Question } from '@/hooks/useQuestions';
interface QuestionListProps {
  questions: Question[];
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

export function QuestionList({
  questions,
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
  handleDelete
}: QuestionListProps) {
  return (
    <div className="mt-6 space-y-4 sm:space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 px-4 sm:px-0">
        All questions in this course
      </h3>
      <div className="space-y-4 sm:space-y-6">
        {questions.map((questionItem) => (
          <QuestionItem
            key={questionItem.id}
            question={questionItem}
            openMenuId={openMenuId}
            setOpenMenuId={setOpenMenuId}
            editingQuestionId={editingQuestionId}
            editingContent={editingContent}
            setEditingContent={setEditingContent}
            replyingQuestionId={replyingQuestionId}
            replyContent={replyContent}
            setReplyContent={setReplyContent}
            handleReply={handleReply}
            handleAddReply={handleAddReply}
            handleCancelReply={handleCancelReply}
            handleEdit={handleEdit}
            handleSaveEdit={handleSaveEdit}
            handleCancelEdit={handleCancelEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}