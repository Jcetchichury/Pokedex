import React, {  useState, useEffect } from "react";
import LoadAnimation from "../loadAnimetion/loadAnimation";
import BarraDeStatus from "../barraDeStatus/barraDeStatus";
import Type from "../type/type";
import "./statusPokemon.css"
import { useParams } from "react-router-dom";

export default function StatusPokemon (index) {
    const {id} = useParams()

    const [data, setData] = useState([]);
    const [load, setLoad] = useState (true)
    const [type, setType] = useState ()
    const [display, setDisplay] = useState('')
    const [img, setImg] = useState()
    let count = 0 

    const link = `https://pokeapi.co/api/v2/pokemon/${id}`

    let getPokemon = async () => {
        
        const res = await fetch(link)
        const data = await res.json()
        setData(data)
        setImg(data.sprites.front_default)
        const tipo2 = (data.types[1])
        setType(tipo2 ? data.types[1].type.name : false)
        setDisplay(tipo2 ? 'flex' : 'none')
        setLoad(false)
        
    }
    function easterEgg(){
        if (id == 25){
            count++
            if (count >= 3){
                setImg (data.sprites.other.dream_world.front_default)
            }
        } else{
            count = 0
        }
    }

    useEffect(() => {
        getPokemon()
    }, [link])


    return(
        <>

        {load ? 
        
            <LoadAnimation />

                :
        

            <section>
                <div className="bordaStatus">
                    <img 
                    key={index} 
                    id={data.id} 
                    src={img}  
                    alt={data.name} 
                    className="imag"
                    onClick={()=> (easterEgg())}
                    />
                    <div>{data.name} #{data.id}</div>

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


