import { adjustDate } from "../util/adjustDate";
import { STOCKLIST_BASE_URL } from "../util/constanse";
import { axiosRequest } from "../util/coreAxios";

export const getStockDetail = async (code: string, standardData: Date) => {
  const response = await axiosRequest.get(STOCKLIST_BASE_URL, {
    params: {
      serviceKey: import.meta.env.VITE_SERVICE_KEY,
      numOfRows: 7,
      pageNo: 1,
      resultType: "json",
      likeIsinCd: code,
      endBasDt: adjustDate({ isDetail: true, standardDate: standardData })
        .onlyNumber,
    },
  });
  return response.data.response.body.items.item;
};
