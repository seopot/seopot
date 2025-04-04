'use client';

import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/components/map/KakaoLoader';
import Card from '@/components/map/Card';
import DrawerMobile from '@/components/map/DrawerMobile';

export default function BasicMap() {
  useKakaoLoader();

  // TODO: test 데이터 실제 데이터로 변경

  const test = {
    id: '1',
    title: '테스트 제목',
    location: '테스트 위치',
    phone: '010-1234-5678',
    time: '09:00 - 18:00',
    price: '무료',
    homepage: 'https://example.com',
    src: 'https://i.namu.wiki/i/IDtrMOMYZpFfzTynAAEK2nVQhsQD0XJIz21EJf9n6eMP1B2ig7Ln4dDK9mvTnOdZrrKvOHVRp4pr_kNpzz8H8Oo0nabqo77SkcpsuWslJ22VKKBrMmnBBgEWwE6MrMrfDAIiT_ZIVO7Fw0E4DeLG3Q.webp',
  };

  // TODO: 마커 커스텀

  return (
    <section className="flex w-full h-[calc(92vh-80px)] p-8 pt-0 gap-8">
      <h2 className="sr-only">지도</h2>
      <div className="hidden md:block min-w-[25vw]">
        <Card marker={test} />
      </div>
      <div className="block md:hidden">
        <DrawerMobile marker={test} />
      </div>{' '}
      <Map
        id="map"
        center={{
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '0.9375rem',
        }}
        level={3}
      />
    </section>
  );
}
