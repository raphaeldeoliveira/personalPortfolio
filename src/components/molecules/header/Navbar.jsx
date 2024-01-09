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
            <>
                <button 
                    className="mobile__close-open" 
                    onClick={toggleShowMobileMenu}>
                        <span className={`${showMobileMenu ? "x-span--able1" : "x-span--disable1"} x-span`}></span>
                        <span className={`${showMobileMenu ? "x-span--able2" : "x-span--disable2"} x-span`}></span>
                        <span className={`${showMobileMenu ? "x-span--able3" : "x-span--disable3"} x-span`}></span>
                </button>
                <nav className={`header__navbar--mobile ${showMobileMenu ? "header__navbar--mobile--able" : "header__navbar--mobile--disable"}`}>
                    <MobileButton 
                        toggle={true}
                        english={props.english}
                        title="Like mode"
                        toggleShowMobileMenu={toggleShowMobileMenu}
                    />
                    <MobileButton 
                        scrollTo={props.scrollTo}
                        english={props.english}
                        title="Projetos"
                        toggleShowMobileMenu={toggleShowMobileMenu}
                    />
                    <MobileButton 
                        scrollTo={props.scrollTo}
                        english={props.english}
                        title="Contato"
                        toggleShowMobileMenu={toggleShowMobileMenu}
                    />
                    <MobileButton 
                        toggle={true}
                        english={props.english}
                        title="English"
                        toggleShowMobileMenu={toggleShowMobileMenu}
                    />
                </nav>
            </>
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