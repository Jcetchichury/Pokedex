import React, {useState, useEffect } from "react";
import ListaDosPokemons from "../Components/listaDosPokemons/listaDosPokemons";


export default function DataFetch (){
    const [pokemons, setPokemons] = useState([]);
    const [busca, setBusca] = useState("")

    useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=905')
        .then(response => response.json())
        .then(json => setPokemons(json.results))
    }, [])

    const pokemonsFilter = pokemons.filter((pokemons) => 
        pokemons.name.includes(busca.toLocaleLowerCase()) || pokemons.url.split('/')[6] === ( busca )
    )
    
    return (        
            <div 
            style={{display: 'flex',
                justifCcontent: 'center',
                alignItems: "center",
                flexDirection: "column"
            }}
            >
                <input
                type="text"
                className="busca"
                value={busca}
                onChange = {(ev) => setBusca(ev.target.value)}
                placeholder="nome ou id"
                ></input>
                {pokemonsFilter.map( (pokemon, index) => 
                    <ListaDosPokemons
                        key = {pokemon.name}
                        pokemonData = {pokemon.url}
                    />)
                }
            </div>
    )
}