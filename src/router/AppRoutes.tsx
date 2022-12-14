import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PokemonPage from "../pages/PokemonPage";
import PokemonsPage from "../pages/PokemonsPage";
import { Router } from "./router-types.d";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Router.HOME} element={<HomePage />} />
      <Route path={Router.POKEMONS} element={<PokemonsPage />} />
      <Route path={Router.POKEMON} element={<PokemonPage />} />
      <Route path={Router.NOTFOUND} element={<PokemonPage />} />
    </Routes>
  );
};

export default AppRoutes;
