"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { reviewsProps } from '@/types/landingProps';

const revies: reviewsProps[] = [
  {
    id: 1,
    name: "Ahmed Alaa",
    role: "Student",
    content: "This platform has completely transformed my learning experience. The interactive content and personalized approach made complex topics easy to understand. I've seen significant improvement in my grades and confidence.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Student",
    content: "The quality of instruction is exceptional. Every lesson is well-structured and engaging. The support team is always ready to help, making my learning journey smooth and enjoyable.",
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "Student",
    content: "I love how flexible the learning schedule is. I can study at my own pace while still getting the guidance I need. The practical exercises really help reinforce what I've learned in each session.",
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Student",
    content: "The instructors are knowledgeable and passionate about teaching. They break down complex concepts into digestible pieces and provide real-world examples that make learning relevant and exciting.",
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Student",
    content: "Outstanding learning platform! The combination of theoretical knowledge and practical application is perfect. I've gained skills that I can immediately apply in my studies and future career.",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Student",
    content: "The community aspect of learning here is incredible. Being able to connect with other students and learn together creates a supportive environment that motivates me to keep pushing forward.",
  },
];

const ReviewsComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    calculateCardsPerView();
    window.addEventListener('resize', calculateCardsPerView);
    return () => window.removeEventListener('resize', calculateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, revies.length - cardsPerView);
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const scrollToIndex = (index: number) => {
    if (carouselRef.current && !isTransitioning) {
      setIsTransitioning(true);
      const cardWidth = carouselRef.current.scrollWidth / revies.length;
      
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      
      setCurrentIndex(index);
      
      setTimeout(() => setIsTransitioning(false), 400);
    }
  };

  const handlePrevious = () => {
    if (canGoPrevious && !isTransitioning) {
      const newIndex = currentIndex - 1;
      scrollToIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (canGoNext && !isTransitioning) {
      const newIndex = currentIndex + 1;
      scrollToIndex(newIndex);
    }
  };

  const toggleExpanded = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="w-[72%] mx-auto bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-2">
          <h3 className="text-2xl sm:text-3xl font-normal text-black leading-tight">
            The reviews are in
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic text-black leading-tight">
            What Learners are saying
          </h2>
          
          <div className="flex gap-2 self-end">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevious}
              disabled={!canGoPrevious || isTransitioning}
              className={`
                border transition-all duration-300
                ${canGoPrevious && !isTransitioning 
                  ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' 
                  : 'border-gray-300 text-gray-300 cursor-not-allowed hover:bg-transparent hover:text-gray-300'
                }
              `}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              disabled={!canGoNext || isTransitioning}
              className={`
                border transition-all duration-300
                ${canGoNext && !isTransitioning 
                  ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' 
                  : 'border-gray-300 text-gray-300 cursor-not-allowed hover:bg-transparent hover:text-gray-300'
                }
              `}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        <div 
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto scroll-smooth py-2 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {revies.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className={`
                min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] max-w-[400px]
                bg-white border border-gray-300 shadow-sm
                transition-all duration-300 ease-in-out
                hover:shadow-lg hover:-translate-y-1
                ${isTransitioning ? 'opacity-70 pointer-events-none' : ''}
              `}
            >
              <CardContent className="p-6 flex flex-col h-full min-h-[200px]">
                <div className="text-4xl sm:text-5xl font-normal italic text-black mb-4 leading-none">
                  "
                </div>

                <div 
                  className={`
                    flex-1 text-lg sm:text-xl text-black leading-tight cursor-pointer
                    border-b border-gray-300 pb-4 mb-4
                    transition-all duration-400 ease-in-out
                    ${expandedCard === testimonial.id 
                      ? 'line-clamp-none' 
                      : 'line-clamp-4'
                    }
                  `}
                  onClick={() => toggleExpanded(testimonial.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpanded(testimonial.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Click to expand testimonial"
                >
                  {testimonial.content}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105">
                    <img 
                      src="/person.png" 
                      alt="Avatar icon" 
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-lg sm:text-xl text-black leading-tight">
                        {testimonial.name}
                      </h4>
                    </div>
                    <p className="font-medium italic text-lg sm:text-xl text-gray-500 leading-tight">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsComponent;