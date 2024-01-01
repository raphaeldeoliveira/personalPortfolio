import React from "react";

export default function PhotoImage(props) {

    return <img 
            className={props.type}
            src={props.srcImage}
            alt={`image ${props.type}`}
        />
}