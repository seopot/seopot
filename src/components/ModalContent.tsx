import {
  BusFront,
  Calendar,
  CircleDollarSign,
  MapPinned,
  Phone,
  SquareArrowOutUpRight,
  TrainFront,
} from 'lucide-react';
import { SpotData } from '@/types/spotData';
import { useTranslations } from 'next-intl';

type ModalContentProps = {
  spot: SpotData | null;
};

const ModalContent = ({ spot }: ModalContentProps) => {
  const t = useTranslations('common.modal');

  if (!spot) return null;

  return (
    <>
      {/* 모바일 레이아웃 */}
      <section className="flex flex-col gap-6 md:hidden">
        <h1 className="text-2xl font-gBold">{spot.title}</h1>
        {spot.image_url ? (
          <img
            src={spot.image_url}
            alt={spot.title || ''}
            className="w-full h-[18rem] object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-[18rem] bg-yellow rounded-lg" />
        )}
        {spot.contents && (
          <div className="prose" dangerouslySetInnerHTML={{ __html: spot.contents }} />
        )}
        <div className="space-y-4">
          {spot.operating_time && (
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2">
                <Calendar />
                <span>{t('time')}: </span>
              </div>
              <span className="flex-1">{spot.operating_time}</span>
            </div>
          )}
          {spot.tel_no && (
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2">
                <Phone />
                <span>{t('tel')}: </span>
              </div>
              <span className="flex-1">{spot.tel_no}</span>
            </div>
          )}
          {spot.entr_fee && (
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2">
                <CircleDollarSign />
                <span>{t('price')}: </span>
              </div>
              <span className="flex-1">{spot.entr_fee}</span>
            </div>
          )}
          {spot.url && (
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2">
                <SquareArrowOutUpRight />
                <span>{t('homepage')}: </span>
              </div>
              <a
                className="flex-1 text-blue-600 underline"
                href={spot.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {spot.url}
              </a>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-6">
          {spot.addr && <h2 className="text-xl font-gBold">{t('direction')}</h2>}
          <div className="space-y-4">
            {spot.addr && (
              <div className="flex items-start gap-2">
                <div className="flex items-center gap-2">
                  <MapPinned />
                  <span>{t('address')}: </span>
                </div>
                <span className="flex-1">{spot.addr}</span>
              </div>
            )}
            {spot.subway && (
              <div className="flex items-start gap-2">
                <div className="flex items-center gap-2">
                  <TrainFront />
                  <span>{t('subway')}: </span>
                </div>
                <span className="flex-1">{spot.subway}</span>
              </div>
            )}
            {spot.bus && (
              <div className="flex items-start gap-2">
                <div className="flex items-center gap-2">
                  <BusFront />
                  <span>{t('bus')}:</span>
                </div>
                <span className="flex-1">{spot.bus}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 데스크탑 레이아웃 */}
      <section className="hidden md:grid md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-4">
          {spot.image_url ? (
            <img
              src={spot.image_url}
              alt={spot.title || ''}
              className="w-full h-[18rem] object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-[18rem] bg-yellow rounded-lg" />
          )}
          <div className="flex flex-col gap-6">
            {spot.addr && <h2 className="text-xl font-gBold">{t('direction')}</h2>}
            <div className="space-y-4">
              {spot.addr && (
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-2">
                    <MapPinned />
                    <span>{t('address')}: </span>
                  </div>
                  <span className="flex-1">{spot.addr}</span>
                </div>
              )}
              {spot.subway && (
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-2">
                    <TrainFront />
                    <span>{t('subway')}: </span>
                  </div>
                  <span className="flex-1">{spot.subway}</span>
                </div>
              )}
              {spot.bus && (
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-2">
                    <BusFront />
                    <span>{t('bus')}:</span>
                  </div>
                  <span className="flex-1">{spot.bus}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-gBold">{spot.title}</h1>
          {spot.contents && (
            <div className="prose" dangerouslySetInnerHTML={{ __html: spot.contents }} />
          )}
          <div className="space-y-4">
            {spot.operating_time && (
              <div className="flex items-start gap-2">
                <div className="flex items-center gap-2">
                  <Calendar />
                  <span>{t('time')}: </span>
                </div>
                <span className="flex-1">{spot.operating_time}</span>
              </div>
            )}
            {spot.tel_no && (
              <div className="flex items-start gap-2">
                <div className="flex items-center gap-2">
                  <Phone />
                  <span>{t('tel')}: </span>
                </div>
                <span className="flex-1">{spot.tel_no}</span>
              </div>
            )}
            {spot.entr_fee && (
              <div className="flex items-start gap-2">
                <div className="flex items-center gap-2">
                  <CircleDollarSign />
                  <span>{t('price')}: </span>
                </div>
                <span className="flex-1">{spot.entr_fee}</span>
              </div>
            )}
            {spot.url && (
              <div className="flex items-start gap-2">
                <div className="flex items-center gap-2">
                  <SquareArrowOutUpRight />
                  <span>{t('homepage')}: </span>
                </div>
                <a
                  className="flex-1 text-blue-600 underline"
                  href={spot.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {spot.url}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ModalContent;
