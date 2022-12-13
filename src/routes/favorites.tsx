import { For } from "solid-js";
import CoverGrid from "../components/Covers/Grid";
import CoverMovie from "../components/Covers/CoverLink";
import { Heading } from "../components/Type";
import { list as favoritesList } from "../stores/favorites";

export default function Favorites() {
    return (
      <main class="container mx-auto text-gray-700 p-4">
        <Heading lvl={2} class="block mb-5">Favs</Heading>
        <CoverGrid>
          <For each={favoritesList}>
            {el => <CoverMovie movie={el} />}
          </For>
        </CoverGrid>
      </main>
    );
  }