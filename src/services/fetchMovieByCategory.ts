import { Api } from "../helpers/axiosApi";
import { TMovieCategory } from "../ts/types/MovieCategory";
import { MovieApiResponse } from "../ts/types/MovieResponse";

export const FetchMovieByCategory = async (category: TMovieCategory) => {
  return await Api<MovieApiResponse>({
    method: "GET",
    url: `movie/${category}` 
    
  });
};
