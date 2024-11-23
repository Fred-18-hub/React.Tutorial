import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
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

type PokemonState = {
  pokemon: Pokemon[];
  searchTerm: string;
};

type PokemonAction =
  | {
      type: "setPokemon";
      payload: Pokemon[];
    }
  | { type: "searchPokemon"; payload: string };

const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  {} as ReturnType<typeof usePokemonSource>
);

const usePokemon = () => useContext(PokemonContext);

const usePokemonSource = () => {
  const [{ pokemon, searchTerm }, dispatch] = useReducer(
    (prevState: PokemonState, action: PokemonAction) => {
      switch (action.type) {
        case "setPokemon": {
          return { ...prevState, pokemon: action.payload };
        }
        case "searchPokemon": {
          return { ...prevState, searchTerm: action.payload };
        }
      }
    },
    { pokemon: [], searchTerm: "" }
  );

  useEffect(() => {
    fetch("/pokemon.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "setPokemon", payload: data }));
  }, []);

  const setSearch = useCallback((value: string) => {
    dispatch({ type: "searchPokemon", payload: value });
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

const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
};

export { usePokemon, PokemonProvider };
