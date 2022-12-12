import { A } from "solid-start";
import { SMALL_IMAGE_PRE } from "../../constants";
import { Movie } from "../../types/Movie";

export default function CoverMovie(props: { movie: Movie}) {
    const { movie } = props;

    return (
        <li
          class={`block aspect-w-9 aspect-h-15 rounded-md`}
          style={`background-image: url(${SMALL_IMAGE_PRE}/${movie.poster_path})`}>
          <A href={`/movie/${movie.id}`} class='opacity-0'>
            {movie.title}
          </A>
        </li>
    )
}