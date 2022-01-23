import { POKEMON_TYPE } from 'src/constants';

export type Pokemon = {
  id: string;
  description?: string;
  favorite: boolean;
  image: string;
  name: string;
  linkInfo?: string;
  stats?: {
    base: number;
    name: string;
  }[];
  types?: {
    slot: number;
    name: POKEMON_TYPE;
  }[];
};
