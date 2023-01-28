import type { PokemonData } from "./types.js";

export const getPokemonData = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const pokeInfo = (await response.json()) as PokemonData;
  console.log(pokeInfo.name);
  console.log(pokeInfo.weight);

  return pokeInfo.height;
};

export default getPokemonData;
