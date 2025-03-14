import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetMoviesHook } from "../../../../hooks/useGetMoviesHook";
import { TMovieCategory } from "../../../../ts/types/MovieCategory";
import CategoryItem from "./categoryItem";
import CategoryItemSkelton from "./categoryItemSkelton";
import { settings } from "./sliderSettings";
import { memo, useEffect, useRef, useState } from "react";

const MovieCategory = ({
  title,
  category,
}: {
  title: string;
  category: TMovieCategory;
}) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const { data, isError, isLoading } = useGetMoviesHook(
    category,
    hasBeenVisible,
  );
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);
  useEffect(() => {
    console.log("hasBeenVisible", hasBeenVisible);
  });
  return (
    <section ref={ref} className="min-h-[400px]">
      <h1 className="text-2xl font-bold my-10 capitalize ">{title}</h1>
      {hasBeenVisible && (
        <Slider {...settings}>
          {isLoading &&
            Array.from({ length: 6 }).map((_, index) => (
              <CategoryItemSkelton key={index} />
            ))}
          {data &&
            data
              .slice(0, 11)
              .map((item) => <CategoryItem key={item.id} movie={item} />)}
          {isError && <p>Error loading movies</p>}
        </Slider>
      )}
    </section>
  );
};

export default memo(MovieCategory);
