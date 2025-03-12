import React, { Dispatch, memo, SetStateAction } from "react";
import { Star } from "lucide-react";
import SearchSkeleton from "./searchSkelton";
import { Movie } from "../../../ts/types/Movie";
import { IMAGE_URL } from "../../../constants/baseUrl";
import { Link } from "react-router-dom";

interface SearchResultsProps {
  results?: Movie[] | undefined;
  isLoading: boolean;
  setSearch: Dispatch<SetStateAction<boolean>>;
  search: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  isLoading,
  setSearch,
  search,
}) => {
  if (isLoading && (!results || results.length === 0)) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-50 max-h-[500px] overflow-y-auto">
        {[...Array(3)].map((_, i) => (
          <SearchSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (results && results.length === 0) {
    return (
      <div className="absolute p-3 top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-50 max-h-[500px] overflow-y-auto">
        <p>No results found</p>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2  bg-white rounded-lg shadow-xl z-50 max-h-[500px] overflow-y-auto">
      {results &&
        results.map((result, idx) => (
          <div key={result.id}>
            <Link
              to={`/movie/${result.id}`}
              onClick={() => setSearch(false)}
              className={`
              flex p-4 hover:bg-gray-50 transition-colors 
            cursor-pointer border-b last:border-b-0
             `}
            >
              <img
                src={IMAGE_URL + result.poster_path}
                alt={result.title}
                className="h-24 w-24 object-cover rounded-lg"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {result.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{result.title}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {result.popularity && (
                      <>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">
                          {result.popularity}
                        </span>
                      </>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {result.release_date}
                  </span>
                </div>
              </div>
            </Link>

            {idx === results.length - 1 && results.length > 10 ? (
              <Link
                to={`/search/${search}`}
                className="w-full text-center text-blue-500 p-2 block cursor-pointer 
              hover:bg-gray-100 transition-colors"
                onClick={() => setSearch(false)}
              >
                See More Results
              </Link>
            ) : null}
          </div>
        ))}

      {isLoading && (
        <p className="text-gray-500 text-center p-4">
          <SearchSkeleton />
        </p>
      )}
    </div>
  );
};
export default memo(SearchResults);
