const adjusting: Record<number, number> = {
  0: 3,
  1: 4,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 2,
};

export const adjustDate = () => {
  const isHoliday = new Date().getDay();

  const adjustedDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() - adjusting[isHoliday]
  );
  const [yy, mm, dd] = [
    adjustedDate.getFullYear(),
    adjustedDate.getMonth() + 1,
    adjustedDate.getDate(),
  ];

  const addZero = (num: number) => (String(num).length !== 2 ? `0${num}` : num);
  const basDt = `${yy}${addZero(mm)}${addZero(dd)}`;
  return basDt;
};
