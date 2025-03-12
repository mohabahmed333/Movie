import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../ts/types/Movie";

interface FavoritesState {
  favorites: Movie[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<Movie["id"]>) => {
       state.favorites = state.favorites
        .filter(Boolean)
        .filter((item) => item.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorites = (state: any) => state.favorites.favorites;

export default favoritesSlice.reducer;
