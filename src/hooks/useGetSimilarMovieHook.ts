import { Movie } from "../ts/types/Movie";
import { useQuery } from "react-query";
import { FetchSimilarMovieById } from "../services/fetchSimilarMovie";

export const useGetSimilarMovieIdHook = (movieId: string) => {
  return useQuery<Movie[]>([movieId], async () => {
    try {
      const Movie = await FetchSimilarMovieById(movieId);
      return Movie.data.results;
    } catch (error) {
      throw error;
    }
  });
};
