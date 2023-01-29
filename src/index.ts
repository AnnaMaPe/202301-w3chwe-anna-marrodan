import { CardComponent } from "./components/Component/CardComponent/CardComponent.js";
import { Component } from "./components/Component/Component.js";
import { SectionComponent } from "./components/Component/SectionComponent/SectionComponent.js";
import { getPokemonFromApi } from "./utils/getPokemonData.js";

const { body } = document;

const container = new Component(body, "div", "container");
container.render();

const section = new SectionComponent(
  container.element,
  "section",
  "pokemon_card-container"
);
section.render();
