import { ListResponse, PaginationParams, Pokemon } from 'src/models';
import { capitalizeFirstLetter } from 'src/utils';
import { POKEMON_URLS } from './config';
import { PokemonApiListItem, PokemonApi } from './PokemonApi';

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

  getPokemonByName = (name: string): Promise<ListResponse<Pokemon>> => {
    const url = new URL(`${POKEMON_URLS.getPokemonList}/${name.toLowerCase()}`);
    return fetch(url.href)
      .then(async (response) => {
        const data = (await response.json()) as PokemonApi;
        return Promise.resolve<ListResponse<Pokemon>>({
          data: [
            {
              id: data.id,
              name: capitalizeFirstLetter(data.name),
              image: POKEMON_URLS.getPokemonSpritesUrl(data.name),
              linkInfo: url.href,
              favorite: this.getFavoriteListLocalStorage().some((favorite) => favorite == data.id),
            },
          ],
          pagination: {
            nextUrl: null,
            previousUrl: null,
            totalRecords: 1,
          },
        });
      })
      .catch(() => Promise.resolve<ListResponse<Pokemon>>({ ...DEFAULT_POKEMON_PAGINATION_RESPONSE }));
  };

  getPokemonList = (paginationData?: PaginationParams): Promise<ListResponse<Pokemon>> => {
    const limit = paginationData ? paginationData.limit : 20;
    const offset = paginationData ? paginationData.offset : 0;
    const url = new URL(POKEMON_URLS.getPokemonList);
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
