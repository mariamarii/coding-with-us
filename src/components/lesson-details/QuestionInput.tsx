import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FormattingToolbar } from './FormattingToolbar';
import { useRef } from 'react';


export function QuestionInput({ question, setQuestion, handleAddAnswer }: {
  question: string;
  setQuestion: (value: string) => void;
  handleAddAnswer: () => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Q & A</h3>
      <Card className="overflow-hidden border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-0">
          <FormattingToolbar textareaRef={textareaRef} />
          <Textarea
            ref={textareaRef}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here... Use the formatting buttons above to style your text."
            className="border-0 focus:ring-0 focus:outline-none p-4 text-gray-700 resize-none min-h-[120px] text-base leading-relaxed"
            rows={6}
          />
        </CardContent>
      </Card>
      
      {/* Preview section if there's formatted content */}
      {question && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Preview:</h4>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="prose prose-sm max-w-none">
              {question.split('\n').map((line, index) => {
                // Simple markdown rendering for preview
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
              })}
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-4 flex items-center gap-3">
        <Button
          onClick={handleAddAnswer}
          className="bg-[#76B729] hover:bg-[#91C554] text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
          disabled={!question.trim()}
        >
          Add Answer
        </Button>
        <span className="text-sm text-gray-500">
          {question.length} characters
        </span>
      </div>
    </div>
  );
}