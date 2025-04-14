'use client';

import { useEffect, useState } from 'react';
import { getNightViewSpots } from '@/services/getNightViewSpots';
import ItemCard from '@/components/common/ItemCard';

const NightViewSpot = () => {
  const [spots, setSpots] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getNightViewSpots(1, 51);
        // console.log(data.viewNightSpot.row);
        setSpots(data.viewNightSpot.row);
      } catch (error) {
        console.error('가져오기 실패:', error);
        setError('야경 명소 데이터를 불러오는데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // loading이랑 error는 임시로 사용
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 : {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {spots.map((spot, _) => (
          <ItemCard key={spot.NUM} imgSrc={spot.img_src || undefined} text={spot.TITLE || ' '} />
        ))}
      </div>
    </div>
  );
};

export default NightViewSpot;
