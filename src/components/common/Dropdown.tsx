import useOutsideClick from '@/hooks/useOutsideClick';
import clsx from 'clsx';
import { Globe } from 'lucide-react';
import { useState } from 'react';

type DropdownProps = {
  options: string[];
  defaultOption?: string;
  onSelect?: (option: string) => void;
  variant?: 'default' | 'language';
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultOption,
  onSelect,
  variant = 'default',
}) => {
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
        className={clsx(
          'flex items-center  gap-2',
          variant === 'default' ? 'justify-center px-2' : 'w-[6rem] justify-start',
        )}
      >
        {variant === 'language' && <Globe />}
        <span className="flex justify-center items-center">{selectedOption}</span>
      </button>

      {isDropdownOpen && (
        <ul className="absolute top-full mt-1 bg-lightBeige text-navy py-1 w-auto whitespace-nowrap z-30">
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
