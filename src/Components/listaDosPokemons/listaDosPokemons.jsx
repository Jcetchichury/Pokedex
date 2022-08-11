import React from "react";
import { useNavigate } from "react-router-dom";
import "./listaDosPokemons.css"

const ListaDosPokemons = ({ id, name, hp, ataque, defesa, velocidade, typos, img, index}) => {
    const navigation = useNavigate()

    return(
        <div>
            <li>
                <button
                    key={index}
                    id= {id}
                    name= {name}
                    hp= {hp}
                    ataque= {ataque}
                    defesa= {defesa}
                    velocidade= {velocidade}
                    typos= {typos}
                    img={img}
                    className="pokemon" 
                    onClick={() =>{
                        navigation(`/${id}`, { replace: true })
                        }
                    }> 
                    {name}
                </button>
            </li>
        </div>
    )
}

export default ListaDosPokemons