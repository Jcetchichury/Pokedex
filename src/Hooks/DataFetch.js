import React, {useState, useEffect } from "react";
import ListaDosPokemons from "../Components/listaDosPokemons/listaDosPokemons";


export default function DataFetch (){
    const [pokemons, setPokemons] = useState([]);
    const [busca, setBusca] = useState("")

    useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=251')
        .then(response => response.json())
        .then(json => setPokemons(json.results))
    }, [])

    const pokemonsFilter = pokemons.filter((pokemons) => 
        pokemons.name.includes(busca.toLocaleLowerCase()) || pokemons.url.includes(busca)
    )

    return (        
            <div>
                <input
                type="text"
                className="busca"
                value={busca}
                onChange = {(ev) => setBusca(ev.target.value)}
                ></input>
                {pokemonsFilter.map( (pokemon, index) => 
                    <ListaDosPokemons
                        key = {index}
                        pokemonData = {pokemon.url}
                    />)
                }
            </div>
    )
}