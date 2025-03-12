import React from "react";
import SearchComponent from "../../search";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between  ">
          <Link to="/">
            <h1 className="text-2xl font-semibold text-gray-900">Movies</h1>
          </Link>
          <div className="my-2 hidden md:flex w-full ">
            <SearchComponent />
          </div>
          <Link
            to={"/favorite"}
            className="flex items-center gap-2 hover:text-red-600 transition-all duration-300"
          >
            {" "}
            Favorites
            <Heart className="text-sm" />
          </Link>
        </div>
        <div className="my-2 block md:hidden">
          <SearchComponent />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
