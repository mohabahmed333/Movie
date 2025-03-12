import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetMoviesHook } from "../../../../hooks/useGetMoviesHook";
import { TMovieCategory } from "../../../../ts/types/MovieCategory";
import CategoryItem from "./categoryItem";
import CategoryItemSkelton from "./categoryItemSkelton";
import { settings } from "./sliderSettings";
import { memo } from "react";

const MovieCategory = ({
  title,
  category,
}: {
  title: string;
  category: TMovieCategory;
}) => {
  const { data, isError, isLoading } = useGetMoviesHook(category);

  return (
    <section>
      <h1 className="text-2xl font-bold my-10 capitalize">{title}</h1>

      <Slider {...settings}>
        {isError && <p>Error</p>}
        {data &&
          data.slice(0, 11).map((item) => {
            return <CategoryItem movie={item} />;
          })}
        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <CategoryItemSkelton key={index} />
          ))}
      </Slider>

      {}
    </section>
  );
};

export default memo(MovieCategory);
