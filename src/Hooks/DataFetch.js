import React, {useState, useEffect} from "react";
import axios from 'axios'
import ListaDosPokemons from "../Components/listaDosPokemons/listaDosPokemons";

export default function DataFetch (){
    const [pokemon, setPokemon] = useState([])

    useEffect (() => {
        axios.get ('https://pokeapi.co/api/v2/pokemon/?limit=251')
        .then(res => {
            setPokemon(res.data.results.map(pokemon => pokemon.name))
        })
    }, [])

    return (
        <div>
            <ListaDosPokemons pokemon={pokemon} />
        </div>
    )
}