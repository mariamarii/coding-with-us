import { useState, useCallback } from 'react';

interface Selection {
  start: number;
  end: number;
  text: string;
}

interface FormattingToolbarState {
  showLinkInput: boolean;
  showImageInput: boolean;
  linkUrl: string;
  imageUrl: string;
  pendingSelection: Selection | null;
  applyFormatting: (format: 'bold' | 'italic' | 'link' | 'image') => void;
  insertLink: () => void;
  insertImage: () => void;
  cancelInput: () => void;
}

export function useFormattingToolbar(textareaRef: React.RefObject<HTMLTextAreaElement>): FormattingToolbarState {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [showImageInput, setShowImageInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [pendingSelection, setPendingSelection] = useState<Selection | null>(null);

  const updateTextarea = useCallback((newText: string, cursorPos: number) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.value = newText;
    textarea.setSelectionRange(cursorPos, cursorPos);
    textarea.focus();

    const event = new Event('input', { bubbles: true });
    textarea.dispatchEvent(event);
  }, [textareaRef]);

  const applyFormatting = useCallback(
    (format: 'bold' | 'italic' | 'link' | 'image') => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.substring(start, end);
      let newText = textarea.value;
      let newCursorPos = end;

      switch (format) {
        case 'bold':
          if (selectedText) {
            newText = newText.substring(0, start) + '**' + selectedText + '**' + newText.substring(end);
            newCursorPos = end + 4;
          } else {
            newText = newText.substring(0, start) + '****' + newText.substring(end);
            newCursorPos = start + 2;
          }
          break;

        case 'italic':
          if (selectedText) {
            newText = newText.substring(0, start) + '*' + selectedText + '*' + newText.substring(end);
            newCursorPos = end + 2;
          } else {
            newText = newText.substring(0, start) + '**' + newText.substring(end);
            newCursorPos = start + 1;
          }
          break;

        case 'link':
          setPendingSelection({ start, end, text: selectedText });
          setShowLinkInput(true);
          return;

        case 'image':
          setPendingSelection({ start, end, text: selectedText });
          setShowImageInput(true);
          return;
      }

      updateTextarea(newText, newCursorPos);
    },
    [textareaRef, updateTextarea]
  );

  const insertLink = useCallback(() => {
    if (!pendingSelection || !textareaRef.current) return;

    const { start, end, text } = pendingSelection;
    const url = linkUrl || 'https://';
    const linkText = text || 'Link text';

    const currentValue = textareaRef.current.value;
    const newText = currentValue.substring(0, start) + `[${linkText}](${url})` + currentValue.substring(end);
    const newCursorPos = start + linkText.length + url.length + 4;

    updateTextarea(newText, newCursorPos);

    setShowLinkInput(false);
    setLinkUrl('');
    setPendingSelection(null);
  }, [pendingSelection, linkUrl, textareaRef, updateTextarea]);

  const insertImage = useCallback(() => {
    if (!pendingSelection || !textareaRef.current) return;

    const { start, end, text } = pendingSelection;
    const url = imageUrl || 'https://';
    const altText = text || 'Image description';

    const currentValue = textareaRef.current.value;
    const newText = currentValue.substring(0, start) + `![${altText}](${url})` + currentValue.substring(end);
    const newCursorPos = start + altText.length + url.length + 5;

    updateTextarea(newText, newCursorPos);

    setShowImageInput(false);
    setImageUrl('');
    setPendingSelection(null);
  }, [pendingSelection, imageUrl, textareaRef, updateTextarea]);

  const cancelInput = useCallback(() => {
    setShowLinkInput(false);
    setShowImageInput(false);
    setLinkUrl('');
    setImageUrl('');
    setPendingSelection(null);
    textareaRef.current?.focus();
  }, [textareaRef]);

  return {
    showLinkInput,
    showImageInput,
    linkUrl,
    setLinkUrl,
    imageUrl,
    setImageUrl,
    pendingSelection,
    applyFormatting,
    insertLink,
    insertImage,
    cancelInput,
  };
}