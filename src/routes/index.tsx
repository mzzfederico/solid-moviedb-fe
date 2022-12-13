import { For } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import CoverGrid from "../components/Covers/Grid";
import CoverLink from "../components/Covers/CoverLink";
import { Heading } from "../components/Type";
import { API_GATEWAY, EContentType } from "../constants";
import { ResultsEntity, ResultsResponse } from "../types/ResultsResponse";

export function routeData() {
  return createServerData$(async () => {
    const res = await fetch(`${API_GATEWAY}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    const { results, ...data } = await res.json();
    return results as ResultsEntity[];
  })
}

export default function Home() {
  const movies = useRouteData<typeof routeData>();

  return (
    <main class="container mx-auto text-gray-700 p-4">
      <Heading lvl={2} class="block mb-5">Populars</Heading>
      <CoverGrid>
        <For each={movies()}>
          {el => <CoverLink type={EContentType.movie} id={el.id} title={el.title} poster_path={el.poster_path} />}
        </For>
      </CoverGrid>
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