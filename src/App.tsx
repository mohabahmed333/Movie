import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/utls/loader";

const HomePage = lazy(() => import("./pages/home/page"));
const SearchPage = lazy(() => import("./pages/search/page"));
const MoviePage = lazy(() => import("./pages/Movie/page"));
const FavoritePage = lazy(() => import("./pages/favorite/page"));
// Favorite;
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:search" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
