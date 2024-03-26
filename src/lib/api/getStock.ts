import { axiosRequest } from "../util/coreAxios";

export const getStock = async () =>
  await axiosRequest.get("", {
    params: {
      serviceKey: import.meta.env.VITE_SERVICE_KEY,
      numOfRows: 10,
      pageNo: 1,
      resultType: "json",
    },
  });
