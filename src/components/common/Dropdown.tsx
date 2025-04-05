import useOutsideClick from '@/hooks/useOutsideClick';
import { useEffect, useState } from 'react';

type DropdownProps = {
  options: string[];
  defaultOption?: string;
};

const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption = '한국어' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  useEffect(() => {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'ko');
    }
  }, []);

  const dropdownRef = useOutsideClick(() => setIsDropdownOpen(false));

  const handleSelect = (option: string) => {
    setSelectedOption(option);

    if (option === '한국어') localStorage.setItem('language', 'ko');
    else if (option === 'English') localStorage.setItem('language', 'en');
    else if (option === '中文') localStorage.setItem('language', 'zh');

    setIsDropdownOpen(false);
  };

  return (
    <article className="relative z-30" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2"
      >
        {selectedOption}
      </button>

      {isDropdownOpen && (
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
