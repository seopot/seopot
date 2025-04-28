'use client';

import { useState, useEffect } from 'react';
import ItemCard from '@/components/common/ItemCard';
import Input from '@/components/common/Input';
import { useSearch } from '@/hooks/useSearch';
import Modal from '@/components/common/Modal';
import ModalContent from '@/components/ModalContent';
import SkeletonGrid from '@/components/common/SkeletonGrid';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

type SpotData = {
  lo: string;
  la: string;
  tel_no: string | null;
  bus: string | null;
  contents: string | null;
  operating_time: string | null;
  addr: string | null;
  subject_cd: string | null;
  reg_date: number | null;
  url: string | null;
  free_yn: string | null;
  entr_fee: string | null;
  num: number | null;
  title: string | null;
  subway: string | null;
  mod_date: number | null;
  parking_info: string | null;
  image_url?: string;
};

const NightViewSpot = () => {
  const t = useTranslations('view');
  const tc = useTranslations('common');
  const { locale } = useParams();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [data, setData] = useState<SpotData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        let localeData;
        if (locale === 'ko') {
          localeData = (await import('../../../../messages/nightViewSpot/ko.json')).default;
        } else if (locale === 'en') {
          localeData = (await import('../../../../messages/nightViewSpot/en.json')).default;
        } else if (locale === 'zh') {
          localeData = (await import('../../../../messages/nightViewSpot/zh.json')).default;
        } else {
          localeData = (await import('../../../../messages/nightViewSpot/ko.json')).default;
        }
        setData(localeData.nightViewSpot);
      } catch (error) {
        setError(t('fetchError'));
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [locale]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { filteredItems, handleSearch } = useSearch({
    items: data,
    searchField: 'title',
    initialSearchTerm: '',
  });

  const displayItems = filteredItems.length > 0 || data.length === 0 ? filteredItems : data;

  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex m-auto justify-center pb-4">
        <Input onSearch={handleSearch} />
      </div>

      {isLoading ? (
        <SkeletonGrid count={12} />
      ) : displayItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayItems.map(spot => (
            <button
              key={spot.num}
              onClick={() => openModal()}
              className="transition-transform hover:scale-105 focus:outline-none"
            >
              <ItemCard imgSrc={spot.image_url || undefined} text={spot.title || ' '} />
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">{tc('noSearchResults')}</div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent />
      </Modal>
    </div>
  );
};

export default NightViewSpot;
