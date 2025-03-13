import { Settings } from "react-slick";

export const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToScroll: 3,
  autoplay: true,
  centerMode: true,
  autoplaySpeed: 4000,
  centerPadding: "100px",
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 2, centerPadding: "50px" },
    },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
} as Settings;
