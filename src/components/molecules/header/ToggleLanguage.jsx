import React from "react";

import ToggleLabelLeft from "../../atoms/header/toggle/ToggleLabelLeft";
import ToggleLabelRight from "../../atoms/header/toggle/ToggleLabelRight";
import ToggleButton from "../../atoms/header/toggle/ToggleButton";

import '../../../styles/modules/header/_toggleLanguage.scss'

export default function ToggleLanguage(props) {

    return (
        <div className="toggleLanguage">
            <ToggleLabelLeft 
                title="BR"
                english={props.english}
            />
            <ToggleButton 
                english={props.english}
                toggleLanguage={props.toggleLanguage}
            />
            <ToggleLabelRight 
                title="EN"
                english={props.english}
            />
        </div>
    )
}