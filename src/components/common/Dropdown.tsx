import useOutsideClick from '@/hooks/useOutsideClick';
import { useState } from 'react';

type DropdownProps = {
  options: string[];
  defaultOption?: string;
  onSelect?: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption, onSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption || options[0]);

  const dropdownRef = useOutsideClick(() => setIsDropdownOpen(false));

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    if (onSelect) onSelect(option);
    setIsDropdownOpen(false);
  };

  return (
    <article className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 w-[4.5rem] justify-center"
      >
        <span className="truncate">{selectedOption}</span>
      </button>

      {isDropdownOpen && (
        <ul className="absolute top-full -left-4 lg:-left-8 mt-1 bg-lightBeige text-navy py-1 w-[6rem] z-30">
          {options.map(option => (
            <li key={option}>
              <button
                onClick={() => handleSelect(option)}
                className="w-full px-4 py-2 text-left hover:bg-opacity-10 hover:bg-navy"
              >
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
