'use client';

import { Search } from 'lucide-react';
import { useRef } from 'react';

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const query = inputRef.current?.value || '';
    console.log('Search: ', query);
  };

  return (
    <div className="w-[80%] max-w-[60rem] md:max-w-[40rem] flex">
      <input
        type="text"
        ref={inputRef}
        placeholder="검색어를 입력하세요."
        className="w-full px-4 py-2 bg-lightBeige rounded-l-2xl focus:outline-none sm:text-sm dark:text-navy"
      />
      <button
        onClick={handleSearch}
        className="flex justify-center items-center px-4 py-2 bg-lightBeige rounded-r-2xl hover:bg-lightNavy sm:px-3 dark:text-navy"
      >
        <Search className="w-5 h-5 sm:w-4 sm:h-4" />
      </button>
    </div>
  );
};

export default Input;
