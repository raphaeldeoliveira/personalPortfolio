import React from "react";

import '../../styles/layout/_header.scss'
import '../../styles/themes/_lightmode.scss'

import Branding from "../molecules/header/Branding";
import Navbar from "../molecules/header/Navbar"

export default function Header(props) {

    function scrollTo(target) {
        target = target.toLowerCase();
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="header">
            <Branding
                mobile={props.mobile}
            />
            <Navbar 
                lightTheme={props.lightTheme}
                setLightTheme={props.setLightTheme}
                english={props.english}
                toggleLanguage={props.toggleLanguage}
                scrollTo={scrollTo}
            />
        </header>
    )
}