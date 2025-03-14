import React from "react";
import MovieCarousel from "./component/homeCarousel";
import MovieCategory from "./component/categories";

const HomePage: React.FC = () => {
  return (
    <section>
      <MovieCarousel />
      <div className="p-1 container mx-auto mt-3">
        <MovieCategory title={"up Coming"} category="upcoming" />
        <MovieCategory title={"popular"} category="popular" />
        <MovieCategory title={"popular"} category="now_playing" />
      </div>
    </section>
  );
};

export default HomePage;
