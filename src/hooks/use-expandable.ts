import { useState } from 'react';

interface UseExpandableReturn {
  expandedCard: number | null;
  toggleExpanded: (id: number) => void;
}

export function useExpandable(): UseExpandableReturn {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return {
    expandedCard,
    toggleExpanded,
  };
} 