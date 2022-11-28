import { createEffect, createResource, For } from "solid-js";
import { A, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { API_GATEWAY, IMAGE_PREFIX } from "../constants";
import { Movie } from "../types/Movie";
import { ResultsResponse } from "../types/ResultsResponse";

import styles from './index.module.scss';

export function routeData() {
  return createServerData$(async () => {
    const res = await fetch(`${API_GATEWAY}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    const { results, ...data } = await res.json() as ResultsResponse;
    return results;
  })
}

export default function Home() {
  const movies = useRouteData<typeof routeData>();

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <ul class="grid grid-flow-row grid-cols-6 gap-4 justify-start">
        <For each={movies()}>
          {movie => (
            <li
              class={`${styles.MovieCover} block aspect-w-9 aspect-h-15 rounded-md`}
              style={`background-image: url(${IMAGE_PREFIX}/${movie.poster_path})`}>
              <A href={`/movie/${movie.id}`}>
                {movie.title}
              </A>
            </li>
          )}
        </For>
      </ul>
    </main>
  );
}

/*
Both client side and server side run this

const [movies] = createResource(async () => {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=XXXXXXXXXXXXXXXXXXXXXXXXXXXX");
  const { results, ...data } = await res.json();
  return results as Movie[];
});

return {
  movies
};
*/