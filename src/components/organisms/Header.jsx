import React, { useState } from "react";

import '../../styles/layout/_header.scss'
import '../../styles/themes/_lightmode.scss'

import Branding from "../molecules/header/Branding";
import Navbar from "../molecules/header/Navbar"

export default function Header(props) {

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
            />
        </header>
    )
}