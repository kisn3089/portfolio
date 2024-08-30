import { useNavigate, useSearchParams } from "react-router-dom";

const useSetParams = () => {
  const navigator = useNavigate();
  const [query] = useSearchParams();

  const excuteUrl = () => navigator(`/project/stock/query?${query.toString()}`);

  const update = (key: string, value: string | number) => {
    query.set(key, value.toString());
    excuteUrl();
  };

  const reset = () => {
    query.delete("search");
    query.delete("page");
    excuteUrl();
  };

  return { update, reset };
};

export default useSetParams;
