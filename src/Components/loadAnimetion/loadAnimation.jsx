import React from "react";
import BarraDeStatus from "../barraDeStatus/barraDeStatus";
import Type from "../type/type";

function LoadAnimation() {

    return (
        <>
        <section>
            <div className="bordaStatus">
                <img 
                src={'https://art.pixilart.com/ecd486929fa4600.gif'} 
                alt='animation' className="imag" 
                />

                <div className="tipos">
                    <Type />
                    <Type />
                </div>

                <BarraDeStatus/> 

                <BarraDeStatus/> 

                <BarraDeStatus/> 

                <BarraDeStatus/>
                
            </div>
        </section>
    </>
    );
}

export default LoadAnimation;