import React from "react";
import LoadAnimation from "../loadAnimetion/loadAnimation";
import Type from "../type/type";
import BarraDeStatus from "../barraDeStatus/barraDeStatus";
import {  useState, useEffect } from "react";
import "./statusPokemon.css"

export default function StatusPokemon ({id}, index) {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState (true)
    const [type, setType] = useState ()
    const [display, setDisplay] = useState('')

    const getPokemon = async () => {
        
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        setData(data)
        const tipo2 = (data.types[1])
        setType(tipo2 ? data.types[1].type.name : false)
        setDisplay(tipo2 ? 'flex' : 'none')
        setLoad(false)
    }
    useEffect(() => {
            getPokemon()
        }, [`https://pokeapi.co/api/v2/pokemon/${id}`])
        
    return(
        <>

        {load ? 
        
            <LoadAnimation />

        :
        

            <section>
                <div className="bordaStatus">
                    <img src={data.sprites.other.dream_world.front_default} alt={data.name} className="imag" />

                    <div className="tipos">
                        <Type 
                        key = {index} 
                        type = {data.types[0].type.name}
                        />
                        <Type  
                        key = {index}
                        display = {display}
                        type = {type} 
                        />
                    </div>

                    <BarraDeStatus
                        key={index}
                        name={data.stats[0].stat.name}
                        status= {data.stats[0].base_stat}
                    />

                    <BarraDeStatus
                        key={index}
                        name={data.stats[1].stat.name}
                        status= {data.stats[1].base_stat}
                    />

                    <BarraDeStatus
                        key={index}
                        name={data.stats[2].stat.name}
                        status= {data.stats[2].base_stat}
                    />

                    <BarraDeStatus
                        key={index}
                        name={data.stats[5].stat.name}
                        status= {data.stats[5].base_stat}
                    />
                    
                </div>
            </section>
        }
        </>
    )
}


