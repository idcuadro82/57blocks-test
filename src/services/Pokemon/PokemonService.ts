import { ListResponse, PaginationParams } from 'src/models';
import { Pokemon } from 'src/models/Pokemon';
import { capitalizeFirstLetter } from 'src/utils';
import { POKEMON_URLS } from './config';
import { PokemonApiItem } from './PokemonApiList';

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
            } as Pokemon),
        ),
        pagination: {
          totalRecords: response.count,
          nextUrl: response.next,
          previousUrl: response.previous,
        },
      }));
  };
}

export default PokemonService.getInstance();
