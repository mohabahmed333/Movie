import { useSelector } from "react-redux";
import { selectFavorites } from "../../store/favourite/favouriteStore";
import { Movie } from "../../ts/types/Movie";
import MovieCard from "../../components/cards/GridCard";

const FavoritePage = () => {
  const favorites: Movie[] = useSelector(selectFavorites);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {!favorites.length && (
        <div className="text-center text-2xl font-bold text-gray-500">
          You have no favorites yet
        </div>
      )}
      <div
        className="grid grid-cols-1 md:grid-cols-2
     lg:grid-cols-3 gap-6"
      >
        {favorites.length ? (
          <>
            {favorites.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </>
        ) : null}
      </div>
    </section>
  );
};

export default FavoritePage;
