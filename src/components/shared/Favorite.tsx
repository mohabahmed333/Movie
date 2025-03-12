import { Heart } from "lucide-react";
import { Movie } from "../../ts/types/Movie";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from "../../store/favourite/favouriteStore";

const Favorite = ({ movie }: { movie: Movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite: boolean = favorites
    .filter(Boolean)
    .some((fav: Movie) => fav?.id === movie.id);
   const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };
  return (
    <div>
      <Heart
        className={
          isFavorite
            ? "text-red-500 cursor-pointer"
            : "text-gray-500 cursor-pointer"
        }
        onClick={handleToggleFavorite}
      />
    </div>
  );
};

export default memo(Favorite);
