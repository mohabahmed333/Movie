import { Movie } from "../ts/types/Movie";
import { useQuery } from "react-query";
import { FetchMovieById } from "../services/FetchSingleMovie";

export const useGetMovieIdHook = (movieId: string) => {
  return useQuery<Movie>([movieId], async () => {
    try {
      const Movie = await FetchMovieById(movieId);
      return Movie.data;
    } catch (error) {
      throw error;
    }
  });
};
