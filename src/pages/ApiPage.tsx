import { getStock } from "@/lib/api/getStock";
import React, { useEffect } from "react";

const ApiPage = () => {
  useEffect(() => {
    const qq = async () => {
      const tt = await getStock();
      console.log(tt);
    };
    qq();
  }, []);
  return <div>ApiPage</div>;
};

export default ApiPage;
