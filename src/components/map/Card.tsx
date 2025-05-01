'use client';

import { Marker } from '@/types/marker';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Card = ({ marker, src }: { marker: Marker; src: string }) => {
  const t = useTranslations('map');

  return (
    <div className="flex flex-col w-full h-full bg-white border-darkBeige-1 rounded-2xl p-6 gap-6 overflow-auto text-black">
      <strong className="text-2xl font-gMedium">{marker.title}</strong>
      {/* Todo : Image width height 임시 설정 
       width height 설정하거나, fill 속성으로 사용하기 */}
      <Image
        src={`${src}`}
        width={128}
        height={128}
        alt={`${marker.title}`}
        className="self-center w-32 h-32 rounded-2xl"
      />
      <div className="flex flex-col gap-6">
        <p>
          {t('card.addr')}: {marker.addr}
        </p>
        {marker.tel_no && (
          <p>
            {t('card.tel_no')}: {marker.tel_no}
          </p>
        )}
        {marker.operating_time && (
          <p>
            {t('card.operating_time')}: {marker.operating_time}
          </p>
        )}
        {marker.entr_fee && (
          <p>
            {t('card.entr_fee')}: {marker.entr_fee}
          </p>
        )}
        {marker.url && (
          <p className="break-words whitespace-normal">
            {t('card.url')}:{' '}
            <a href={marker.url} className="text-xs text-realBlue">
              {marker.url}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
