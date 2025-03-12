import { Movie } from "./Movie";

export type MovieDates = {
  maximum: string;
  minimum: string;
};

export type MovieApiResponse = {
  dates?: MovieDates; // Optional, only present in some endpoints like "now_playing"
  page: number;
  results: Movie[]; // Array of Movie objects
  total_pages: number;
  total_results: number;
};
