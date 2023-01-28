import type { PokemonData } from "./types.js";

let pokeInfo;

export const getPokemonData = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  pokeInfo = (await response.json()) as PokemonData;

  return pokeInfo;
};

export default getPokemonData;
