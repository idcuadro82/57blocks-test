import { ListResponse, PaginationParams, Pokemon } from 'src/models';
export declare const DEFAULT_POKEMON_PAGINATION_RESPONSE: ListResponse<Pokemon>;
declare class PokemonService {
    private static instance;
    static getInstance(): PokemonService;
    getPokemon: (name: string) => Promise<ListResponse<Pokemon>>;
    getPokemonDescription: (id: string) => Promise<string>;
    getPokemonList: (paginationData?: PaginationParams | undefined) => Promise<ListResponse<Pokemon>>;
    getPokemonListByUrl: (url: string) => Promise<ListResponse<Pokemon>>;
    getFavoriteListLocalStorage: () => string[];
    getFavoriteList: () => Promise<string[]>;
    saveAsFavorite: (pokemonID: string) => Promise<string[]>;
    removeFromFavorites: (pokemonID: string) => Promise<string[]>;
}
declare const _default: PokemonService;
export default _default;
