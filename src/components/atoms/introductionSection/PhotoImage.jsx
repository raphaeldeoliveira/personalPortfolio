import React from "react";

export default function PhotoImage(props) {

    return <img 
            alt=""
            className={props.type}
            src={props.srcImage}
        />
}