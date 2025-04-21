'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
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
          />
        </motion.div>
        <span>4</span>
      </div>
      <div>Page Not Found</div>
    </div>
  );
};

export default NotFound;
