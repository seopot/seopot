import Image from 'next/image';

type ItemCardProps = {
  imgSrc?: string;
  text: string;
};

const ItemCard = ({ imgSrc, text }: ItemCardProps) => {
  const imageSource = imgSrc || '/images/seoul_logo.png';

  return (
    <article className="relative w-full sm:w-[18.75rem] h-[6.875rem] sm:h-[17.8125rem] bg-lightBeige group">
      <article className="absolute inset-0 flex items-center justify-center m-auto w-[95%] md:w-[17.5rem] h-[90%] md:h-[16.25rem] overflow-hidden">
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
