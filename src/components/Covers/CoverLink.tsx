import { mergeProps } from "solid-js";
import { A } from "solid-start";
import { EContentType, SMALL_IMAGE_PRE } from "../../constants";
import { Movie } from "../../types/Movie";

export default function CoverLink(props: { id: number, title: string, poster_path?: string, type?: EContentType }) {
  const extendedProps = mergeProps({
    id: 0,
    title: "Untitled",
    poster_path: "https://via.placeholder.com/300x450.png",
    type: EContentType.movie
  }, props);

  const routes = ['movie', 'series'];

  return (
    <li class={`block w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-fit p-2`}>
      <A href={`/${routes[extendedProps.type]}/${extendedProps.id}`}>
        <img src={`${SMALL_IMAGE_PRE}/${extendedProps.poster_path}`} alt={`Poster for ${extendedProps.title}`} class="rounded-xl" />
        <span class="block h-0 opacity-0">{extendedProps.title}</span>
      </A>
    </li>
  )
}