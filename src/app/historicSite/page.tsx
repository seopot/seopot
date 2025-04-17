'use client';

import { useEffect, useState } from 'react';
import { getHistoricSpots } from '@/services/getHistoricSpots';
import ItemCard from '@/components/common/ItemCard';
import Input from '@/components/common/Input';
import { useSearch } from '@/hooks/useSearch';
import SkeletonGrid from '@/components/common/SkeletonGrid';
import Modal from '@/components/common/Modal';
import ModalContent from '@/components/ModalContent';

type SpotData = {
  SEQ: number;
  TITLEKOR: string;
  img_src?: string;
};

const HistoricSite = () => {
  const [spots, setSpots] = useState<SpotData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { filteredItems, handleSearch, setFilteredItems } = useSearch({
    items: spots,
    searchField: 'TITLEKOR',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getHistoricSpots(1, 27);
        // console.log(data.tbHanyangNearby.row);
        setSpots(data.tbHanyangNearby.row);
        setFilteredItems(data.tbHanyangNearby.row);
      } catch (error) {
        console.error('가져오기 실패:', error);
        setError('야경 명소 데이터를 불러오는데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setFilteredItems]);

  if (error) return <div>에러 : {error}</div>;
  // if (spots.length === 0) return <div>등록된 장소가 없습니다</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex m-auto justify-center pb-4">
        <Input onSearch={handleSearch} />
      </div>
      {isLoading ? (
        <SkeletonGrid count={12} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map(spot => (
            <button key={spot.SEQ} onClick={openModal}>
              <ItemCard imgSrc={spot.img_src || undefined} text={spot.TITLEKOR || ' '} />
            </button>
          ))}
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent />
      </Modal>
    </div>
  );
};

export default HistoricSite;
