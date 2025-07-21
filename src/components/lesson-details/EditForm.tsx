import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FormattingToolbar } from './FormattingToolbar';
import { useRef } from 'react';

interface EditFormProps {
  content: string;
  onContentChange: (value: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

export function EditForm({ content, onContentChange, onSave, onCancel }: EditFormProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="mb-3">
      <Card className="overflow-hidden border-gray-300 rounded-lg shadow-none border-1">
        <CardContent className="p-0">
          <FormattingToolbar textareaRef={textareaRef} />
          <Textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            className="border-0 focus:ring-0 focus:outline-none p-3 text-gray-700 min-h-[100px]"
          />
        </CardContent>
      </Card>
      <div className="flex items-center mt-3 space-x-2">
        <Button
          onClick={onSave}
          className="bg-[#76B729] hover:bg-[#91C554] text-white font-medium px-4 py-2 rounded text-sm"
          disabled={!content.trim()}
        >
          Save
        </Button>
        <Button
          onClick={onCancel}
          variant="outline"
          className="px-4 py-2 text-sm font-medium text-gray-700 border-gray-300 rounded hover:bg-gray-50"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}