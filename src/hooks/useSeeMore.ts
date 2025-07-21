import { useState } from "react";

export function useSeeMore<T>(items: T[], initialVisible = 4) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, initialVisible);

  const toggle = () => setShowAll((prev) => !prev);

  return { visibleItems, showAll, toggle };
}
