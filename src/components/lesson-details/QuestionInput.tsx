import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FormattingToolbar } from './FormattingToolbar';

interface QuestionInputProps {
  question: string;
  setQuestion: (value: string) => void;
  handleAddAnswer: () => void;
}

export function QuestionInput({ question, setQuestion, handleAddAnswer }: QuestionInputProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">Q & A</h3>
      <Card className="overflow-hidden border-1 border-gray-300 rounded-lg shadow-none">
        <CardContent className="p-0">
          <FormattingToolbar />
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here"
            className="border-0 focus:ring-0 focus:outline-none p-3 text-gray-700"
          />
        </CardContent>
      </Card>
      <div className="mt-3">
        <Button
          onClick={handleAddAnswer}
          className="bg-[#76B729] hover:bg-[#91C554] text-white font-bold py-2 px-4 rounded"
          disabled={!question.trim()}
        >
          Add answer
        </Button>
      </div>
    </div>
  );
}