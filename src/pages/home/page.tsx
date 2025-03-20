import React from "react";
import MovieCarousel from "./component/homeCarousel";
import MovieCategory from "./component/categories";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const HomePage: React.FC = () => {
  const [value, setValue] = React.useState();
  return (
    <section>
      <MovieCarousel />
      {/* <div className="p-1 container mx-auto mt-3 min-h-full  ">
        <MovieCategory title={"up Coming"} category="upcoming" />
        <MovieCategory title={"popular"} category="popular" />
        <MovieCategory title={"popular"} category="now_playing" />
      </div> */}
      <div className="m-10">
        <PhoneInput
          placeholder="Enter phone number"
          inputClass="p-5 w-full"
          value={value}
          enableSearch
          disableSearchIcon
          searchClass="w-full"
          searchPlaceholder="ابحث عن دوله "
          country={"sar"}
        />
      </div>
    </section>
  );
};

export default HomePage;
