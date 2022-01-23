import { Pokemon } from 'src/models';

export type PokemonCardProps = {
  pokemon: Pokemon;
  pressable?: boolean;
  onClick?: (pokemon: Pokemon) => void;
  onSelectAsFavorite?: (pokemon?: Pokemon) => void;
};
