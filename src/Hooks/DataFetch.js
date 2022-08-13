import React, {useState, useEffect} from "react";
import ListaDosPokemons from "../Components/listaDosPokemons/listaDosPokemons";


export default function DataFetch (){
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=251')
        .then(response => response.json())
        .then(json => setPokemons(json.results))
    }, [])

    return (       
            <div>
                {pokemons.map( (pokemon, index) => 
                    <ListaDosPokemons
                        key = {index}
                        pokemonData = {pokemon.url}
                    />)
                }
            </div>
    )
}