import { MapPinned } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ModalContentProps } from './ModalContent';

const ModalContentMarket = ({ spot }: ModalContentProps) => {
  const t = useTranslations('common.modal');

  if (!spot) return null;

  return (
    <>
      <section className="flex flex-col gap-6">
        <h1 className="text-center text-2xl font-gBold">{spot.title}</h1>
        {spot.addr && <h2 className="text-xl font-gBold">{t('direction')}</h2>}
        {spot.addr && (
          <div className="flex items-start gap-2">
            <div className="flex items-center gap-2">
              <MapPinned />
              <span>{t('address')}: </span>
            </div>
            <span className="flex-1">{spot.addr}</span>
          </div>
        )}
      </section>
    </>
  );
};

export default ModalContentMarket;
