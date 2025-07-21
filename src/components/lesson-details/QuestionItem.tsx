import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreVertical, Edit, Trash2 } from 'lucide-react';
import { FormattingToolbar } from './FormattingToolbar';
import { Question } from '@/hooks/useQuestions';
import { useRef } from 'react';

// Shared function to render markdown content
const renderMarkdown = (content: string) => {
  return content.split('\n').map((line, index) => {
    let processedLine = line;

    // Bold
    processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Italic
    processedLine = processedLine.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Code
    processedLine = processedLine.replace(/`(.*?)`/g, '<code class="bg-gray-200 px-1 rounded">$1</code>');

    // Links
    processedLine = processedLine.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 underline">$1</a>');

    // Images
    processedLine = processedLine.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="max-w-full h-auto rounded" />');

    // Lists
    if (line.startsWith('- ')) {
      processedLine = `<li class="ml-4">${processedLine.substring(2)}</li>`;
    }

    // Quotes
    if (line.startsWith('> ')) {
      processedLine = `<blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">${processedLine.substring(2)}</blockquote>`;
    }

    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: processedLine || '<br>' }} />
    );
  });
};

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
  handleDelete
}: QuestionItemProps) {
  return (
    <div className="border-b border-gray-200 pb-4 sm:pb-6 px-4 sm:px-0">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <Avatar className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 flex-shrink-0">
          <AvatarFallback className="text-[#76B729] font-medium text-xs sm:text-sm">
            {question.userInitials}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs sm:text-sm mb-2">
            <div className="flex items-center space-x-2">
              <a href="#" className="text-[#76B729] underline hover:text-[#91C554]">
                {question.userName}
              </a>
              <span className="text-gray-400 hidden sm:inline">•</span>
              <span className="text-gray-900">{question.lecture}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 sm:hidden">•</span>
              <span className="text-gray-400 hidden sm:inline">•</span>
              <span className="text-gray-500">{question.timeAgo}</span>
            </div>
          </div>
          {editingQuestionId === question.id ? (
            <div className="mb-3">
              <Card className="overflow-hidden border-1 border-gray-300 rounded-lg shadow-none">
                <CardContent className="p-0">
                  <FormattingToolbar />
                  <Textarea
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                    className="border-0 focus:ring-0 focus:outline-none p-3 text-gray-700 min-h-[100px]"
                  />
                </CardContent>
              </Card>
              <div className="flex items-center space-x-2 mt-3">
                <Button
                  onClick={() => handleSaveEdit(question.id)}
                  className="bg-[#76B729] hover:bg-[#91C554] text-white font-medium px-4 py-2 rounded text-sm"
                  disabled={!editingContent.trim()}
                >
                  Save
                </Button>
                <Button
                  onClick={handleCancelEdit}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-4 py-2 rounded text-sm"
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="prose prose-sm max-w-none mb-2 text-xs sm:text-sm lg:text-base leading-relaxed text-[#000000]">
                {renderMarkdown(question.content)}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleReply(question.id)}
                className="text-gray-900 hover:text-gray-700 text-xs sm:text-sm p-0 h-auto"
              >
                Reply
              </Button>
            </>
          )}
          {replyingQuestionId === question.id && (
            <div className="mt-4">
              <Card className="overflow-hidden border-1 border-gray-300 rounded-lg shadow-none">
                <CardContent className="p-0">
                  <FormattingToolbar />
                  <Textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Type your reply here"
                    className="border-0 focus:ring-0 focus:outline-none p-3 text-gray-700 min-h-[100px]"
                  />
                </CardContent>
              </Card>
              <div className="flex items-center space-x-2 mt-3">
                <Button
                  onClick={() => handleAddReply(question.id)}
                  className="bg-[#76B729] hover:bg-[#91C554] text-white font-medium px-4 py-2 rounded text-sm"
                  disabled={!replyContent.trim()}
                >
                  Add answer
                </Button>
                <Button
                  onClick={handleCancelReply}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-4 py-2 rounded text-sm"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
        {editingQuestionId !== question.id && replyingQuestionId !== question.id && (
          <DropdownMenu open={openMenuId === question.id} onOpenChange={(open) => setOpenMenuId(open ? question.id : null)}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 flex-shrink-0">
                <MoreVertical className="h-4 w-4 text-[#292D32]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32 text-[#292D32]">
              <DropdownMenuItem onClick={() => handleEdit(question.id)}>
                <Edit className="mr-2 h-4 w-4 text-[#292D32]" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete(question.id)} className="text-[#292D32]">
                <Trash2 className="mr-2 h-4 w-4 text-[#292D32]" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
