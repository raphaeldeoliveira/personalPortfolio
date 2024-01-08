import React from "react";

export default function MobileButton(props) {

    function toggle() {

    }

    return <button
        onClick={props.toggle ? toggle : 
            () => props.scrollTo(
                props.buttonTitle === "Projetos" ? "Projects" 
                : props.buttonTitle === "Contato" ? "Contact" 
                : props.buttonTitle)}
    >{props.title}

    </button>
}