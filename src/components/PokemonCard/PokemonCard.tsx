import React, { FC, useRef } from 'react';
import { Pokemon } from 'src/models';

import './PokemonCard.scss';

const PokemonCard: FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <div className="pokemon-card">
      <img
        alt={pokemon.name}
        className="pokemon-image"
        ref={imgRef}
        src={pokemon.image}
        onError={() => {
          if (imgRef.current) imgRef.current.src = 'default_image.png';
        }}
      />
      <span className="pokemon-name">{pokemon.name}</span>
    </div>
  );
};

export default PokemonCard;
