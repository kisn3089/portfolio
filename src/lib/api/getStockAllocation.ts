import { adjustDate } from "../util/adjustDate";
import { DIVISION_BASE_URL } from "../util/constanse";
import { axiosRequest } from "../util/coreAxios";

export const getStockAllocation = async (
  stockName: string,
  standardData: Date
) => {
  const response = await axiosRequest.get(DIVISION_BASE_URL, {
    params: {
      serviceKey: import.meta.env.VITE_SERVICE_KEY,
      numOfRows: 1,
      pageNo: 1,
      resultType: "json",
      basDt: adjustDate({ standardDate: standardData }).originOnlyNumber,
      stckIssuCmpyNm: stockName,
    },
  });
  console.log("response: ", response);

  return response.data.response.body.items.item;
};
