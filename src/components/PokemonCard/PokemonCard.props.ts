import { Pokemon } from 'src/models';

export type PokemonCardProps = {
  pokemon: Pokemon;
  onClick?: (pokemon?: Pokemon) => void;
  onSelectAsFavorite?: (pokemon?: Pokemon) => void;
};
