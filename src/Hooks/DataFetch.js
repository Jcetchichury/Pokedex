import React, {useState, useEffect} from "react";
import ListaDosPokemons from "../Components/listaDosPokemons/listaDosPokemons";

export default function DataFetch (){

    const[allPokemons, setAllPokemons] = useState([])

    const getAllPokemons = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        const data = await res.json()

        function createPokemonObject(results)  {
        results.forEach( async pokemon => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data =  await res.json()
            setAllPokemons( currentList => [...currentList, data])
        })
        }
        createPokemonObject(data.results)
    }

    useEffect(() => {
    getAllPokemons()
    }, [])


    return (
        <>        
            <div>
                {allPokemons.map( (pokemonStats, index) => 
                    <ListaDosPokemons
                    key={index}
                    id={pokemonStats.id}
                    img={pokemonStats.sprites.other.dream_world.front_default}
                    name={pokemonStats.name}
                    hp= {pokemonStats.stats[0].base_stat}
                    ataque= {pokemonStats.stats[1].base_stat}
                    defesa= {pokemonStats.stats[2].base_stat}
                    velocidade= {pokemonStats.stats[5].base_stat}
                    typos={pokemonStats.types}
                />)}
            </div>
        </>
    )
}