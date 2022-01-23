import { POKEMON_TYPE } from 'src/constants';
export declare type PokemonApiListItem = {
    count: number;
    next: string;
    previous: string;
    results: {
        name: string;
        url: string;
    }[];
};
export declare type PokemonApi = {
    id: string;
    name: string;
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    types: {
        slot: number;
        type: {
            name: POKEMON_TYPE;
            url?: string;
        };
    }[];
};
export declare type PokemonSpeciesApi = {
    id: string;
    name: string;
    flavor_text_entries: {
        flavor_text: string;
        language: {
            name: string;
        };
    }[];
};
