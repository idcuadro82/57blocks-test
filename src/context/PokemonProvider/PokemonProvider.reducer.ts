import { Pokemon } from 'src/models';
import { PokemonProviderAction, PokemonProviderActionKind } from './PokemonProvider.actions';
import { PokemonState } from './PokemonProvider.props';

const mapFavoritesUtil = (favoritePokemons: string[]) => (pokemon: Pokemon) => ({
  ...pokemon,
  favorite: favoritePokemons.some((favorite) => favorite == pokemon.id),
});

export const pokemonReducer = (prevState: PokemonState, action: PokemonProviderAction): PokemonState => {
  switch (action.type) {
    case PokemonProviderActionKind.CHANGE_LOADING: {
      return {
        ...prevState,
        error: false,
        isLoading: action.isLoading,
      };
    }
    case PokemonProviderActionKind.ERROR: {
      return {
        ...prevState,
        error: true,
        isLoading: false,
      };
    }
    case PokemonProviderActionKind.RELOAD_LIST: {
      const { data, pagination } = action.payload;
      return {
        ...prevState,
        error: false,
        isLoading: false,
        pokemonsList: [...data],
        pagination: {
          ...pagination,
        },
      };
    }
    case PokemonProviderActionKind.UPDATE_FAVORITE_POKEMONS: {
      return {
        ...prevState,
        error: false,
        isLoading: false,
        pokemonsList: prevState.pokemonsList.map(mapFavoritesUtil(action.favoritePokemons)),
      };
    }
    case PokemonProviderActionKind.UPDATE_POKEMON_LIST: {
      const { data, pagination } = action.payload;
      return {
        ...prevState,
        error: false,
        isLoading: false,
        pokemonsList: [...prevState.pokemonsList, ...data],
        pagination: {
          ...pagination,
        },
      };
    }
    default:
      return prevState;
  }
};
