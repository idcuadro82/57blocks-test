import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonLoading, PageContainer, PokemonCard, SearchInput } from 'src/components';
import { useLoading, usePokemon } from 'src/context';
import { Pokemon } from 'src/models';
import { ROUTES } from 'src/routes';

import './PokedexPage.scss';

const PokedexPage: FC = () => {
  const { dispatchLoading } = useLoading();
  const { getPokemonByName, isLoading, nextPage, pokemonsList, pagination, updateFavoritePokemons } = usePokemon();
  const navigate = useNavigate();

  useEffect(() => {
    dispatchLoading(isLoading);
  }, [isLoading]);

  const handlerCardClick = (pokemon: Pokemon) => {
    navigate(`${ROUTES.home}/${pokemon.id}`);
  };

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
                pressable
                key={pokemon.id}
                pokemon={pokemon}
                onClick={handlerCardClick}
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

export default PokedexPage;
