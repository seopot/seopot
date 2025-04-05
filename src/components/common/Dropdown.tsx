import { useState } from 'react';

type DropdownProps = {
  options: string[];
};

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <article className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
        {selectedOption}
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 mt-1 bg-lightBeige text-navy py-1 min-w-[6rem]">
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
