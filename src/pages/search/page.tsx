import React, { useState, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/cards/GridCard";
import { SearchBar } from "./components/SearchBar";
import { UseSearchMovieInfanteHook } from "../../hooks/useSearchMovieInfinte";
import GridCardSkelton from "../../components/cards/GridCard/GridCardSkelton";
import NoMovieFound from "../../components/shared/noMovieFound";

const SearchPage: React.FC = () => {
  const { search: searchKeyword } = useParams<{ search: string }>();
  const [searchTerm, setSearchTerm] = useState<string>(searchKeyword || "");
  console.log(searchKeyword, "searchKeyword");
  const { data, isLoading, fetchNextPage, hasNextPage } =
    UseSearchMovieInfanteHook(searchKeyword ?? "");

  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastMovieRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return; // Stop if loading
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasNextPage, fetchNextPage],
  );
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Search Results for "{searchTerm}"
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading &&
              Array.from({ length: 6 }).map((_, index) => (
                <GridCardSkelton key={index} />
              ))}

            {data &&
              data.pages.map((page) =>
                page.map((movie, index: number) => {
                  if (index === page.length - 1) {
                    return (
                      <div ref={lastMovieRef} key={movie.id}>
                        <MovieCard movie={movie} />
                      </div>
                    );
                  } else {
                    return <MovieCard key={movie.id} movie={movie} />;
                  }
                }),
              )}
          </div>
          {searchKeyword === "" && <NoMovieFound />}

          {data && data.pages[0]?.length === 0 && !isLoading && (
            <NoMovieFound />
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
