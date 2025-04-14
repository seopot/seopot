'use client';

import { Search } from 'lucide-react';
import { useRef } from 'react';

const Input = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const query = inputRef.current?.value || '';
    onSearch(query);
  };

  return (
    <div className="w-[80%] max-w-[60rem] sm:max-w-[40rem] flex">
      <input
        type="text"
        ref={inputRef}
        placeholder="검색어를 입력하세요."
        className="w-full px-4 py-2 bg-lightBeige rounded-l-2xl focus:outline-none text-sm sm:text-base dark:text-navy"
      />
      <button
        onClick={handleSearch}
        className="flex justify-center items-center px-3 py-2 bg-lightBeige rounded-r-2xl hover:bg-lightBrown sm:px-4 dark:text-navy"
      >
        <Search className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default Input;
