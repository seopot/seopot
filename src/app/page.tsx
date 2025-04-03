import Input from '@/components/common/Input';
import ItemCard from '@/components/common/ItemCard';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Input />
      <div className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-[2.125rem] px-4 md:px-[8.375rem] mt-8">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}
