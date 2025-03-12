import { useQuery } from "react-query";
import { tags } from "../constants/tags";
import { searchMovies } from "../services/searchByTitle";
import { Movie } from "../ts/types/Movie";

export const UseSearchMovieHook = (query: string) => {
  return useQuery<Movie[]>({
    queryKey: [tags.MovieTag, query],
    queryFn: async () => {
      try {
        const Movies = await searchMovies(query);
        return Movies;
      } catch (error) {
        throw error;
      }
    },
    enabled: !!query,
  });
};
