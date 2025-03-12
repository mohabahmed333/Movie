import React from "react";
import MovieLoader from "../../assets/gif/200w.gif"; // Adjust path accordingly

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <img src={MovieLoader} alt="movie loader" />
    </div>
  );
};

export default Loader;
