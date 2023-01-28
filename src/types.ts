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
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}
