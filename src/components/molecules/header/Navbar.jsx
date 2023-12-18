import React from "react";

import Button from "../../atoms/Button";
import ToggleLanguage from "./ToggleLanguage";

import '../../../styles/modules/header/_navbar.scss'

export default function Navbar(props) {


    return (
        <nav className="navbar">
            <Button 
                buttonTitle={props.english ? "Projects" : "Projetos"}
            />
            <Button 
                buttonTitle={props.english ? "Contact" : "Contato"}
            />
            <ToggleLanguage 
                toggleLanguage={props.toggleLanguage}
                english={props.english}
            />
        </nav>
    )
}