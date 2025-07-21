// FormattingToolbar.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bold, Italic, Link, Image, X, Check } from 'lucide-react';
import { useFormattingToolbar } from '../../hooks/useFormattingToolbar';

export function FormattingToolbar({ textareaRef }: { textareaRef: React.RefObject<HTMLTextAreaElement> }) {
  const {
    showLinkInput,
    showImageInput,
    linkUrl,
    setLinkUrl,
    imageUrl,
    setImageUrl,
    applyFormatting,
    insertLink,
    insertImage,
    cancelInput,
  } = useFormattingToolbar(textareaRef);

  const toolbarButtons = [
    { icon: Bold, action: 'bold', tooltip: 'Bold' },
    { icon: Italic, action: 'italic', tooltip: 'Italic' },
    { icon: Link, action: 'link', tooltip: 'Link' },
    { icon: Image, action: 'image', tooltip: 'Image' },
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="flex items-center gap-1 p-3">
        {toolbarButtons.map(({ icon: Icon, action, tooltip }) => (
          <Button
            key={action}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-white hover:shadow-sm transition-all duration-200"
            onClick={() => applyFormatting(action as any)}
            title={tooltip}
          >
            <Icon className="w-4 h-4 text-gray-600 hover:text-gray-800" />
          </Button>
        ))}
      </div>

      {/* Link Input */}
      {showLinkInput && (
        <div className="flex items-center gap-2 px-3 pb-3 bg-gray-50">
          <Link className="w-4 h-4 text-gray-500 flex-shrink-0" />
          <input
            type="text"
            placeholder="Enter URL[](https://...)"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                insertLink();
              } else if (e.key === 'Escape') {
                e.preventDefault();
                cancelInput();
              }
            }}
          />
          <Button
            size="sm"
            variant="ghost"
            className="h-7 w-7 p-0 hover:bg-green-100 hover:text-green-700"
            onClick={insertLink}
            title="Insert link"
          >
            <Check className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="h-7 w-7 p-0 hover:bg-red-100 hover:text-red-700"
            onClick={cancelInput}
            title="Cancel"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Image Input */}
      {showImageInput && (
        <div className="flex items-center gap-2 px-3 pb-3 bg-gray-50">
          <Image className="w-4 h-4 text-gray-500 flex-shrink-0" />
          <input
            type="text"
            placeholder="Enter image URL[](https://...)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                insertImage();
              } else if (e.key === 'Escape') {
                e.preventDefault();
                cancelInput();
              }
            }}
          />
          <Button
            size="sm"
            variant="ghost"
            className="h-7 w-7 p-0 hover:bg-green-100 hover:text-green-700"
            onClick={insertImage}
            title="Insert image"
          >
            <Check className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="h-7 w-7 p-0 hover:bg-red-100 hover:text-red-700"
            onClick={cancelInput}
            title="Cancel"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}