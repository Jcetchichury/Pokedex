import React from "react";
import DataFetch from "../../Hooks/DataFetch";
import "./listaPokemons.css"

export default function ListaPokemon (){
    return(
        <>
            <section>
                <div className="onOff"></div>
                <div className="on"></div>
                <div className="off"></div>
                <div className="borda2">
                    <div className="borda"> 
                        <div className="lista">
                            <DataFetch />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
