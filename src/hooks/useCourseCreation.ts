"use client";
import { useState } from 'react';
import { CourseCreationData, CourseCategory } from '@/types/course-creation';

export const useCourseCreation = () => {
  const [courseData, setCourseData] = useState<CourseCreationData>({
    content: {
      courseName: '',
      subcourseName: '',
      lessons: [],
    },
    landingPage: {
      courseName: 'cs.python.bootcamp',
      courseDescription: 'cs.python.bootcamp',
      courseCategory: '',
      durationFrom: '',
      durationTo: '',
      courseOverview: '',
      courseImage: null,
      thumbnail: '',
    },
  });

  const [activeSection, setActiveSection] = useState<'content' | 'landing' | 'pricing' | 'account'>('landing');
  const [contentExpanded, setContentExpanded] = useState(true);
  const [publishingExpanded, setPublishingExpanded] = useState(true);

  const categories: CourseCategory[] = [
    { id: '1', name: 'Programming' },
    { id: '2', name: 'Design' },
    { id: '3', name: 'Business' },
    { id: '4', name: 'Marketing' },
    { id: '5', name: 'Photography' },
    { id: '6', name: 'Music' },
    { id: '7', name: 'Health & Fitness' },
    { id: '8', name: 'Language' },
  ];

  const handleInputChange = (section: 'content' | 'landing', field: string, value: string) => {
    setCourseData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleImageUpload = (file: File | null) => {
    setCourseData(prev => ({
      ...prev,
      landingPage: {
        ...prev.landingPage,
        courseImage: file,
      },
    }));
  };

  const addLesson = () => {
    setCourseData(prev => ({
      ...prev,
      content: {
        ...prev.content,
        lessons: [
          ...prev.content.lessons,
          {
            id: Date.now().toString(),
            title: `Lesson ${prev.content.lessons.length + 1}`,
            type: 'lesson',
          },
        ],
      },
    }));
  };

  const removeLesson = (lessonId: string) => {
    setCourseData(prev => ({
      ...prev,
      content: {
        ...prev.content,
        lessons: prev.content.lessons.filter(lesson => lesson.id !== lessonId),
      },
    }));
  };

  const saveCourse = async () => {
    try {
      // Here you would typically send the data to your API
      console.log('Saving course data:', courseData);
      // const response = await fetch('/api/courses', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(courseData),
      // });
      // return response.json();
    } catch (error) {
      console.error('Error saving course:', error);
      throw error;
    }
  };

  return {
    courseData,
    activeSection,
    contentExpanded,
    publishingExpanded,
    categories,
    setActiveSection,
    setContentExpanded,
    setPublishingExpanded,
    handleInputChange,
    handleImageUpload,
    addLesson,
    removeLesson,
    saveCourse,
  };
}; 