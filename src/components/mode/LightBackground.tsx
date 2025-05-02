'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Light = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-lightBeige filter blur-sm"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        boxShadow: '0 0 10px 8px rgba(255, 255, 0, 0.4)',
      }}
      animate={{
        opacity: [0.1, 0.8, 0.1],
        scale: [0.8, 1.5, 0.8],
      }}
      transition={{
        duration: Math.random() * 2 + 2,
        ease: 'easeInOut',
        repeat: Number.POSITIVE_INFINITY,
        delay: delay,
      }}
    />
  );
};

const LightBackground = () => {
  const [light, setLight] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      delay: number;
    }>
  >([]);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && resolvedTheme === 'dark') {
      const newLight = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 8,
        delay: Math.random() * 10,
      }));

      setLight(newLight);
    } else {
      setLight([]);
    }
  }, [resolvedTheme, mounted]);

  if (!mounted) return null;

  if (resolvedTheme !== 'dark') return null;

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
      {light.map(light => (
        <Light key={light.id} x={light.x} y={light.y} size={light.size} delay={light.delay} />
      ))}
    </div>
  );
};

export default LightBackground;
