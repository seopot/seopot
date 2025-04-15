import Image from 'next/image';

type ItemCardProps = {
  imgSrc?: string;
  text: string;
  onClick?: () => void;
};

const ItemCard = ({ imgSrc, text, onClick }: ItemCardProps) => {
  const imageSource = imgSrc || '/images/seoul_logo.png';

  return (
    <article
      onClick={onClick}
      className="relative w-full h-[6.875rem] sm:h-[12.5rem] bg-lightBeige group cursor-pointer"
    >
      <article className="absolute inset-0 flex items-center justify-center m-auto w-[95%] h-[95%]  overflow-hidden">
        <Image
          src={imageSource}
          alt={`${text} 이미지`}
          fill
          className="object-cover sm:transition-all sm:duration-300 sm:group-hover:brightness-50"
        />
        <span className="absolute bottom-0 sm:bottom-4 right-4 text-lightBeige sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300 text-[1.125rem] sm:text-[1.6875rem] font-bold">
          {text}
        </span>
      </article>
    </article>
  );
};

export default ItemCard;
