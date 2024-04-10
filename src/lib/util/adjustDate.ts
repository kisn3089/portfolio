// 최근 장마감일로부터 하루전 데이터가 가장 최신으로 불러온다. 토요일일 경우 목요일 데이터가 최신
// 24시가 넘어 새벽에 호출시에는 하루전 데이터가 없는거로 나오기 때문에 -2를 해줘야 한다.

// 일요일이면 수요일 데이터를 가져오기 위한 튜닝
// 0 -> 일요일
const adjusting: Record<number, number> = {
  0: 3,
  1: 4,
  2: 2,
  3: 2,
  4: 2,
  5: 2,
  6: 2,
};

interface AdjustDateProps {
  isDetail?: boolean;
  standardDate: Date;
}

export const adjustDate = ({ isDetail, standardDate }: AdjustDateProps) => {
  const day = new Date().getDay();
  const checkIsUnder = isDetail ? adjusting[day] + 1 : adjusting[day];

  const adjustedDate = new Date(
    standardDate.getFullYear(),
    standardDate.getMonth(),
    standardDate.getDate() - checkIsUnder
  );

  const [yy, mm, dd] = [
    adjustedDate.getFullYear(),
    adjustedDate.getMonth() + 1,
    adjustedDate.getDate(),
  ];

  // format 202448 -> 20240408
  const addZero = (num: number) => (String(num).length !== 2 ? `0${num}` : num);
  const onlyNumberWithZero = `${yy}${addZero(mm)}${addZero(dd)}`;
  const betweenDot = `${yy}.${addZero(mm)}.${addZero(dd)}`;

  return { onlyNumber: onlyNumberWithZero, betweenDot: betweenDot };
};

// 20240410 -> 4 / 10
export const formatToLabel = (date: string | number) => {
  const [mm, dd] = [String(date).slice(4, 6), String(date).slice(6, 8)];
  return `${parseInt(mm)} / ${parseInt(dd)}`;
};
