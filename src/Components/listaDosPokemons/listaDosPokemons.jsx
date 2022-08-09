import React from "react";
import "./listaDosPokemons.css"

export default function ListaDosPokemons ({ pokemon }){
    return(
        <div>
            <ul>
                {pokemon.map( pokemon => (
                <li key={pokemon} className="pokemon">{pokemon}</li>
                ))}
            </ul>
        </div>
    )
}