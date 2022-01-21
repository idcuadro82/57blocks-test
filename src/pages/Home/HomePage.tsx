import React, { FC } from 'react';
import { ButtonLoading, PageContainer, PokemonCard, SearchInput } from 'src/components';
import { usePokemon } from 'src/context';

import './HomePage.scss';

const HomePage: FC = () => {
  const { getPokemonByName, isLoading, nextPage, pokemonsList, pagination, updateFavoritePokemons } = usePokemon();

  return (
    <PageContainer
      renderItemHeader={() => <SearchInput placeholder="Search by name" onSearch={(name) => getPokemonByName(name)} />}
      title="Pokedex"
    >
      <>
        <div className="pokemon-grid">
          {pokemonsList.length ? (
            pokemonsList.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onSelectAsFavorite={() => updateFavoritePokemons(pokemon.id, !pokemon.favorite)}
              />
            ))
          ) : (
            <span className="empty-list-message">Pokemon not found</span>
          )}
        </div>
        {pokemonsList.length < pagination.totalRecords && (
          <div className="pokemon-paginator">
            <ButtonLoading isLoading={isLoading} text="Show More" onClick={() => nextPage()} />
          </div>
        )}
      </>
    </PageContainer>
  );
};

export default HomePage;
