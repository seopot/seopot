'use client';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/components/map/KakaoLoader';
import Card from '@/components/map/Card';
import DrawerMobile from '@/components/map/DrawerMobile';
import data from '@/data/night.json';
import { useEffect, useState } from 'react';
import { title } from 'process';

export default function BasicMap() {
  const [selectedMarker, setSelectedMarker] = useState({
    id: '',
    title: '',
    addr: '',
    tel_no: '',
    operating_time: '',
    entr_fee: '',
    homepage: '',
    url: '',
    src: '',
  });
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useKakaoLoader();

  /* --------------------------------- 모바일 확인 --------------------------------- */

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // TODO: test 데이터 실제 데이터로 변경

  const test = {
    id: '1',
    title: '테스트 제목',
    addr: '테스트 위치',
    tel_no: '010-1234-5678',
    operating_time: '09:00 - 18:00',
    entr_fee: '무료',
    url: 'https://example.com',
    src: 'https://i.namu.wiki/i/IDtrMOMYZpFfzTynAAEK2nVQhsQD0XJIz21EJf9n6eMP1B2ig7Ln4dDK9mvTnOdZrrKvOHVRp4pr_kNpzz8H8Oo0nabqo77SkcpsuWslJ22VKKBrMmnBBgEWwE6MrMrfDAIiT_ZIVO7Fw0E4DeLG3Q.webp',
  };

  // TODO: 마커 커스텀

  return (
    <>
      <section className="flex w-full h-[calc(92vh-80px)] p-8 pt-0 gap-8">
        <h2 className="sr-only">지도</h2>
        <div className="hidden md:block min-w-[25vw]">
          <Card marker={selectedMarker} />
        </div>

        <Map
          id="map"
          center={{
            lat: 37.56663499354556,
            lng: 126.97865231281921,
          }}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '0.9375rem',
            zIndex: 10,
          }}
          level={3}
        >
          {data.DATA.map((item, index) => (
            <MapMarker
              key={index}
              position={{ lat: parseFloat(item.la), lng: parseFloat(item.lo) }}
              onClick={() => {
                console.log(item.title);
                setSelectedMarker(item);

                if (isMobile) {
                  setOpen(true);
                }
              }}
            />
          ))}
        </Map>
      </section>
      <div className="block md:hidden">
        <DrawerMobile marker={selectedMarker} open={isOpen} setOpen={setOpen} />
      </div>{' '}
    </>
  );
}
