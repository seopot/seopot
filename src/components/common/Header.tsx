'use client';

import Link from 'next/link';
import { Globe, Menu, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import CornerPattern from './CornerPattern';
import useOutsideClick from '@/hooks/useOutsideClick';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const menuRef = useOutsideClick(() => setIsMenuOpen(false));

  return (
    <>
      <div className="w-full h-24 lg:h-0 pt-0 lg:pt-[8%] bg-tile bg-cover drop-shadow-[0px_4px_12px_rgba(248,252,255,0.8)]" />
      <header className="flex flex-row justify-between items-center gap-20 px-4 md:px-8 pb-4 md:pb-8 text-lg md:text-xl">
        <Link href="/" tabIndex={0}>
          프로젝트 이름
        </Link>

        <nav className="hidden lg:flex flex-row gap-16 text-lg">
          <Link href="/map" className="group relative" tabIndex={0}>
            지도
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-red group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/nightViewSpot" className="group relative" tabIndex={0}>
            야경명소
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-orange group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/market" className="group relative" tabIndex={0}>
            전통시장
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/historicSite" className="group relative" tabIndex={0}>
            유적지
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-green group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/menu" className="group relative" tabIndex={0}>
            메뉴
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="flex gap-4 text-sm md:text-base">
          <div className="flex items-center gap-2" tabIndex={0}>
            <Globe />
            한국어
          </div>
          <button
            tabIndex={0}
            onClick={handleOpenMenu}
            className="lg:hidden flex items-center justify-center"
          >
            <Menu />
          </button>
        </div>

        {isMenuOpen && (
          <>
            <div className="lg:hidden fixed top-0 left-0 w-screen h-screen bg-black opacity-20 z-40" />
            <div
              ref={menuRef}
              className="fixed top-0 right-0 w-[80%] max-w-96 h-full p-8 border-2 border-darkerBrown bg-darkBrown transform lg:hidden z-50"
            >
              <button tabIndex={0} onClick={handleCloseMenu} className="absolute top-1/2 left-0 ">
                <ChevronRight className="w-8 h-8 text-navy" />
              </button>
              <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-texture bg-cover bg-no-repeat opacity-10 pointer-events-none" />
              <div className="flex flex-col gap-8 w-full h-full">
                <div className="relative h-full p-4 border-2 border-lightBrown bg-lighterBrown">
                  <CornerPattern borderColor="border-lightBrown" />
                  <nav className="flex flex-col justify-center items-center gap-12 h-full p-4 border-2 border-lightBrown bg-lighterBrown text-base text-navy">
                    <Link href="/map" tabIndex={0}>
                      지도
                    </Link>
                    <Link href="/nightViewSpot" tabIndex={0}>
                      야경명소
                    </Link>
                    <Link href="/market" tabIndex={0}>
                      전통시장
                    </Link>
                    <Link href="/historicSite" tabIndex={0}>
                      유적지
                    </Link>
                    <Link href="/menu" tabIndex={0}>
                      메뉴
                    </Link>
                  </nav>
                </div>
                <div className="w-full p-4 bg-brown">
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
