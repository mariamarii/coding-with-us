export const splitItemsIntoColumns = (items: string[], columns: number) => {
  const itemsPerColumn = Math.ceil(items.length / columns);
  const result: string[][] = [];
  
  for (let i = 0; i < columns; i++) {
    const start = i * itemsPerColumn;
    const end = start + itemsPerColumn;
    result.push(items.slice(start, end));
  }
  
  return result;
}; 