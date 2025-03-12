import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetMoviesHook } from "../../../../hooks/useGetMoviesHook";
import { settings } from "./sliderSettings";
import CarouselItem from "./carouselItem/carouselItem";
import CarouselItemSkelton from "./carouselItem/carouselitemSkelton";

const MovieCarousel = () => {
  const { data, isError, isLoading } = useGetMoviesHook("popular");

  return (
    <div className=" p-1">
      <Slider {...settings}>
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <CarouselItemSkelton key={index} />
          ))}
        {data && data.slice(0,10).map((movie) => <CarouselItem movie={movie} />)}
        {isError && <p>Error</p>}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
