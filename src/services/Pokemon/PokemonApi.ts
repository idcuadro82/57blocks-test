export type PokemonApiListItem = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type PokemonApi = {
  id: string;
  name: string;
  url: string;
};
