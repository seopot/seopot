const Card = ({ marker }: { marker: Marker }) => {
  return (
    <div className="flex flex-col w-full h-full bg-white border-darkBeige-1 rounded-2xl p-6 gap-6">
      <strong className="text-2xl font-gMedium">{marker.title}</strong>
      <img src={`${marker.src}`} alt={`${marker.title}`} className="rounded-2xl" />

      <div className="flex flex-col gap-6">
        <p>주소: {marker.location}</p>
        <p>전화번호: {marker.phone}</p>
        <p>운영시간: {marker.time}</p>
        <p>가격: {marker.price}</p>
        <p>홈페이지: {marker.homepage}</p>
      </div>
    </div>
  );
};

export default Card;
