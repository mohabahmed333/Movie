import { Api } from "../helpers/axiosApi";
import { MovieApiResponse } from "../ts/types/MovieResponse";

export const searchMovies = async (query: string, pageParam?: string) => {
  if (!query) return [];
  const { data } = await Api<MovieApiResponse>({
    method: "GET",
    url: `search/movie`,
    params: {
      query,
      page: pageParam ?? "1",
    },
  });
  return data.results;
};
