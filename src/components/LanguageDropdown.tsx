import { useEffect, useState } from 'react';
import Dropdown from './common/Dropdown';
import { languageOptions } from '@/constants/language';

type LanguageDropdownProps = {
  buttonClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
};

const LanguageDropdown: React.FC<LanguageDropdownProps> = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('한국어');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const storedLanguage = localStorage.getItem('language') || 'ko';
    const foundOption = languageOptions.find(opt => opt.code === storedLanguage);

    if (foundOption) {
      setCurrentLanguage(foundOption.display);
    }
  }, []);

  const handleLanguageSelect = (selectedLanguage: string) => {
    const foundOption = languageOptions.find(opt => opt.display === selectedLanguage);
    if (foundOption) {
      localStorage.setItem('language', foundOption.code);
      setCurrentLanguage(selectedLanguage);
    }
  };

  if (isMounted) {
    return (
      <Dropdown
        options={languageOptions.map(option => option.display)}
        defaultOption={currentLanguage}
        onSelect={handleLanguageSelect}
      />
    );
  }

  return (
    <div className="relative">
      <button className="flex items-center gap-2 w-[4.5rem] justify-between">
        <span className="truncate">한국어</span>
      </button>
    </div>
  );
};

export default LanguageDropdown;
