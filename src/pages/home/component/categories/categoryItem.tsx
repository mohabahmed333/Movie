import { Movie } from "../../../../ts/types/Movie";
import { IMAGE_URL } from "../../../../constants/baseUrl";
import { Link } from "react-router-dom";
import Vote from "../../../../components/shared/Vote";
import Favorite from "../../../../components/shared/Favorite";

const CategoryItem = ({ movie }: { movie: Movie }) => {
  return (
    <div
      key={movie.id}
      className="group relative h-[400px]  bg-white border rounded-lg mx-2 shadow-sm
       hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer flex flex-col"
    >
      <Link to={`/movie/${movie.id}`} className="relative h-[80%]">
        <img
          src={IMAGE_URL + movie.poster_path}
          loading="lazy"
          alt={movie.original_title}
          height={400}
          width={400}
          className=" transform group-hover:scale-110 transition-transform duration-500 max-w-full max-h-full"
        />

        <div className="absolute inset-0 bg-black bg-opacity-0 h-full group-hover:bg-opacity-60 transition-opacity duration-300">
          <div
            className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300
           flex flex-col justify-end text-white transform translate-y-4 group-hover:translate-y-0"
          >
            <p className="text-sm mb-2">{movie.overview}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-1">
          <Vote
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
          />
        </div>
      </Link>
      <div className="p-4 z-10 bg-white">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
            {movie.title}
          </h3>
          <Favorite movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
