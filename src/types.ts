export interface PokemonData {
  name: string;
  id: number;
  weight: number;
  height: number;
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  sprites: {
    front_default: string;
  };
}
