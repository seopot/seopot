import { useEffect, useState } from 'react';
import Dropdown from './common/Dropdown';
import { languageOptions } from '@/constants/language';
import { useRouter, usePathname } from 'next/navigation';

type LanguageDropdownProps = {
  buttonClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
};

const LanguageDropdown: React.FC<LanguageDropdownProps> = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('한국어');
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

      const newPathname = pathname.replace(/^\/[^\/]+/, `/${foundOption.code}`);
      router.push(newPathname);
    }
  };

  if (isMounted) {
    return (
      <Dropdown
        options={languageOptions.map(option => option.display)}
        defaultOption={currentLanguage}
        onSelect={handleLanguageSelect}
        variant="language"
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
