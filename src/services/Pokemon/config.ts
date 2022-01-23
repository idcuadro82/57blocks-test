export const URL_BASE = 'https://pokeapi.co/api/v2';

export const POKEMON_URLS = {
  getPokemon: `${URL_BASE}/pokemon`,
  getPokemonSpecies: `${URL_BASE}/pokemon-species`,
  getPokemonSpritesUrl: (name: string) => `https://img.pokemondb.net/sprites/home/normal/${name}.png`,
};
