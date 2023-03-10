import { CardComponent } from "./components/Component/CardComponent/CardComponent.js";
import { Component } from "./components/Component/Component.js";
import { HeaderComponent } from "./components/Component/HeaderComponent/HeaderComponent.js";
import { getPokemonFromApi } from "./utils/getPokemonData.js";

const { body } = document;
const header = new HeaderComponent(body, "header", "header");
header.render();

const container = new Component(body, "div", "container");
container.render();

const section = new Component(
  container.element,
  "section",
  "pokemon_card-container"
);
section.render();

const pokemonList = new Component(section.element, "ul", "pokemon-list");
pokemonList.render();

(async () => {
  const allPokemonDataFromApi = await getPokemonFromApi(21);

  allPokemonDataFromApi.map((pokemon) => {
    const card = new CardComponent(pokemonList.element, pokemon);
    return card;
  });
})();
