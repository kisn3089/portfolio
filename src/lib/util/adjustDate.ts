// 최근 장마감일로부터 하루전 데이터가 가장 최신으로 불러온다. 토요일일 경우 목요일 데이터가 최신
// 24시가 넘어 새벽에 호출시에는 하루전 데이터가 없는거로 나오기 때문에 -2를 해줘야 한다.

// 일요일이면 수요일 데이터를 가져오기 위한 튜닝
// 0 -> 일요일
export const adjusting: Record<number, number> = {
  0: 3,
  1: 4,
  2: 2,
  3: 2,
  4: 2,
  5: 2,
  6: 2,
};

// 주말을 피해 그 다음 평일을 찾는 시그니처
export const aviodHoliday: Record<string, Record<number, number>> = {
  "-": {
    0: 2,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 1,
  },
  "+": {
    0: 1,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 2,
  },
};

export const convertDay: Record<number, string> = {
  0: "일",
  1: "월",
  2: "화",
  3: "수",
  4: "목",
  5: "금",
  6: "토",
};

interface AdjustDateProps {
  isDetail?: boolean;
  standardDate: Date;
}

export const adjustDate = ({ isDetail, standardDate }: AdjustDateProps) => {
  const day = new Date().getDay();
  const checkIsUnder = isDetail ? adjusting[day] - 1 : adjusting[day];

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

  const originDate = new Date(
    standardDate.getFullYear(),
    standardDate.getMonth(),
    standardDate.getDate() + (isDetail ? 1 : 0)
  );

  const [originY, originM, originD] = [
    originDate.getFullYear(),
    originDate.getMonth() + 1,
    originDate.getDate(),
  ];

  // format 202448 -> 20240408
  const addZero = (num: number) => (String(num).length !== 2 ? `0${num}` : num);

  const onlyNumberWithZero = `${yy}${addZero(mm)}${addZero(dd)}`;
  const originOnlyNumber = `${originY}${addZero(originM)}${addZero(originD)}`;
  const betweenDot = `${yy}.${addZero(mm)}.${addZero(dd)}`;
  const originDot = `${originY}.${addZero(originM)}.${addZero(originD)}`;

  return {
    onlyNumber: onlyNumberWithZero,
    betweenDot: betweenDot,
    dateFormat: adjustedDate,
    originDot: originDot,
    originOnlyNumber: originOnlyNumber,
  };
};

// toLabel = 20240410 -> 4 / 10
// toDate = 20240410 -> 2024-04-10
// removeDot = 20240410 -> 20240410
// convertDot = 20240410 -> 2024.04.10
export const formatToLabel = (date: string | number) => {
  const [yy, mm, dd] = [
    String(date).slice(0, 4),
    String(date).slice(4, 6),
    String(date).slice(6, 8),
  ];
  return {
    toLabel: `${parseInt(mm)} / ${parseInt(dd)}`,
    toDate: `${yy}-${mm}-${dd}`,
    removeDot: String(date).replaceAll(".", ""),
    convertDot: `${yy}.${mm}.${dd}`,
  };
};
