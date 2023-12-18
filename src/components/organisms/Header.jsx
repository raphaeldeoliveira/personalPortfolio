import React from "react";

import '../../styles/layout/_header.scss'

import Branding from "../molecules/header/Branding";
import Navbar from "../molecules/header/Navbar"

export default function Header(props) {


    return (
        <header className="header">
            <Branding />
            <Navbar 
                english={props.english}
                toggleLanguage={props.toggleLanguage}
            />
        </header>
    )
}