'use client';

import Lottie from 'react-lottie-player';
import lottieData from '../../public/images/loading.json';

const Home = () => {
  return (
    <main className="relative w-full h-[calc(100vh-156px)] lg:h-[calc(92vh-60px)] overflow-hidden flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl">서팟</h1>
        <p className="pt-4">
          서울의 야경, 유적지, 전통시장을 한눈에! 여행자를 위한 서울 명소 안내 서비스
        </p>
      </div>
      <div className="absolute bottom-10 lg:bottom-52 lg:right-0 w-[300px] h-[300px] z-0 lg:rotate-90">
        <Lottie loop animationData={lottieData} play className="lg:rotate-180" />
      </div>
    </main>
  );
};

export default Home;
