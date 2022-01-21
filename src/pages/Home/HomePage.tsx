import React, { FC } from 'react';
import { ButtonLoading, PageContainer, PokemonCard } from 'src/components';
import { usePokemon } from 'src/context';

import './HomePage.scss';

const HomePage: FC = () => {
  const { pokemonsList, nextPage, isLoading } = usePokemon();
  return (
    <PageContainer title="Pokedex">
      <>
        <div className="pokemon-grid">
          {pokemonsList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <div className="pokemon-paginator">
          <ButtonLoading isLoading={isLoading} text="Show More" onClick={() => nextPage()} />
        </div>
      </>
    </PageContainer>
  );
};

export default HomePage;
