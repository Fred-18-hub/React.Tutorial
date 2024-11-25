import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

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

const usePokemonSource = () => {
  const { data: pokemon } = useQuery<Pokemon[]>({
    queryKey: ["pokemon"],
    queryFn: () => fetch("/pokemon.json").then((res) => res.json()),
    initialData: [],
  });

  const [searchTerm, setSearchTerm] = useState("");

  const setSearch = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const filteredPokemon = useMemo(() => {
    return pokemon.filter((pok) =>
      pok.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [pokemon, searchTerm]);

  const sortedPokemon = useMemo(() => {
    return [...filteredPokemon]
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 100);
  }, [filteredPokemon]);

  return { pokemon: sortedPokemon, searchTerm, setSearch };
};

const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  {} as ReturnType<typeof usePokemonSource>
);

const usePokemon = () => useContext(PokemonContext);

const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
};

export { usePokemon, PokemonProvider };
