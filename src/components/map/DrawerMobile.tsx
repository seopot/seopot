import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

type DrawerMobileProps = {
  marker: Marker;
};

const DrawerMobile = ({ marker }: DrawerMobileProps) => {
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{marker.title}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 py-2">
          <img src={`${marker.src}`} alt={`${marker.title}`} className="rounded-xl mb-4" />
          <div className="flex flex-col justify-center gap-3">
            <p>주소: {marker.location}</p>
            <p>전화번호: {marker.phone}</p>
            <p>운영시간: {marker.time}</p>
            <p>가격: {marker.price}</p>
            <p>홈페이지: {marker.homepage}</p>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose>닫기 </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMobile;
