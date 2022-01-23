import React, { FC } from 'react';
import { ImageLoading, PokemonType } from 'src/components';
import { Pokemon } from 'src/models';

import './PokemonPanel.scss';

const PokemonPanel: FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <div className="pokemon-panel">
      <div className="pokemon-panel-data-container">
        <ImageLoading alt={pokemon.name} className="pokemon-panel-image" src={pokemon.image} />
      </div>
      <div className="pokemon-panel-data-container">
        <div className="pokemon-panel-data-content">
          <div className="pokemon-panel-row">
            <span className="pokemon-panel-title">
              #{pokemon.id} - {pokemon.name}
            </span>
          </div>
          <div className="pokemon-panel-row">
            {pokemon.types?.map(({ name, slot }) => (
              <PokemonType key={slot} type={name} />
            ))}
          </div>
          <div className="pokemon-panel-row">
            <p className="pokemon-panel-description">{pokemon.description}</p>
          </div>
          <div className="pokemon-panel-row">
            <div className="pokemon-panel-stats">
              {pokemon.stats?.map(({ base, name }) => (
                <div className="stat-row" key={name}>
                  <div className="stat-element">{name.toUpperCase()}</div>
                  <div className="stat-element center">{base}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPanel;
