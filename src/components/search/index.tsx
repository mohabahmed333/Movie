import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { UseSearchMovieHook } from "../../hooks/useSearchMovieHook";
import { debounce } from "../../helpers/debounce";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
const SearchResults = lazy(() => import("./SearchResults"));
const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { data, isLoading } = UseSearchMovieHook(search);
  const elmRef = useRef<HTMLDivElement>(null);
  const changeSearch = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    }, 400),
    [],
  );
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (elmRef.current && !elmRef.current.contains(e.target as Node)) {
        setIsSearching(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div
      className="relative flex-1 max-w-lg  search-container  mx-auto"
      ref={elmRef}
    >
      <input
        type="text"
        className="block w-full pl-2 pr-3 py-2 border border-gray-300 rounded-md leading-5
               bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Search movies By Title"
        onChange={changeSearch}
        defaultValue={search}
        onFocus={() => setIsSearching(true)}
      />
      <Link
        to={`/search/${search}`}
        onClick={() => setIsSearching(false)}
        className="absolute inset-y-0 right-0 pl-3 items-center flex gap-2 border-l px-2 cursor-pointer
  hover:text-gray-500 hover:bg-gray-300 transition-all duration-300
  rounded-md
  "
      >
        <Search className="h-5 w-5 text-gray-400" />
      </Link>
      <Suspense fallback={<></>}>
        {isSearching ? (
          <SearchResults
            results={data}
            isLoading={isLoading}
            setSearch={setIsSearching}
            search={search}
          />
        ) : null}
      </Suspense>
    </div>
  );
};

export default SearchComponent;
