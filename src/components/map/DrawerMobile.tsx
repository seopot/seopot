import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

import { Marker } from '@/types/marker';
import Image from 'next/image';

type DrawerMobileProps = {
  marker: Marker;
  src: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DrawerMobile = ({ marker, src, open, setOpen }: DrawerMobileProps) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{marker.title}</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col items-center px-4 py-2 text-black">
          {/* Todo : Image width height 임시 설정 
          width height 설정하거나, fill 속성으로 사용하기 */}
          <Image
            src={src}
            width={128}
            height={128}
            alt={`${marker.title}`}
            className="self-center w-32 h-32 rounded-2xl"
          />
          <div className="flex flex-col justify-center gap-3">
            {marker.addr && <p>주소: {marker.addr}</p>}
            {marker.tel_no && <p>전화번호: {marker.tel_no}</p>}
            {marker.operating_time && <p>운영시간: {marker.operating_time}</p>}
            {marker.entr_fee && <p>가격: {marker.entr_fee}</p>}
            {marker.url && <p>홈페이지: {marker.url}</p>}
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
