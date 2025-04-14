import {
  BusFront,
  Calendar,
  CircleDollarSign,
  MapPinned,
  Phone,
  SquareArrowOutUpRight,
  TrainFront,
} from 'lucide-react';

const ModalContent = () => {
  return (
    <>
      {/* 모바일 레이아웃 */}
      <section className="flex flex-col gap-6 md:hidden">
        <h1 className="text-2xl font-gBold">남산서울타워</h1>
        <div className="w-full h-[18rem] bg-yellow rounded-lg">이미지 들어갈 공간</div>
        <p>
          남산서울타워는 효율적인 방송전파 송수신과 한국의 전통미를 살린 관광 전망시설의 기능을
          겸비한 국내 최초의 종합전파 탑으로 방송문화와 관광산업의 미래를 위해 건립되었습니다. 세계
          유명한 종합 탑들이 그 나라 또는 그 도시의 상징적인 존재가 된 것처럼 남산서울타워 역시 지난
          40여 년간 대한민국의 대표적인 관광지이자 서울의 상징물 역할을 해왔습니다. 남산서울타워는
          서울 시내 전 지역에서 바라보이는 탑의 높이와 독특한 구조, 형태 등으로 인하여 시민의 관심과
          사랑의 대상이 되었고, 내외국인들이 즐겨 찾는 제1의 관광 명소로서의 위치를 확고히 하고
          있습니다. 최근에는 한류 바람을 몰고 온 각종 예능, 드라마의 촬영지로 이름이 높아지면서
          내외국인 관광객들이 발길이 끊이지 않는 곳입니다. (출처: 남산서울타워 홈페이지) 전망대 뿐만
          아니라 남산공원에서 산책하면서, 남산케이블카를 이용하면서, 남산둘레길 트레킹하면서 서울의
          야경도 다양하게 감상할 수 있습니다.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <div className="flex items-center gap-2">
              <Calendar />
              <span>운영시간: </span>
            </div>
            <span className="flex-1">연중무휴 *타워내 개별시설 운영시간 상이</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="flex items-center gap-2">
              <Phone />
              <span>문의처: </span>
            </div>
            <span className="flex-1">02-345509277, 9288</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="flex items-center gap-2">
              <CircleDollarSign />
              <span>요금: </span>
            </div>
            <span className="flex-1">남산공원 입장료 없음(전망대 등 개별 이용시설 요금 별도)</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="flex items-center gap-2">
              <SquareArrowOutUpRight />
              <span>홈페이지/SNS: </span>
            </div>
            <span className="flex-1">https://www.seoultower.co.kr/</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-gBold">찾아오는 길</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2">
                <MapPinned />
                <span>주소: </span>
              </div>
              <span className="flex-1">서울특별시 용산구 남산공원길 105</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2">
                <TrainFront />
                <span>지하철: </span>
              </div>
              <span className="flex-1">지하철 4호선 회현역에서 출구 도보 이용</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2">
                <BusFront />
                <span>버스:</span>
              </div>
              <span className="flex-1">
                남산순환버스 01A번, 01B번 이용 *남산공원 생태 환경 보호 일환으로 승용차랑 통행 제한
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 데스크탑 레이아웃 */}
      <section className="hidden md:grid md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-4">
          <div className="w-full h-[18rem] bg-yellow rounded-lg">이미지 들어갈 공간</div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-gBold">찾아오는 길</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="flex items-center gap-2">
                  <MapPinned />
                  <span>주소: </span>
                </div>
                <span className="flex-1">서울특별시 용산구 남산공원길 105</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex items-center gap-2">
                  <TrainFront />
                  <span>지하철: </span>
                </div>
                <span className="flex-1">지하철 4호선 회현역에서 출구 도보 이용</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex items-center gap-2">
                  <BusFront />
                  <span>버스:</span>
                </div>
                <span className="flex-1">
                  남산순환버스 01A번, 01B번 이용 *남산공원 생태 환경 보호 일환으로 승용차랑 통행
                  제한
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-gBold">남산서울타워</h1>
          <p>
            남산서울타워는 효율적인 방송전파 송수신과 한국의 전통미를 살린 관광 전망시설의 기능을
            겸비한 국내 최초의 종합전파 탑으로 방송문화와 관광산업의 미래를 위해 건립되었습니다.
            세계 유명한 종합 탑들이 그 나라 또는 그 도시의 상징적인 존재가 된 것처럼 남산서울타워
            역시 지난 40여 년간 대한민국의 대표적인 관광지이자 서울의 상징물 역할을 해왔습니다.
            남산서울타워는 서울 시내 전 지역에서 바라보이는 탑의 높이와 독특한 구조, 형태 등으로
            인하여 시민의 관심과 사랑의 대상이 되었고, 내외국인들이 즐겨 찾는 제1의 관광 명소로서의
            위치를 확고히 하고 있습니다. 최근에는 한류 바람을 몰고 온 각종 예능, 드라마의 촬영지로
            이름이 높아지면서 내외국인 관광객들이 발길이 끊이지 않는 곳입니다. (출처: 남산서울타워
            홈페이지) 전망대 뿐만 아니라 남산공원에서 산책하면서, 남산케이블카를 이용하면서,
            남산둘레길 트레킹하면서 서울의 야경도 다양하게 감상할 수 있습니다.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2">
                <Calendar />
                <span>운영시간: </span>
              </div>
              <span className="flex-1">연중무휴 *타워내 개별시설 운영시간 상이</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2">
                <Phone />
                <span>문의처: </span>
              </div>
              <span className="flex-1">02-345509277, 9288</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2">
                <CircleDollarSign />
                <span>요금: </span>
              </div>
              <span className="flex-1">
                남산공원 입장료 없음(전망대 등 개별 이용시설 요금 별도)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2">
                <SquareArrowOutUpRight />
                <span>홈페이지/SNS: </span>
              </div>
              <span className="flex-1">https://www.seoultower.co.kr/</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModalContent;
