import { adjusting, aviodHoliday } from "@/lib/util/adjustDate";
import { calcById } from "@/lib/util/calcById";
import React, { useState } from "react";

const useDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const clickChangeDate = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;
    // 현재 일자를 요일로 변경
    const currentDay = Math.floor((currentDate.getDate() + calcById(id)) % 7);
    // 호출 가능한 요일로 변경
    const adjustDate = adjusting[currentDay];
    // console.log(currentDay);
    // console.log(currentDay - adjustDate);

    console.log(currentDay);
    console.log(adjustDate);
    console.log(aviodHoliday[currentDay - adjustDate]);
    const newDate = currentDate.setDate(
      currentDate.getDate() +
        calcById(id) -
        aviodHoliday[currentDay - adjustDate]
    );
    console.log(new Date(newDate).getDay());

    setCurrentDate(new Date(newDate));
  };

  return { currentDate, clickChangeDate };
};

export default useDate;
