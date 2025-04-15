'use client';

import ItemCard from '@/components/common/ItemCard';
import Modal from '@/components/common/Modal';
import ModalContent from '@/components/ModalContent';
import { useState } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-[2.125rem] px-4 md:px-[8.375rem] mt-8">
        <button onClick={openModal}>
          <ItemCard text="example" />
        </button>
        <button onClick={openModal}>
          <ItemCard text="example" />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent />
      </Modal>
    </div>
  );
};

export default Home;
