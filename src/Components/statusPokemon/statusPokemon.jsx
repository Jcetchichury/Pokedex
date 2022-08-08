import React from "react";
import BarraDeStatus from "../barraDeStatus/barraDeStatus";
import Type from "../type/type";
import "./statusPokemon.css"

export default function StatusPokemon () {
    return(
        <>
            <section>
                <div className="bordaStatus">
                    <div className="imag"></div>
                    <div className="tipos">
                        <Type />
                        <Type />
                        <Type />
                    </div>
                    <BarraDeStatus />
                    <BarraDeStatus />
                    <BarraDeStatus />
                    <BarraDeStatus />
                </div>
            </section>
        </>
    )
}