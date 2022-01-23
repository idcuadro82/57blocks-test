import React, { FC } from 'react';
import { POKEMON_TYPE, POKEMON_TYPE_COLOR } from 'src/constants';

import './PokemonType.scss';

const PokemonType: FC<{ type: string }> = ({ type }) => {
  const resolveClassByType = (name: POKEMON_TYPE): string => {
    return POKEMON_TYPE_COLOR[name];
  };

  return (
    <div className="pokemon-type" style={{ backgroundColor: resolveClassByType(type as POKEMON_TYPE) }}>
      {type}
    </div>
  );
};

export default PokemonType;
