import React from 'react';
import { Course } from '@/types/course';
import CoursesHeader from './CoursesHeader';
import CalendarIntegration from './CalendarIntegration';
import CoursesGrid from './CoursesGrid';

const CoursesSection = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "The complete AI Guide: Learn chatGPT, Generative AI & More More More More MoreMore More",
      progress: 10,
      totalPoints: 56,
      currentPoints: 10,
      image: "/course.png"
    },
    {
      id: 2,
      title: "The complete AI Guide: Learn chatGPT, Generative AI & More More More More MoreMore More",
      progress: 10,
      totalPoints: 56,
      currentPoints: 10,
      image: "/course.png"
    },
    {
      id: 3,
      title: "The complete AI Guide: Learn chatGPT, Generative AI & More More More More MoreMore More",
      progress: 10,
      totalPoints: 56,
      currentPoints: 10,
      image: "/course.png"
    },
    {
      id: 4,
      title: "The complete AI Guide: Learn chatGPT, Generative AI & More More More More MoreMore More",
      progress: 10,
      totalPoints: 56,
      currentPoints: 10,
      image: "/course.png"
    },
    {
      id: 5,
      title: "The complete AI Guide: Learn chatGPT, Generative AI & More More More More MoreMore More",
      progress: 10,
      totalPoints: 56,
      currentPoints: 10,
      image: "/course.png"
    },
    {
      id: 6,
      title: "The complete AI Guide: Learn chatGPT, Generative AI & More More More More MoreMore More",
      progress: 10,
      totalPoints: 56,
      currentPoints: 10,
      image: "/course.png"
    }
  ];

  const handleSeeAllCourses = () => {
    console.log('See all courses clicked');
  };

  const handleGoogleCalendar = () => {
    console.log('Google Calendar clicked');
  };

  const handleICalendar = () => {
    console.log('iCalendar clicked');
  };

  const handleContinueCourse = (courseId: number) => {
    console.log('Continue course:', courseId);
  };

  return (
    <div className="w-full bg-[#F2F2F2]">
      <div className="w-[72%] bg-[#F2F2F2] mx-auto py-6">
        <CoursesHeader onSeeAllCourses={handleSeeAllCourses} />
        
        <CalendarIntegration 
          onGoogleCalendar={handleGoogleCalendar}
          onICalendar={handleICalendar}
        />
        
        <CoursesGrid 
          courses={courses} 
          onContinueCourse={handleContinueCourse}
        />
      </div>
    </div>
  );
};

export default CoursesSection;