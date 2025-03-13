import { Movie } from "../../../../../ts/types/Movie";
import { memo } from "react";
import { Link } from "react-router-dom";
import PictureImage from "../../../../../components/utls/pictureFormatingImages";

const CarouselItem = ({ movie }: { movie: Movie }) => {
  return (
    <div
      key={movie.id}
      className="movie-slide mx-1 rounded-xl relative bg-white 
      overflow-hidden group hover:shadow-xl transition-all duration-300
       transform hover:-translate-y-2 cursor-pointer"
    >
      <PictureImage
        src={movie.poster_path}
        alt={movie.original_title}
        width={500}
        height={500}
        style={{ aspectRatio: "2/3" }}
        className="transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300">
        <div className="movie-info absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end text-white transform translate-y-4 group-hover:translate-y-0">
          <Link to={`/movie/${movie.id}`}>
            <h1 className="text-lg font-bold">{movie.title}</h1>
          </Link>
          <p className="text-sm">{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(CarouselItem);
