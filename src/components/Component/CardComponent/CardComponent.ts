import type { PokemonData } from "../../../utils/types.js";
import type { CardComponentStructure } from "../../types.js";
import { Component } from "../Component.js";

export class CardComponent extends Component implements CardComponentStructure {
  information: PokemonData;

  constructor(parentElement: Element, information: PokemonData) {
    super(parentElement, "li", `card card-${information.types[0].type.name}`);
    this.information = information;
    this.render();
  }

  render() {
    super.render();

    this.element.innerHTML = `<div class=card__image><img class= card-image src="${this.information.sprites.other.dream_world.front_default}"></div>
    <h3>${this.information.name}</h3>
    <div class=card__information>
      <ul class= card-information__list>
        <li>Nº${this.information.id}</li>
        <li>Weight: ${this.information.weight}</li>
        <li>Height: ${this.information.height}</li>
        <li>Type: ${this.information.types[0].type.name}</li>   
      </ul>
    </div>`;
  }
}

// <img src="img/no-one.jpg" alt="Character's Name and family" class="character__picture card-img-top">
