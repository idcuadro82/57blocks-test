import React, { FC } from 'react';
import clsx from 'clsx';
import { ImageLoading } from 'src/components';
import { PokemonCardProps } from './PokemonCard.props';

import './PokemonCard.scss';

const PokemonCard: FC<PokemonCardProps> = ({
  pokemon,
  pressable,
  onClick = (Pokemon) => {},
  onSelectAsFavorite = () => {},
}) => {
  const onSelectAsFavoriteHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onSelectAsFavorite(pokemon);
  };

  return (
    <div className={clsx({ 'pokemon-card': true, pressable })} onClick={() => onClick(pokemon)}>
      <button className="pokemon-favorite-buttom" title="Select as favorite" onClick={onSelectAsFavoriteHandler}>
        <i className={clsx({ 'far fa-star': !pokemon.favorite, 'fas fa-star': pokemon.favorite })} />
      </button>
      <ImageLoading alt={pokemon.name} className="pokemon-image" src={pokemon.image} />
      <span className="pokemon-name">
        #{pokemon.id} {pokemon.name}
      </span>
    </div>
  );
};

export default PokemonCard;
