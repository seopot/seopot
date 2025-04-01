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
          </Link>
          <Link href="/nightViewSpot" className="group relative">
            야경명소
          </Link>
          <Link href="/market" className="group relative">
            전통시장
          </Link>
          <Link href="/historicSite" className="group relative">
            유적지
          </Link>
          <Link href="/menu" className="group relative">
            메뉴
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
