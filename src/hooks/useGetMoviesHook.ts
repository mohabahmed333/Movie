import { TMovieCategory } from "../ts/types/MovieCategory";
import { tags } from "../constants/tags";
import { FetchMovieByCategory } from "../services/fetchMovieByCategory";
import { Movie } from "../ts/types/Movie";
import { useQuery } from "react-query";

export const useGetMoviesHook = (
  category: TMovieCategory,
  hasBeenVisible: boolean,
) => {
  return useQuery<Movie[]>({
    queryFn: async () => {
      try {
        const Movies = await FetchMovieByCategory(category);
        return Movies.data.results;
      } catch (error) {
        throw error;
      }
    },
    queryKey: [tags.MovieTag, category, hasBeenVisible],
    enabled: hasBeenVisible,
  });
};
