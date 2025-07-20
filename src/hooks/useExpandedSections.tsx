import { useState } from 'react';

export function useExpandedSections(initialSections: string[]) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(initialSections)
  );

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  return { expandedSections, toggleSection };
}