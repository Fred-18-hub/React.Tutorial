import { create } from "zustand";

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

const searchAndSortPokemon = (pokemon: Pokemon[], searchValue: string) => {
  return pokemon
    .filter((pok) =>
      pok.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )
    .slice(0, 100)
    .sort((a: Pokemon, b: Pokemon) => a.name.localeCompare(b.name));
};

export const usePokemon = create<{
  allPokemon: Pokemon[];
  pokemon: Pokemon[];
  searchTerm: string;
  setPokemon: (pokemon: Pokemon[]) => void;
  setSearch: (searchValue: string) => void;
}>((set, get) => ({
  allPokemon: [],
  pokemon: [],
  searchTerm: "",
  setPokemon: (newPokemon) =>
    set({
      allPokemon: newPokemon,
      pokemon: searchAndSortPokemon(newPokemon, get().searchTerm),
    }),
  setSearch: (searchValue) =>
    set({
      searchTerm: searchValue,
      pokemon: searchAndSortPokemon(get().allPokemon, searchValue),
    }),
}));

fetch("/pokemon.json")
  .then((res) => res.json())
  .then((data) => usePokemon.getState().setPokemon(data));
