import { Movie } from "../../../ts/types/Movie";
import { IMAGE_URL } from "../../../constants/baseUrl";
import { useNavigate } from "react-router-dom";
import Vote from "../../shared/Vote";
import Favorite from "../../shared/Favorite";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div
        className="relative h-[400px]"
        onClick={() => {
          navigate(`/movie/${movie.id}`);
        }}
      >
        <img
          src={IMAGE_URL + movie.poster_path}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{movie.title}</h3>
          <Vote
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between ">
          <p className="text-gray-600 text-sm mb-2">{movie.release_date}</p>
          <Favorite movie={movie} />
        </div>
        <p className="text-gray-800 line-clamp-3">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
