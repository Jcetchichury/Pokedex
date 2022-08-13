import React from "react";
import BarraDeStatus from "../barraDeStatus/barraDeStatus";
import LoadAnimation from "../loadAnimetion/loadAnimation";
import {  useState, useEffect } from "react";
import Type from "../type/type";
import "./statusPokemon.css"

export default function StatusPokemon ({id}) {

    const [data, setData] = useState([]);
    // const [teste, setTeste] = useState([])
    const [load, setLoad] = useState (true)
    const [type, setType] = useState ()
    const [display, setDisplay] = useState('')

    const getPokemon = async () => {
        
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        setData(data)
        const ola = (data.types[1])
        setType(ola ? data.types[1].type.name : false)
        setDisplay(ola ? 'block' : 'none')
        setLoad(false)
    }
    // console.log(display)
    useEffect(() => {
            getPokemon()
        }, [])
        
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
                        key = {data.id} 
                        type = {data.types[0].type.name}
                        />
                        <Type  
                        key = {data.id}
                        display = {display}
                        type = {type} 
                        />
                    </div>

                    <BarraDeStatus
                        key={data.id}
                        name={data.stats[0].stat.name}
                        status= {data.stats[0].base_stat}
                    />

                    <BarraDeStatus
                        key={data.id}
                        name={data.stats[1].stat.name}
                        status= {data.stats[1].base_stat}
                    />

                    <BarraDeStatus
                        key={data.id}
                        name={data.stats[2].stat.name}
                        status= {data.stats[2].base_stat}
                    />

                    <BarraDeStatus
                        key={data.id}
                        name={data.stats[5].stat.name}
                        status= {data.stats[5].base_stat}
                    />
                    
                </div>
            </section>
        }
        </>
    )
}


