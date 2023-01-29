import { Component } from "../Component.js";

export class HeaderComponent extends Component {
  render() {
    super.render();
    this.element.innerHTML = `<img src=pokemon-logo.svg>`;
  }
}
