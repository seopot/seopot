'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
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
    </div>
  );
};
export default LoadingSpinner;
