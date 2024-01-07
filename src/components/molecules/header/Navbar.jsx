import React, { useState } from "react";

import Button from "../../atoms/Button";
import ButtonTheme from "../../atoms/header/ButtonTheme";
import ToggleLanguage from "./ToggleLanguage";

import '../../../styles/modules/header/_navbar.scss'

export default function Navbar(props) {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    function toggleShowMobileMenu() {
        setShowMobileMenu((prevState) => !prevState)
    }

    return (
        props.mobile ? (
            showMobileMenu ? (
                <nav className="navbar--mobile">
                    <ButtonTheme 
                        lightTheme={props.lightTheme}
                        setLightTheme={props.setLightTheme}
                        onClick={toggleShowMobileMenu}
                    />
                    <Button 
                        buttonTitle={props.english ? "Projects" : "Projetos"}
                        scrollTo={props.scrollTo}
                        onClick={toggleShowMobileMenu}
                    />
                    <Button 
                        buttonTitle={props.english ? "Contact" : "Contato"}
                        scrollTo={props.scrollTo}
                        onClick={toggleShowMobileMenu}
                    />
                    <ToggleLanguage 
                        toggleLanguage={props.toggleLanguage}
                        english={props.english}
                        onClick={toggleShowMobileMenu}
                    />
                </nav>
            )
            : (
                <button onClick={toggleShowMobileMenu}>Ópen</button>
            )
        ) 
        : (
            <nav className="navbar">
                <ButtonTheme 
                    lightTheme={props.lightTheme}
                    setLightTheme={props.setLightTheme}
                />
                <Button 
                    buttonTitle={props.english ? "Projects" : "Projetos"}
                    scrollTo={props.scrollTo}
                />
                <Button 
                    buttonTitle={props.english ? "Contact" : "Contato"}
                    scrollTo={props.scrollTo}
                />
                <ToggleLanguage 
                    toggleLanguage={props.toggleLanguage}
                    english={props.english}
                />
            </nav>
        )
        
    )
}