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
  num: number;
  title: string;
  contents?: string;
  la?: string;
  lo?: string;
  src?: string;
};

const HistoricSite = () => {
  const t = useTranslations('historic');
  const tc = useTranslations('common');
  const { locale } = useParams();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [data, setData] = useState<SpotData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { filteredItems, handleSearch } = useSearch({
    items: data,
    searchField: 'title',
    initialSearchTerm: '',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const onSearch = (query: string) => {
    setSearchTerm(query);
    handleSearch(query);
  };

  const displayItems = searchTerm.trim() === '' ? data : filteredItems;

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        let localeData;
        if (locale === 'ko') {
          localeData = (await import('../../../../messages/historicSite/ko.json')).default;
        } else if (locale === 'en') {
          localeData = (await import('../../../../messages/historicSite/en.json')).default;
        } else if (locale === 'zh') {
          localeData = (await import('../../../../messages/historicSite/zh.json')).default;
        } else {
          localeData = (await import('../../../../messages/historicSite/ko.json')).default;
        }
        setData(localeData.DATA);
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

  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex m-auto justify-center pb-4">
        <Input onSearch={onSearch} />
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
              <ItemCard text={spot.title || ' '} imgSrc={spot.src} />
            </button>
          ))}
        </div>
      ) : data.length > 0 ? (
        <div className="text-center py-8">{tc('noSearchResults')}</div>
      ) : null}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent />
      </Modal>
    </div>
  );
};

export default HistoricSite;
