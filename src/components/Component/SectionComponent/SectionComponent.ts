import { Component } from "../Component.js";

export class SectionComponent extends Component {
  render(): void {
    super.render();
    this.element.innerHTML = `<h1>Pokedex</h1><ul class="pokemons">`;
  }
}
