import { useInfiniteQuery } from "react-query";
import { tags } from "../constants/tags";
import { searchMovies } from "../services/searchByTitle";
import { Movie } from "../ts/types/Movie";

export const UseSearchMovieInfanteHook = (query: string) => {
  return useInfiniteQuery<Movie[]>({
    queryKey: [tags.infanteMovie, query],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const Movies = await searchMovies(query, pageParam);
        return Movies;
      } catch (error) {
        throw error;
      }
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
    enabled: !!query,
  });
};
