'use client';

import Input from '@/components/common/Input';
import ItemCard from '@/components/common/ItemCard';
import Modal from '@/components/common/Modal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <Input />
      <div className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-[2.125rem] px-4 md:px-[8.375rem] mt-8">
        <button onClick={openModal}>
          <ItemCard />
        </button>
        <button onClick={openModal}>
          <ItemCard />
        </button>
        <button onClick={openModal}>
          <ItemCard />
        </button>
        <button onClick={openModal}>
          <ItemCard />
        </button>
        <button onClick={openModal}>
          <ItemCard />
        </button>
        <button onClick={openModal}>
          <ItemCard />
        </button>
        <button onClick={openModal}>
          <ItemCard />
        </button>
        <button onClick={openModal}>
          <ItemCard />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          모달 내용 출력하는 컴포넌트 하나 만들어서 추가하면 될 듯<br />
          그리드는 일단 나중에
          <br />
          내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용
          엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청
          길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱 내용 엄청 길지롱
        </div>
      </Modal>
    </div>
  );
}
