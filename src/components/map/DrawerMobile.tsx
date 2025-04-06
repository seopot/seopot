import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

type DrawerMobileProps = {
  marker: Marker;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DrawerMobile = ({ marker, open, setOpen }: DrawerMobileProps) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{marker.title}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 py-2">
          <img src={`${marker.src}`} alt={`${marker.title}`} className="rounded-xl mb-4" />
          <div className="flex flex-col justify-center gap-3">
            <p>주소: {marker.addr}</p>
            <p>전화번호: {marker.tel_no}</p>
            <p>운영시간: {marker.operating_time}</p>
            <p>가격: {marker.entr_fee}</p>
            <p>홈페이지: {marker.url}</p>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose>닫기</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMobile;
