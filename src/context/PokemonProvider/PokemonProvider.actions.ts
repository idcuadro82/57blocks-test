import { ListResponse, Pokemon } from 'src/models';

export enum PokemonProviderActionKind {
  CHANGE_LOADING = 'CHANGE_LOADING',
  ERROR = 'ERROR',
  UPDATE_POKEMON_LIST = 'UPDATE_POKEMON_LIST',
  UPDATE_FAVORITE_POKEMONS = 'UPDATE_FOVORITE_POKEMONS',
}

export type PokemonProviderAction =
  | { type: PokemonProviderActionKind.CHANGE_LOADING; isLoading: boolean }
  | { type: PokemonProviderActionKind.ERROR }
  | { type: PokemonProviderActionKind.UPDATE_FAVORITE_POKEMONS; favoritePokemons: string[] }
  | {
      type: PokemonProviderActionKind.UPDATE_POKEMON_LIST;
      payload: {
        favoritePokemons: string[];
        response: ListResponse<Pokemon>;
      };
    };
