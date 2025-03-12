import { Api } from "../helpers/axiosApi";
import { MovieApiResponse } from "../ts/types/MovieResponse";

export const FetchSimilarMovieById = async (movieId: string) => {
  return await Api<MovieApiResponse>({
    method: "GET",
    url: `movie/${movieId}/similar`,
  });
};
