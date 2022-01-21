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
  nextPage: () => void;
};

export const POKEMON_CONTEXT_DEFAULT_VALUES: PokemonProviderValues = {
  ...DEFAULT_BASE_PROPERTIES,
  nextPage: () => {},
};

export type PokemonState = BaseProperties;

export const POKEMON_CONTEXT_DEFAULT_STATE: PokemonState = {
  ...DEFAULT_BASE_PROPERTIES,
};
