import { useParams } from "react-router-dom";
 import { useGetMovieIdHook } from "../../hooks/useGetMovieIdHook";
 import NoMovieFound from "../../components/shared/noMovieFound";
import MovieOverView from "./components/MovieOverview";
import MoviePoster from "./components/MoviePoster";
import MovieDetailsSkeleton from "./components/MovieSkelton";

const MoviePage = () => {
  const { id } = useParams();
  const { data: movie, isLoading, isError } = useGetMovieIdHook(id!);
  if (isLoading) {
    return <MovieDetailsSkeleton />;
  }
  if (!movie) {
    return <NoMovieFound />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {!movie && <NoMovieFound />}
      {isError && <>There is Error while running this page</>}
      <MoviePoster movie={movie} />

      <MovieOverView movie={movie} />
    </div>
  );
};
export default MoviePage;
