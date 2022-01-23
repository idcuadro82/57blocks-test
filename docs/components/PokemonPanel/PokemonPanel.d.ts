import { FC } from 'react';
import { Pokemon } from 'src/models';
import './PokemonPanel.scss';
declare const PokemonPanel: FC<{
    pokemon: Pokemon;
}>;
export default PokemonPanel;
