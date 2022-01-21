import clsx from 'clsx';
import React, { FC, useRef } from 'react';
import { PokemonCardProps } from './PokemonCard.props';

import './PokemonCard.scss';

const PokemonCard: FC<PokemonCardProps> = ({ pokemon, onClick = () => {}, onSelectAsFavorite = () => {} }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const onSelectAsFavoriteHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onSelectAsFavorite(pokemon);
  };

  return (
    <div className="pokemon-card" onClick={() => onClick(pokemon)}>
      <button className="pokemon-favorite-buttom" title="Select as favorite" onClick={onSelectAsFavoriteHandler}>
        <i className={clsx({ 'far fa-star': !pokemon.favorite, 'fas fa-star': pokemon.favorite })} />
      </button>
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
