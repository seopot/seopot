'use client';

import { useState } from 'react';
import ItemCard from '@/components/common/ItemCard';
import Input from '@/components/common/Input';
import { useSearch } from '@/hooks/useSearch';
import Modal from '@/components/common/Modal';
import ModalContent from '@/components/ModalContent';
import data_ko from '@/data/viewNightSpot_ko.json';

const NightViewSpot = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const data = data_ko.DATA;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { filteredItems, handleSearch } = useSearch({
    items: data,
    searchField: 'title',
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex m-auto justify-center pb-4">
        <Input onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map(spot => (
          <button key={spot.num} onClick={openModal}>
            <ItemCard imgSrc={undefined} text={spot.title || ' '} />
          </button>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent />
      </Modal>
    </div>
  );
};

export default NightViewSpot;
