"use client";
import { useState, useRef, useCallback } from 'react';

interface UseDebouncedSearchOptions {
  delay?: number;
  minCharacters?: number;
}

export const useDebouncedSearch = (options: UseDebouncedSearchOptions = {}) => {
  const { delay = 500, minCharacters = 3 } = options;
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedSetSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
    
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      setDebouncedSearchQuery(query);
    }, delay);
  }, [delay]);

  const shouldSearch = debouncedSearchQuery.trim().length >= minCharacters;
  const isTyping = searchQuery.trim().length > 0 && searchQuery.trim().length < minCharacters;

  return {
    searchQuery,
    debouncedSearchQuery,
    shouldSearch,
    isTyping,
    setSearchQuery: debouncedSetSearchQuery,
  };
}; 