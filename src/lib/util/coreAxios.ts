import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./constanse";

export const axiosRequest: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
