import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiHandler } from "../ts/types/ApiHandler";
import { BASE_URL } from "../constants/baseUrl";
import { TmdbApiKey } from "../constants/keys";

export const Api = async <T>({
  method,
  url,
  data,
  headers,
  isToken = false,
  params,
  baseURL = BASE_URL,
}: ApiHandler<T>): Promise<AxiosResponse<T>> => {
  const DefaultHeader = <Record<string, string>>{
    "Content-Type": "application/json",
    ...headers,
  };
  if (isToken) {
    if (localStorage.getItem("token")) {
      DefaultHeader["Authorization"] =
        `Bearer ${localStorage.getItem("token")}`;
    } else {
      throw new Error("Token not found");
    }
  }
  const axiosConfig = <AxiosRequestConfig>{
    method,
    url: `${baseURL}${url}`,
    headers,
  };
  if (data) {
    axiosConfig.data = data;
  }
  const paramsConfig = {
    api_key: import.meta.env.VITE_TMDB_API_KEY ?? TmdbApiKey,
  };
  axiosConfig.params = { ...params, ...paramsConfig };
  return await axios(axiosConfig);
};
