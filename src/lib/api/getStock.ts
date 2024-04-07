import { adjustDate } from "../util/adjustDate";
import { STOCKLIST_BASE_URL } from "../util/constanse";
import { axiosRequest } from "../util/coreAxios";

export const getStock = async (search: string, pageNo?: number) => {
  const response = await axiosRequest.get(STOCKLIST_BASE_URL, {
    params: {
      serviceKey: import.meta.env.VITE_SERVICE_KEY,
      numOfRows: 10,
      pageNo: pageNo || 1,
      resultType: "json",
      likeItmsNm: search,
      basDt: adjustDate(),
    },
  });
  // console.log("response: ", response);

  return response.data.response.body.items.item;
};
