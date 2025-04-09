'use client';

import { useEffect } from 'react';

const NightViewSpot = () => {
  useEffect(() => {
    const fetchNightViewSpots = async () => {
      try {
        const start = 1;
        const end = 51;
        const apiUrl = `${process.env.NEXT_PUBLIC_NIGHT_VIEW_SPOT_URL}/${start}/${end}`;
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log('야경 명소 데이터:', data);
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
      }
    };

    fetchNightViewSpots();
  }, []);

  return <div>Night View Spot</div>;
};

export default NightViewSpot;
