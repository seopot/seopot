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
};

const HistoricSite = () => {
  const t = useTranslations();
  const { locale } = useParams();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [data, setData] = useState<SpotData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const response = await import(`@/data/historic_${locale}.json`);
        const responseData = response.default.DATA;
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        // console.error('Failed to load data:', error);
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
              <ItemCard text={spot.title || ' '} />
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">{t('noSearchResults')}</div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent />
      </Modal>
    </div>
  );
};

export default HistoricSite;
