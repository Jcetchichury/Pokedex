import React from "react";
import "./barraDeStatus.css"

const BarraDeStatus = ({name, status, max}) => {
    console.log(max)
    const divisor = 100/max
    const barStatus = status*divisor

    return (
        <>
            <div className="status">
                <div style={{margin:"auto"}}> {name} </div>
                <div className="barra">
                    <div className="barraPorgressiva" style={{width: barStatus+'%'}}>{status}</div>
                </div>
            </div>
        </>
    )
}

export default BarraDeStatus