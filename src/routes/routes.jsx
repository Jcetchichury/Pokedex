import React from "react";
import Home from "../page/home.jsx"
import PokemonStatus from "../page/pokemonStatus.jsx";
import { BrowserRouter, Route } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component = { Home } path= '/'  />
            <Route component = { PokemonStatus } path= "/pokemonStatus/:id" />
        </BrowserRouter>
    )
}

export default Routes