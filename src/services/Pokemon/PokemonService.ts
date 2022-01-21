import { ListResponse, PaginationParams } from 'src/models';
import { Pokemon } from 'src/models/Pokemon';
import { capitalizeFirstLetter } from 'src/utils';
import { POKEMON_URLS } from './config';
import { PokemonApiItem } from './PokemonApiList';

const FAVORITE_POKEMONS_KEY = 'FAVORITE_POKEMONS_KEY';
class PokemonService {
  private static instance: PokemonService;

  public static getInstance(): PokemonService {
    this.instance = PokemonService.instance || new PokemonService();
    return this.instance;
  }

  getPokemonList = (paginationData?: PaginationParams): Promise<ListResponse<Pokemon>> => {
    const limit = paginationData ? paginationData.limit : 20;
    const offset = paginationData ? paginationData.offset : 0;
    const url = new URL(POKEMON_URLS.getPokemonList);
    url.search = new URLSearchParams({ limit: limit.toString(), offset: offset.toString() }).toString();
    return this.getPokemonListByUrl(url.href);
  };

  getPokemonListByUrl = (url: string): Promise<ListResponse<Pokemon>> => {
    const urlParsed = new URL(url);
    const offset = Number(urlParsed.searchParams.get('offset'));
    let baseID = isNaN(offset) ? 1 : offset + 1;
    return fetch(url)
      .then((response) => response.json() as Promise<PokemonApiItem>)
      .then((response: PokemonApiItem) => ({
        data: response.results.map(
          (pokemon) =>
            ({
              id: (baseID++).toString(),
              image: POKEMON_URLS.getPokemonSpritesUrl(pokemon.name),
              name: capitalizeFirstLetter(pokemon.name),
              favorite: false,
            } as Pokemon),
        ),
        pagination: {
          totalRecords: response.count,
          nextUrl: response.next,
          previousUrl: response.previous,
        },
      }));
  };

  getFavoriteList = (): Promise<string[]> => {
    return new Promise((resolve) => {
      const favoriteList = localStorage.getItem(FAVORITE_POKEMONS_KEY);
      resolve(favoriteList ? JSON.parse(favoriteList) : []);
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
