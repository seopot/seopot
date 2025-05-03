'use client';

import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

const Input = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const tc = useTranslations('common');

  const handleSearch = () => {
    const query = inputRef.current?.value || '';
    onSearch(query);
  };

  return (
    <div className="w-[80%] max-w-[60rem] sm:max-w-[40rem] flex">
      <input
        type="text"
        ref={inputRef}
        placeholder={tc('searchInput')}
        className="w-full px-4 py-2 bg-lightBeige rounded-l-2xl rounded-r-none focus:outline-none text-sm sm:text-base dark:text-navy"
        onKeyDown={e => {
          if (e.key === 'Enter') handleSearch();
        }}
      />
      <button
        onClick={handleSearch}
        className="flex justify-center items-center px-3 py-2 bg-lightBeige rounded-r-2xl rounded-l-none hover:bg-lightBrown sm:px-4 dark:text-navy dark:hover:bg-lightNavy dark:hover:text-white"
      >
        <Search className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default Input;
