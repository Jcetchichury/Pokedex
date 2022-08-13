import React from "react";
import "./type.css"

export default function Type ({type, display}) {
    return (
        <>
        <div className="type" style={{display:display}}>{type}</div>
        </>
    )
}
