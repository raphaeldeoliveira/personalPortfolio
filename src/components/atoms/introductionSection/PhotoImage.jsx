import React from "react";

export default function PhotoImage(props) {

    return <img 
            className={props}
            src={props.image}
        />
}