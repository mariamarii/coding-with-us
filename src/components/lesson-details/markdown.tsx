export const renderMarkdown = (content: string) => {
    return content.split('\n').map((line, index) => {
      let processedLine = line;
  
      // Bold
      processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
      // Italic
      processedLine = processedLine.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
      // Code
      processedLine = processedLine.replace(/`(.*?)`/g, '<code class="bg-gray-200 px-1 rounded">$1</code>');
  
      // Links
      processedLine = processedLine.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#76B729] underline">$1</a>');
  
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