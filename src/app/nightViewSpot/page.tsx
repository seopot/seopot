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

        console.log('야경 명소 데이터:', spots);
      } catch (error) {
        console.error('가져오기 실패:', error);
        setError('야경 명소 데이터를 불러오는데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 : {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">야경 명소</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {spots.map((spot, index) => (
          <ItemCard
            key={index}
            imgSrc={spot.img_src || undefined} // 이미지가 없으면 undefined를 전달하여 기본값을 사용하게 함
            text={spot.name || spot.title || '야경 명소'} // 이름이나 제목을 표시, 없으면 기본값 사용
          />
        ))}
      </div>
    </div>
  );
};

export default NightViewSpot;
