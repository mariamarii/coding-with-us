'use client';

import { LessonContent as SectionContentType } from '@/types/lesson';
import { SectionHeader } from './LessonHeader';
import { SectionTextContent } from './LessonTextContent';
import { SectionVideoPlayer } from './LessonVideoPlayer';
import { SectionDocumentDownload } from './LessonDocumentDownload';
import { SectionReferencesQA } from './LessonReferencesQA';
import { SectionQuestionsList } from './LessonQuestionsList';
import { Card, CardContent } from '@/components/ui/card';
import { ExamForm } from './Exam'; // Import your exam component

interface SectionContentProps {
  SectionId: string;
}

// Extended type to include exam data
interface ExtendedSectionContent extends SectionContentType {
  type?: 'lesson' | 'exam';
  examData?: {
    questions: Array<{
      id: number;
      type: 'multiple-choice' | 'short-answer';
      question: string;
      options?: string[];
      selectedAnswer?: number | null;
      answer?: string;
    }>;
  };
}

const mockSectionContent: Record<string, ExtendedSectionContent> = {
  'lesson-2-2': {
    title: '2.2 Lesson 02',
    estimatedTime: 22,
    type: 'lesson',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    videoUrl: '/sea.mp4',
  },
  'lesson-0-1': {
    title: '0 Welcome to the course',
    estimatedTime: 15,
    type: 'lesson',
    content: `Welcome to our comprehensive course! In this lesson, we'll introduce you to the fundamentals and set the stage for your learning journey.

This course is designed to take you from beginner to advanced level, with hands-on projects and real-world applications.`,
    videoUrl: '/sea.mp4',
  },
  'lesson-1-1': {
    title: '1.1 Introduction to data structures',
    estimatedTime: 25,
    type: 'lesson',
    content: `Data structures are fundamental concepts in computer science. They help us organize and store data efficiently.

In this lesson, we'll explore various data structures and understand when to use each one.`,
    videoUrl: '/sea.mp4',
  },
  'lesson-2-1': {
    title: '2.1 Advanced data structures',
    estimatedTime: 30,
    type: 'lesson',
    content: `Building on our foundation, we'll now explore more complex data structures that are essential for advanced programming.

These structures will help you solve complex problems efficiently.`,
    videoUrl: '/sea.mp4',
  },
  'exam-2-4': {
    title: '2.4 Exam',
    estimatedTime: 22,
    type: 'exam',
    content: '', // Not used for exams
    examData: {
      questions: [
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
      ]
    }
  },
  'lesson-3-1': {
    title: '3.1 Final project implementation',
    estimatedTime: 45,
    type: 'lesson',
    content: `In this final lesson, we'll put everything together and build a comprehensive project that demonstrates all the concepts we've learned.

This project will serve as a portfolio piece and showcase your skills.`,
    videoUrl: '/sea.mp4',
  },
};

export function SectionContent({ SectionId }: SectionContentProps) {
  const section = mockSectionContent[SectionId] || mockSectionContent['lesson-2-2'];

  // If the section is an exam, render the exam form
  if (section.type === 'exam') {
    return (
      <div className="w-[90%] mx-auto my-8">
        <ExamForm 
          title={section.title}
          estimatedTime={section.estimatedTime}
          questions={section.examData?.questions || []}
        />
      </div>
    );
  }

  // Otherwise, render the normal lesson content
  return (
    <Card className="w-[90%] mx-auto my-8 rounded-none border-none shadow-none">
      <CardContent className="p-8 shadow-none border-none">
        <SectionHeader title={section.title} estimatedTime={section.estimatedTime} />
        <SectionTextContent content={section.content} />
        <SectionVideoPlayer videoUrl={section.videoUrl} />
        
        <div className="mt-8">
          <SectionDocumentDownload 
            sectionTitle={section.title}
            documentTitle="section 02"
          />
        </div>

        <div className="mt-8">
          <SectionReferencesQA />
        </div>

        <div className="mt-8">
          <SectionQuestionsList />
        </div>
      </CardContent>
    </Card>
  );
}