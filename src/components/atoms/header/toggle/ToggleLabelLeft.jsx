import React from "react";

import '../../../../styles/modules/header/_toggleLanguage.scss'

export default function ToggleLabelLeft(props) {

    return <span
        className={`
            toggleLanguage__leftLabel 
            ${props.english ? "toggleLanguage__leftLabel" : "toggleLanguage__leftLabel--enable"}`}
        >{props.title}
        </span>
}