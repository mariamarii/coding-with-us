'use client'
import { QuestionInput } from './QuestionInput';
import { QuestionList } from './QuestionList';
import { useQuestions } from '@/hooks/useQuestions';

export function SectionQuestionsList() {
  const {
    question,
    setQuestion,
    openMenuId,
    setOpenMenuId,
    editingQuestionId,
    editingContent,
    setEditingContent,
    replyingQuestionId,
    replyContent,
    setReplyContent,
    questions,
    handleAddAnswer,
    handleReply,
    handleAddReply,
    handleCancelReply,
    handleEdit,
    handleSaveEdit,
    handleCancelEdit,
    handleDelete
  } = useQuestions();

  return (
    <div className="space-y-6">
      <QuestionInput 
        question={question} 
        setQuestion={setQuestion} 
        handleAddAnswer={handleAddAnswer} 
      />
      <QuestionList 
        questions={questions}
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
    </div>
  );
}