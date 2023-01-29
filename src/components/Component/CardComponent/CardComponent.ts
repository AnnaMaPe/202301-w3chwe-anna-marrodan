import type { PokemonData } from "../../../utils/types.js";
import type { CardComponentStructure } from "../../types.js";
import { Component } from "../Component.js";

export class CardComponent extends Component implements CardComponentStructure {
  information: PokemonData;

  constructor(parentElement: Element, information: PokemonData) {
    super(parentElement, "section", `card-${information.name}`);
    this.information = information;
    this.render();
  }

  render() {
    super.render();

    this.element.innerHTML = `<img class= cardimage-${this.className} src="${this.information.sprites.other.dream_world.front_default}"><h2>${this.information.name}</h2>`;
  }
}
