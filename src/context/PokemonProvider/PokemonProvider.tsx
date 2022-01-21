import React, { createContext, FC, useContext, useEffect, useReducer } from 'react';
import { PokemonService } from 'src/services';
import { useIsMountedRef } from 'src/hooks';
import {
  PokemonProviderValues,
  POKEMON_CONTEXT_DEFAULT_VALUES,
  POKEMON_CONTEXT_DEFAULT_STATE,
  DEFAULT_POKEMON_PAGE_SIZE,
} from './PokemonProvider.props';
import { pokemonReducer } from './PokemonProvider.reducer';
import { PokemonProviderActionKind } from './PokemonProvider.actions';
import { DEFAULT_POKEMON_PAGE_OFFSET } from './PokemonProvider.props';

export const PokemonContext = createContext<PokemonProviderValues>(POKEMON_CONTEXT_DEFAULT_VALUES);

const PokemonProvider: FC = (props) => {
  const [state, dispatch] = useReducer(pokemonReducer, POKEMON_CONTEXT_DEFAULT_STATE);
  const isMountedRef = useIsMountedRef();

  const setLoading = (isLoading: boolean) =>
    dispatch({ type: PokemonProviderActionKind.CHANGE_LOADING, isLoading: isLoading });

  const setError = () => dispatch({ type: PokemonProviderActionKind.ERROR });

  const getPokemonList = async (url?: string) => {
    try {
      const response = url
        ? await PokemonService.getPokemonListByUrl(url)
        : await PokemonService.getPokemonList({
            limit: DEFAULT_POKEMON_PAGE_SIZE,
            offset: DEFAULT_POKEMON_PAGE_OFFSET,
          });

      const favoritePokemons = await PokemonService.getFavoriteList();

      isMountedRef.current &&
        dispatch({ type: PokemonProviderActionKind.UPDATE_POKEMON_LIST, payload: { response, favoritePokemons } });
    } catch (error) {
      isMountedRef.current && setError();
    } finally {
      isMountedRef.current && setLoading(false);
    }
  };

  const updateFavoritePokemons = async (pokemonID: string, isFavorite: boolean) => {
    setLoading(true);
    try {
      const favoritePokemons = isFavorite
        ? await PokemonService.saveAsFavorite(pokemonID)
        : await PokemonService.removeFromFavorites(pokemonID);
      dispatch({ type: PokemonProviderActionKind.UPDATE_FAVORITE_POKEMONS, favoritePokemons });
    } catch (error) {
      setError();
    } finally {
      setLoading(false);
    }
  };

  const nextPage = () => {
    if (!state.pagination.nextUrl) return;
    getPokemonList(state.pagination.nextUrl);
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return <PokemonContext.Provider value={{ ...state, nextPage, updateFavoritePokemons }} {...props} />;
};

export const usePokemon = (): PokemonProviderValues => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon must be inside PkemonProvider');
  }
  return context;
};

export default PokemonProvider;
