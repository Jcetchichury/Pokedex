import React, { useEffect, useState } from "react";
import LoadAnimation_Pokemons from "../../Components/loadAnimetion/loadAnimation_pokemons";
import { useNavigate } from "react-router-dom";
import "./listaDosPokemons.css"

const ListaDosPokemons = (props, index) => {

    const navigation = useNavigate()
    const [pokemon, setPokemon] = useState([])
    const [load, setLoad] = useState (true)

    useEffect (()=>{
        getPokemon()
    },[])

    const getPokemon = async () => {
        
        const res = await fetch(props.pokemonData)
        const data = await res.json()
        setPokemon(data)
        setLoad(false)
    }
    

    return(
        <>

        {load ? 
        
        <LoadAnimation_Pokemons />

        :

        <div>
            <button
                className="pokemon"
                key={index}
                id= {'botao'+pokemon.id}
                name={pokemon.name}
                hp= {pokemon.stats[0].base_stat}
                ataque= {pokemon.stats[1].base_stat}
                defesa= {pokemon.stats[2].base_stat}
                velocidade= {pokemon.stats[5].base_stat}
                onClick={() =>{
                    navigation(`/pokemonStatus/${pokemon.id}`, { replace: true, id:pokemon.id })
                    }} 
            >{pokemon.name}</button>
        </div>
    }

        
        </>
    )
}

export default ListaDosPokemons