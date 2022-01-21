import { PaginationResponse, Pokemon } from 'src/models';

export const DEFAULT_POKEMON_PAGE_SIZE = 20;
export const DEFAULT_POKEMON_PAGE_OFFSET = 0;

type BaseProperties = {
  error: boolean;
  isLoading: boolean;
  pokemonsList: Pokemon[];
  pagination: PaginationResponse;
};

const DEFAULT_BASE_PROPERTIES: BaseProperties = {
  error: false,
  isLoading: true,
  pokemonsList: [],
  pagination: {
    totalRecords: 0,
    nextUrl: null,
    previousUrl: null,
  },
};

export type PokemonProviderValues = BaseProperties & {
  getPokemonByName: (name: string) => Promise<void>;
  nextPage: () => void;
  updateFavoritePokemons: (pokemonID: string, isFavorite: boolean) => Promise<void>;
};

export const POKEMON_CONTEXT_DEFAULT_VALUES: PokemonProviderValues = {
  ...DEFAULT_BASE_PROPERTIES,
  getPokemonByName: () => Promise.resolve(),
  nextPage: () => {},
  updateFavoritePokemons: () => Promise.resolve(),
};

export type PokemonState = BaseProperties;

export const POKEMON_CONTEXT_DEFAULT_STATE: PokemonState = {
  ...DEFAULT_BASE_PROPERTIES,
};
