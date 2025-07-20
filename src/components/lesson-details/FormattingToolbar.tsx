import { Button } from '@/components/ui/button';
import { Bold, Italic, Link, ImageIcon } from 'lucide-react';

export function FormattingToolbar() {
  return (
    <div className="flex items-center space-x-2 p-2 border-b border-gray-200">
      <Button variant="ghost" size="sm" className="p-1">
        <Bold className="w-4 h-4 text-gray-600" />
      </Button>
      <Button variant="ghost" size="sm" className="p-1">
        <Italic className="w-4 h-4 text-gray-600" />
      </Button>
      <Button variant="ghost" size="sm" className="p-1">
        <Link className="w-4 h-4 text-gray-600" />
      </Button>
      <Button variant="ghost" size="sm" className="p-1">
        <ImageIcon className="w-4 h-4 text-gray-600" />
      </Button>
    </div>
  );
}