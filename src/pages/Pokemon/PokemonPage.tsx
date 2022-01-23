import React, { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageContainer, PokemonPanel } from 'src/components';
import { useLoading, usePokemon } from 'src/context';
import { ROUTES } from 'src/routes';

import './PokemonPage.scss';

const PokemonPage: FC = () => {
  const { dispatchLoading } = useLoading();
  const { getPokemonByID, isLoading, pokemon } = usePokemon();
  const navigate = useNavigate();
  const routeParams = useParams();

  useEffect(() => {
    dispatchLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (routeParams.pokemonID) getPokemonByID(routeParams.pokemonID);
  }, [routeParams]);

  return (
    <PageContainer
      renderItemHeader={() => (
        <button className="button-primary" onClick={() => navigate(ROUTES.home)}>
          Return to Pokedex
        </button>
      )}
      title={isLoading ? '' : pokemon?.name || 'Pokemon not found'}
    >
      {pokemon && !isLoading && (
        <div className="pokemon-container">
          <PokemonPanel pokemon={pokemon} />
        </div>
      )}
    </PageContainer>
  );
};

export default PokemonPage;
