import React from "react";

import '../../../../styles/modules/header/_toggleLanguage__button.scss'

export default function ToggleDot(props) {
    return <div 
            className={`toggleLanguage__dot 
                ${props.english ? "toggleLanguage__dot--right" : "toggleLanguage__dot--left"}`}>
        </div>
}