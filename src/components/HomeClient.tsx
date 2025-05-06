'use client';

import Lottie from 'react-lottie-player';
import lottieData from '../../public/images/loading.json';
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('common');

  return (
    <main className="relative w-full h-[calc(100vh-156px)] lg:h-[calc(92vh-60px)] overflow-hidden flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl">서팟</h1>
        <p className="pt-4">{t('project_desc')}</p>
      </div>
      <div className="absolute bottom-10 lg:bottom-52 lg:right-0 w-[300px] h-[300px] z-0 lg:rotate-90">
        <Lottie loop animationData={lottieData} play className="lg:rotate-180" />
      </div>
    </main>
  );
};

export default Home;
