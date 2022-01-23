import { PaginationResponse, Pokemon } from 'src/models';
export declare const DEFAULT_POKEMON_PAGE_SIZE = 20;
export declare const DEFAULT_POKEMON_PAGE_OFFSET = 0;
declare type BaseProperties = {
    error: boolean;
    isLoading: boolean;
    pokemon: Pokemon | null;
    pokemonsList: Pokemon[];
    pagination: PaginationResponse;
};
export declare type PokemonProviderValues = BaseProperties & {
    getPokemonByID: (name: string) => Promise<void>;
    getPokemonByName: (name: string) => Promise<void>;
    nextPage: () => void;
    updateFavoritePokemons: (pokemonID: string, isFavorite: boolean) => Promise<void>;
};
export declare const POKEMON_CONTEXT_DEFAULT_VALUES: PokemonProviderValues;
export declare type PokemonState = BaseProperties;
export declare const POKEMON_CONTEXT_DEFAULT_STATE: PokemonState;
export {};
