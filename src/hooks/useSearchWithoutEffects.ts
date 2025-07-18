"use client";
import { useState, useMemo } from 'react';
import { debounce } from '@/utils/debounce';

interface University {
  name: string;
  image: string;
}

interface UseSearchWithoutEffectsOptions {
  delay?: number;
  minCharacters?: number;
}

interface UseSearchWithoutEffectsReturn {
  searchQuery: string;
  debouncedSearchQuery: string;
  selectedUniversity: University | null;
  selectedCourse: string;
  isUniversityOpen: boolean;
  isCourseOpen: boolean;
  shouldSearch: boolean;
  isTyping: boolean;
  setSearchQuery: (query: string) => void;
  setSelectedUniversity: (university: University | null) => void;
  setSelectedCourse: (course: string) => void;
  setIsUniversityOpen: (open: boolean) => void;
  setIsCourseOpen: (open: boolean) => void;
}

export function useSearchWithoutEffects(options: UseSearchWithoutEffectsOptions = {}): UseSearchWithoutEffectsReturn {
  const { delay = 500, minCharacters = 3 } = options;
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isUniversityOpen, setIsUniversityOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);

  // Create debounced function using useMemo to avoid recreating it on every render
  const debouncedSetSearch = useMemo(
    () => debounce((query: string) => {
      setDebouncedSearchQuery(query);
    }, delay),
    [delay]
  );

  const handleSetSearchQuery = (query: string) => {
    setSearchQuery(query);
    debouncedSetSearch(query);
  };

  const shouldSearch = debouncedSearchQuery.trim().length >= minCharacters;
  const isTyping = searchQuery.trim().length > 0 && searchQuery.trim().length < minCharacters;

  return {
    searchQuery,
    debouncedSearchQuery,
    selectedUniversity,
    selectedCourse,
    isUniversityOpen,
    isCourseOpen,
    shouldSearch,
    isTyping,
    setSearchQuery: handleSetSearchQuery,
    setSelectedUniversity,
    setSelectedCourse,
    setIsUniversityOpen,
    setIsCourseOpen,
  };
} 