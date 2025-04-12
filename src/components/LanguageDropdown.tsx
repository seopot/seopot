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

  useEffect(() => {
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

  return (
    <Dropdown
      options={languageOptions.map(option => option.display)}
      defaultOption={currentLanguage}
      onSelect={handleLanguageSelect}
    />
  );
};

export default LanguageDropdown;
