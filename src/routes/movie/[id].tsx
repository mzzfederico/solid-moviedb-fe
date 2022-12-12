import { For, Resource } from "solid-js";
import { RouteDataArgs, useParams, useRouteData } from "solid-start"
import { createServerData$ } from "solid-start/server";
import { Heading } from "../../components/Type";
import { API_GATEWAY, IMAGE_PREFIX, LARGE_IMAGE_PRE } from "../../constants";
import {
    list as favorites, addFavorite
} from "../../stores/favorites";
import { Movie } from "../../types/Movie";

export function routeData({ params }: RouteDataArgs): Resource<Movie> {
    const options = { key: () => ['movies', params.id] };
    return createServerData$(async ([, id]) => {
        const res = await fetch(`${API_GATEWAY}/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        const movie = await res.json() as Movie;
        return movie;
    }, options);
}

export default function MovieRoute() {
    const movie = useRouteData<typeof routeData>();

    return (
        <article class="container grid grid-cols-2">
            <section class="flex justify-center">
                <div class="flex justify-center items-center align-items-center h-screen sticky top-0">
                    <img class={`w-fit h-fit`} src={`${LARGE_IMAGE_PRE}${movie()?.poster_path}`} alt={movie()?.title} />
                </div>
            </section>
            <section class="flex flex-col ml-5">
                <Heading lvl={1}>{movie()?.title}</Heading>
                <Heading lvl={2} class="italic">{movie()?.original_title}</Heading>

                <div class="h-10"></div>

                <p>{movie()?.overview}</p>

                <div class="h-10"></div>

                <pre>{JSON.stringify(movie(), null, 4)}</pre>
                <button onClick={() => addFavorite(movie())}>Add to favorites</button>
            </section>
        </article>
    )
}