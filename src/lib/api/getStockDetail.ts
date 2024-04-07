import { adjustDate } from "../util/adjustDate";
import { STOCKLIST_BASE_URL } from "../util/constanse";
import { axiosRequest } from "../util/coreAxios";

export const getStockDetail = async (code: string) => {
  console.log("fetch: ", code);

  const response = await axiosRequest.get(STOCKLIST_BASE_URL, {
    params: {
      serviceKey: import.meta.env.VITE_SERVICE_KEY,
      numOfRows: 7,
      pageNo: 1,
      resultType: "json",
      likeIsinCd: code,
      endBasDt: adjustDate(true),
    },
  });
  //   console.log("detail res: ", response.data.response.body.items.item);

  return response.data.response.body.items.item;
};
