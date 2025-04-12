export const getNightViewSpots = async (start: number = 1, end: number = 51) => {
  const baseUrl = process.env.NEXT_PUBLIC_NIGHT_VIEW_SPOT_URL;

  if (!baseUrl) {
    throw new Error('야경 명소 API URL이 설정되지 않았습니다.');
  }

  const url = `${baseUrl}/${start}/${end}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('야경 명소 데이터를 불러오지 못했습니다.');
  }

  const data = await res.json();
  return data;
};
