export const URL_BASE = 'https://pokeapi.co/api/v2';

export const POKEMON_URLS = {
  getPokemonList: `${URL_BASE}/pokemon`,
  getPokemonSpritesUrl: (name: string) => `https://img.pokemondb.net/sprites/home/normal/${name}.png`,
};
