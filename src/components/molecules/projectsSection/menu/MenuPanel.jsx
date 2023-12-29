import React, { useState } from "react";

import MenuHeader from "./MenuHeader";
import MenuOptions from "./MenuOptions";

export default function MenuPanel(props) {

    const [showOptions, setShowOptions] = useState(false)
    const [activeOption, setActiveOption] = useState(props.optionsMenu[0])
    const [activeTextMenu, setActiveTextMenu] = useState(props.optionsMenutext[0])

    function toggleMenu() {
        setShowOptions((prevState) => !prevState)
    }

    return (
        <div className="menu__card">
            <div 
                className="menu__layout"
                style={{ 
                    display: (showOptions ? "none" : "block"),
                    backgroundImage: `linear-gradient(45deg, ${props.bgMenuColor[0]}, ${props.bgMenuColor[1]})`
                }}
            >
                <MenuHeader 
                    toggleMenu={toggleMenu}
                    activeOption={activeOption}
                />
                <p className="menu__paragraph">{activeTextMenu}</p>
            </div>
            <MenuOptions 
                mobile={props.mobile}
                showOptions={showOptions}
                optionsMenu={props.optionsMenu}
                optionsMenutext={props.optionsMenutext}
                setActiveTextMenu={setActiveTextMenu}
                setActiveOption={setActiveOption}
                toggleMenu={toggleMenu}
            />
        </div>
    )
}