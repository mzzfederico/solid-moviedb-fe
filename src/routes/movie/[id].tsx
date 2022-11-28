import { Resource } from "solid-js";
import { RouteDataArgs, useParams, useRouteData } from "solid-start"
import { createServerData$ } from "solid-start/server";
import { API_GATEWAY } from "../../constants";
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
        <div>
            <h2>{JSON.stringify(movie())}</h2>
        </div>
    )
}