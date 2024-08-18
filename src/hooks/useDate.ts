import { adjustDate, aviodHoliday } from "@/lib/util/adjustDate";
import { calcById, calcByParmas } from "@/lib/util/calcById";
import React, { useState } from "react";

const useDate = () => {
  const [currentDate, setCurrentDate] = useState(
    adjustDate({ standardDate: new Date() }).dateFormat
  );

  const clickChangeDate = <T extends Element>(e: React.MouseEvent<T>) => {
    const { id } = e.currentTarget;
    // 현재 일자 + 왼쪽 화살표 클리기 -1, 오른쪽 화살표시 +1 (+1 | -1)일
    const currentDay = currentDate.getDate() + calcById(id);

    // (+1 | -1)일 더한값을 Date로 타입변환
    const newDate = new Date(currentDate.setDate(currentDay));

    // (+1 | -1)일 더한값이 주말일 경우, 주말을 피해 그 다음 날자로 값을 구함
    const calcHoliday =
      newDate.getDate() + calcByParmas(id, aviodHoliday[id][newDate.getDay()]);

    const resultDate = newDate.setDate(calcHoliday);

    setCurrentDate(new Date(resultDate));
  };

  return { currentDate, clickChangeDate };
};

export default useDate;
