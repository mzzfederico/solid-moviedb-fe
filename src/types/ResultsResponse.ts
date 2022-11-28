/* TODO: check for it being valid */

import { Movie } from "./Movie";

export type ResultsResponse = {
  page: number;
  totalResults: number;
  results: Movie[];
}