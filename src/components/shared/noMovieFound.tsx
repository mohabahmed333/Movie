import { ArrowLeft, Film } from "lucide-react";
import { Link } from "react-router-dom";

const NoMovieFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <Film className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Movie Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          The movie you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Movies
        </Link>
      </div>
    </div>
  );
};

export default NoMovieFound;
