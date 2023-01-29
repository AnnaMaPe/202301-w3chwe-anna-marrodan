import type { PokemonData } from "./types";

export const getPokemonFromApi = async (id: number) => {
  const allPokemons = [];

  for (let pokemonId = 1; pokemonId <= id; pokemonId++) {
    const id = pokemonId;
    const getPokemonData = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    allPokemons.push(getPokemonData);
  }

  const pokemonUnresolvedPromises = await Promise.all(allPokemons);
  const pokemonInfo = pokemonUnresolvedPromises.map(
    async (pokemonUnresolvedPromise) => pokemonUnresolvedPromise.json()
  );
  const finalPokemonInfo = (await Promise.all(pokemonInfo)) as PokemonData[];

  return finalPokemonInfo;
};
