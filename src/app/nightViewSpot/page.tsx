'use client';

import { useEffect } from 'react';
import { getNightViewSpots } from '@/services/getNightViewSpots';

const NightViewSpot = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNightViewSpots(1, 51);
        console.log('야경 명소 데이터:', data);
      } catch (error) {
        console.error('가져오기 실패:', error);
      }
    };

    fetchData();
  }, []);

  return <div>Night View Spot</div>;
};

export default NightViewSpot;
