import { Button } from '@/components/ui/button';
import { Bold, Italic, Link, Image, X, Check } from 'lucide-react';
import { useState } from 'react';

// FormattingToolbar hook
const useFormattingToolbar = (textareaRef: React.RefObject<HTMLTextAreaElement>) => {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [showImageInput, setShowImageInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const applyFormatting = (type: 'bold' | 'italic' | 'link' | 'image') => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    let newText = textarea.value;

    if (type === 'bold') {
      newText = `${newText.substring(0, start)}**${selectedText}**${newText.substring(end)}`;
    } else if (type === 'italic') {
      newText = `${newText.substring(0, start)}*${selectedText}*${newText.substring(end)}`;
    } else if (type === 'link') {
      setShowLinkInput(true);
      return;
    } else if (type === 'image') {
      setShowImageInput(true);
      return;
    }

    textarea.value = newText;
    textarea.focus();
    textarea.setSelectionRange(start, start + newText.length);
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  };

  const insertLink = () => {
    if (!textareaRef.current || !linkUrl) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end) || 'Link';
    const newText = `${textarea.value.substring(0, start)}[${selectedText}](${linkUrl})${textarea.value.substring(end)}`;

    textarea.value = newText;
    textarea.focus();
    textarea.setSelectionRange(start, start + newText.length);
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    setLinkUrl('');
    setShowLinkInput(false);
  };

  const insertImage = () => {
    if (!textareaRef.current || !imageUrl) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end) || 'Image';
    const newText = `${textarea.value.substring(0, start)}![${selectedText}](${imageUrl})${textarea.value.substring(end)}`;

    textarea.value = newText;
    textarea.focus();
    textarea.setSelectionRange(start, start + newText.length);
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    setImageUrl('');
    setShowImageInput(false);
  };

  const cancelInput = () => {
    setLinkUrl('');
    setImageUrl('');
    setShowLinkInput(false);
    setShowImageInput(false);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return {
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
  };
};

export function FormattingToolbar({ textareaRef }: { textareaRef: React.RefObject<HTMLTextAreaElement> }) {
  const {
    showLinkInput,
    showImageInput,
    linkUrl,
    setLinkUrl,
    imageUrl,
    setEAD: setImageUrl,
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
            placeholder="Enter URL (https://...)"
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
            placeholder="Enter image URL (https://...)"
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