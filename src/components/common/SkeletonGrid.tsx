import CardSkeleton from './CardSkeleton';

const SkeletonGrid = ({ count = 8 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
  );
};

export default SkeletonGrid;
