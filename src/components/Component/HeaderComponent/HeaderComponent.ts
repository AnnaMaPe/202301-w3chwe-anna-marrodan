import { Component } from "../Component.js";

export class HeaderComponent extends Component {
  render() {
    super.render();
    this.element.innerHTML = `<img class=pokemon-logo alt="Pokemon logo" height=100 width=100 src=pokemon-logo.svg>`;
    return this.element.innerHTML;
  }
}
