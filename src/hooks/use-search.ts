import { useState } from 'react';

interface University {
  name: string;
  image: string;
}

interface UseSearchReturn {
  searchQuery: string;
  selectedUniversity: University | null;
  selectedCourse: string;
  isUniversityOpen: boolean;
  isCourseOpen: boolean;
  setSearchQuery: (query: string) => void;
  setSelectedUniversity: (university: University | null) => void;
  setSelectedCourse: (course: string) => void;
  setIsUniversityOpen: (open: boolean) => void;
  setIsCourseOpen: (open: boolean) => void;
}

export function useSearch(): UseSearchReturn {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isUniversityOpen, setIsUniversityOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);

  return {
    searchQuery,
    selectedUniversity,
    selectedCourse,
    isUniversityOpen,
    isCourseOpen,
    setSearchQuery,
    setSelectedUniversity,
    setSelectedCourse,
    setIsUniversityOpen,
    setIsCourseOpen,
  };
} 