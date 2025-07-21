import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreVertical, Edit, Trash2 } from 'lucide-react';

interface QuestionActionsProps {
  questionId: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function QuestionActions({ questionId, isOpen, onOpenChange, onEdit, onDelete }: QuestionActionsProps) {
  return (
    <DropdownMenu open={isOpen} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex-shrink-0 w-8 h-8 p-0">
          <MoreVertical className="h-4 w-4 text-[#292D32]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32 text-[#292D32]">
        <DropdownMenuItem onClick={onEdit}>
          <Edit className="mr-2 h-4 w-4 text-[#292D32]" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDelete} className="text-[#292D32]">
          <Trash2 className="mr-2 h-4 w-4 text-[#292D32]" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
