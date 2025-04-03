import Image from 'next/image';

const ItemCard = () => {
  return (
    <div className="relative w-[18.75rem] h-[17.8125rem] bg-lightBeige">
      <div className="absolute inset-0 flex items-center justify-center m-auto w-[17.5rem] h-[16.25rem] bg-white ">
        <Image src="/images/n.png" alt="temporary_img" fill className="object-cover" />
      </div>
    </div>
  );
};

export default ItemCard;
