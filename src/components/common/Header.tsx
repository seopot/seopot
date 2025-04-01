import Link from 'next/link';
import { Languages } from 'lucide-react';

const Header = () => {
  return (
    <>
      <div className="w-full h-24 md:h-0 pt-0 md:pt-[8%] bg-tile bg-cover" />
      <header className="flex flex-row justify-between items-center gap-20 px-8 pb-8 text-xl">
        <Link href="/">프로젝트 이름</Link>
        <nav className="flex flex-row gap-16 text-base">
          <Link href="/map" className="group relative">
            지도
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-red group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/nightViewSpot" className="group relative">
            야경명소
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-orange group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/market" className="group relative">
            전통시장
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/historicSite" className="group relative">
            유적지
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-green group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/menu" className="group relative">
            메뉴
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        <div className="flex gap-2 text-base">
          <Languages />
          한국어
        </div>
      </header>
    </>
  );
};

export default Header;
