import { useEffect, useRef, useState } from 'react';

type DropdownProps = {
  options: string[];
  defaultOption?: string;
};

const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption = '한국어' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'ko');
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedOption(option);

    if (option === '한국어') localStorage.setItem('language', 'ko');
    else if (option === 'English') localStorage.setItem('language', 'en');
    else if (option === '中文') localStorage.setItem('language', 'zh');

    setIsOpen(false);
  };

  return (
    <article className="relative z-30" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
        {selectedOption}
      </button>

      {isOpen && (
        <ul className="absolute top-full -left-4 lg:-left-8 mt-1 bg-lightBeige text-navy py-1 min-w-[6rem]">
          {options.map(option => (
            <li key={option}>
              <button onClick={() => handleSelect(option)} className="w-full px-4 py-2 text-left">
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default Dropdown;
