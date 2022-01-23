import React, { FC } from 'react';
import { PokemonProviderValues } from './PokemonProvider.props';
export declare const PokemonContext: React.Context<PokemonProviderValues>;
declare const PokemonProvider: FC;
export declare const usePokemon: () => PokemonProviderValues;
export default PokemonProvider;
