import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonsListItemWrapper } from "./PokemonsList.styled";

type PokemonsListItemProps = {
  name: string;
  url: string;
};

type SinglePokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
};

const PokemonsListItem = () => {
  const [pokemons, setPokemons] = useState<SinglePokemon[]>([]);
  useEffect(() => {
    const getPokemons = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      );
      res.data.results.forEach(async (pokemon: PokemonsListItemProps) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        setPokemons((prev) => [...prev, poke.data]);
      });
    };
    getPokemons();
  }, []);

  return (
    <PokemonsListItemWrapper>
      {pokemons.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.sprites.front_default} alt="" />
            <p>{item.name}</p>
          </div>
        );
      })}
    </PokemonsListItemWrapper>
  );
};

export default PokemonsListItem;
