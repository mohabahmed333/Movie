import { Movie } from "../../../ts/types/Movie";
import { IMAGE_URL } from "../../../constants/baseUrl";

const MovieOverView = ({ movie }: { movie: Movie }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className=" rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{movie.overview}</p>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Poster</h3>
          <img
            src={IMAGE_URL + movie.poster_path}
            alt={`${movie.title} poster`}
            className="w-full  h-[400px]  object-cover  rounded-lg shadow-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Details
            </h3>
            <dl className="space-y-2">
              <div className="flex">
                <dt className="w-32 text-gray-500">Original Title</dt>
                <dd className="text-gray-900">{movie.original_title}</dd>
              </div>
              <div className="flex">
                <dt className="w-32 text-gray-500">Popularity</dt>
                <dd className="text-gray-900">{movie.popularity.toFixed(1)}</dd>
              </div>
              <div className="flex">
                <dt className="w-32 text-gray-500">Adult Content</dt>
                <dd className="text-gray-900">{movie.adult ? "Yes" : "No"}</dd>
              </div>
              <div className="flex">
                <dt className="w-32 text-gray-500">Video</dt>
                <dd className="text-gray-900">
                  {movie.video ? "Available" : "Not Available"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieOverView;
