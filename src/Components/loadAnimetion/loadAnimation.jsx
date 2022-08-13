import React from "react";
import BarraDeStatus from "../barraDeStatus/barraDeStatus";
import Type from "../type/type";

function LoadAnimation() {

    return (
        <>
        <section>
            <div className="bordaStatus">
                <img src={'https://th.bing.com/th/id/R.ce914ed53571a4a94078c5f46b9d7f38?rik=YpGF9DtdEx9fyA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31500000%2fGifs-pokemon-31559301-500-342.gif&ehk=bo5G4TxyJitsllYLhRGQQtH1nmjUlDIGi1q8QoiV%2bPU%3d&risl=&pid=ImgRaw&r=0'} alt='animation' className="imag" />
                

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