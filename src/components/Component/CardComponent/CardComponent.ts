import type { PokemonData } from "../../../utils/types.js";
import type { CardComponentStructure } from "../../types.js";
import { Component } from "../Component.js";

export class CardComponent extends Component implements CardComponentStructure {
  pokemon: PokemonData;

  constructor(parentElement: Element, pokemon: PokemonData) {
    super(parentElement, "li", `card card-type-${pokemon.types[0].type.name}`);
    this.pokemon = pokemon;
    this.render();
  }

  render() {
    super.render();

    this.element.innerHTML = `<div class=card__image><img class=card-image alt="${this.pokemon.name}" width=150 heigth=150 src="${this.pokemon.sprites.other["official-artwork"].front_default}"></div>
    <div class=card__information>
    <h3>${this.pokemon.name}</h3>
      <ul class= card-information__list>
        <li>Nº${this.pokemon.id}</li>
        <li>Weight: ${this.pokemon.weight}</li>
        <li>Height: ${this.pokemon.height}</li>
        <li>Type: ${this.pokemon.types[0].type.name}</li>   
      </ul>
    </div>`;
  }
}

// <img src="img/no-one.jpg" alt="Character's Name and family" class="character__picture card-img-top">
