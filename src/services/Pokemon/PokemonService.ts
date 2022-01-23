import { ListResponse, PaginationParams, Pokemon } from 'src/models';
import { capitalizeFirstLetter } from 'src/utils';
import { POKEMON_URLS } from './config';
import { PokemonApiListItem, PokemonApi, PokemonSpeciesApi } from './PokemonApi';

const FAVORITE_POKEMONS_KEY = 'FAVORITE_POKEMONS_KEY';
export const DEFAULT_POKEMON_PAGINATION_RESPONSE: ListResponse<Pokemon> = {
  data: [],
  pagination: {
    nextUrl: null,
    previousUrl: null,
    totalRecords: 0,
  },
};

class PokemonService {
  private static instance: PokemonService;

  public static getInstance(): PokemonService {
    this.instance = PokemonService.instance || new PokemonService();
    return this.instance;
  }

  getPokemon = async (name: string): Promise<ListResponse<Pokemon>> => {
    try {
      const url = new URL(`${POKEMON_URLS.getPokemon}/${name.toLowerCase()}`);
      const response = await fetch(url.href);
      const data = (await response.json()) as PokemonApi;
      const description = await this.getPokemonDescription(name);
      return {
        data: [
          {
            id: data.id,
            description,
            favorite: this.getFavoriteListLocalStorage().some((favorite) => favorite == data.id),
            image: POKEMON_URLS.getPokemonSpritesUrl(data.name),
            linkInfo: url.href,
            name: capitalizeFirstLetter(data.name),
            stats: data.stats.map((pokemonStat) => ({
              base: pokemonStat.base_stat,
              name: pokemonStat.stat.name,
            })),
            types: data.types.map((pokemonType) => ({
              slot: pokemonType.slot,
              name: pokemonType.type.name,
            })),
          },
        ],
        pagination: {
          nextUrl: null,
          previousUrl: null,
          totalRecords: 1,
        },
      };
    } catch (error) {
      return { ...DEFAULT_POKEMON_PAGINATION_RESPONSE };
    }
  };

  getPokemonDescription = async (id: string): Promise<string> => {
    const url = new URL(`${POKEMON_URLS.getPokemonSpecies}/${id.toLowerCase()}`);
    const response = await fetch(url.href);
    const data = (await response.json()) as PokemonSpeciesApi;
    const description = data.flavor_text_entries.find((entry) => entry.language.name === 'en');
    return description?.flavor_text || '';
  };

  getPokemonList = (paginationData?: PaginationParams): Promise<ListResponse<Pokemon>> => {
    const limit = paginationData ? paginationData.limit : 20;
    const offset = paginationData ? paginationData.offset : 0;
    const url = new URL(POKEMON_URLS.getPokemon);
    url.search = new URLSearchParams({ limit: limit.toString(), offset: offset.toString() }).toString();
    return this.getPokemonListByUrl(url.href).catch((error) => error);
  };

  getPokemonListByUrl = (url: string): Promise<ListResponse<Pokemon>> => {
    const urlParsed = new URL(url);
    const offset = Number(urlParsed.searchParams.get('offset'));
    let baseID = isNaN(offset) ? 1 : offset + 1;
    return fetch(url)
      .then((response) => response.json() as Promise<PokemonApiListItem>)
      .then((response: PokemonApiListItem) => ({
        data: response.results.map((pokemon) => {
          const id = (baseID++).toString();
          return {
            id,
            image: POKEMON_URLS.getPokemonSpritesUrl(pokemon.name),
            name: capitalizeFirstLetter(pokemon.name),
            favorite: this.getFavoriteListLocalStorage().some((favorite) => favorite == id),
          } as Pokemon;
        }),
        pagination: {
          totalRecords: response.count,
          nextUrl: response.next,
          previousUrl: response.previous,
        },
      }))
      .catch((error) => error);
  };

  getFavoriteListLocalStorage = (): string[] => {
    const favoriteList = localStorage.getItem(FAVORITE_POKEMONS_KEY);
    return favoriteList ? JSON.parse(favoriteList) : [];
  };

  getFavoriteList = (): Promise<string[]> => {
    return new Promise((resolve) => {
      resolve(this.getFavoriteListLocalStorage());
    });
  };

  saveAsFavorite = async (pokemonID: string): Promise<string[]> => {
    const favoriteList = await this.getFavoriteList();
    localStorage.setItem(
      FAVORITE_POKEMONS_KEY,
      JSON.stringify([...favoriteList, pokemonID].sort((a, b) => Number(a) - Number(b))),
    );
    return this.getFavoriteList();
  };

  removeFromFavorites = async (pokemonID: string): Promise<string[]> => {
    const favoriteList = await this.getFavoriteList();
    localStorage.setItem(FAVORITE_POKEMONS_KEY, JSON.stringify(favoriteList.filter((id) => id !== pokemonID)));
    return this.getFavoriteList();
  };
}

export default PokemonService.getInstance();
