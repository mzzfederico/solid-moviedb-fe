import { A } from "solid-start";
import { SMALL_IMAGE_PRE } from "../../constants";
import { Movie } from "../../types/Movie";

export default function CoverMovie(props: { movie: Movie}) {
    const { movie } = props;

    return (
      <li
        class={`block w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-fit p-2`}>
          <A href={`/movie/${movie.id}`}>
            <img src={`${SMALL_IMAGE_PRE}/${movie.poster_path}`} alt={`Poster for ${movie.title}`} class="rounded-xl" />
            <span class="block h-0 opacity-0">{movie.title}</span>
          </A>
        </li>
    )
}