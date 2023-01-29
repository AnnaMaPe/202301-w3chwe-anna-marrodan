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
      dream_world: {
        front_default: string;
      };
    };
  };
}
