import { useState, useCallback } from 'react';

interface UseSearchProps<T> {
  items: T[];
  searchField: keyof T;
  initialSearchTerm: string | null;
}

export const useSearch = <T extends object>({
  items,
  searchField,
  initialSearchTerm,
}: UseSearchProps<T>) => {
  const [filteredItems, setFilteredItems] = useState<T[]>(items);

  const handleSearch = useCallback(
    (query: string) => {
      if (!query.trim()) {
        setFilteredItems(items);
        return;
      }

      const filtered = items.filter(item => {
        const fieldValue = String(item[searchField]).toLowerCase();
        return fieldValue.includes(query.toLowerCase());
      });

      setFilteredItems(filtered);
    },
    [items, searchField],
  );

  return {
    filteredItems,
    handleSearch,
    setFilteredItems,
  };
};
