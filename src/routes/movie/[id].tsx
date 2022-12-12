import { For, Resource } from "solid-js";
import { RouteDataArgs, useParams, useRouteData } from "solid-start"
import { createServerData$ } from "solid-start/server";
import { Heading } from "../../components/Type";
import { API_GATEWAY, IMAGE_PREFIX, LARGE_IMAGE_PRE } from "../../constants";
import {
    list as favorites, addFavorite
} from "../../stores/favorites";
import { Movie } from "../../types/Movie";

type RouteResources = {
    movie: Movie, credits: Object
};

export function routeData({ params }: RouteDataArgs): Resource<RouteResources> {
    const options = { key: () => ['movie_id', params.id] };
    return createServerData$(async ([, id]) => {
        const [movie, credits] = await Promise.all([
            fetchMovie(id),
            fetchMovieCredits(id)
        ]);
        return { movie, credits };
    }, options);
}

export default function MovieRoute() {
    const resources = useRouteData<typeof routeData>();

    return (
        <article class="container grid grid-cols-2">
            <section class="flex justify-center">
                <div class="flex justify-center items-center align-items-center h-screen sticky top-0">
                    <img class={`w-fit h-fit`} src={`${LARGE_IMAGE_PRE}${resources()?.movie?.poster_path}`} alt={resources()?.movie?.title} />
                </div>
            </section>
            <section class="flex flex-col ml-5">
                <div class="mb-16 flex flex-col">
                    <Heading lvl={1}>{resources()?.movie?.title}</Heading>
                    <Heading lvl={2} class="italic">{resources()?.movie?.original_title}</Heading>
                </div>

                <div class="mb-16">
                    <p>{resources()?.movie?.overview}</p>

                    <div class="my-4">
                        <button class="btn border-neutral-300 border-solid border-2 p-2" onClick={() => addFavorite(resources()?.movie)}>Add to favorites</button>
                    </div>
                </div>

                <ul class="mb-16">
                    <For each={resources()?.credits.cast.slice(0, 12)}>
                        {entry => <li>{entry.name}: <em>{entry.character}</em></li>}
                    </For>
                </ul>

                <pre>{JSON.stringify(resources()?.movie, null, 4)}</pre>
            </section>
        </article>
    )
}

async function fetchMovie(movieId: string): Promise<Movie> {
    const res = await fetch(`${API_GATEWAY}/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    const movie = await res.json() as Movie;
    return movie;
}

async function fetchMovieCredits(movieId: string): Promise<Object> {
    const res = await fetch(`${API_GATEWAY}/movie/${movieId}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    const movie = await res.json() as Movie;
    return movie;
}