import { calcById } from "@/lib/util/calcById";
import React, { useState } from "react";

const useDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const clickChangeDate = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;
    const newDate = currentDate.setDate(currentDate.getDate() + calcById(id));

    setCurrentDate(new Date(newDate));
  };

  return { currentDate, clickChangeDate };
};

export default useDate;
