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

  const initPokemonList = async () => {
    try {
      const response = await PokemonService.getPokemonList({
        limit: DEFAULT_POKEMON_PAGE_SIZE,
        offset: DEFAULT_POKEMON_PAGE_OFFSET,
      });
      isMountedRef.current && dispatch({ type: PokemonProviderActionKind.UPDATE_POKEMON_LIST, payload: response });
    } catch (error) {
      setError();
    } finally {
      isMountedRef.current && setLoading(false);
    }
  };

  const setLoading = (isLoading: boolean) =>
    dispatch({ type: PokemonProviderActionKind.CHANGE_LOADING, isLoading: isLoading });

  const setError = () => dispatch({ type: PokemonProviderActionKind.ERROR });

  const nextPage = () => {
    if (!state.pagination.nextUrl) return;
    PokemonService.getPokemonListByUrl(state.pagination.nextUrl)
      .then((response) => {
        dispatch({ type: PokemonProviderActionKind.UPDATE_POKEMON_LIST, payload: response });
      })
      .catch(() => setError());
  };

  useEffect(() => {
    initPokemonList();
  }, []);

  return <PokemonContext.Provider value={{ ...state, nextPage }} {...props} />;
};

export const usePokemon = (): PokemonProviderValues => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon must be inside PkemonProvider');
  }
  return context;
};

export default PokemonProvider;
