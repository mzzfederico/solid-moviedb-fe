import { createStore } from "solid-js/store";
import { Movie } from "../types/Movie";

const [store, setStore] = createStore<Movie[]>([]);

export const list = store;

export const addFavorite = (newFavorite) => {
    setStore(oldState => [...oldState, newFavorite]);
}