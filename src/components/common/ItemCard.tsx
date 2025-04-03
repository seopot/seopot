import Image from 'next/image';

const TEMPORARY_WORD = '대한민국';

const ItemCard = () => {
  // Todo: 이미지 src, text를 props로 받아오도록 변경하기
  // 현재 임시 이미지 사용

  return (
    <div className="relative w-full sm:w-[18.75rem] h-[6.875rem] sm:h-[17.8125rem] bg-lightBeige group">
      <div className="absolute inset-0 flex items-center justify-center m-auto w-[95%] md:w-[17.5rem] h-[90%] md:h-[16.25rem] bg-lightBeige overflow-hidden">
        <Image
          src="/images/n.png"
          alt="temporary_img"
          fill
          className="object-cover sm:transition-all sm:duration-300 sm:group-hover:brightness-50"
        />
        <span className="absolute bottom-0 sm:bottom-4 right-4 text-lightBeige sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300 text-[1.6875rem] font-bold">
          {TEMPORARY_WORD}
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
