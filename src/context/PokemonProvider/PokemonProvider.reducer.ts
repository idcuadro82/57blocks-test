import { PokemonProviderAction, PokemonProviderActionKind } from './PokemonProvider.actions';
import { PokemonState } from './PokemonProvider.props';

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
