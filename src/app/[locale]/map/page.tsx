'use client';

import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/components/map/KakaoLoader';
import Card from '@/components/map/Card';
import DrawerMobile from '@/components/map/DrawerMobile';
import { useEffect, useState } from 'react';
import Dropdown from '@/components/common/Dropdown';
import nightData from '@/data/viewNightSpot_ko.json';
import marketData from '@/data/marketData.json';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

const BasicMap = () => {
  const { locale } = useParams();

  const tm = useTranslations('map');

  const [selectedMarker, setSelectedMarker] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const options = [tm('option.night'), tm('option.history'), tm('option.store')];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(nightData);
  const [markerUrl, setMarkerUrl] = useState('/images/nightMarker.png');

  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [marketMarkers, setMarketMarkers] = useState([]);
  const [isMarket, setIsMarket] = useState(false);

  useKakaoLoader();

  /* ----------------------------------- 번역 ----------------------------------- */
  useEffect(() => {
    const loadInitialData = async () => {
      const initialData = (await import(`../../../../messages/nightViewSpot/${locale}.json`))
        .default;

      const initialOptions = await import(`../../../../messages/map/${locale}.json`);
      setData(initialData);
    };

    loadInitialData();
  }, [locale]);

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

  /* --------------------------------- 드롭다운 변경 --------------------------------- */

  const handleSelect = async (option: string) => {
    let selectedData;
    let markerPath;

    if (option === tm('option.night')) {
      setIsMarket(false);
      markerPath = '/images/nightMarker.png';
      selectedData = (await import(`../../../../messages/nightViewSpot/${locale}.json`)).default;
      console.log('selectedData: ', selectedData);
    } else if (option === tm('option.history')) {
      setIsMarket(false);
      markerPath = '/images/historicMarker.png';
      selectedData = (await import(`../../../../messages/historicSite/${locale}.json`)).default;
      console.log('selectedData: ', selectedData);
    } else if (option === tm('option.store')) {
      setIsMarket(true);
      markerPath = '/images/marketMarker.png';
      // selectedData = (await import(`../../../../messages/전통시장/${locale}.json`)).default;
      selectedData = marketData;
    }

    setMarkerUrl(markerPath as string);
    setData(selectedData);
  };

  /* ---------------------------------- 전통시장 ---------------------------------- */

  useEffect(() => {
    if (!isMarket) return;

    const ps = new kakao.maps.services.Places();
    const bounds = new kakao.maps.LatLngBounds();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const markers: any = [];

    const processMarket = (index: number) => {
      if (index >= marketData.DATA.length) {
        setMarketMarkers(markers);
        return;
      }

      const marketName = marketData.DATA[index].location;

      ps.keywordSearch(marketName, (data, status) => {
        if (status === kakao.maps.services.Status.OK && data.length > 0) {
          const place = data[0];
          console.log(place);
          const position = {
            lat: parseFloat(place.y),
            lng: parseFloat(place.x),
          };
          const road_address_name = place.road_address_name;
          const phone = place.phone || '';

          const markerInfo = {
            position: position,
            title: marketData.DATA[index].name,
            location: road_address_name,
            phone: phone,
          };

          markers.push(markerInfo);
          bounds.extend(new kakao.maps.LatLng(position.lat, position.lng));
        }

        processMarket(index + 1);
      });
    };

    processMarket(0);
  }, [map, isMarket]);

  return (
    <>
      <section className="flex w-full h-[calc(92vh-80px)] p-8 pt-0 gap-8">
        <h2 className="sr-only">지도</h2>
        <div className="hidden md:block flex-1 min-w-[25vw]">
          <Card marker={selectedMarker} src={`/images/seoul_logo.svg`} />
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
          onCreate={setMap}
        >
          <MarkerClusterer
            averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
            minLevel={10} // 클러스터 할 최소 지도 레벨
          >
            {/* 기본 마커 찍기 로직 */}
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {console.log(data)}
            {data.DATA.map((item: any, index: number) => (
              <MapMarker
                key={index}
                position={{
                  lat: parseFloat(item.la || item.latitude),
                  lng: parseFloat(item.lo || item.longitude),
                }}
                image={{
                  src: markerUrl,
                  size: {
                    width: 30,
                    height: 40,
                  },
                }}
                onClick={() => {
                  setSelectedMarker({
                    title: item.title || item.titlekor || item.name || '',
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

            {/* 전통시장 마커 따로 뺌*/}
            {isMarket &&
              marketMarkers.map(
                (
                  marker: {
                    position: { lat: number; lng: number };
                    title: string;
                    location: string;
                  },
                  index: number,
                ) => (
                  <MapMarker
                    key={`market-${index}`}
                    position={marker.position}
                    image={{
                      src: markerUrl,
                      size: { width: 30, height: 40 },
                    }}
                    onClick={() => {
                      setSelectedMarker({
                        title: marker.title,
                        addr: marker.location,
                      });
                    }}
                  />
                ),
              )}
          </MarkerClusterer>

          <span className="hidden md:block absolute bg-white border border-black rounded-md text-black left-1/3 top-44 z-20">
            <Dropdown
              options={options}
              defaultOption={tm('option.night')}
              onSelect={handleSelect}
            />
          </span>
        </Map>
      </section>
      <div className="block md:hidden">
        <DrawerMobile
          marker={selectedMarker}
          src={`/images/seoul_logo.svg`}
          open={isOpen}
          setOpen={setIsOpen}
        />
      </div>{' '}
    </>
  );
};

export default BasicMap;
