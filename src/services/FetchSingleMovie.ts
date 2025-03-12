import { Api } from "../helpers/axiosApi";
import { Movie } from "../ts/types/Movie";

export const FetchMovieById = async (movieId: string) => {
  return await Api<Movie>({
    method: "GET",
    url: `movie/${movieId}`,
  });
};
