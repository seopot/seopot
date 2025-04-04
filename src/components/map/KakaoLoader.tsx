import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

/*
 *
 * 해당 코드는 아래 가이드 링크를 참고했습니다!
 * https://apis.map.kakao.com/web/guide/
 *
 */

const useKakaoLoader = () => {
  try {
    useKakaoLoaderOrigin({
      appkey: `${process.env.NEXT_PUBLIC_KAKAO_KEY}`,
      libraries: ['clusterer', 'drawing', 'services'],
    });

    console.log('Kakao Map SDK loaded successfully');
  } catch (e) {
    console.error('Kakao Map SDK loading failed', e);
  }
  return null;
};

export default useKakaoLoader;
