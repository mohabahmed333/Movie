import { ArrowLeft, Calendar, Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../../../constants/baseUrl";
import { Movie } from "../../../ts/types/Movie";

const MoviePoster = ({ movie }: { movie: Movie }) => {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <img
        src={IMAGE_URL + movie.backdrop_path}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-gray-200 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Movies
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">{movie.title}</h1>
          <div className="flex items-center space-x-6 text-white">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1">{movie.vote_average.toFixed(1)}</span>
              <span className="ml-1 text-gray-300">
                ({movie.vote_count.toLocaleString()} votes)
              </span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{movie.release_date}</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              <span className="uppercase">{movie.original_language}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviePoster;
