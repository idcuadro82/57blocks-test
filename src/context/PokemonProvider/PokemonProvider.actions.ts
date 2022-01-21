import { ListResponse, Pokemon } from 'src/models';

export enum PokemonProviderActionKind {
  CHANGE_LOADING = 'CHANGE_LOADING',
  UPDATE_POKEMON_LIST = 'UPDATE_POKEMON_LIST',
  ERROR = 'ERROR',
}

export type PokemonProviderAction =
  | { type: PokemonProviderActionKind.CHANGE_LOADING; isLoading: boolean }
  | { type: PokemonProviderActionKind.ERROR }
  | { type: PokemonProviderActionKind.UPDATE_POKEMON_LIST; payload: ListResponse<Pokemon> };
