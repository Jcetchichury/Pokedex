import React from "react";
import "./barraDeStatus.css"

const BarraDeStatus = ({name, status}) => {
    const divisor = 100/240
    const barStatus = status*divisor

    return (
        <>
            <div className="status">
                <p> {name} </p>
                <div className="barra">
                    <div className="barraPorgressiva" style={{width: barStatus+'%'}}>{status}</div>
                </div>
            </div>
        </>
    )
}

export default BarraDeStatus