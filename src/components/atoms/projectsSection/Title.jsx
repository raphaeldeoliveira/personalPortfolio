import React from "react";

export default function Title(props) {
    
    return (
        <h2 
            className={`header__title ${props.titleTransition ? "header__title--transition" : ""}`}
            onClick={() => window.open(props.links[props.currentProject], '_blank')}
            >{props.titles[props.currentProject]}
        </h2>
    )
}