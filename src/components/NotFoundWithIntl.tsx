'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NotFoundWithIntl = () => {
  const [isClient, setIsClient] = useState(false);
  const tc = useTranslations('common.notFound');

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-20">
      <div className="flex items-center gap-4 text-4xl sm:text-5xl">
        <span>4</span>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop',
          }}
          style={{ width: '80px', height: '80px' }}
          className="relative"
        >
          <Image
            src="/images/seoul_logo.svg"
            alt="Seoul Logo Spinner"
            width={50}
            height={50}
            className="w-full h-full"
            priority
          />
        </motion.div>
        <span>4</span>
      </div>
      <div>{tc('notFound')}</div>
      <Link
        href="/"
        className="p-4 bg-lightBeige hover:bg-darkBeige dark:bg-lighterNavy hover:dark:bg-lightNavy rounded-xl text-xl font-gBold "
      >
        {tc('home')}
      </Link>
    </div>
  );
};

export default NotFoundWithIntl;
