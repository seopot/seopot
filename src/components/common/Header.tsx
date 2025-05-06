'use client';

import Link from 'next/link';
import { Menu, ChevronRight, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import CornerPattern from './CornerPattern';
import useOutsideClick from '@/hooks/useOutsideClick';
import LanguageDropdown from '../LanguageDropdown';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const [locale, setLocale] = useState('ko');

  useEffect(() => {
    const stored = localStorage.getItem('language') || 'ko';
    setLocale(stored);
  }, []);

  const tc = useTranslations('common.header');

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      handleCloseMenu();
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menuRef = useOutsideClick(() => setIsMenuOpen(false));

  const isActive = (path: string) => {
    const pathSegments = pathname.split('/');
    return pathSegments[pathSegments.length - 1] === path.replace('/', '');
  };

  return (
    <>
      <div className="w-full h-24 lg:h-0 pt-0 lg:pt-[8%] bg-tile bg-cover drop-shadow-[0px_4px_12px_rgba(248,252,255,0.8)]" />
      <header className="flex flex-row justify-between items-center gap-20 px-4 md:px-8 pb-4 md:pb-8 text-lg md:text-xl">
        <Link href="/" tabIndex={0}>
          <div className="flex justify-center items-center gap-1">
            <Image src="/images/seopot.png" alt="서팟" width={25} height={25} />
            서팟
          </div>
        </Link>

        <nav
          className={`hidden ${locale === 'en' ? 'xl:flex' : 'lg:flex'} flex-row gap-16 ${
            locale === 'en' ? 'text-base' : 'text-lg'
          }`}
        >
          <Link href="/map" className="group relative" tabIndex={0}>
            {tc('map')}
            <span
              className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-red transition-all duration-300 ${
                isActive('/map') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>
          <Link href="/nightViewSpot" className="group relative" tabIndex={0}>
            {tc('nightViewSpot')}
            <span
              className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-orange transition-all duration-300 ${
                isActive('/nightViewSpot') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>
          <Link href="/market" className="group relative" tabIndex={0}>
            {tc('market')}
            <span
              className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-yellow transition-all duration-300 ${
                isActive('/market') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>
          <Link href="/historicSite" className="group relative" tabIndex={0}>
            {tc('historicSite')}
            <span
              className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-green transition-all duration-300 ${
                isActive('/historicSite') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>
          {/* <Link href="/menu" className="group relative" tabIndex={0}>
            {tc('menu')}
            <span
              className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-blue transition-all duration-300 ${
                isActive('/menu') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link> */}
        </nav>

        <div className="flex gap-4 text-sm md:text-base">
          {isMounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
              tabIndex={0}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
          )}
          <div className="flex items-center gap-2" tabIndex={0}>
            <LanguageDropdown />
          </div>
          <button
            tabIndex={0}
            onClick={handleOpenMenu}
            className={`${
              locale === 'en' ? 'xl:hidden' : 'lg:hidden'
            } flex items-center justify-center`}
          >
            <Menu />
          </button>
        </div>

        {isMenuOpen && (
          <>
            <div
              className={`${
                locale === 'en' ? 'xl:hidden' : 'lg:hidden'
              } fixed top-0 left-0 w-screen h-screen bg-black opacity-20 z-40`}
            />
            <div
              ref={menuRef}
              className={`fixed top-0 right-0 w-[80%] max-w-96 h-full p-8 border-2 border-darkerBrown bg-darkBrown transform ${
                locale === 'en' ? 'xl:hidden' : 'lg:hidden'
              } z-50`}
            >
              <button tabIndex={0} onClick={handleCloseMenu} className="absolute top-1/2 left-0 ">
                <ChevronRight className="w-8 h-8 text-navy" />
              </button>
              <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-texture bg-cover bg-no-repeat opacity-10 pointer-events-none" />
              <div className="flex flex-col gap-8 w-full h-full">
                <div className="relative h-full p-3 sm:p-4 border-2 border-lightBrown bg-lighterBrown">
                  <CornerPattern borderColor="border-lightBrown" />
                  <nav className="flex flex-col justify-center items-center gap-12 h-full p-4 border-2 border-lightBrown bg-lighterBrown text-base text-navy">
                    <Link
                      href="/map"
                      className={`${
                        isActive('/map')
                          ? 'underline decoration-red decoration-2 underline-offset-4'
                          : ''
                      }`}
                      tabIndex={0}
                      onClick={handleLinkClick}
                    >
                      {tc('map')}
                    </Link>
                    <Link
                      href="/nightViewSpot"
                      className={`${
                        isActive('/nightViewSpot')
                          ? 'underline decoration-orange decoration-2 underline-offset-4'
                          : ''
                      }`}
                      tabIndex={0}
                      onClick={handleLinkClick}
                    >
                      {tc('nightViewSpot')}
                    </Link>
                    <Link
                      href="/market"
                      className={`${
                        isActive('/market')
                          ? 'underline decoration-yellow decoration-2 underline-offset-4'
                          : ''
                      }`}
                      tabIndex={0}
                      onClick={handleLinkClick}
                    >
                      {tc('market')}
                    </Link>
                    <Link
                      href="/historicSite"
                      className={`${
                        isActive('/historicSite')
                          ? 'underline decoration-green decoration-2 underline-offset-4'
                          : ''
                      }`}
                      tabIndex={0}
                      onClick={handleLinkClick}
                    >
                      {tc('historicSite')}
                    </Link>
                    {/* <Link
                      href="/menu"
                      className={`${
                        isActive('/menu')
                          ? 'underline decoration-blue decoration-2 underline-offset-4'
                          : ''
                      }`}
                      tabIndex={0}
                      onClick={handleLinkClick}
                    >
                      {tc('menu')}
                    </Link> */}
                  </nav>
                </div>
                <div className="w-full p-4 sm:p-5 bg-brown">
                  <div className="w-full p-20 bg-lightBrown" />
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
