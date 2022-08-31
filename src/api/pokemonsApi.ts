import { api } from "../lib/axios";

export type IPokemonsList = {
  count: number;
  next: string;
  previous: string ;
  results: IPokemon[];
};

export type IPokemon = {
  name: string;
  url: string;
};

export const fetchPokemons = async () => {
  try {
    const { data } = await api.get<IPokemonsList>("/pokemon");

    return data;
  } catch (e) {
    throw new Error("Oop's something went wrong");
  }
};