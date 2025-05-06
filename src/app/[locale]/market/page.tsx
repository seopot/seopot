'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import ItemCard from '@/components/common/ItemCard';
import Input from '@/components/common/Input';
import { useSearch } from '@/hooks/useSearch';
import Modal from '@/components/common/Modal';
import ModalContentMarket from '@/components/ModalContentMarket';
import SkeletonGrid from '@/components/common/SkeletonGrid';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { SpotData } from '@/types/spotData';

const Market = () => {
  const t = useTranslations('market');
  const tc = useTranslations('common');
  const { locale } = useParams();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [data, setData] = useState<SpotData[]>([]);
  const [selectedSpot, setSelectedSpot] = useState<SpotData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [displayCount, setDisplayCount] = useState<number>(30);
  const [hasMore, setHasMore] = useState<boolean>(true);

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

  const displayItems =
    searchTerm.trim() === '' ? data.slice(0, displayCount) : filteredItems.slice(0, displayCount);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  const loadMoreItems = useCallback(() => {
    if (isLoading || !hasMore) return;
    setDisplayCount(prev => prev + 40);
    setHasMore(data.length > displayCount + 40);
  }, [isLoading, hasMore, data.length, displayCount]);

  useEffect(() => {
    if (isLoading) return;

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreItems();
      }
    });

    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [isLoading, hasMore, displayCount, loadMoreItems]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        let localeData;
        if (locale === 'ko') {
          localeData = (await import('../../../../messages/market/ko.json')).default;
        } else if (locale === 'en') {
          localeData = (await import('../../../../messages/market/en.json')).default;
        } else if (locale === 'zh') {
          localeData = (await import('../../../../messages/market/zh.json')).default;
        } else {
          localeData = (await import('../../../../messages/market/ko.json')).default;
        }
        setData(localeData.DATA);
      } catch (error) {
        console.error(error);
        setError(t('fetchError'));
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [locale, t]);

  const openModal = (spot: SpotData) => {
    setIsModalOpen(true);
    setSelectedSpot(spot);
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
          {displayItems.map((spot, index) => (
            <div key={spot.num} ref={index === displayItems.length - 1 ? lastItemRef : null}>
              <button
                onClick={() => openModal(spot)}
                className="transition-transform hover:scale-105 focus:outline-none w-full"
              >
                <ItemCard imgSrc={spot.image_url || undefined} text={spot.title || ' '} />
              </button>
            </div>
          ))}
        </div>
      ) : data.length > 0 ? (
        <div className="text-center py-8">{tc('noSearchResults')}</div>
      ) : null}

      {hasMore && !isLoading && (
        <div className="flex justify-center mt-8">
          <div ref={lastItemRef} className="h-10"></div>
        </div>
      )}
      {isLoading && displayCount > 40 && (
        <div className="flex justify-center mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContentMarket spot={selectedSpot} />
      </Modal>
    </div>
  );
};

export default Market;
