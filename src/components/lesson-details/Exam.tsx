'use client';
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { FormattingToolbar } from './FormattingToolbar';
import { QuestionInput } from './QuestionInput'; // Assuming you have a QuestionInput component for adding new questions

// Question type interface
interface Question {
    id: number;
    type: 'multiple-choice' | 'short-answer';
    question: string;
    options?: string[];
    selectedAnswer?: number | null;
    answer?: string;
  }
  
  interface ExamFormProps {
    title?: string;
    estimatedTime?: number;
    questions?: Question[];
  }
  
  // Main Exam Form Component
  export function ExamForm({ 
    title = '2.4 Exam', 
    estimatedTime = 22, 
    questions: initialQuestions = [] 
  }: ExamFormProps) {
    const [questions, setQuestions] = useState<Question[]>(initialQuestions.length > 0 ? initialQuestions : [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur?',
        options: ['Answer 01', 'Answer 02', 'Answer 03'],
        selectedAnswer: null
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur?',
        options: ['Answer 01', 'Answer 02', 'Answer 03'],
        selectedAnswer: null
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur?',
        options: ['Answer 01', 'Answer 02', 'Answer 03'],
        selectedAnswer: null
      },
      {
        id: 4,
        type: 'short-answer',
        question: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur?',
        answer: ''
      }
    ]);
  
    const [newQuestion, setNewQuestion] = useState('');
    const [showQuestionInput, setShowQuestionInput] = useState(false);
  
    const handleAnswerChange = (questionId: number, value: string | number) => {
      setQuestions(prev => prev.map(q => 
        q.id === questionId 
          ? { 
              ...q, 
              selectedAnswer: q.type === 'multiple-choice' ? value as number : undefined, 
              answer: q.type === 'short-answer' ? value as string : q.answer 
            }
          : q
      ));
    };
  
    const handleAddAnswer = () => {
      if (newQuestion.trim()) {
        const newQ: Question = {
          id: questions.length + 1,
          type: 'multiple-choice',
          question: newQuestion,
          options: ['Answer 01', 'Answer 02', 'Answer 03'],
          selectedAnswer: null
        };
        setQuestions(prev => [...prev, newQ]);
        setNewQuestion('');
        setShowQuestionInput(false);
      }
    };
  
    const handleSubmit = () => {
      const results = questions.map(q => ({
        questionId: q.id,
        answer: q.type === 'multiple-choice' ? q.selectedAnswer : q.answer
      }));
      console.log('Exam submitted:', results);
      alert('Exam submitted successfully!');
    };
  
    return (
      <div className="h-full bg-gray-50 ">
        <div className="max-w-4xl mx-auto ">
          {/* Exam Header */}
          <div className="bg-gray-50  border-none  mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                <p className="text-gray-600">Estimated time to complete: {estimatedTime} mins</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Time Remaining</div>
                <div className="text-2xl font-bold text-blue-600">{estimatedTime}:00</div>
              </div>
            </div>
          </div>
  
          {/* Questions */}
          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={question.id} className="bg-gray-50  border-none ">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Question {index + 1}
                </h3>
                
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed">{question.question}</p>
                  <p className="text-sm text-gray-500 mt-1">1 point (waiting your answers)</p>
                </div>
  
                {question.type === 'multiple-choice' ? (
                  <div className="space-y-3">
                    {question.options?.map((option, optionIndex) => (
                      <label key={optionIndex} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={optionIndex}
                          checked={question.selectedAnswer === optionIndex}
                          onChange={(e) => handleAnswerChange(question.id, parseInt(e.target.value))}
                          className="w-4 h-4 text-blue-600 border-none"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Button variant="outline" size="sm" className="h-8 px-3 text-xs font-bold">B</Button>
                      <Button variant="outline" size="sm" className="h-8 px-3 text-xs italic">I</Button>
                      <Button variant="outline" size="sm" className="h-8 px-3 text-xs">U</Button>
                      <Button variant="outline" size="sm" className="h-8 px-3 text-xs">S</Button>
                    </div>
                    <Textarea
                      value={question.answer || ''}
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                      placeholder="Type your answer here"
                      className="min-h-[100px] text-gray-700"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
  
          {/* Add Question Section */}
          {showQuestionInput && (
            <div className="mt-8">
              <QuestionInput 
                question={newQuestion}
                setQuestion={setNewQuestion}
                handleAddAnswer={handleAddAnswer}
              />
            </div>
          )}
  
          {/* Action Buttons */}
          <div className="mt-8 flex items-center justify-between">
            <Button
              onClick={() => setShowQuestionInput(!showQuestionInput)}
              variant="outline"
              className="px-6 py-2"
            >
              {showQuestionInput ? 'Cancel' : 'Add Question'}
            </Button>
            
            <Button
              onClick={handleSubmit}
              className="bg-[#76B729] hover:bg-[#91C554] text-white font-semibold py-2.5 px-8 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Submit your answer
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  