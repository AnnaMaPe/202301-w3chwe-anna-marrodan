import { CardComponent } from "./components/Component/CardComponent/CardComponent.js";
import { Component } from "./components/Component/Component.js";
import { getPokemonFromApi } from "./utils/getPokemonData.js";

export const main = document.querySelector(".main");

const newThinghy = new Component(main, "div", "workin'");
newThinghy.render();

const selectedPokemonData = async () => {
  const allPokemonDataFromApi = await getPokemonFromApi(20);

  const individualPokemon = allPokemonDataFromApi.map((pokemon) => {
    const card = new CardComponent(main, pokemon);
    return card;
  });
};

(async () => selectedPokemonData())();
