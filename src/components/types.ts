import type { PokemonData } from "../utils/types";

export interface ComponentStructure {
  element: Element;
  render: () => void;
}

export interface CardComponentStructure {
  information: PokemonData;
}
