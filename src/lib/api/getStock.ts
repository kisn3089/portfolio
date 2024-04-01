import { axiosRequest } from "../util/coreAxios";

export const getStock = async (search: string) => {
  console.log("axios: ", search);

  // const year = new Date().getFullYear();
  // const month = new Date().getMonth() + 1;
  // const date = new Date().getDate();
  const response = await axiosRequest.get("", {
    params: {
      serviceKey: import.meta.env.VITE_SERVICE_KEY,
      numOfRows: 10,
      pageNo: 1,
      resultType: "json",
      likeItmsNm: search,
      // beginBasDt: new Date(year, month, date - 7),
    },
  });
  console.log("response: ", response);

  return response.data.response.body.items.item;
};
