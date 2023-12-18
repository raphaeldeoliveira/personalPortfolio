import React from "react";

import '../../../../styles/modules/header/_toggleLanguage.scss'

export default function ToggleLabelRight(props) {

    return <span
        className={`
            toggleLanguage__rightLabel 
            ${props.english ? "toggleLanguage__leftLabel--enable" : "toggleLanguage__leftLabel"}`}
        >{props.title}
    </span>
}