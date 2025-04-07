'use client';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/components/map/KakaoLoader';
import Card from '@/components/map/Card';
import DrawerMobile from '@/components/map/DrawerMobile';
import data from '@/data/night.json';
import { useEffect, useState } from 'react';

const BasicMap = () => {
  const [selectedMarker, setSelectedMarker] = useState({
    id: '',
    title: '',
    addr: '',
    tel_no: '',
    operating_time: '',
    entr_fee: '',
    url: '',
  });
  const [isOpen, setIsOpen] = useState(false);
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

  // TODO: 마커 커스텀

  return (
    <>
      <section className="flex w-full h-[calc(92vh-80px)] p-8 pt-0 gap-8">
        <h2 className="sr-only">지도</h2>
        <div className="hidden md:block min-w-[25vw]">
          <Card marker={selectedMarker} src="dsaf" />
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
                setSelectedMarker({
                  id: item.num.toString() || '',
                  title: item.title || '',
                  addr: item.addr || '',
                  tel_no: item.tel_no || '',
                  operating_time: item.operating_time || '',
                  entr_fee: item.entr_fee || '',
                  url: item.url || '',
                });

                if (isMobile) {
                  setIsOpen(true);
                }
              }}
            />
          ))}
        </Map>
      </section>
      <div className="block md:hidden">
        <DrawerMobile marker={selectedMarker} src="" open={isOpen} setOpen={setIsOpen} />
      </div>{' '}
    </>
  );
};

export default BasicMap;
