import { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: '임시 제목',
  description: '서울 열린데이터광장 공공데이터 활용 창업 경진대회',
  openGraph: {
    title: '임시 제목',
    description:
      '서울의 야경명소, 전통시장, 유적지를 다국어로 소개하는 여행자 맞춤형 안내 웹사이트입니다.',
    images: [
      {
        url: '/images/seoul_logo.png',
        width: 1200,
        height: 630,
        alt: '홈페이지 오픈그래프 이미지',
      },
    ],
    type: 'website',
  },
};

const HomePage = () => {
  return <HomeClient />;
};

export default HomePage;
