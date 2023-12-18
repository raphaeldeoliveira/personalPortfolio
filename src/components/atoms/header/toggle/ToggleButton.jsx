import React from "react";

import '../../../../styles/modules/header/_toggleLanguage__button.scss'

import ToggleDot from "./ToggleDot";

export default function ToggleButton(props) {
    return <div
        onClick={props.toggleLanguage}
        className={`toggleLanguage__bg
            ${props.english ? "toggleLanguage__bg--enable" : "toggleLanguage__bg--disable"}`}
        ><ToggleDot 
            english={props.english}
        />
    </div>
}