import React from "react";

import Button from "../../atoms/Button";
import ButtonTheme from "../../atoms/header/ButtonTheme";
import ToggleLanguage from "./ToggleLanguage";

import '../../../styles/modules/header/_navbar.scss'

export default function Navbar(props) {


    return (
        <nav className="navbar">
            <ButtonTheme 
                lightTheme={props.lightTheme}
                setLightTheme={props.setLightTheme}
            />
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