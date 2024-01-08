import React, { useState } from "react";

import Button from "../../atoms/Button";
import ButtonTheme from "../../atoms/header/ButtonTheme";
import ToggleLanguage from "./ToggleLanguage";
import MobileButton from "../../atoms/header/MobileButton";

import '../../../styles/modules/header/_navbar.scss'

export default function Navbar(props) {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    function toggleShowMobileMenu() {
        setShowMobileMenu((prevState) => !prevState)
    }

    return (
        props.mobile ? (
            showMobileMenu ? (
                <nav className="header__navbar--mobile">
                    <button 
                        className="mobile__close-open" 
                        onClick={toggleShowMobileMenu}
                        >Ópen
                    </button>
                    <MobileButton 
                        toggle={true}
                        english={props.english}
                        title="Like mode"
                    />
                    <MobileButton 
                        scrollTo={props.scrollTo}
                        english={props.english}
                        title="Projetos"
                    />
                    <MobileButton 
                        scrollTo={props.scrollTo}
                        english={props.english}
                        title="Contato"
                    />
                    <MobileButton 
                        toggle={true}
                        english={props.english}
                        title="English"
                    />
                </nav>
            )
            : (
                <none></none>
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