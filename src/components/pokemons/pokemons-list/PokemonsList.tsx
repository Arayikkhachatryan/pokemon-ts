import axios from "axios";
import { memo, useEffect, useState } from "react";
import { fetchPokemons, IPokemon } from "../../../api/pokemonsApi";
import PageLoader from "../../page-loader/PageLoader";
import { PokemonsListWrapper } from "./PokemonsList.styled";
import PokemonsListItem from "./PokemonsListItem";
import ReactPaginate from "react-paginate";

const PokemonsList = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [err, setErr] = useState<Error>();
  const [nextUrl, setNextUrl] = useState(""); // IPokemonList[] not acceptable
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchPokemons()
      .then((res) => {
        setNextUrl(res.next);
        setPrevUrl(res.previous);
      })
      .catch((err) => setErr(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const nextPage = async () => {
    setLoading(true);
    let { data } = await axios.get(nextUrl);

    data.results.forEach(async (item: IPokemon) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${item.name}`
      );
      setPokemons((prev) => [...prev, poke.data]);
      setLoading(false);
    });
  };

  const prevPage = async () => {
    setLoading(true);
    let { data } = await axios.get(prevUrl);
  
    data.results.forEach(async (item: IPokemon) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${item.name}`
      );
      setPokemons((prev) => [...prev, poke.data]);
      setLoading(false);
    });
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <PokemonsListWrapper>
      {err ? (
        <div
          style={{ color: "red", display: "flex", justifyContent: "center" }}
        >
          {err.message}
        </div>
      ) : (
        <div className="pokemons">
          <PokemonsListItem />

          <div className="btn">
            <button onClick={nextPage}>
              {loading ? <PageLoader /> : "Next Page"}
            </button>
           
          </div>
        </div>
      )}
    </PokemonsListWrapper>
  );
};

export default memo(PokemonsList);
