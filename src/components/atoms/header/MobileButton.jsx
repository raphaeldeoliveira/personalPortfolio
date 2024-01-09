import React from "react";

export default function MobileButton(props) {

    return <button
        onClick={props.toggle ? props.toggleShowMobileMenu : 
            () => props.scrollTo(
                props.buttonTitle === "Projetos" ? "Projects" 
                : props.buttonTitle === "Contato" ? "Contact" 
                : props.buttonTitle)}
    >{props.title}

    </button>
}