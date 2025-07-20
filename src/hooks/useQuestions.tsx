import { useState } from 'react';

export interface Question {
  id: string;
  userInitials: string;
  userName: string;
  content: string;
  lecture: string;
  timeAgo: string;
}

export function useQuestions() {
  const [question, setQuestion] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const [replyingQuestionId, setReplyingQuestionId] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      userInitials: 'AR',
      userName: 'Abdelmoniem',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
      lecture: 'lecture 1.2',
      timeAgo: '13 minutes ago',
    },
    {
      id: '2',
      userInitials: 'AR',
      userName: 'Abdelmoniem',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
      lecture: 'lecture 1.2',
      timeAgo: '13 minutes ago',
    },
  ]);

  const handleAddAnswer = () => {
    if (question.trim()) {
      const newQuestion: Question = {
        id: `${questions.length + 1}`,
        userInitials: 'US',
        userName: 'User',
        content: question,
        lecture: 'lecture 1.2',
        timeAgo: 'Just now',
      };
      setQuestions([newQuestion, ...questions]);
      setQuestion('');
      console.log('Adding answer for question:', question);
    }
  };

  const handleReply = (questionId: string) => {
    setReplyingQuestionId(questionId);
    setReplyContent('');
    console.log('Reply to question:', questionId);
  };

  const handleAddReply = (questionId: string) => {
    if (replyContent.trim()) {
      console.log('Adding reply for question:', questionId, 'Reply:', replyContent);
      setReplyingQuestionId(null);
      setReplyContent('');
    }
  };

  const handleCancelReply = () => {
    setReplyingQuestionId(null);
    setReplyContent('');
  };

  const handleEdit = (questionId: string) => {
    const questionToEdit = questions.find(q => q.id === questionId);
    if (questionToEdit) {
      setEditingQuestionId(questionId);
      setEditingContent(questionToEdit.content);
    }
    setOpenMenuId(null);
  };

  const handleSaveEdit = (questionId: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { ...q, content: editingContent } 
        : q
    ));
    setEditingQuestionId(null);
    setEditingContent('');
  };

  const handleCancelEdit = () => {
    setEditingQuestionId(null);
    setEditingContent('');
  };

  const handleDelete = (questionId: string) => {
    setQuestions(questions.filter((q) => q.id !== questionId));
    console.log('Delete question:', questionId);
    setOpenMenuId(null);
  };

  return {
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
  };
}